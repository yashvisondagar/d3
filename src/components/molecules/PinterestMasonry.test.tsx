import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PinterestMasonry } from "@/components/molecules/PinterestMasonry";

describe("PinterestMasonry", () => {
  it("shows empty state when no images", () => {
    render(<PinterestMasonry images={[]} />);
    expect(screen.getByText(/no images yet/i)).toBeInTheDocument();
  });

  it("renders masonry images", () => {
    render(
      <PinterestMasonry
        images={[
          {
            id: "1",
            src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
            alt: "Living room",
            width: 400,
            height: 500,
          },
        ]}
      />,
    );
    expect(screen.getByTestId("pinterest-masonry")).toBeInTheDocument();
    expect(screen.getByAltText("Living room")).toBeInTheDocument();
  });
});
