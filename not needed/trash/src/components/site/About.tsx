import { SectionHeader } from "./SectionHeader";

const STATS = [
  { n: "3", l: "Days of Sessions" },
  { n: "7", l: "Departments" },
  { n: "12+", l: "Expert Presenters" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="About the Seminar"
          title="A gathering of practice, ideas, and student-first thinking"
          subtitle="Student Affairs departments come together to share what's working — the models, tools, and interventions that measurably improve student outcomes at PMU."
        />

        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {STATS.map((s) => (
            <div
              key={s.l}
              className="text-center py-8 border-t-2 border-gold"
            >
              <div className="font-serif text-4xl md:text-5xl text-navy font-semibold">
                {s.n}
              </div>
              <div className="mt-2 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
