"use client";

import {
  useCallback,
  useEffect,
  useState,
  type ButtonHTMLAttributes,
  type MouseEvent,
} from "react";
import { cn } from "@/lib/cn";
import { loadCalendly, openCalendlyPopup } from "@/lib/calendly";
import { site } from "@/data/locations";

type CalendlyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  url?: string;
};

export function CalendlyButton({
  url = site.calendlyUrl,
  className,
  children = "Schedule a call",
  onClick,
  disabled,
  ...props
}: CalendlyButtonProps) {
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    void loadCalendly().catch(() => undefined);
  }, []);

  const handleClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      setBusy(true);
      try {
        await openCalendlyPopup(url);
      } catch {
        window.open(url, "_blank", "noopener,noreferrer");
      } finally {
        setBusy(false);
      }
    },
    [onClick, url],
  );

  return (
    <button
      type="button"
      className={cn(className)}
      onClick={handleClick}
      disabled={disabled || busy}
      aria-haspopup="dialog"
      {...props}
    >
      {children}
    </button>
  );
}
