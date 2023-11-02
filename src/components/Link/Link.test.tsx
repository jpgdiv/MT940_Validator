import { describe, expect, it } from "vitest";
import { render, screen } from "../../test/utils";

import Link from "./Link";

describe("Renders Link component correctly", () => {
  it("Should render the Link correctly", async () => {
    render(<Link>linktekst</Link>);

    const foundLink = await screen.findByText("linktekst");

    expect(foundLink).toBeInTheDocument();
  });
});
