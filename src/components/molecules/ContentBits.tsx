import type { ReactNode } from "react";
import Image from "next/image";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import { cn } from "@/lib/cn";

type ServiceItemProps = {
  icon: IconName;
  label: string;
  className?: string;
};

export function ServiceItem({ icon, label, className }: ServiceItemProps) {
  return (
    <li className={cn("flex items-center gap-3", className)}>
      <span className="flex h-9 w-9 items-center justify-center text-gold">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <Text className="text-sm sm:text-base">{label}</Text>
    </li>
  );
}

type ProcessStepProps = {
  step: string;
  title: string;
  description: string;
};

export function ProcessStep({ step, title, description }: ProcessStepProps) {
  return (
    <li className="relative flex gap-4 pb-8 last:pb-0">
      <div className="flex flex-col items-center">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold font-serif text-sm text-gold">
          {step}
        </span>
        <span className="mt-2 w-px flex-1 bg-gold/30" aria-hidden />
      </div>
      <div className="pt-1.5">
        <h3 className="font-serif text-lg text-charcoal">{title}</h3>
        <Text muted className="mt-1 text-sm">
          {description}
        </Text>
      </div>
    </li>
  );
}

type ValueItemProps = {
  icon: IconName;
  label: string;
  note?: string;
};

export function ValueItem({ icon, label, note }: ValueItemProps) {
  return (
    <div className="group flex flex-col items-center gap-3 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/45 text-gold transition duration-300 group-hover:border-gold group-hover:bg-gold/10">
        <Icon name={icon} className="h-7 w-7" />
      </span>
      <span className="font-serif text-base tracking-wide text-charcoal">{label}</span>
      {note ? (
        <span className="max-w-[9rem] font-sans text-[11px] leading-snug text-charcoal/50">
          {note}
        </span>
      ) : null}
    </div>
  );
}

type ContactRowProps = {
  icon: IconName;
  children: ReactNode;
};

export function ContactRow({ icon, children }: ContactRowProps) {
  return (
    <div className="flex items-start gap-3 text-sm text-cream/90">
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
      <span>{children}</span>
    </div>
  );
}

type ImageThumbProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
};

export function ImageThumb({
  src,
  alt,
  width,
  height,
  className,
  sizes = "120px",
}: ImageThumbProps) {
  return (
    <div className={cn("relative overflow-hidden bg-sand", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-full w-full object-cover"
        sizes={sizes}
      />
    </div>
  );
}
