import { describe, it } from "vitest";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Layout from "@/components/Layout";

describe("CollectionCard", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
