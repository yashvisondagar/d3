import Image from "next/image";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Reveal } from "@/components/atoms/Reveal";
import { Section } from "@/components/atoms/Section";
import {
  ProcessStep,
  ServiceItem,
} from "@/components/molecules/ContentBits";
import type { IconName } from "@/components/atoms/Icon";

const services: { icon: IconName; label: string }[] = [
  { icon: "home", label: "Residential Interiors" },
  { icon: "building", label: "Commercial Interiors" },
  { icon: "plan", label: "Space Planning" },
  { icon: "cube", label: "3D Visualization" },
  { icon: "chair", label: "Furniture & Styling" },
];

const steps = [
  {
    step: "01",
    title: "Discover",
    description: "Understanding needs, lifestyle, and spatial constraints.",
  },
  {
    step: "02",
    title: "Design",
    description: "Concept development and mood curation.",
  },
  {
    step: "03",
    title: "Develop",
    description: "3D visualization and material selection.",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Execution with precision and care.",
  },
];

const SIDE_IMAGE =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85";

export function ServicesProcess() {
  return (
    <Section id="services" tone="none" className="relative overflow-hidden bg-gradient-to-b from-sand via-cream to-sand">
      <Container>
        <Reveal>
          <div className="grid gap-14 lg:grid-cols-[0.95fr_0.9fr_1.05fr] lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="gold-rule block" />
                <Heading tone="gold" className="text-[11px] uppercase tracking-[0.3em]">
                  Our Services
                </Heading>
              </div>
              <ul className="mt-9 divide-y divide-gold/20">
                {services.map((s) => (
                  <ServiceItem
                    key={s.label}
                    icon={s.icon}
                    label={s.label}
                    className="py-3.5 first:pt-0 last:pb-0"
                  />
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="gold-rule block" />
                <Heading tone="gold" className="text-[11px] uppercase tracking-[0.3em]">
                  Our Design Process
                </Heading>
              </div>
              <ol className="mt-9">
                {steps.map((step) => (
                  <ProcessStep key={step.step} {...step} />
                ))}
              </ol>
            </div>

            <div className="relative min-h-[300px] overflow-hidden shadow-[0_24px_50px_-28px_rgba(29,29,27,0.45)] lg:min-h-full lg:rounded-tl-[4rem]">
              <Image
                src={SIDE_IMAGE}
                alt="Modern dining area with wooden table and curved chairs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-5 font-serif text-sm text-cream/90">
                Material. Light. Proportion.
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
