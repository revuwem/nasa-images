import { describe, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useCollection } from "@/hooks/useCollection";

const collectionData = { href: "test" } as Asset;
const collectionDataResponse = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/search?nasa_id=test",
    items: [collectionData],
    metadata: {
      total_hits: 1,
    },
  },
};

const collectionAssets = [{ href: "test~large.jpg" }];
const collectionAssetsResponse = {
  collection: {
    version: "1.0",
    href: "http://images-api.nasa.gov/asset/test",
    items: [...collectionAssets],
  },
};

const handlers = [
  rest.get(
    "https://images-api.nasa.gov/search?nasa_id=test",
    (_req, res, ctx) => res(ctx.json(collectionDataResponse))
  ),
  rest.get("https://images-api.nasa.gov/asset/test", (_req, res, ctx) =>
    res(ctx.json(collectionAssetsResponse))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
beforeEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useCollection", () => {
  it("should return collection data", async () => {
    const id = "test";
    const { result } = renderHook(() => useCollection(id));

    await waitFor(() => expect(result.current.data).toEqual(collectionData));
  });

  it("should return collection assets", async () => {
    const id = "test";
    const { result } = renderHook(() => useCollection(id));

    await waitFor(() =>
      expect(result.current.collection).toEqual(collectionAssets)
    );
  });
});
