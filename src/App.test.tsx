import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "./test/utils";

describe("Renders App page correctly", () => {
  it("Should render the page title correctly", async () => {
    render(<App />);

    const title = await screen.findByText("Record Validator");

    expect(title).toBeInTheDocument();
  });
});
