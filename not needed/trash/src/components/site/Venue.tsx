import { MapPin, ExternalLink } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Venue() {
  return (
    <section id="venue" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Event Venue"
          title="Prince Mohammad Bin Fahd University"
          subtitle="All sessions take place at the PMU Auditorium on the main campus in Al Khobar."
        />

        <div className="mt-14 grid md:grid-cols-5 gap-6 items-stretch">
          <div className="md:col-span-3 rounded-2xl overflow-hidden border border-border shadow-sm min-h-[360px]">
            <iframe
              title="PMU Campus Map"
              src="https://www.google.com/maps?q=Prince+Mohammad+Bin+Fahd+University&output=embed"
              className="w-full h-full min-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="md:col-span-2 rounded-2xl bg-cream border border-border p-8 flex flex-col">
            <div className="h-12 w-12 rounded-full bg-navy grid place-items-center">
              <MapPin size={20} className="text-gold" />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-navy">PMU Auditorium</h3>
            <p className="mt-3 text-navy/70 leading-relaxed text-sm">
              Prince Mohammad Bin Fahd University<br />
              P.O. Box 1664, Al Khobar 31952<br />
              Kingdom of Saudi Arabia
            </p>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-xs uppercase tracking-widest text-gold font-semibold">
                Dates
              </div>
              <div className="mt-1 font-serif text-lg text-navy">
                27 – 29 May 2025
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Prince+Mohammad+Bin+Fahd+University"
              target="_blank"
              rel="noreferrer"
              className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Get directions <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
