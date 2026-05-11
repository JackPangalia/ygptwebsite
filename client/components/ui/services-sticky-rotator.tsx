"use client";

type ServiceSection = {
  n: string;
  title: string;
  kicker: string;
  description: string;
};

type ServicesStickyRotatorProps = {
  id?: string;
  sections?: ServiceSection[];
};

const DEFAULT_SECTIONS: ServiceSection[] = [
  {
    n: "01",
    title: "Websites",
    kicker: "Presence",
    description:
      "Fast, clear sites built to convert with structure, design, and performance handled in one pass.",
  },
  {
    n: "02",
    title: "SEO",
    kicker: "Discovery",
    description:
      "Technical foundations and content direction so the right searches can actually find you.",
  },
  {
    n: "03",
    title: "Social Media Marketing",
    kicker: "Demand",
    description:
      "Campaign rhythm and creative systems that keep your brand visible without adding noise.",
  },
  {
    n: "04",
    title: "Website Chatbots",
    kicker: "Assist",
    description:
      "Embedded assistants for FAQs, routing, and light qualification before a visitor reaches your inbox.",
  },
  {
    n: "05",
    title: "Custom Solutions",
    kicker: "Operations",
    description:
      "When off-the-shelf fails, we map the operational problem and ship the tool the work actually needs.",
  },
];

export function ServicesStickyRotator({
  id = "services",
  sections = DEFAULT_SECTIONS,
}: ServicesStickyRotatorProps) {
  const safeSections = sections.length > 0 ? sections : DEFAULT_SECTIONS;
  const totalLabel = String(safeSections.length).padStart(2, "0");

  return (
    <section
      id={id}
      className="relative border-t-0 bg-[var(--ink)] py-0 text-[var(--text-on-ink)]"
    >
      <div className="container py-24 md:py-28 lg:py-32">
        <div className="mb-12 flex items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted-ink)] md:mb-16">
          <span>[ 01 / {totalLabel} ]</span>
          <span>Services — What we do</span>
        </div>

        <div className="flex flex-col gap-12 md:gap-14 lg:gap-16">
          <header className="max-w-3xl">
            <div className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--muted-ink)]">
              [ Services ]
            </div>
            <h2 className="mt-6 max-w-[14ch] text-balance text-5xl font-light leading-[0.94] tracking-[-0.05em] text-[var(--text-on-ink)] md:max-w-[16ch] md:text-6xl lg:text-7xl">
              Services that move the business.
            </h2>
            <p className="mt-8 max-w-xl text-pretty text-base leading-7 text-[var(--muted-ink)]">
              Clear offers, plain language, and enough structure for visitors to know exactly where the work fits.
            </p>
          </header>

          <div className="w-full divide-y divide-[var(--hairline-ink)] border-y border-[var(--hairline-ink)]">
            {safeSections.map((section) => (
              <article
                key={section.n}
                className="grid gap-5 py-7 md:grid-cols-[4.5rem_minmax(11rem,0.4fr)_minmax(18rem,1fr)] md:gap-x-12 md:gap-y-5 md:py-9"
              >
                <div className="flex items-center justify-between gap-4 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--muted-ink)] md:block">
                  <span>[{section.n}]</span>
                  <span className="md:mt-3 md:block">{section.kicker}</span>
                </div>
                <h3 className="text-3xl font-light leading-none tracking-[-0.04em] text-[var(--text-on-ink)] md:text-[clamp(2rem,2.15vw,2.75rem)]">
                  {section.title}
                </h3>
                <p className="max-w-[46ch] text-sm leading-6 text-[var(--muted-ink)] md:pt-2 md:text-base md:leading-7">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export const Component = ServicesStickyRotator;

export default ServicesStickyRotator;
