import { describe, it } from "vitest";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Header from "@/components/Header";

describe("CollectionCard", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
