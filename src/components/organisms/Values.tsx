import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Reveal } from "@/components/atoms/Reveal";
import { Section } from "@/components/atoms/Section";
import { ValueItem } from "@/components/molecules/ContentBits";
import type { IconName } from "@/components/atoms/Icon";

const values: { icon: IconName; label: string; note: string }[] = [
  { icon: "bulb", label: "Creativity", note: "Fresh ideas, quiet boldness" },
  { icon: "badge", label: "Quality", note: "Craft in every detail" },
  { icon: "shield", label: "Integrity", note: "Honest process & timing" },
  { icon: "heart", label: "Passion", note: "Homes made with care" },
];

export function Values() {
  return (
    <Section tone="none" className="relative overflow-hidden bg-gradient-to-b from-sand to-cream py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold/50" />
              <Heading tone="gold" className="text-[11px] uppercase tracking-[0.3em]">
                Our Values
              </Heading>
              <span className="h-px w-10 bg-gold/50" />
            </div>
            <Heading as="h2" className="text-2xl sm:text-3xl">
              What guides every space
            </Heading>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
            {values.map((v) => (
              <ValueItem
                key={v.label}
                icon={v.icon}
                label={v.label}
                note={v.note}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
