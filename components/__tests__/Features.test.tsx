import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ProfessionalFeatures,
  AdvanceFeatures,
  FeatureItem,
} from "../Features";
import "@testing-library/jest-dom";

describe("Features Components", () => {
  const mockItems: FeatureItem[] = [
    {
      icon: <span data-testid="icon-1">Icon 1</span>,
      title: "Feature One",
      description: "Description One",
      link: "/link-1",
    },
    {
      icon: <span data-testid="icon-2">Icon 2</span>,
      title: "Feature Two",
      description: "Description Two",
    },
    {
      icon: <span data-testid="icon-3">Icon 3</span>,
      title: "Feature Three",
      description: "Description Three",
      span: "large",
    },
    {
      icon: <span data-testid="icon-4">Icon 4</span>,
      title: "Feature Four",
      description: "Description Four",
      span: "wide",
    },
  ];

  const mockProps = {
    badge: "Limited Edition",
    title: "Awesome Features",
    subtitle: "Check out what we have to offer you today.",
    items: mockItems,
  };

  describe("ProfessionalFeatures", () => {
    it("renders core content correctly", () => {
      render(<ProfessionalFeatures {...mockProps} />);

      expect(screen.getByText("Limited Edition")).toBeInTheDocument();
      expect(screen.getByText("Awesome Features")).toBeInTheDocument();
      expect(
        screen.getByText(/check out what we have to offer/i),
      ).toBeInTheDocument();
      expect(screen.getByText("Feature One")).toBeInTheDocument();
      expect(screen.getByText("Feature Two")).toBeInTheDocument();
      expect(screen.getByText("Learn more")).toHaveAttribute("href", "/link-1");
    });

    it("renders without badge if not provided", () => {
      const { queryByText } = render(
        <ProfessionalFeatures
          title="Simple Features"
          subtitle="Simple Subtitle"
          items={mockItems}
        />,
      );

      expect(queryByText("Limited Edition")).not.toBeInTheDocument();
    });

    it("renders all items in the grid", () => {
      render(<ProfessionalFeatures {...mockProps} />);
      expect(screen.getAllByTestId(/icon-/)).toHaveLength(4);
    });
  });

  describe("AdvanceFeatures", () => {
    it("renders core content correctly with dynamic layout", () => {
      render(<AdvanceFeatures {...mockProps} />);

      expect(screen.getByText("Limited Edition")).toBeInTheDocument();
      expect(screen.getByText("Awesome Features")).toBeInTheDocument();
      expect(
        screen.getByText(/check out what we have to offer/i),
      ).toBeInTheDocument();
      expect(screen.getByText("Feature One")).toBeInTheDocument();
      expect(screen.getByText("Feature Three")).toBeInTheDocument();
    });

    it("applies large and wide span classes correctly", () => {
      const { container } = render(<AdvanceFeatures {...mockProps} />);
      // Both large and wide use col-span-2
      const span2Items = container.querySelectorAll(".lg\\:col-span-2");
      expect(span2Items).toHaveLength(2);

      // Large also uses row-span-2
      const rowSpan2Item = container.querySelector(".lg\\:row-span-2");
      expect(rowSpan2Item).toBeInTheDocument();
      expect(rowSpan2Item).toHaveTextContent("Feature Three");
    });

    it("renders without badge if not provided", () => {
      const { queryByText } = render(
        <AdvanceFeatures
          title="Modern Features"
          subtitle="Modern Subtitle"
          items={mockItems}
        />,
      );

      expect(queryByText("Limited Edition")).not.toBeInTheDocument();
    });

    it("renders all items correctly (including decorative ones)", () => {
      render(<AdvanceFeatures {...mockProps} />);
      // In AdvanceFeatures, icons are rendered twice (decorative + functional)
      // 4 items * 2 = 8
      expect(screen.getAllByTestId(/icon-/)).toHaveLength(8);
    });
  });
});
