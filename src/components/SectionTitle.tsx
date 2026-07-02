interface SectionTitleProps {
  id?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  id,
  badge,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  
  return (
    <div id={id} className={`flex flex-col gap-2.5 mb-10 md:mb-14 ${alignClass}`}>
      {badge && (
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base text-text-secondary max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
