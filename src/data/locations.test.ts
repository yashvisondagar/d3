import { describe, expect, it } from "vitest";
import {
  allGalleryImages,
  getLocation,
  locations,
} from "@/data/locations";

describe("locations data", () => {
  it("includes all Mumbai neighbourhoods", () => {
    const ids = locations.map((l) => l.id).sort();
    expect(ids).toEqual(
      [
        "andheri",
        "bandra",
        "khar",
        "lower-parel",
        "malad",
        "parel",
        "prabhadevi",
      ].sort(),
    );
  });

  it("gives Andheri and Khar two clients each", () => {
    expect(getLocation("andheri")?.clients).toHaveLength(2);
    expect(getLocation("khar")?.clients).toHaveLength(2);
  });

  it("uses real local photos for every neighbourhood", () => {
    expect(allGalleryImages(getLocation("andheri")!).length).toBe(29 + 43);
    expect(getLocation("andheri")!.clients[0].images[0].src).toMatch(
      /^\/projects\/andheri\//,
    );
    expect(getLocation("andheri")!.clients[1].images[0].src).toMatch(
      /^\/projects\/andheri1\//,
    );

    expect(allGalleryImages(getLocation("khar")!).length).toBe(13 + 10);
    expect(getLocation("khar")!.clients[0].images[0].src).toMatch(
      /^\/projects\/khar\//,
    );
    expect(getLocation("khar")!.clients[1].images[0].src).toMatch(
      /^\/projects\/khar1\//,
    );

    expect(allGalleryImages(getLocation("malad")!).length).toBe(9);
    expect(allGalleryImages(getLocation("parel")!).length).toBe(29);
    expect(allGalleryImages(getLocation("bandra")!).length).toBe(126);
    expect(allGalleryImages(getLocation("prabhadevi")!).length).toBe(16);
    expect(allGalleryImages(getLocation("lower-parel")!).length).toBe(35);

    for (const loc of locations) {
      expect(loc.clients[0].images[0].src.startsWith("/projects/")).toBe(true);
    }
  });

  it("orders neighbourhoods north-to-south by latitude", () => {
    const byLat = [...locations].sort((a, b) => b.coords.lat - a.coords.lat);
    expect(byLat.map((l) => l.id)).toEqual([
      "malad",
      "andheri",
      "khar",
      "bandra",
      "prabhadevi",
      "parel",
      "lower-parel",
    ]);
  });

  it("stores real Mumbai longitude range (~72.8E)", () => {
    for (const loc of locations) {
      expect(loc.coords.lng).toBeGreaterThan(72.8);
      expect(loc.coords.lng).toBeLessThan(72.9);
      expect(loc.coords.lat).toBeGreaterThan(18.95);
      expect(loc.coords.lat).toBeLessThan(19.25);
    }
  });
});
