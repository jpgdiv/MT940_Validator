import { rest } from "msw";
import { postRecordProjectsUrl } from "../../../data/ValidatorService";
import { mockDataPostRecord } from "../../../mocks/data";

export const validatorHandlers = [
  rest.post(postRecordProjectsUrl, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockDataPostRecord));
  }),
];
