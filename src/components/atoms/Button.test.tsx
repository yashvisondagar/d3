import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "@/components/atoms/Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Explore</Button>);
    expect(screen.getByRole("button", { name: "Explore" })).toBeInTheDocument();
  });

  it("supports outline variant", () => {
    render(
      <Button variant="outline" data-testid="btn">
        Contact
      </Button>,
    );
    expect(screen.getByTestId("btn").className).toContain("border-gold");
  });
});
