import { describe, expect, it } from "vitest";
import { collectImages } from "@/lib/helpers";

describe("helpers/collectImages", () => {
  it("should return one *~large.jpg image", () => {
    const dataset = [
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~orig.tif",
      },
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~large.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~medium.jpg",
      },
    ];

    const expectedResult = [
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~large.jpg",
      },
    ];

    const res = collectImages(dataset);
    expect(res).toStrictEqual(expectedResult);
  });

  it("should return one *~medium.jpg image", () => {
    const dataset = [
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~orig.tif",
      },

      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~medium.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~small.jpg",
      },
    ];

    const expectedResult = [
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~medium.jpg",
      },
    ];

    const res = collectImages(dataset);
    expect(res).toStrictEqual(expectedResult);
  });

  it("should return 2 *~large*.jpg images", () => {
    const dataset = [
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~orig.tif",
      },
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~large-1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~large-2.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~medium-1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~medium-2.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~small.jpg",
      },
    ];

    const expectedResult = [
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~large-1.jpg",
      },
      {
        href: "http://images-assets.nasa.gov/image/201109270010HQ/201109270010HQ~large-2.jpg",
      },
    ];

    const res = collectImages(dataset);
    expect(res).toStrictEqual(expectedResult);
  });

  it("should return empty array", () => {
    const dataset = [
      {
        href: "http://images-assets.nasa.gov/image/201106070070HQ/201106070070HQ~orig.tif",
      },
    ];

    const expectedResult = [] as AssetImage[];

    const res = collectImages(dataset);
    expect(res).toStrictEqual(expectedResult);
  });
});
