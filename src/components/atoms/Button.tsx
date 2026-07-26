import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-sans tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        variant === "primary" && "bg-charcoal text-cream hover:bg-charcoal/90",
        variant === "ghost" && "bg-transparent text-charcoal hover:text-gold",
        variant === "outline" &&
          "border border-gold/70 bg-transparent text-charcoal hover:bg-gold/10",
        size === "sm" && "px-3 py-1.5 text-xs",
        size === "md" && "px-5 py-2.5 text-sm",
        size === "lg" && "px-7 py-3 text-sm uppercase tracking-[0.18em]",
        className,
      )}
      {...props}
    />
  );
}
