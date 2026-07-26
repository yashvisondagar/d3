"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "@/components/atoms/LogoMark";
import { site } from "@/data/locations";

/**
 * Local file (preferred): public/videos/hero.mp4
 * Temp fallback — Mixkit living-room clip (CDN path that allows hotlink).
 */
const LOCAL_HERO_VIDEO = "/videos/hero.mp4";
const TEMP_HERO_VIDEO =
  "https://assets.mixkit.co/videos/4828/4828-720.mp4";

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState(TEMP_HERO_VIDEO);

  useEffect(() => {
    let cancelled = false;
    fetch(LOCAL_HERO_VIDEO, { method: "HEAD" })
      .then((res) => {
        if (!cancelled && res.ok) setSrc(LOCAL_HERO_VIDEO);
      })
      .catch(() => {
        /* keep temp sample */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduce) return;
    el.muted = true;
    const tryPlay = () => {
      el.play().catch(() => undefined);
    };
    tryPlay();
    el.addEventListener("canplay", tryPlay);
    return () => el.removeEventListener("canplay", tryPlay);
  }, [src, reduce]);

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-charcoal"
    >
      {!reduce ? (
        <video
          ref={videoRef}
          key={src}
          className="absolute inset-0 h-full w-full object-cover"
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero/circle-living.png"
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero/circle-living.png)" }}
        />
      )}

      {/* Soft cinematic veil — keeps video readable without hiding it */}
      <div className="absolute inset-0 bg-charcoal/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/30" />

      <div className="relative z-20 flex items-start justify-between px-5 pt-24 sm:px-10 sm:pt-28">
        <div className="flex items-center gap-3">
          <LogoMark size="sm" className="border-cream/50 text-cream" />
          <p className="hidden font-sans text-[10px] uppercase tracking-[0.26em] text-cream/75 sm:block">
            {site.name}
          </p>
        </div>
        <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-cream/55">
          Mumbai
        </p>
      </div>

      <div className="relative z-20 mt-auto px-5 pb-12 sm:px-10 sm:pb-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-gold-soft">
            Interior design studio
          </p>
          <h1 className="mt-3 max-w-xl font-serif text-4xl leading-[1.08] text-cream sm:text-5xl md:text-6xl">
            Dream Design Dwell
          </h1>
          <p className="mt-4 max-w-md font-serif text-lg italic text-cream/70">
            {site.tagline}
          </p>
          <a
            href="#works"
            className="mt-8 inline-flex border border-cream/50 px-7 py-3 font-sans text-[11px] uppercase tracking-[0.22em] text-cream transition hover:bg-cream/10"
          >
            Explore works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
