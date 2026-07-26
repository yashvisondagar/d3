import { cn } from "@/lib/cn";

const paths = {
  eye: "M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 11a4 4 0 110-8 4 4 0 010 8z",
  target:
    "M12 2a10 10 0 100 20 10 10 0 000-20zm0 3a7 7 0 110 14 7 7 0 010-14zm0 3a4 4 0 100 8 4 4 0 000-8zm0 2.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z",
  home: "M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z",
  building:
    "M4 21V5a1 1 0 011-1h8a1 1 0 011 1v16M4 21h16M14 21V9h5a1 1 0 011 1v11M8 8h2M8 12h2M8 16h2",
  plan: "M4 4h16v16H4V4zm4 4h8M8 12h8M8 16h5",
  cube: "M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.2L5 8v8l7 3.8L19 16V8l-7-3.8z",
  chair: "M6 10h12v3H6v-3zm-1 3h14v2H5v-2zm2 2v4m10-4v4M7 21h10",
  key: "M14 8a4 4 0 11-3.87 3H3v2h2v2h2v-2h3.13A4 4 0 0114 8zm0 2a2 2 0 100 4 2 2 0 000-4z",
  bulb: "M9 18h6m-5 3h4M8 10a4 4 0 118 0c0 2-1.5 3-2.5 4H10.5C9.5 13 8 12 8 10z",
  badge: "M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2z",
  shield: "M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z",
  heart:
    "M12 21s-7-4.4-9.5-8.2C.5 9.5 2.2 5.8 5.8 5.2 8 4.8 10 6 12 8c2-2 4-3.2 6.2-2.8 3.6.6 5.3 4.3 3.3 7.6C19 16.6 12 21 12 21z",
  phone:
    "M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.3.56 3.5.56a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.4.56 3.5a1 1 0 01-.25 1l-2.2 2.3z",
  mail: "M4 6h16v12H4V6zm0 0l8 7 8-7",
  pin: "M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11zm0-8a3 3 0 110-6 3 3 0 010 6z",
  instagram:
    "M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zm5 4.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zM17.8 6.2h.01",
  web: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 0c2.5 0 4.5 4.5 4.5 10S14.5 22 12 22 7.5 17.5 7.5 12 9.5 2 12 2zm-9 9h18M3 13h18",
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  className?: string;
  title?: string;
};

export function Icon({ name, className, title }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={paths[name]} />
    </svg>
  );
}
