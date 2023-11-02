import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "../../../../test/utils";
import RecordUploadButton from "./RecordUploadButton";

describe("Renders RecordUploadButton correctly", () => {
  it("Upload a file through hidden input", async () => {
    const fn = vi.fn();
    const file = new File(["data,data,data"], "record.csv", {
      type: "text/csv",
    });
    render(
      <RecordUploadButton handleFile={fn}>recordbutton</RecordUploadButton>,
    );
    const fileinput = await screen.findByTestId("visuallyhiddeninput");
    const button = await screen.findByText("recordbutton");

    fireEvent.change(fileinput, {
      target: { files: [file] },
    });

    expect(fn).toBeCalledWith(file);
    expect(button).toBeInTheDocument();
  });
});
