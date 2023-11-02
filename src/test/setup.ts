import "@testing-library/jest-dom";
import { afterAll, afterEach, beforeAll } from "vitest";
import "whatwg-fetch";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
