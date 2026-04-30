import { cn } from "@/lib/utils";

export interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

function HandWrittenTitle({
  title = "Scaling human potential",
  subtitle,
  className,
}: HandWrittenTitleProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl px-4 py-8 md:py-14",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center px-3 text-center">
        <h1
          className={cn(
            "max-w-[18ch] text-balance font-[family-name:var(--font-inter-tight,sans-serif)] font-light leading-[1.05] tracking-[-0.04em]",
            "text-[clamp(1.875rem,5.2vw,3.25rem)] text-[var(--text-on-ink)]",
          )}
        >
          {title}
        </h1>
        {subtitle ? (
          <p
            className={cn(
              "mt-4 max-w-xl font-[family-name:var(--font-inter-tight,sans-serif)] font-light leading-relaxed tracking-tight",
              "text-[clamp(1rem,2.2vw,1.125rem)] text-[var(--muted-ink)]",
            )}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
