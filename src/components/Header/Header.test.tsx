import { describe, expect, it } from "vitest";
import { render, screen } from "../../test/utils";

import theme from "../../theme";
import Header from "./Header";

describe("Renders Header component correctly", () => {
  it("Should render the Header correctly", async () => {
    render(
      <Header>
        <div>child1link</div>
        <div>child2link</div>
      </Header>
    );

    const child1 = await screen.findByText("child1link");
    const child2 = await screen.findByText("child2link");

    expect(child1).toBeInTheDocument();
    expect(child2).toBeInTheDocument();
  });
  it("Should render the Header color correctly", async () => {
    render(<Header></Header>);

    const header = await screen.findByTestId("headerbar");

    expect(header).toBeInTheDocument();
    expect(header).toHaveStyle({ backgroundColor: theme.palette.secondary });
  });
});
