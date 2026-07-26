/**
 * Real WGS84 coordinates for Mumbai neighbourhoods (OpenStreetMap / Leaflet).
 * Project photos live under /public/projects/{location}/
 */
import {
  ANDHERI_FILES,
  ANDHERI1_FILES,
  BANDRA_FILES,
  KHAR_FILES,
  KHAR1_FILES,
  LOWER_PAREL_FILES,
  MALAD_FILES,
  PAREL_FILES,
  PRABHADEVI_FILES,
} from "@/data/projectFiles";

export type ProjectImage = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ClientProject = {
  id: string;
  name: string;
  images: ProjectImage[];
};

export type LocationId =
  | "andheri"
  | "khar"
  | "malad"
  | "parel"
  | "prabhadevi"
  | "lower-parel"
  | "bandra";

export type Location = {
  id: LocationId;
  name: string;
  shortLabel: string;
  description: string;
  /** Real latitude / longitude for the interactive OSM map */
  coords: { lat: number; lng: number };
  clients: ClientProject[];
};

const aspects: Array<[number, number]> = [
  [1200, 1500],
  [1400, 1050],
  [1100, 1400],
  [1600, 1200],
  [1200, 1200],
];

/** Local files from public/projects/{folder}/ */
function localGallery(
  folder: string,
  files: readonly string[],
  altPrefix: string,
): ProjectImage[] {
  return files.map((file, i) => {
    const [w, h] = aspects[i % aspects.length];
    return {
      id: `${folder}-${file}`,
      src: `/projects/${folder}/${encodeURIComponent(file)}`,
      alt: `${altPrefix} — ${file.replace(/\.[^.]+$/, "")}`,
      width: w,
      height: h,
    };
  });
}

export const locations: Location[] = [
  {
    id: "malad",
    name: "Malad",
    shortLabel: "Malad",
    description: "Family homes balanced for calm and everyday function.",
    coords: { lat: 19.1864, lng: 72.8485 },
    //east west cordinates 19.1864, 72.8485
    clients: [
      {
        id: "malad-client-1",
        name: "Malad Family Home",
        images: localGallery("malad", MALAD_FILES, "Malad Family Home"),
      },
    ],
  },
  {
    id: "andheri",
    name: "Andheri",
    shortLabel: "Andheri",
    description: "Warm contemporary residences across West Andheri.",
    coords: { lat: 19.1364, lng: 72.8277 },
    clients: [
      {
        id: "andheri-client-1",
        name: "Andheri Residence I",
        images: localGallery("andheri", ANDHERI_FILES, "Andheri Residence I"),
      },
      {
        id: "andheri-client-2",
        name: "Andheri Residence II",
        images: localGallery("andheri1", ANDHERI1_FILES, "Andheri Residence II"),
      },
    ],
  },
  {
    id: "khar",
    name: "Khar",
    shortLabel: "Khar",
    description: "Light-filled apartments with tailored material stories.",
    coords: { lat: 19.0728, lng: 72.8340 },
    clients: [
      {
        id: "khar-client-1",
        name: "Khar Apartment I",
        images: localGallery("khar", KHAR_FILES, "Khar Apartment I"),
      },
      {
        id: "khar-client-2",
        name: "Khar Apartment II",
        images: localGallery("khar1", KHAR1_FILES, "Khar Apartment II"),
      },
    ],
  },
  {
    id: "bandra",
    name: "Bandra",
    shortLabel: "Bandra",
    description: "Coastal character with layered textures and craft.",
    coords: { lat: 19.0596, lng: 72.8295 },
    clients: [
      {
        id: "bandra-client-1",
        name: "Bandra Villa",
        images: localGallery("bandra", BANDRA_FILES, "Bandra Villa"),
      },
    ],
  },
  {
    id: "prabhadevi",
    name: "Prabhadevi",
    shortLabel: "Prabhadevi",
    description: "Sea-facing calm with sculptural lighting and soft arches.",
    coords: { lat: 19.0148, lng: 72.8282 },
    clients: [
      {
        id: "prabhadevi-client-1",
        name: "Prabhadevi Suite",
        images: localGallery("prabhadevi", PRABHADEVI_FILES, "Prabhadevi Suite"),
      },
    ],
  },
  {
    id: "lower-parel",
    name: "Lower Parel",
    shortLabel: "Lower Parel",
    description: "Statement dining and lounge spaces for city living.",
    coords: { lat: 18.9955, lng: 72.8308 },
    clients: [
      {
        id: "lower-parel-client-1",
        name: "Lower Parel Penthouse",
        images: localGallery(
          "lower-parel",
          LOWER_PAREL_FILES,
          "Lower Parel Penthouse",
        ),
      },
    ],
  },
  {
    id: "parel",
    name: "Parel",
    shortLabel: "Parel",
    description: "Urban loft energy with refined, quiet detailing.",
    coords: { lat: 19.0033, lng: 72.8416 },
    clients: [
      {
        id: "parel-client-1",
        name: "Parel Loft",
        images: localGallery("parel", PAREL_FILES, "Parel Loft"),
      },
    ],
  },
];

/** Map view defaults — fits western suburbs → island city */
export const mumbaiMapView = {
  center: { lat: 19.08, lng: 72.86 } as const,
  zoom: 11,
};

export function getLocation(id: LocationId) {
  return locations.find((l) => l.id === id);
}

export function allPreviewImages(location: Location): ProjectImage[] {
  return location.clients.flatMap((c) => c.images).slice(0, 3);
}

export function allGalleryImages(location: Location): ProjectImage[] {
  return location.clients.flatMap((c) => c.images);
}

export const site = {
  name: "Dream Design Dwell",
  shortName: "D3",
  tagline: "Designing spaces, defining lifestyles",
  subtitle: "Interior Design Studio",
  phone: "9323753084",
  email: "hello@dreamdesigndwell.com",
  instagram: "d3 interior design studio",
  address: "Borivali, Mumbai",
  website: "www.dreamdesigndwell.com",
  /** Replace via NEXT_PUBLIC_CALENDLY_URL in .env.local */
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/dreamdesigndwell/consultation",
};
