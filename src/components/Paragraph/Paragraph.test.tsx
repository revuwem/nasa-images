import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Paragraph from "@/components/Paragraph";

describe("Paragraph", () => {
  it("should render", () => {
    const children = "Para";
    render(<Paragraph>{children}</Paragraph>);
    const elem = screen.getByText(children);

    expect(elem).toBeInTheDocument();
  });
});
