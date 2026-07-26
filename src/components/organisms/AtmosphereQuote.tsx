import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Reveal } from "@/components/atoms/Reveal";

/** Atmospheric quote band between story and services */
export function AtmosphereQuote() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      >
        <Image
          src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=70"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/75" />
      </div>
      <Container className="relative z-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto mb-6 block h-px w-16 bg-gold/70" />
            <Heading
              as="h2"
              tone="cream"
              className="font-serif text-2xl font-normal italic leading-snug sm:text-3xl md:text-[2.15rem]"
            >
              “Design is the quiet language of how a home holds you.”
            </Heading>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.28em] text-gold-soft">
              Dream Design Dwell
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
