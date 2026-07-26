"use client";

import { useMemo, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { allGalleryImages, locations } from "@/data/locations";

/** One hero frame per neighbourhood (7 sites) */
function buildSiteFrames() {
  return locations.map((loc, i) => {
    const img = allGalleryImages(loc)[0];
    return {
      id: loc.id,
      name: loc.name,
      number: String(i + 1).padStart(2, "0"),
      src: img.src,
      alt: `${loc.name} project`,
    };
  });
}

export function ProjectMarquee() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const frames = useMemo(() => buildSiteFrames(), []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Start left-aligned (first frames visible); scroll reveals the rest
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["0%", "-68%"],
  );

  return (
    <section
      id="works"
      ref={sectionRef}
      className="relative bg-cream"
      style={{ height: reduce ? "auto" : "280vh" }}
    >
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden border-t border-charcoal/5 bg-cream">
        <div className="mb-6 flex shrink-0 items-end justify-between px-5 sm:mb-8 sm:px-10">
          <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-gold">
            Across Mumbai
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-charcoal/40">
            01 — 07 · one frame each
          </p>
        </div>

        <motion.div
          className="flex w-max gap-5 px-5 will-change-transform sm:gap-6 sm:px-10"
          style={{ x }}
        >
          {frames.map((frame) => (
            <article
              key={frame.id}
              className="w-[78vw] max-w-[520px] shrink-0 sm:w-[48vw] lg:w-[38vw]"
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-mist">
                <Image
                  src={frame.src}
                  alt={frame.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 78vw, 40vw"
                />
              </div>
              <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.18em] text-charcoal/55">
                {frame.number} {frame.name}
              </p>
            </article>
          ))}
        </motion.div>

        <div className="mt-8 shrink-0 px-5 sm:px-10">
          <a
            href="#projects"
            className="font-sans text-[11px] uppercase tracking-[0.24em] text-gold transition hover:text-charcoal"
          >
            Open Mumbai map →
          </a>
        </div>
      </div>
    </section>
  );
}
