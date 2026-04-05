import React from "react";
import { render, screen } from "@testing-library/react";
import {
  ProfessionalSolutions,
  AdvanceSolutions,
  SolutionItem,
} from "../Solutions";
import { GraduationCap, Briefcase, Heart } from "lucide-react";
import "@testing-library/jest-dom";

describe("Solutions Components", () => {
  const mockItems: SolutionItem[] = [
    {
      icon: <GraduationCap />,
      title: "Solutions for Students",
      description: "Manage tuition and expenses effortlessly.",
      persona: "Students",
    },
    {
      icon: <Briefcase />,
      title: "Solutions for Professionals",
      description: "Optimize your income and career investments.",
      persona: "Professionals",
    },
    {
      icon: <Heart />,
      title: "Solutions for Families",
      description: "Secure your family's financial future.",
      persona: "Families",
    },
  ];

  const mockProps = {
    badge: "Persona Solutions",
    title: "Tailored for You",
    subtitle: "Financial tools designed for every unique lifestyle.",
    items: mockItems,
  };

  describe("ProfessionalSolutions", () => {
    it("renders core content correctly", () => {
      render(<ProfessionalSolutions {...mockProps} />);

      expect(screen.getByText("Persona Solutions")).toBeInTheDocument();
      expect(screen.getByText("Tailored for You")).toBeInTheDocument();
      expect(
        screen.getByText(/financial tools designed for every/i),
      ).toBeInTheDocument();
      expect(screen.getByText("Solutions for Students")).toBeInTheDocument();
      expect(screen.getByText("Students")).toBeInTheDocument();
    });

    it("renders without badge if not provided", () => {
      const { queryByText } = render(
        <ProfessionalSolutions
          title="Simple Solutions"
          subtitle="Simple Subtitle"
          items={mockItems}
        />,
      );

      expect(queryByText("Persona Solutions")).not.toBeInTheDocument();
    });
  });

  describe("AdvanceSolutions", () => {
    it("renders core content correctly with premium layout", () => {
      render(<AdvanceSolutions {...mockProps} />);

      expect(screen.getByText("Persona Solutions")).toBeInTheDocument();
      expect(screen.getByText("Tailored for You")).toBeInTheDocument();
      expect(
        screen.getByText(/financial tools designed for every/i),
      ).toBeInTheDocument();
      expect(
        screen.getByText("Solutions for Professionals"),
      ).toBeInTheDocument();
      expect(screen.getByText("Professionals")).toBeInTheDocument();
    });

    it("renders without badge if not provided", () => {
      const { queryByText } = render(
        <AdvanceSolutions
          title="Modern Solutions"
          subtitle="Modern Subtitle"
          items={mockItems}
        />,
      );

      expect(queryByText("Persona Solutions")).not.toBeInTheDocument();
    });
  });
});
