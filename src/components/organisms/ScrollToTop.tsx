"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export function ScrollToTop() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.55);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={goTop}
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-5 z-50 flex h-11 w-11 items-center justify-center border border-gold/55 bg-cream/90 text-charcoal shadow-[0_12px_28px_-18px_rgba(29,29,27,0.45)] backdrop-blur-sm transition hover:border-gold hover:bg-cream hover:text-gold sm:bottom-8 sm:right-8"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden
          >
            <path
              d="M7 11.5V2.5M7 2.5L2.5 7M7 2.5L11.5 7"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
