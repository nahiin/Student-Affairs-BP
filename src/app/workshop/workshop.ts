import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { WORKSHOPS } from '../workshops.data';

@Component({
  selector: 'app-workshop',
  imports: [RouterLink, Header, Footer],
  templateUrl: './workshop.html',
  styleUrl: './workshop.css',
})
export class Workshop {
  readonly slug = input('');

  readonly workshop = computed(() => WORKSHOPS.find((w) => w.slug === this.slug()));
  readonly related = computed(() => WORKSHOPS.filter((w) => w.slug !== this.slug()));

  protected readonly dialogOpen = signal(false);

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);

    effect(() => {
      const w = this.workshop();
      if (!w) return;

      const pageTitle = `${w.title} — PMU Workshops`;
      const description = w.description[0];

      title.setTitle(pageTitle);
      meta.updateTag({ name: 'description', content: description });
      meta.updateTag({ property: 'og:title', content: pageTitle });
      meta.updateTag({ property: 'og:description', content: description });
    });
  }
}
