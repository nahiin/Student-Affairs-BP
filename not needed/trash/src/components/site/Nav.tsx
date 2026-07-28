import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { Link } from "@tanstack/react-router";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#schedule", label: "Schedule" },
  { href: "/#presenters", label: "Presenters" },
  { href: "/#featured", label: "Featured" },
  { href: "/#venue", label: "Venue" },
  { href: "/#contact", label: "Contact" },
];

const WORKSHOPS = [
  {
    to: "/workshops/registration-department",
    title: "Facilitating the Student's Academic Journey",
    dept: "Registration Department",
  },
];

export function Nav({ solid = false }: { solid?: boolean } = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [wsOpen, setWsOpen] = useState(false);
  const wsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (wsRef.current && !wsRef.current.contains(e.target as Node)) setWsOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const isSolid = solid || scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-navy/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-white">
          <div className="h-9 w-9 rounded-full border border-gold/60 grid place-items-center">
            <span className="font-serif text-gold text-sm font-semibold">P</span>
          </div>
          <div className="leading-tight">
            <div className="text-[11px] tracking-[0.2em] uppercase text-gold/90">PMU</div>
            <div className="text-sm font-medium">Student Affairs</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-white/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}

          <div className="relative" ref={wsRef}>
            <button
              onClick={() => setWsOpen((o) => !o)}
              className={`inline-flex items-center gap-1 text-sm transition-colors ${
                wsOpen ? "text-gold" : "text-white/80 hover:text-gold"
              }`}
            >
              Workshops
              <ChevronDown
                size={14}
                className={`transition-transform ${wsOpen ? "rotate-180" : ""}`}
              />
            </button>
            {wsOpen && (
              <div className="absolute left-0 top-full w-56 bg-navy/95 backdrop-blur shadow-lg shadow-black/20 rounded-b-lg overflow-hidden">
                {WORKSHOPS.map((w) => (
                  <Link
                    key={w.to}
                    to={w.to}
                    onClick={() => setWsOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/80 hover:text-gold hover:bg-white/[0.04] transition-colors"
                  >
                    {w.title}
                  </Link>
                ))}
              </div>
            )}

          </div>


          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm text-white/90 hover:text-gold transition-colors"
          >
            <LogIn size={15} /> Login
          </Link>
          <a
            href="/#contact"
            className="inline-flex items-center rounded-full bg-gold px-5 py-2 text-sm font-semibold text-navy hover:bg-gold-soft transition-colors"
          >
            Register
          </a>
        </nav>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <div className="px-6 py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2"
              >
                {l.label}
              </a>
            ))}
            <div className="text-white/50 text-[11px] uppercase tracking-widest mt-2">
              Workshops
            </div>
            {WORKSHOPS.map((w) => (
              <Link
                key={w.to}
                to={w.to}
                onClick={() => setOpen(false)}
                className="text-white/90 py-2 text-sm"
              >
                {w.title}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="text-white/90 py-2 inline-flex items-center gap-2"
            >
              <LogIn size={15} /> Login
            </Link>
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
