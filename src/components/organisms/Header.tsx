"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/atoms/Container";
import { LogoMark } from "@/components/atoms/LogoMark";
import { site } from "@/data/locations";
import { cn } from "@/lib/cn";

const links = [
  { href: "#works", label: "Works" },
  { href: "#projects", label: "Map" },
  { href: "#talk", label: "Talk" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-charcoal/8 bg-cream/85 shadow-[0_8px_30px_-18px_rgba(29,29,27,0.25)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container className="flex items-center justify-between py-4 sm:py-5">
        <a href="#top" className="flex items-center gap-3">
          <LogoMark
            size="sm"
            className={cn(!scrolled && "border-cream/50 text-cream")}
          />
          <span
            className={cn(
              "hidden font-serif text-sm tracking-wide sm:block",
              scrolled ? "text-charcoal" : "text-cream",
            )}
          >
            {site.name}
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-sans text-[11px] uppercase tracking-[0.22em] transition hover:text-gold",
                scrolled ? "text-charcoal/75" : "text-cream/85",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className={cn(
            "font-sans text-[11px] uppercase tracking-[0.22em] md:hidden",
            scrolled ? "text-charcoal" : "text-cream",
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </Container>
      <div
        id="mobile-nav"
        className={cn(
          "border-t border-charcoal/10 bg-cream/95 backdrop-blur md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-4 py-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm uppercase tracking-[0.18em] text-charcoal"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </Container>
      </div>
    </header>
  );
}
