import { Share2, TrendingUp, Users2, Lightbulb, Award } from "lucide-react";
import { WHY_ATTEND } from "@/data/seminar";
import { SectionHeader } from "./SectionHeader";

const ICONS = [Share2, TrendingUp, Users2, Lightbulb, Award];

export function WhyAttend() {
  return (
    <section id="why" className="py-24 md:py-32 bg-navy-deep text-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          invert
          eyebrow="What You'll Gain"
          title="Why Attend"
          subtitle="Five reasons this seminar matters to Student Affairs teams across the university."
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {WHY_ATTEND.map((w, i) => {
            const Icon = ICONS[i];
            return (
              <div key={w.title} className="text-center px-2">
                <div className="mx-auto h-16 w-16 rounded-full border border-gold/50 grid place-items-center">
                  <Icon size={26} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 font-serif text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{w.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
