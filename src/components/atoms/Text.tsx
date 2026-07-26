import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TextProps = HTMLAttributes<HTMLParagraphElement> & {
  as?: "p" | "span" | "div";
  muted?: boolean;
};

export function Text({
  as: Tag = "p",
  muted = false,
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        "font-sans text-base leading-relaxed text-charcoal",
        muted && "text-charcoal/70",
        className,
      )}
      {...props}
    />
  );
}
