import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "../Button";
import "@testing-library/jest-dom";

describe("Button Component Coverage", () => {
  it("renders with children text", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  describe("Variants and Sizes (Branch Coverage)", () => {
    it("applies variant classes correctly", () => {
      const { rerender } = render(
        <Button variant="professional">Professional</Button>,
      );
      expect(screen.getByRole("button")).toHaveClass("bg-zinc-900");

      rerender(<Button variant="advance">Advance</Button>);
      expect(screen.getByRole("button")).toHaveClass("from-emerald-600");

      rerender(<Button variant="outline">Outline</Button>);
      expect(screen.getByRole("button")).toHaveClass("border-zinc-200");

      rerender(<Button variant="ghost">Ghost</Button>);
      expect(screen.getByRole("button")).toHaveClass("text-zinc-600");
    });

    it("falls back to default professional variant if none provided", () => {
      // @ts-expect-error - Testing runtime fallback for invalid variant
      render(<Button variant="invalid-variant">Fallback</Button>);
      expect(screen.getByRole("button")).toHaveClass("bg-zinc-900");
    });

    it("applies size classes correctly", () => {
      const { rerender } = render(<Button size="sm">Small</Button>);
      expect(screen.getByRole("button")).toHaveClass("h-9");

      rerender(<Button size="md">Medium</Button>);
      expect(screen.getByRole("button")).toHaveClass("h-11");

      rerender(<Button size="lg">Large</Button>);
      expect(screen.getByRole("button")).toHaveClass("h-13");

      rerender(<Button size="xl">Extra Large</Button>);
      expect(screen.getByRole("button")).toHaveClass("h-15");
    });

    it("falls back to default md size if none provided", () => {
      // @ts-expect-error - Testing runtime fallback for invalid size
      render(<Button size="invalid-size">Fallback Size</Button>);
      expect(screen.getByRole("button")).toHaveClass("h-11");
    });

    it("applies fullWidth class correctly", () => {
      const { rerender } = render(<Button fullWidth>Full Width</Button>);
      expect(screen.getByRole("button")).toHaveClass("w-full");

      rerender(<Button fullWidth={false}>Not Full Width</Button>);
      expect(screen.getByRole("button")).not.toHaveClass("w-full");
    });
  });

  describe("States and Logic (Branch Coverage)", () => {
    it("handles disabled logic (isLoading || disabled)", () => {
      // Cases for (A || B)
      const { rerender } = render(
        <Button isLoading={true} disabled={false}>
          Loading
        </Button>,
      );
      expect(screen.getByRole("button")).toBeDisabled();

      rerender(
        <Button isLoading={false} disabled={true}>
          Disabled
        </Button>,
      );
      expect(screen.getByRole("button")).toBeDisabled();

      rerender(
        <Button isLoading={true} disabled={true}>
          Both
        </Button>,
      );
      expect(screen.getByRole("button")).toBeDisabled();

      rerender(
        <Button isLoading={false} disabled={false}>
          Neither
        </Button>,
      );
      expect(screen.getByRole("button")).not.toBeDisabled();
    });

    it("renders loading spinner and hides icons when isLoading is true", () => {
      render(
        <Button
          isLoading={true}
          leftIcon={<span data-testid="left">L</span>}
          rightIcon={<span data-testid="right">R</span>}
        >
          Loading...
        </Button>,
      );

      // Spinner should be present
      expect(
        screen.getByRole("button").querySelector("svg"),
      ).toBeInTheDocument();
      // Icons should NOT be present
      expect(screen.queryByTestId("left")).not.toBeInTheDocument();
      expect(screen.queryByTestId("right")).not.toBeInTheDocument();
    });

    it("renders icons and hides spinner when isLoading is false", () => {
      render(
        <Button
          isLoading={false}
          leftIcon={<span data-testid="left">L</span>}
          rightIcon={<span data-testid="right">R</span>}
        >
          Loaded
        </Button>,
      );

      // Spinner should NOT be present
      expect(
        screen.getByRole("button").querySelector("svg"),
      ).not.toBeInTheDocument();
      // Icons SHOULD be present
      expect(screen.getByTestId("left")).toBeInTheDocument();
      expect(screen.getByTestId("right")).toBeInTheDocument();
    });
  });

  it("calls onClick when clicked and not disabled", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("supports ref forwarding", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
