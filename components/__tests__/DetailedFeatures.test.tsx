import React from "react";
import { render, screen } from "@testing-library/react";
import {
  DetailedHero,
  FeatureDetailRow,
  AllFeaturesGrid,
  GridItem,
} from "../DetailedFeatures";
import { Zap, Globe } from "lucide-react";
import "@testing-library/jest-dom";

/**
 * Mintara Detailed Features Component Tests
 * Achieving 100% branch coverage for specialized product exploration.
 */

describe("DetailedFeatures Components", () => {
  describe("DetailedHero", () => {
    it("renders title, subtitle and optional badge", () => {
      render(
        <DetailedHero
          title="Precision Power Tools"
          subtitle="Subtitle goes here"
          badge="New Feature"
        />,
      );

      expect(screen.getByText("Precision Power Tools")).toBeInTheDocument();
      expect(screen.getByText("Subtitle goes here")).toBeInTheDocument();
      expect(screen.getByText("New Feature")).toBeInTheDocument();
    });

    it("renders with custom image instead of icon", () => {
      render(
        <DetailedHero
          title="Image Hero"
          subtitle="Sub"
          image="/test-image.png"
        />,
      );
      const img = screen.getByAltText("Image Hero");
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src");
    });

    it("renders without badge if not provided", () => {
      const { queryByText } = render(
        <DetailedHero title="No Badge" subtitle="Subtitle" />,
      );
      expect(queryByText("New Feature")).not.toBeInTheDocument();
    });
  });

  describe("FeatureDetailRow", () => {
    const mockPoints = ["Point 1", "Point 2"];

    it("renders content and all points", () => {
      render(
        <FeatureDetailRow
          icon={<Zap />}
          title="Feature Title"
          description="Feature Description"
          points={mockPoints}
        />,
      );

      expect(screen.getByText("Feature Title")).toBeInTheDocument();
      expect(screen.getByText("Feature Description")).toBeInTheDocument();
      expect(screen.getByText("Point 1")).toBeInTheDocument();
      expect(screen.getByText("Point 2")).toBeInTheDocument();
    });

    it("renders with image instead of icon", () => {
      render(
        <FeatureDetailRow
          icon={<Zap />}
          title="Image Row"
          description="Desc"
          points={mockPoints}
          image="/row-image.png"
        />,
      );
      expect(screen.getByAltText("Image Row")).toBeInTheDocument();
    });

    it("applies reversed layout class correctly", () => {
      const { container } = render(
        <FeatureDetailRow
          icon={<Zap />}
          title="Reversed"
          description="Desc"
          points={mockPoints}
          reversed
        />,
      );

      const row = container.querySelector(".lg\\:flex-row-reverse");
      expect(row).toBeInTheDocument();
    });
  });

  describe("AllFeaturesGrid", () => {
    const mockItems: GridItem[] = [
      {
        icon: <Globe />,
        title: "Global Sync",
        description: "Sync across world.",
      },
      { icon: <Zap />, title: "Fast AI", description: "Fast insights." },
    ];

    it("renders grid title and all items", () => {
      render(<AllFeaturesGrid title="Grid Title" items={mockItems} />);

      expect(screen.getByText("Grid Title")).toBeInTheDocument();
      expect(screen.getByText("Global Sync")).toBeInTheDocument();
      expect(screen.getByText("Sync across world.")).toBeInTheDocument();
      expect(screen.getByText("Fast AI")).toBeInTheDocument();
    });

    it("renders without title if not provided", () => {
      const { queryByRole } = render(<AllFeaturesGrid items={mockItems} />);
      // Should find items but no H2 title
      expect(
        queryByRole("heading", { level: 2, name: /grid title/i }),
      ).not.toBeInTheDocument();
    });
  });
});
