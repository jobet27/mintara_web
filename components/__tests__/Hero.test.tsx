import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProfessionalHero, AdvanceHero } from "../Hero";
import "@testing-library/jest-dom";

describe("Hero Components", () => {
  const mockProps = {
    badge: "New Feature",
    title: "Manage your wealth perfectly",
    description: "The most advanced budgeting tool for professionals.",
    primaryCtaText: "Get Started",
    secondaryCtaText: "Learn More",
    onPrimaryClick: jest.fn(),
    onSecondaryClick: jest.fn(),
  };

  describe("ProfessionalHero", () => {
    it("renders core content correctly", () => {
      render(<ProfessionalHero {...mockProps} />);

      expect(screen.getByText("New Feature")).toBeInTheDocument();
      expect(
        screen.getByText("Manage your wealth perfectly"),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/most advanced budgeting tool/i),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /get started/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /learn more/i }),
      ).toBeInTheDocument();
    });

    it("triggers callbacks on button clicks", () => {
      render(<ProfessionalHero {...mockProps} />);

      fireEvent.click(screen.getByRole("button", { name: /get started/i }));
      expect(mockProps.onPrimaryClick).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByRole("button", { name: /learn more/i }));
      expect(mockProps.onSecondaryClick).toHaveBeenCalledTimes(1);
    });

    it("renders without badge or secondary CTA if not provided", () => {
      const { queryByText } = render(
        <ProfessionalHero
          title="Simple Title"
          description="Simple Desc"
          primaryCtaText="Go"
        />,
      );

      expect(queryByText("New Feature")).not.toBeInTheDocument();
      expect(queryByText("Learn More")).not.toBeInTheDocument();
    });
  });

  describe("AdvanceHero", () => {
    it("renders core content correctly", () => {
      render(<AdvanceHero {...mockProps} />);

      expect(screen.getByText("New Feature")).toBeInTheDocument();
      expect(
        screen.getByText("Manage your wealth perfectly"),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/most advanced budgeting tool/i),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /get started/i }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole("button", { name: /learn more/i }),
      ).toBeInTheDocument();
    });

    it("triggers callbacks on button clicks", () => {
      jest.clearAllMocks();
      render(<AdvanceHero {...mockProps} />);

      fireEvent.click(screen.getByRole("button", { name: /get started/i }));
      expect(mockProps.onPrimaryClick).toHaveBeenCalledTimes(1);

      fireEvent.click(screen.getByRole("button", { name: /learn more/i }));
      expect(mockProps.onSecondaryClick).toHaveBeenCalledTimes(1);
    });

    it("renders without badge or secondary CTA if not provided", () => {
      const { queryByText } = render(
        <AdvanceHero
          title="Modern Title"
          description="Modern Desc"
          primaryCtaText="Explore"
        />,
      );

      expect(queryByText("New Feature")).not.toBeInTheDocument();
      expect(queryByText("Learn More")).not.toBeInTheDocument();
    });
  });
});
