import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { MumbaiMap } from "@/components/organisms/MumbaiMap";

describe("MumbaiMap", () => {
  it("renders the map shell and all location chips", () => {
    render(<MumbaiMap />);
    expect(screen.getByTestId("mumbai-map")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^andheri · 2$/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^bandra$/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^lower parel$/i }),
    ).toBeInTheDocument();
  });

  it("opens masonry gallery modal when a location is selected", async () => {
    const user = userEvent.setup();
    render(<MumbaiMap />);

    const kharChips = screen.getAllByRole("button", { name: /^khar · 2$/i });
    await user.click(kharChips[0]);

    expect(
      await screen.findByRole("dialog", { name: /khar projects/i }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/khar apartment/i).length,
    ).toBeGreaterThanOrEqual(2);
    expect(screen.getAllByTestId("pinterest-masonry").length).toBeGreaterThan(0);
  });
});
