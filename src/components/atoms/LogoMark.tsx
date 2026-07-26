import { cn } from "@/lib/cn";

type LogoMarkProps = {
  className?: string;
  size?: "sm" | "lg";
};

export function LogoMark({ className, size = "lg" }: LogoMarkProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-full border border-gold/70 font-serif text-charcoal",
        size === "lg" ? "h-20 w-20 text-3xl sm:h-24 sm:w-24 sm:text-4xl" : "h-12 w-12 text-xl",
        className,
      )}
      aria-label="D3"
    >
      <span>
        D<span className="text-gold">3</span>
      </span>
    </div>
  );
}
