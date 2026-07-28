import { useState } from "react";
import { Calendar, Clock, MapPin, ChevronDown, User, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";

import { SCHEDULE, DEPARTMENTS, type Session } from "@/data/seminar";
import { SectionHeader } from "./SectionHeader";

export function Schedule() {
  const [dayIdx, setDayIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const day = SCHEDULE[dayIdx];

  return (
    <section id="schedule" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          eyebrow="Event Schedule"
          title="Best Practices Seminar Schedule"
          subtitle="Explore the schedule for each department across the three days of the seminar."
        />

        {/* Day tabs */}
        <div className="mt-14 grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
          {SCHEDULE.map((d, i) => {
            const active = i === dayIdx;
            return (
              <button
                key={d.id}
                onClick={() => {
                  setDayIdx(i);
                  setOpenIdx(null);
                }}
                className={`group relative rounded-xl px-3 md:px-6 py-3 md:py-5 text-center md:text-left transition-all ${
                  active
                    ? "bg-navy text-white shadow-lg shadow-navy/20"
                    : "bg-white text-navy border border-border hover:border-gold/60"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-3">
                  <Calendar
                    size={16}
                    className={active ? "text-gold" : "text-gold/70"}
                  />
                  <div className="min-w-0">
                    <div className="text-xs md:text-base font-semibold tracking-wide">
                      {d.label}
                    </div>
                    <div
                      className={`text-[10px] md:text-sm leading-tight ${
                        active ? "text-white/70" : "text-muted-foreground"
                      }`}
                    >
                      {d.date}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sessions list */}
        <div className="mt-8 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={day.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
            >
              {day.sessions.map((s, i) => (
                <SessionCard
                  key={i}
                  session={s}
                  open={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SessionCard({
  session,
  open,
  onToggle,
}: {
  session: Session;
  open: boolean;
  onToggle: () => void;
}) {
  const dept = DEPARTMENTS[session.dept];
  const Icon = dept.icon;

  return (
    <div
      className={`bg-white rounded-xl border transition-all ${
        open ? "border-gold shadow-lg shadow-black/[0.04]" : "border-border hover:border-navy/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left p-4 md:p-6 flex items-start gap-3 md:gap-5"
      >
        <div
          className="h-11 w-11 md:h-14 md:w-14 rounded-full grid place-items-center shrink-0"
          style={{ backgroundColor: dept.color }}
        >
          <Icon size={20} className="text-white" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-gold font-semibold">
            {dept.short}
          </div>
          <h3 className="mt-1 text-base md:text-xl font-serif font-semibold text-navy leading-snug">
            {session.title}
          </h3>
          <p className="mt-1 text-xs md:text-sm text-muted-foreground line-clamp-2">
            {session.description}
          </p>
        </div>

        <div className="hidden md:flex flex-col items-end gap-1.5 text-sm text-navy/80 shrink-0 pt-1">
          <div className="flex items-center gap-1.5">
            <Clock size={14} className="text-gold" />
            <span className="font-medium">{session.time}</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin size={14} className="text-gold" />
            <span>{session.location}</span>
          </div>
        </div>

        <ChevronDown
          size={18}
          className={`ml-1 md:ml-2 text-navy/50 shrink-0 transition-transform mt-1 md:mt-2 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-4 md:px-6 pb-6 pt-1 border-t border-border/70 ml-14 md:ml-[76px]">
              <div className="md:hidden flex flex-wrap gap-4 text-sm text-navy/80 pt-4">
                <div className="flex items-center gap-1.5">
                  <Clock size={14} className="text-gold" />
                  <span>{session.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <MapPin size={14} className="text-gold" />
                  <span>{session.location}</span>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-2 text-sm">
                <User size={14} className="text-gold" />
                <span className="text-muted-foreground">Presenter:</span>
                <span className="font-medium text-navy">{session.presenter}</span>
              </div>

              {session.objectives && (
                <ul className="mt-4 space-y-1.5">
                  {session.objectives.map((o) => (
                    <li key={o} className="flex gap-2 text-sm text-navy/80">
                      <span className="text-gold mt-1.5 h-1 w-1 rounded-full bg-gold shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5">
                <Link
                  to="/workshops/registration-department"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
                >
                  View details <ArrowRight size={14} />
                </Link>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
