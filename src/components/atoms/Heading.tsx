import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3" | "h4";
  tone?: "charcoal" | "gold" | "cream";
};

export function Heading({
  as: Tag = "h2",
  tone = "charcoal",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        "font-serif font-medium tracking-tight",
        tone === "charcoal" && "text-charcoal",
        tone === "gold" && "text-gold",
        tone === "cream" && "text-cream",
        className,
      )}
      {...props}
    />
  );
}
