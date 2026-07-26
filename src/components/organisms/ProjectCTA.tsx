"use client";

import Image from "next/image";
import { CalendlyButton } from "@/components/molecules/CalendlyButton";
import { allGalleryImages, locations, site } from "@/data/locations";

/** Prefer a real site photo for the CTA backdrop */
function ctaBackground() {
  const bandra = locations.find((l) => l.id === "bandra");
  const andheri = locations.find((l) => l.id === "andheri");
  const pick = bandra || andheri || locations[0];
  return allGalleryImages(pick!)[0]?.src || "/hero/circle-living.png";
}

export function ProjectCTA() {
  const bg = ctaBackground();

  return (
    <section
      id="talk"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal"
    >
      <Image
        src={bg}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />
      <div className="absolute inset-0 bg-charcoal/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/40" />

      <div className="relative z-10 mt-auto px-5 pb-14 pt-40 sm:px-10 sm:pb-20 md:max-w-3xl">
        <h2 className="font-sans text-4xl font-light leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
          Let&apos;s talk about
          <br />
          your next
          <br />
          project
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          <CalendlyButton className="inline-flex items-center gap-2 bg-cream px-6 py-3.5 font-sans text-[12px] tracking-wide text-charcoal transition hover:bg-sand disabled:opacity-70">
            Schedule a call
          </CalendlyButton>
          <a
            href="#contact"
            className="inline-flex bg-cream px-6 py-3.5 font-sans text-[12px] tracking-wide text-charcoal transition hover:bg-sand"
          >
            Discuss the project
          </a>
        </div>

        <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.22em] text-cream/50">
          Or call {site.phone}
        </p>
      </div>
    </section>
  );
}
