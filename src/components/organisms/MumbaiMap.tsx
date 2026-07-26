"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Reveal } from "@/components/atoms/Reveal";
import { Section } from "@/components/atoms/Section";
import { Text } from "@/components/atoms/Text";
import { Modal } from "@/components/molecules/Modal";
import { PinterestMasonry } from "@/components/molecules/PinterestMasonry";
import {
  allGalleryImages,
  allPreviewImages,
  getLocation,
  locations,
  type LocationId,
} from "@/data/locations";
import { cn } from "@/lib/cn";

const RealMumbaiMap = dynamic(
  () => import("@/components/organisms/RealMumbaiMap"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-sand/80 font-sans text-xs uppercase tracking-[0.2em] text-charcoal/45">
        Loading Mumbai map…
      </div>
    ),
  },
);

export function MumbaiMap() {
  const [hovered, setHovered] = useState<LocationId | null>(null);
  const [selected, setSelected] = useState<LocationId | null>(null);

  const active = selected ? getLocation(selected) : null;
  const focus = hovered
    ? getLocation(hovered)
    : selected
      ? getLocation(selected)
      : null;
  const gallery = useMemo(
    () => (active ? allGalleryImages(active) : []),
    [active],
  );
  const focusPreviews = focus ? allPreviewImages(focus) : [];

  return (
    <Section id="projects" tone="none" className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_0%,_rgba(180,140,72,0.1),_transparent_50%),radial-gradient(ellipse_at_90%_80%,_rgba(243,235,224,0.9),_transparent_45%)]"
        aria-hidden
      />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold/50" />
              <Heading tone="gold" className="text-[11px] uppercase tracking-[0.3em]">
                Across Mumbai
              </Heading>
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <Heading as="h2" className="text-3xl sm:text-4xl">
              Sites on the map
            </Heading>
            <Text muted className="mt-4 text-[15px] leading-7">
              Real OpenStreetMap of Mumbai — pins sit on true neighbourhood
              coordinates. Hover or tap a marker, then open the Pinterest gallery.
            </Text>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.4fr_0.7fr] lg:gap-10">
            <div className="relative">
              <div
                className="map-panel relative h-[min(72vw,420px)] overflow-hidden rounded-[1.5rem] border border-gold/35 sm:h-[480px] sm:rounded-[2rem]"
                data-testid="mumbai-map"
              >
                <RealMumbaiMap
                  hovered={hovered}
                  selected={selected}
                  onHover={setHovered}
                  onSelect={setSelected}
                />
              </div>
            </div>

            <aside className="flex flex-col justify-between border border-gold/25 bg-gradient-to-b from-sand/90 to-cream p-6 sm:p-8">
              {focus ? (
                <>
                  <div>
                    <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-gold">
                      Selected neighbourhood
                    </p>
                    <h3 className="mt-2 font-serif text-2xl text-charcoal sm:text-3xl">
                      {focus.name}
                    </h3>
                    <Text muted className="mt-3 text-sm leading-relaxed">
                      {focus.description}
                    </Text>
                    <p className="mt-3 font-mono text-[11px] text-charcoal/45">
                      {focus.coords.lat.toFixed(4)}° N, {focus.coords.lng.toFixed(4)}°
                      E
                    </p>
                    <p className="mt-2 font-sans text-xs text-charcoal/55">
                      {focus.clients.length} client
                      {focus.clients.length > 1 ? "s" : ""} ·{" "}
                      {focus.clients.reduce((n, c) => n + c.images.length, 0)}{" "}
                      images
                    </p>
                  </div>
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {focusPreviews.map((img) => (
                      <div
                        key={img.id}
                        className="relative aspect-[3/4] overflow-hidden bg-mist"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover"
                          sizes="120px"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelected(focus.id)}
                    className="mt-6 w-full bg-charcoal py-3 font-sans text-[11px] uppercase tracking-[0.2em] text-cream transition hover:bg-ink"
                  >
                    Open {focus.name} gallery
                  </button>
                </>
              ) : (
                <div className="flex h-full flex-col justify-center py-8 text-center lg:text-left">
                  <p className="font-serif text-xl italic text-charcoal/70">
                    Pan the real city — from Malad to Colaba.
                  </p>
                  <Text muted className="mt-4 text-sm leading-relaxed">
                    This is a live street map of Mumbai. Gold pins mark exact
                    project neighbourhoods — zoom, hover, and explore.
                  </Text>
                </div>
              )}
            </aside>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ul
            className="mt-8 flex flex-wrap justify-center gap-2"
            aria-label="Project locations"
          >
            {locations.map((loc) => (
              <li key={loc.id}>
                <button
                  type="button"
                  onClick={() => setSelected(loc.id)}
                  onMouseEnter={() => setHovered(loc.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={cn(
                    "border px-3.5 py-2 font-sans text-[11px] uppercase tracking-[0.16em] transition",
                    selected === loc.id || hovered === loc.id
                      ? "border-gold bg-gold/15 text-charcoal shadow-sm"
                      : "border-charcoal/12 bg-cream/70 text-charcoal/65 hover:border-gold/50 hover:bg-sand",
                  )}
                >
                  {loc.shortLabel}
                  {loc.clients.length > 1 ? ` · ${loc.clients.length}` : ""}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>

      <Modal
        open={Boolean(active)}
        onClose={() => setSelected(null)}
        title={active ? `${active.name} projects` : "Projects"}
      >
        {active ? (
          <div className="space-y-10">
            <Text muted className="text-sm leading-relaxed">
              {active.description}
            </Text>
            {active.clients.map((client) => (
              <div key={client.id}>
                <div className="mb-5 flex items-center gap-3">
                  <span className="gold-rule block" />
                  <h3 className="font-serif text-lg text-charcoal sm:text-xl">
                    {client.name}
                  </h3>
                </div>
                <PinterestMasonry images={client.images} />
              </div>
            ))}
            {active.clients.length === 0 ? (
              <PinterestMasonry images={gallery} />
            ) : null}
          </div>
        ) : null}
      </Modal>
    </Section>
  );
}
