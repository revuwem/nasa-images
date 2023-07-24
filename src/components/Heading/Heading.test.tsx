import { describe, test } from "vitest";
import Heading from "@/components/Heading/Heading";
import { render } from "@testing-library/react";

type HeadingAsPropType = React.ComponentProps<typeof Heading>["as"];

const cases: HeadingAsPropType[][] = [
  ["h1"],
  ["h2"],
  ["h3"],
  ["h4"],
  ["h5"],
  ["h6"],
];

describe("Heading", () => {
  test.each(cases)("should render %s heading", (expected) => {
    const { container } = render(<Heading as={expected}>Heading</Heading>);
    const elem = container.querySelector(expected);

    expect(elem).toBeInTheDocument();
  });
});
