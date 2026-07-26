import React from "react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import "./mocks/next-image";

class IntersectionObserverMock {
  readonly root = null;
  readonly rootMargin = "";
  readonly thresholds: number[] = [];
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

vi.mock("next/dynamic", () => ({
  default: function mockDynamic() {
    return function DynamicMapStub() {
      return React.createElement("div", { "data-testid": "mumbai-map-canvas" });
    };
  },
}));
