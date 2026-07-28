import { useState } from "react";
import { PRESENTERS, DEPARTMENTS, type Presenter } from "@/data/seminar";
import { SectionHeader } from "./SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight } from "lucide-react";

export function Presenters() {
  const [selected, setSelected] = useState<Presenter | null>(null);

  return (
    <section id="presenters" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          eyebrow="Meet the Speakers"
          title="Our Presenters"
          subtitle="Experts from Student Affairs departments sharing best practices and experiences."
        />

        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 sm:gap-x-5 gap-y-10 justify-items-center">
          {PRESENTERS.map((p) => {
            const dept = DEPARTMENTS[p.dept];
            const Icon = dept.icon;
            const initials = p.name === "TBA"
              ? "?"
              : p.name.split(" ").map((n) => n[0]).slice(0, 2).join("");

            return (
              <button
                key={p.dept}
                onClick={() => setSelected(p)}
                className="group relative rounded-xl bg-cream border border-border hover:border-gold/60 hover:-translate-y-1 transition-all p-4 sm:p-5 pt-10 text-center w-full max-w-[220px]"
              >
                <div
                  className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full grid place-items-center ring-4 ring-white"
                  style={{ backgroundColor: dept.color }}
                >
                  <Icon size={18} className="text-white" />
                </div>

                <div className="h-20 w-20 mx-auto rounded-full bg-white border border-border grid place-items-center">
                  <span className="font-serif text-2xl text-navy/60 font-semibold">
                    {initials}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-[11px] uppercase tracking-widest text-gold font-semibold">
                    {dept.short}
                  </div>
                  <div className="mt-1 font-semibold text-navy text-sm leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {p.name}
                  </div>
                </div>

                <div className="mt-3 inline-flex items-center gap-1 text-xs text-navy/60 group-hover:text-gold transition-colors">
                  Learn more <ArrowRight size={12} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent>
          {selected && (
            <>
              <DialogHeader>
                <div className="text-xs uppercase tracking-widest text-gold font-semibold">
                  {DEPARTMENTS[selected.dept].label}
                </div>
                <DialogTitle className="font-serif text-2xl text-navy">
                  {selected.name}
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="text-navy/80 leading-relaxed">
                {selected.bio}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
