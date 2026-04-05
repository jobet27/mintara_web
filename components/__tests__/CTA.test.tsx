import React from "react";
import { render, screen } from "@testing-library/react";
import { ProfessionalCTA, AdvanceCTA } from "../CTA";
import "@testing-library/jest-dom";

describe("CTA Components", () => {
  const mockProps = {
    title: "Start Planning Today",
    description:
      "Join the elite budgeters and take control of your financial future.",
    primaryText: "Get Started",
    secondaryText: "Learn More",
  };

  describe("ProfessionalCTA", () => {
    it("renders core content correctly", () => {
      render(<ProfessionalCTA {...mockProps} />);

      expect(screen.getByText("Start Planning Today")).toBeInTheDocument();
      expect(screen.getByText(/join the elite budgeters/i)).toBeInTheDocument();
      expect(screen.getByText("Get Started")).toBeInTheDocument();
      expect(screen.getByText("Learn More")).toBeInTheDocument();
    });

    it("renders without secondary text if not provided", () => {
      const { queryByText } = render(
        <ProfessionalCTA
          title="Solo Action"
          description="Description"
          primaryText="Only Button"
        />,
      );

      expect(queryByText("Learn More")).not.toBeInTheDocument();
    });
  });

  describe("AdvanceCTA", () => {
    it("renders core content with premium variant", () => {
      render(<AdvanceCTA {...mockProps} />);

      expect(screen.getByText("Start Planning Today")).toBeInTheDocument();
      expect(screen.getByText(/join the elite budgeters/i)).toBeInTheDocument();
      expect(screen.getByText("Get Started")).toBeInTheDocument();
      expect(screen.getByText("Learn More")).toBeInTheDocument();
      expect(screen.getByText("Join 50,000+ Planners")).toBeInTheDocument();
    });

    it("renders without secondary text if not provided", () => {
      const { queryByText } = render(
        <AdvanceCTA
          title="Solo Action"
          description="Description"
          primaryText="Only Button"
        />,
      );

      expect(queryByText("Learn More")).not.toBeInTheDocument();
    });
  });
});
