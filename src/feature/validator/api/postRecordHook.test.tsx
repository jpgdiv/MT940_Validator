import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { mockDataPostRecord } from "../../../mocks/data";
import { usePostRecord } from "./postRecordhook";

describe("usePostRecord should return data correclty", () => {
  it("Should return data", async () => {
    const file = new File(["data,data,data"], "record.csv", {
      type: "text/csv",
    });
    const { result } = renderHook(() => usePostRecord());
    const { postReqest } = result.current;
    postReqest(file);

    await waitFor(() => {
      expect(result.current.data).toEqual(mockDataPostRecord);
    });
  });
});
