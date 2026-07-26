import { cn } from "@/lib/cn";

type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export function Divider({
  className,
  orientation = "horizontal",
}: DividerProps) {
  return (
    <span
      aria-hidden
      className={cn(
        "bg-gold/60",
        orientation === "horizontal" ? "h-px w-12" : "h-12 w-px",
        className,
      )}
    />
  );
}
