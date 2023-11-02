import { beforeEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen, userEvent } from "../../../test/utils";
import ValidationForm from "./ValidationForm";

describe("Renders ValidationForm page correctly", () => {
  let file: File;
  beforeEach(() => {
    file = new File(["data,data,data"], "record.csv", {
      type: "text/csv",
    });
  });

  it("Page has rendered components", async () => {
    render(
      <ValidationForm isLoading={false} error={null} handleSubmit={() => {}} />,
    );

    const button1 = await screen.findByText("Upload Record");
    const button2 = await screen.findByText("Validate Record");

    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
  it("Upload a file", async () => {
    const fn = vi.fn();
    render(<ValidationForm isLoading={false} error={null} handleSubmit={fn} />);

    const fileinput = await screen.findByTestId("visuallyhiddeninput");

    fireEvent.change(fileinput, {
      target: { files: [file] },
    });

    const csvLink = await screen.findByText("record.csv");
    expect(csvLink).toBeInTheDocument();
  });
  it("submit a file", async () => {
    const fn = vi.fn();
    render(<ValidationForm isLoading={false} error={null} handleSubmit={fn} />);

    const fileinput = await screen.findByTestId("visuallyhiddeninput");
    const button2 = await screen.findByText("Validate Record");

    fireEvent.change(fileinput, {
      target: { files: [file] },
    });

    await userEvent.click(button2);

    expect(fn).toBeCalledWith([file]);
  });
});
