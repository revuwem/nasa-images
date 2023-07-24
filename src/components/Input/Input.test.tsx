import { describe, it, vi, expect } from "vitest";
import Input from "@/components/Input";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input", () => {
  it("should render", () => {
    const value = "value";
    render(<Input value={value} />);
    const elem = screen.getByDisplayValue(value);

    expect(elem).toBeInTheDocument();
  });

  it("should fire onChange", () => {
    const value = "value";
    const onChange = vi.fn();
    render(<Input value={value} onChange={onChange} />);

    const elem = screen.getByDisplayValue(value);
    fireEvent.change(elem, { target: { value: "test" } });

    expect(onChange).toHaveBeenCalledOnce();
  });
});
