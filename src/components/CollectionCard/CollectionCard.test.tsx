import { describe, it } from "vitest";
import renderer from "react-test-renderer";
import CollectionCard from "@/components/CollectionCard";

const data = {
  preview: "preview.png",
  title: "Title",
  location: "location",
  author: "author",
};

describe("CollectionCard", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<CollectionCard data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
