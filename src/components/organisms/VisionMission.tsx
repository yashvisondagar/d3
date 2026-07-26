import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Section } from "@/components/atoms/Section";
import { Text } from "@/components/atoms/Text";

export function VisionMission() {
  return (
    <Section className="pt-0">
      <Container>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <article className="flex h-full flex-col gap-4 bg-charcoal p-8 text-cream sm:p-10">
              <Icon name="eye" className="h-7 w-7 text-gold" />
              <Heading as="h3" tone="cream" className="text-2xl">
                Our Vision
              </Heading>
              <Text className="text-cream/80">
                To be a leading interior design studio creating inspiring spaces
                that elevate everyday living and leave a lasting imprint of
                craft and calm.
              </Text>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col gap-4 bg-sand p-8 sm:p-10">
              <Icon name="target" className="h-7 w-7 text-gold" />
              <Heading as="h3" className="text-2xl">
                Our Mission
              </Heading>
              <Text muted>
                Deliver innovative, functional, and sustainable design solutions
                — tailored with care, executed with precision, and rooted in
                how people truly inhabit space.
              </Text>
            </article>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
