export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-gold/60 grid place-items-center">
            <span className="font-serif text-gold text-xs font-semibold">P</span>
          </div>
          <div>
            <div className="text-white font-medium">PMU Student Affairs</div>
            <div className="text-xs">Best Practices Seminar 2025</div>
          </div>
        </div>
        <div className="text-xs">
          © {new Date().getFullYear()} Prince Mohammad Bin Fahd University. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
