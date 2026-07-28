import { useState } from "react";
import { Calendar, MapPin, ArrowRight, PlayCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import campusImg from "@/assets/pmu-campus.jpg";

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);
  return (
    <>
    <section
      id="top"
      className="relative h-screen min-h-[640px] flex items-center overflow-hidden bg-navy text-white"
    >
      {/* campus background */}
      <div className="absolute inset-0" aria-hidden>
        <img
          src={campusImg}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/80 to-navy-deep/95" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">PMU Student Affairs · 2025</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight"
        >
          Student Affairs Best Practices Seminar
          <br />
          <span className="text-gold italic font-medium">May 01, 2025</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-white/75 leading-relaxed"
        >
          Three days of sessions from PMU Student Affairs departments on student success,
          retention, and modern practices that shape the university experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80"
        >
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gold" />
            <span>27 – 29 May 2025</span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-gold" />
            <span>PMU Auditorium</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#register"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-navy hover:bg-gold-soft transition-colors"
          >
            Register to attend <ArrowRight size={16} />
          </a>
          <button
            onClick={() => setVideoOpen(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            <PlayCircle size={18} className="text-gold" /> Watch video
          </button>
        </motion.div>
      </div>
    </section>

    <AnimatePresence>
      {videoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setVideoOpen(false)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur grid place-items-center p-4"
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            aria-label="Close video"
          >
            <X size={28} />
          </button>
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Seminar promo"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
