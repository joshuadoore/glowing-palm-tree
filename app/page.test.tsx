import { render, screen } from "@testing-library/react";
import Page from "./page";

jest.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: () => "5",
  }),
}));

describe("app", () => {
  describe("page", () => {
    it("should render the page", () => {
      render(<Page />);
    });
    it("should render the page with the initial value", () => {
      render(<Page />);
      const input = screen.getByPlaceholderText("Number to square");
      expect((input as HTMLInputElement).value).toBe("5");
    });
  });
});