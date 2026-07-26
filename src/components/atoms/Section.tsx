import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  tone?: "cream" | "charcoal" | "sand" | "none";
};

export function Section({
  className,
  tone = "cream",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 sm:py-20 md:py-24",
        tone === "cream" && "bg-cream",
        tone === "charcoal" && "bg-charcoal text-cream",
        tone === "sand" && "bg-sand",
        className,
      )}
      {...props}
    />
  );
}
