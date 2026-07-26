import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Section } from "@/components/atoms/Section";
import { Text } from "@/components/atoms/Text";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        aria-hidden
      />
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="photo-arch relative aspect-[3/5] overflow-hidden bg-mist shadow-[0_28px_50px_-30px_rgba(29,29,27,0.4)]">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Soft arched hallway with warm interior light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 70vw, 28vw"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-full border border-gold/35 md:block"
                aria-hidden
              />
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <div>
                <div className="flex items-center gap-3">
                  <span className="gold-rule block" />
                  <Heading tone="gold" className="text-[11px] uppercase tracking-[0.3em]">
                    About Us
                  </Heading>
                </div>
                <Heading as="h2" className="mt-5 max-w-lg text-3xl leading-tight sm:text-4xl">
                  Beautiful, functional, timeless spaces
                </Heading>
                <Text muted className="mt-5 max-w-xl text-[15px] leading-7">
                  Dream Design Dwell is an interior design studio crafting refined
                  environments for modern living. We blend architectural clarity
                  with warm materiality — designing homes and workspaces that feel
                  intentional, calm, and enduring.
                </Text>
                <Text muted className="mt-4 max-w-xl text-[15px] leading-7">
                  From first conversation to final install, every detail is curated
                  to reflect how you live — not just how a room looks in a photograph.
                </Text>
              </div>
            </Reveal>

            {/* Stacked Vision / Mission — matches company profile */}
            <div className="grid gap-3 sm:gap-4">
              <Reveal delay={0.05}>
                <article className="relative overflow-hidden bg-charcoal p-7 text-cream sm:p-9">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full border border-gold/20"
                    aria-hidden
                  />
                  <Icon name="eye" className="h-6 w-6 text-gold" />
                  <Heading as="h3" tone="cream" className="mt-4 text-xl sm:text-2xl">
                    Our Vision
                  </Heading>
                  <Text className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
                    To be a leading interior design studio creating inspiring spaces
                    that elevate everyday living and leave a lasting imprint of craft
                    and calm.
                  </Text>
                </article>
              </Reveal>
              <Reveal delay={0.12}>
                <article className="border border-gold/20 bg-sand/80 p-7 backdrop-blur-sm sm:p-9">
                  <Icon name="target" className="h-6 w-6 text-gold" />
                  <Heading as="h3" className="mt-4 text-xl sm:text-2xl">
                    Our Mission
                  </Heading>
                  <Text muted className="mt-3 max-w-md text-sm leading-relaxed">
                    Deliver innovative, functional, and sustainable design solutions —
                    tailored with care, executed with precision, and rooted in how
                    people truly inhabit space.
                  </Text>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
