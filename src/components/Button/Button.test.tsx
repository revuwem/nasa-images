import { describe, it, expect, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "@/components/Button";

describe("components/Button", () => {
  it("should render", () => {
    render(<Button>Button</Button>);
    const elem = screen.getByRole("button");
    expect(elem).toBeInTheDocument();
  });

  it("should render children", () => {
    const children = "Button";
    render(<Button>{children}</Button>);

    const elem = screen.getByText(children);
    expect(elem).toBeInTheDocument();
  });

  it("should fire onClick", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Button</Button>);

    const elem = screen.getByRole("button");
    fireEvent.click(elem);

    expect(onClick).toHaveBeenCalledOnce();
  });
});
