import { Component, inject, signal } from '@angular/core';
import { DomSanitizer, Meta, Title, type SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

interface Presenter {
  dept: string;
  name: string;
  role?: string;
  photo?: string;
  bio: string;
}

type SubmitState = 'idle' | 'submitting' | 'success';

interface ContactFormPayload {
  presentingAs: string;
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  title: string;
  function: string;
  country: string;
  phone: string;
  accessibility: string;
  dataSharing: string;
  mediaConsent: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly sanitizer = inject(DomSanitizer);

  protected readonly videoOpen = signal(false);
  protected readonly videoUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
  );

  protected readonly activeDay = signal('advising');
  protected readonly openSessions = signal<Record<string, number>>({
    advising: 0,
    admissions: 0,
    campus: 0,
    career: 0,
    counseling: 0,
    ptcce: 0,
    registration: 0,
  });

  protected readonly activePresenter = signal<Presenter | null>(null);

  protected readonly errors = signal<Record<string, string>>({});
  protected readonly submitState = signal<SubmitState>('idle');

  constructor() {
    const title = 'PMU Student Affairs — Best Practices Seminar 2025';
    const description =
      'Three days of sessions from PMU Student Affairs departments on student success, retention, and modern advising practices. May 27–29, 2025 at the PMU Auditorium.';

    inject(Title).setTitle(title);
    const meta = inject(Meta);
    meta.updateTag({ name: 'description', content: description });
    meta.updateTag({ property: 'og:title', content: title });
    meta.updateTag({
      property: 'og:description',
      content: 'Three days of sessions from PMU Student Affairs departments on student success, retention, and modern advising practices.',
    });
    meta.updateTag({ property: 'og:type', content: 'website' });
    meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  openVideo(): void {
    this.videoOpen.set(true);
  }

  closeVideo(): void {
    this.videoOpen.set(false);
  }

  setActiveDay(day: string): void {
    this.activeDay.set(day);
  }

  isSessionOpen(day: string, index: number): boolean {
    return this.openSessions()[day] === index;
  }

  toggleSession(day: string, index: number): void {
    this.openSessions.update((sessions) => ({
      ...sessions,
      [day]: sessions[day] === index ? -1 : index,
    }));
  }

  openPresenter(presenter: Presenter): void {
    this.activePresenter.set(presenter);
  }

  closePresenter(): void {
    this.activePresenter.set(null);
  }

  onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) ?? '');

    const payload: ContactFormPayload = {
      presentingAs: value('presentingAs'),
      firstName: value('firstName'),
      lastName: value('lastName'),
      email: value('email'),
      institution: value('institution'),
      title: value('title'),
      function: value('function'),
      country: value('country'),
      phone: value('phone'),
      accessibility: value('accessibility'),
      dataSharing: value('dataSharing'),
      mediaConsent: value('mediaConsent'),
    };

    const newErrors: Record<string, string> = {};
    if (!payload.presentingAs) newErrors['presentingAs'] = 'Required';
    if (!payload.firstName.trim()) newErrors['firstName'] = 'Required';
    if (!payload.lastName.trim()) newErrors['lastName'] = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) newErrors['email'] = 'Enter a valid email';
    if (!payload.institution.trim()) newErrors['institution'] = 'Required';
    if (!payload.title) newErrors['title'] = 'Required';
    if (!payload.function) newErrors['function'] = 'Required';
    if (!payload.country) newErrors['country'] = 'Required';
    if (payload.phone.trim().length < 4) newErrors['phone'] = 'Required';
    if (!payload.dataSharing) newErrors['dataSharing'] = 'Required';

    this.errors.set(newErrors);
    if (Object.keys(newErrors).length) return;

    this.submitState.set('submitting');
    // TODO: send `payload` to the backend once an endpoint exists, e.g.
    // this.http.post('/api/registrations', payload).subscribe(...)
    setTimeout(() => {
      this.submitState.set('success');
      form.reset();
      setTimeout(() => this.submitState.set('idle'), 4000);
    }, 900);
  }
}
