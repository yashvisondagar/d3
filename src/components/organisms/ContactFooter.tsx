import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Reveal } from "@/components/atoms/Reveal";
import { Section } from "@/components/atoms/Section";
import { ContactRow } from "@/components/molecules/ContentBits";
import { site } from "@/data/locations";

export function ContactFooter() {
  return (
    <Section id="contact" className="relative overflow-hidden pb-12 pt-6">
      <Container>
        <Reveal>
          <div className="grid overflow-hidden shadow-[0_28px_60px_-36px_rgba(29,29,27,0.45)] lg:grid-cols-[1.35fr_0.85fr]">
            <article className="relative bg-charcoal p-9 text-cream sm:p-12 md:p-14">
              <div
                className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full border border-gold/15"
                aria-hidden
              />
              <span className="gold-rule mb-6 block bg-gradient-to-r from-gold to-transparent" />
              <Heading as="h2" tone="cream" className="max-w-md text-3xl leading-snug sm:text-4xl">
                Let&apos;s create beautiful spaces together.
              </Heading>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <ContactRow icon="phone">{site.phone}</ContactRow>
                <ContactRow icon="mail">{site.email}</ContactRow>
                <ContactRow icon="instagram">{site.instagram}</ContactRow>
                <ContactRow icon="pin">{site.address}</ContactRow>
                <ContactRow icon="web">{site.website}</ContactRow>
              </div>
            </article>
            <div className="relative min-h-[240px] bg-sand">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=900&q=80"
                alt="Warm interior detail"
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sand via-sand/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-10">
                <p className="font-serif text-3xl text-charcoal">
                  D<span className="text-gold">3</span>
                </p>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.24em] text-charcoal/55">
                  {site.name}
                </p>
                <p className="mt-4 font-sans text-sm text-charcoal/70">
                  Interior design studio · Mumbai
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <p className="mt-10 text-center font-sans text-[11px] tracking-wide text-charcoal/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </Section>
  );
}
