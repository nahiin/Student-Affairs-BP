import { Download, FileText, User, MapPin, Target, ListChecks, GraduationCap } from "lucide-react";
import { FEATURED } from "@/data/seminar";

export function FeaturedSeminar() {
  return (
    <section id="featured" className="py-24 md:py-32 bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden>
        <div className="absolute top-20 -right-40 h-[480px] w-[480px] rounded-full bg-gold blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <span className="eyebrow">Featured Session</span>
            <h2 className="mt-5 text-3xl md:text-5xl font-serif font-semibold leading-[1.15]">
              {FEATURED.title}
            </h2>
            <div className="mt-6 h-px w-24 bg-gold" />

            <div className="mt-8 space-y-5">
              {FEATURED.description.map((p, i) => (
                <p key={i} className="text-white/75 leading-relaxed text-[15px]">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-2">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur overflow-hidden">
              {/* Presenter cover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/10">
                {FEATURED.presenterImage ? (
                  <img
                    src={FEATURED.presenterImage}
                    alt={FEATURED.presenter}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <div
                    className="absolute inset-0 grid place-items-center"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, color-mix(in oklab, var(--color-gold) 55%, transparent), transparent 60%), linear-gradient(135deg, var(--color-navy-deep), var(--color-navy))",
                    }}
                  >
                    <div className="h-24 w-24 rounded-full bg-white/10 border border-gold/40 grid place-items-center backdrop-blur">
                      <User size={40} className="text-gold" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep/90 to-transparent" />
                <div className="absolute left-5 bottom-4 right-5">
                  <div className="text-[11px] uppercase tracking-widest text-gold font-semibold">
                    Presenter
                  </div>
                  <div className="mt-0.5 font-serif text-xl text-white leading-tight">
                    {FEATURED.presenter}
                  </div>
                  <div className="text-xs text-white/70">{FEATURED.presenterTitle}</div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin size={14} className="text-gold" />
                  {FEATURED.timePlace}
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="/academic-advising-seminar.pptx"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy hover:bg-gold-soft transition-colors"
                  >
                    <Download size={16} /> Download Slides (.pptx)
                  </a>
                  <a
                    href="/academic-advising-seminar.pptx"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/5 transition-colors"
                  >
                    <FileText size={16} /> View outline
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>


        {/* Three sub-cards */}
        <div className="mt-14 grid md:grid-cols-3 gap-4">
          <Card icon={Target} title="Objectives">
            <ul className="space-y-2.5">
              {FEATURED.objectives.map((o) => (
                <li key={o} className="flex gap-2.5 text-sm text-white/75 leading-relaxed">
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={ListChecks} title="Itinerary">
            <ol className="space-y-2.5 counter-reset">
              {FEATURED.itinerary.map((it, i) => (
                <li key={it} className="flex gap-3 text-sm text-white/75 leading-relaxed">
                  <span className="font-serif text-gold text-sm shrink-0 w-5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{it}</span>
                </li>
              ))}
            </ol>
          </Card>

          <Card icon={GraduationCap} title="About the Presenter">
            <p className="text-sm text-white/75 leading-relaxed">{FEATURED.bio}</p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Target;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6">
      <div className="flex items-center gap-3 pb-4 border-b border-white/10">
        <div className="h-9 w-9 rounded-full bg-gold/15 border border-gold/40 grid place-items-center">
          <Icon size={16} className="text-gold" />
        </div>
        <h3 className="font-serif text-lg text-white">{title}</h3>
      </div>
      <div className="pt-5">{children}</div>
    </div>
  );
}
