import { createFileRoute } from "@tanstack/react-router";
import pmuBg from "@/assets/pmu-campus.jpg";
import {
  ChevronRight,
  Clock,
  MapPin,
  User,
  Download,
  FileText,
  FileSpreadsheet,
  ClipboardList,
  BookOpen,
  BarChart3,
  Handshake,
} from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FEATURED } from "@/data/seminar";

export const Route = createFileRoute("/workshops/registration-department")({
  head: () => ({
    meta: [
      { title: `${FEATURED.title} — PMU Workshops` },
      { name: "description", content: FEATURED.description[0] },
      { property: "og:title", content: `${FEATURED.title} — PMU Workshops` },
      { property: "og:description", content: FEATURED.description[0] },
    ],
  }),
  component: WorkshopPage,
});

const OUTCOMES = [
  {
    icon: ClipboardList,
    title: "Registration Operations",
    body: "Understand how registration supports students throughout each academic semester.",
  },
  {
    icon: BookOpen,
    title: "Academic Planning",
    body: "Learn how term configuration, scheduling, and final examinations are coordinated.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    body: "Explore registration reports and how data supports institutional decision-making.",
  },
  {
    icon: Handshake,
    title: "Collaboration",
    body: "Understand how Registration collaborates with colleges and Student Affairs departments.",
  },
];

const RESOURCES = [
  { icon: FileText, label: "Presentation Slides", type: "PDF" },
  { icon: FileText, label: "Workshop Guide", type: "PDF" },
  { icon: FileSpreadsheet, label: "Sample Reports", type: "XLSX" },
  { icon: FileText, label: "Reference Documents", type: "PDF" },
];

const RELATED = [
  "Academic Advising",
  "Admissions",
  "Campus Life",
  "Career Services",
  "Counseling",
  "PTCCE",
];

function WorkshopPage() {
  return (
    <div className="min-h-screen bg-white">
      <Nav solid />

      <main className="pt-16 md:pt-20">
        {/* Full-width hero */}
        <section className="relative overflow-hidden bg-navy text-white">
          <div
            className="absolute inset-0 opacity-[0.12] bg-cover bg-center"
            style={{ backgroundImage: `url(${pmuBg})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" aria-hidden />
          <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
            <div className="absolute -top-40 -right-40 h-[560px] w-[560px] rounded-full bg-gold blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-gold blur-3xl" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <span className="inline-block rounded-md bg-gold px-3 py-1.5 text-[11px] uppercase tracking-widest text-navy font-bold">
                  Registration Department
                </span>
                <h1 className="mt-5 font-serif text-3xl md:text-5xl leading-[1.15] font-semibold">
                  {FEATURED.title}
                </h1>
                <div className="mt-6 text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Presented by
                </div>
                <div className="mt-1 font-serif text-2xl">{FEATURED.presenter}</div>
                <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/80">
                  <span className="inline-flex items-center gap-2">
                    <Clock size={14} className="text-gold" /> 60 Minutes
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={14} className="text-gold" /> PMU Auditorium
                  </span>
                </div>
              </div>

              <div className="md:justify-self-end">
                <div className="h-44 w-44 md:h-56 md:w-56 rounded-full border-4 border-gold overflow-hidden bg-white/10 grid place-items-center">
                  {FEATURED.presenterImage ? (
                    <img
                      src={FEATURED.presenterImage}
                      alt={FEATURED.presenter}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User size={64} className="text-gold" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Body */}
        <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-14">
              <div>
                <h2 className="font-serif text-2xl text-navy">About This Workshop</h2>
                <div className="mt-2 h-px w-16 bg-gold" />
                <div className="mt-5 space-y-4">
                  {FEATURED.description.map((p, i) => (
                    <p key={i} className="text-navy/75 leading-relaxed text-[15px]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-navy">Learning Outcomes</h2>
                <div className="mt-2 h-px w-16 bg-gold" />
                <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {OUTCOMES.map((o) => (
                    <div
                      key={o.title}
                      className="rounded-xl bg-cream border border-border p-5"
                    >
                      <div className="h-10 w-10 rounded-lg bg-white grid place-items-center border border-border">
                        <o.icon size={18} className="text-gold" />
                      </div>
                      <div className="mt-3 font-semibold text-navy text-sm">{o.title}</div>
                      <p className="mt-1.5 text-xs text-navy/70 leading-relaxed">{o.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-navy">Workshop Agenda</h2>
                <div className="mt-2 h-px w-16 bg-gold" />
                <ol className="mt-6 relative border-l-2 border-gold/30 pl-6 space-y-5">
                  {FEATURED.itinerary.map((item, i) => (
                    <li key={item} className="relative">
                      <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-navy border-2 border-gold" />
                      <div className="text-xs font-semibold text-gold tracking-widest uppercase">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-0.5 text-sm text-navy leading-relaxed">{item}</div>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-navy">Session Objectives</h2>
                <div className="mt-2 h-px w-16 bg-gold" />
                <ul className="mt-5 space-y-3">
                  {FEATURED.objectives.map((o) => (
                    <li key={o} className="flex gap-3 text-sm text-navy/80 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-2xl bg-white border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border">
                  <h3 className="font-serif text-lg text-navy">Workshop Resources</h3>
                </div>
                <ul className="divide-y divide-border">
                  {RESOURCES.map((r) => (
                    <li key={r.label} className="flex items-center gap-3 px-6 py-3">
                      <r.icon size={18} className="text-gold shrink-0" />
                      <div className="flex-1">
                        <div className="text-sm text-navy font-medium">{r.label}</div>
                        <div className="text-[11px] text-navy/50 uppercase tracking-widest">
                          {r.type}
                        </div>
                      </div>
                      <span className="text-xs text-navy/60 font-semibold">{r.type}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-4 border-t border-border">
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep transition-colors">
                    <Download size={14} /> Download All
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-border p-6">
                <h3 className="font-serif text-lg text-navy">About the Presenter</h3>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full overflow-hidden bg-cream grid place-items-center border border-border">
                    {FEATURED.presenterImage ? (
                      <img
                        src={FEATURED.presenterImage}
                        alt={FEATURED.presenter}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <User size={22} className="text-navy/60" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-navy text-sm">{FEATURED.presenter}</div>
                    <div className="text-xs text-navy/60">{FEATURED.presenterTitle}</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-navy/75 leading-relaxed">{FEATURED.bio}</p>
              </div>

              <div className="rounded-2xl bg-white border border-border overflow-hidden">
                <div className="px-6 py-4 border-b border-border">
                  <h3 className="font-serif text-lg text-navy">Related Workshops</h3>
                </div>
                <ul className="divide-y divide-border">
                  {RELATED.map((r) => (
                    <li
                      key={r}
                      className="flex items-center justify-between px-6 py-3 text-sm text-navy hover:bg-cream transition-colors cursor-pointer"
                    >
                      <span>{r}</span>
                      <ChevronRight size={14} className="text-navy/40" />
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
