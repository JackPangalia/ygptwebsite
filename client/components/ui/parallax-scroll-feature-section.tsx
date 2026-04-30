"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

type FeatureSection = {
  n: string;
  title: string;
  kicker: string;
  description: string;
  imageUrl: string;
  reverse?: boolean;
};

type ParallaxScrollFeatureSectionProps = {
  id?: string;
  sections?: FeatureSection[];
};

const DEFAULT_SECTIONS: FeatureSection[] = [
  {
    n: "01",
    title: "Websites",
    kicker: "Presence",
    description:
      "Fast, clear sites built to convert with structure, design, and performance handled in one pass.",
    imageUrl: "/service-websites-van.png",
  },
  {
    n: "02",
    title: "SEO",
    kicker: "Discovery",
    description:
      "Technical foundations and content direction so the right searches can actually find you.",
    imageUrl: "/service-seo-van.png",
    reverse: true,
  },
  {
    n: "03",
    title: "Social Media Marketing",
    kicker: "Demand",
    description:
      "Campaign rhythm and creative systems that keep your brand visible without adding noise.",
    imageUrl: "/service-social-van.png",
  },
  {
    n: "04",
    title: "Website Chatbots",
    kicker: "Assist",
    description:
      "Embedded assistants for FAQs, routing, and light qualification before a visitor reaches your inbox.",
    imageUrl: "/service-chatbots-van.png",
    reverse: true,
  },
  {
    n: "05",
    title: "Custom Solutions",
    kicker: "Operations",
    description:
      "When off-the-shelf fails, we map the operational problem and ship the tool the work actually needs.",
    imageUrl: "/service-custom-van.png",
  },
];

function FeatureRow({
  section,
  total,
}: {
  section: FeatureSection;
  total: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.8], [-56, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.18, 0.68], [0, 1]);
  const imageClipPath = useTransform(
    scrollYProgress,
    [0.14, 0.8],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );

  return (
    <div
      ref={sectionRef}
      className={cn(
        "flex min-h-[76vh] w-full flex-col items-start justify-center gap-8 py-16 md:grid md:min-h-[72vh] md:grid-cols-[minmax(0,0.76fr)_minmax(18rem,0.94fr)] md:items-center md:gap-10 md:py-10 lg:gap-14",
        section.reverse && "md:grid-cols-[minmax(18rem,0.94fr)_minmax(0,0.76fr)]",
      )}
    >
      <motion.div
        style={{ y: contentY }}
        className={cn(
          "max-w-xl",
          section.reverse && "md:col-start-2 md:row-start-1",
        )}
      >
        <div className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted-ink)]">
          [{section.n}] / [{String(total).padStart(2, "0")}] — {section.kicker}
        </div>
        <h3 className="max-w-[11ch] text-balance text-4xl font-light leading-[0.96] tracking-[-0.045em] text-[var(--text-on-ink)] sm:text-5xl lg:text-6xl">
          {section.title}
        </h3>
        <p className="mt-6 max-w-sm text-pretty text-base leading-7 text-[var(--muted-ink)]">
          {section.description}
        </p>
      </motion.div>

      <motion.div
        style={{
          opacity: imageOpacity,
          clipPath: imageClipPath,
        }}
        className={cn(
          "relative aspect-[4/3] w-full overflow-hidden border border-[var(--hairline-ink)] md:max-w-[34rem] lg:max-w-[36rem]",
          section.reverse && "md:col-start-1 md:row-start-1",
        )}
      >
        <Image
          src={section.imageUrl}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          alt={`${section.title} service`}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,14,0.04),rgba(16,16,14,0.28))]" />
      </motion.div>
    </div>
  );
}

export function ParallaxScrollFeatureSection({
  id = "services",
  sections = DEFAULT_SECTIONS,
}: ParallaxScrollFeatureSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t-0 bg-[var(--ink)] py-0 text-[var(--text-on-ink)]"
    >
      <div className="container">
        <div className="flex min-h-[64vh] w-full flex-col items-start justify-center">
          <div className="mb-8 flex w-full items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--muted-ink)]">
            <span>[ 01 / 04 ]</span>
            <span>Services — What we do</span>
          </div>
          <h2 className="max-w-[10ch] text-balance text-5xl font-light leading-[0.94] tracking-[-0.05em] text-[var(--text-on-ink)] sm:text-6xl md:text-7xl">
            Services that move the business.
          </h2>
          <p className="mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--muted-ink)]">
            Scroll <ArrowDown aria-hidden="true" size={15} />
          </p>
        </div>

        <div className="flex flex-col">
          {sections.map((section) => (
            <FeatureRow
              key={section.n}
              section={section}
              total={sections.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export const Component = ParallaxScrollFeatureSection;

export default ParallaxScrollFeatureSection;
