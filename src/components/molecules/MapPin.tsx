"use client";

import { useId } from "react";
import type { Location } from "@/data/locations";
import { allPreviewImages } from "@/data/locations";
import { ImageThumb } from "@/components/molecules/ContentBits";
import { cn } from "@/lib/cn";

/** Compact preview used by chips / lists (real map uses Leaflet markers). */
type MapPinProps = {
  location: Location;
  active?: boolean;
  hovered?: boolean;
  onHover: (id: Location["id"] | null) => void;
  onSelect: (id: Location["id"]) => void;
};

export function MapPin({
  location,
  active,
  hovered,
  onHover,
  onSelect,
}: MapPinProps) {
  const tipId = useId();
  const previews = allPreviewImages(location);
  const showTip = hovered || active;
  const emphasis = hovered || active;

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        aria-describedby={showTip ? tipId : undefined}
        aria-label={`${location.name}, ${location.clients.length} project${location.clients.length > 1 ? "s" : ""}`}
        className={cn(
          "group relative flex items-center gap-2 rounded-full border px-3 py-1.5 transition",
          emphasis
            ? "border-gold bg-gold/15 text-charcoal"
            : "border-charcoal/15 text-charcoal/70 hover:border-gold/50",
        )}
        onMouseEnter={() => onHover(location.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(location.id)}
        onBlur={() => onHover(null)}
        onClick={() => onSelect(location.id)}
      >
        <span className="h-2 w-2 rounded-full bg-gold" />
        <span className="font-sans text-[11px] uppercase tracking-[0.14em]">
          {location.shortLabel}
        </span>
      </button>

      {showTip ? (
        <div
          id={tipId}
          role="tooltip"
          className="pointer-events-none absolute left-1/2 top-full z-40 mt-2 w-52 -translate-x-1/2 overflow-hidden rounded-xl border border-gold/25 bg-cream/95 p-2.5 shadow-lg backdrop-blur-sm"
        >
          <p className="font-serif text-sm text-charcoal">{location.name}</p>
          <p className="mt-0.5 font-sans text-[10px] text-charcoal/55">
            {location.coords.lat.toFixed(3)}° N · {location.clients.length}{" "}
            {location.clients.length > 1 ? "clients" : "client"}
          </p>
          <div className="mt-2 grid grid-cols-3 gap-1">
            {previews.map((img) => (
              <ImageThumb
                key={img.id}
                src={img.src}
                alt={img.alt}
                width={120}
                height={120}
                className="aspect-square rounded-sm"
                sizes="80px"
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
