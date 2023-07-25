import { describe, it } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { BrowserRouter } from "react-router-dom";
import { useSearch } from "@/hooks/useSearch";
import { assetsMock } from "@/hooks/useSearch/__mocks__/data";

const server = setupServer(
  rest.get("https://images-api.nasa.gov/search", (_req, res, ctx) => {
    return res(ctx.json(assetsMock));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("hooks/useSearch", () => {
  it("should return search results", async () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: BrowserRouter,
    });

    await waitFor(() =>
      expect(result.current.assets).toEqual(assetsMock.collection.items)
    );
  });

  it("should return total results", async () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: BrowserRouter,
    });

    await waitFor(() =>
      expect(result.current.totalResults).toEqual(
        assetsMock.collection.metadata.total_hits
      )
    );
  });

  it("should return isListEnd equals false", async () => {
    const { result } = renderHook(() => useSearch(), {
      wrapper: BrowserRouter,
    });

    await waitFor(() => expect(result.current.isListEnd).toEqual(false));
  });

  //   TODO: fix handler override to get correct result
  //   it("should return isListEnd equals true", async () => {
  //     server.use(
  //       rest.get("https://images-api.nasa.gov/search", (req, res, ctx) => {
  //         return res(ctx.json(assetsMockLastPage));
  //       })
  //     );

  //     const { result } = renderHook(() => useSearch(), {
  //       wrapper: BrowserRouter,
  //     });

  //     await waitFor(() => {
  //       expect(result.current.isListEnd).toEqual(false);
  //     });
  //   });
});
