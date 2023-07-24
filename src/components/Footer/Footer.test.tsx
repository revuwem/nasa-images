import { describe, it } from "vitest";
import renderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Footer from "@/components/Footer";

describe("CollectionCard", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
