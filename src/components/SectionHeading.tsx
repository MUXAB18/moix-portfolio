interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <div className="mt-4 flex items-center gap-4">
          <div className="h-[1px] w-12 bg-primary/50" />
          <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">
            {subtitle}
          </p>
        </div>
      )}
    </div>
  );
}
