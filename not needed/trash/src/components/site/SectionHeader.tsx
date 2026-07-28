interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  invert?: boolean;
  align?: "center" | "left";
}

export function SectionHeader({ eyebrow, title, subtitle, invert, align = "center" }: Props) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col ${alignCls} gap-4 max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        className={`text-3xl md:text-4xl font-semibold leading-tight ${
          invert ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      <div className="gold-diamond text-gold">
        <span className="inline-block h-2 w-2 rotate-45 bg-gold" aria-hidden />
      </div>
      {subtitle && (
        <p className={`text-base leading-relaxed ${invert ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
