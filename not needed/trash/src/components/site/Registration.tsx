import { Mic, Users, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Registration() {
  return (
    <section id="register" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Registration"
          title="Save your seat"
          subtitle="Two ways to take part in the seminar. Choose the option that fits you."
        />

        <div className="mt-14 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <RegCard
            icon={Mic}
            title="Register as a Presenter"
            body="Share your department's practice, tools, or intervention model with the PMU community."
            href="mailto:studentaffairs@pmu.edu.sa?subject=Presenter%20Registration%20-%20Best%20Practices%20Seminar"
            cta="Register"
          />
          <RegCard
            icon={Users}
            title="Register as an Attendee"
            body="Join the sessions across three days and connect with colleagues from Student Affairs."
            href="mailto:studentaffairs@pmu.edu.sa?subject=Attendee%20Registration%20-%20Best%20Practices%20Seminar"
            cta="Register"
          />
        </div>
      </div>
    </section>
  );
}

function RegCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
}: {
  icon: typeof Mic;
  title: string;
  body: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="group rounded-2xl bg-white border border-border p-8 md:p-10 hover:border-gold hover:shadow-lg transition-all">
      <div className="h-14 w-14 rounded-full bg-navy grid place-items-center">
        <Icon size={22} className="text-gold" />
      </div>
      <h3 className="mt-6 font-serif text-2xl text-navy">{title}</h3>
      <p className="mt-3 text-sm text-navy/70 leading-relaxed">{body}</p>
      <a
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white group-hover:bg-gold group-hover:text-navy transition-colors"
      >
        {cta} <ArrowRight size={16} />
      </a>
    </div>
  );
}
