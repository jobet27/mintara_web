import { render, screen, fireEvent } from "@testing-library/react";
import { SolutionsTabber, PersonaData } from "../SolutionsTabber";

/**
 * SolutionsTabber Unit Tests
 * Verifies the internal logic of the tabbed persona selection
 * and the responsiveness of the UI to user input.
 */

const mockPersonas: PersonaData[] = [
  {
    id: "startup",
    name: "Startups",
    tagline: "Fuel Your Vision",
    description: "Startup description",
    metrics: [{ label: "Metric 1", value: "100" }],
    features: ["Feature 1"],
    ctaText: "Startup CTA",
    colorClass: "bg-emerald-500",
    textColorClass: "text-emerald-400",
  },
  {
    id: "academic",
    name: "Students",
    tagline: "Master Your Future",
    description: "Student description",
    metrics: [{ label: "Metric 2", value: "200" }],
    features: ["Feature 2"],
    ctaText: "Student CTA",
    colorClass: "bg-teal-500",
    textColorClass: "text-teal-400",
  },
];

describe("SolutionsTabber Component", () => {
  it("renders with the first persona active by default", () => {
    render(<SolutionsTabber personas={mockPersonas} />);

    // Check headers
    expect(screen.getByText(/fuel your vision/i)).toBeInTheDocument();
    expect(screen.getByText(/startup description/i)).toBeInTheDocument();

    // Check specific metric
    expect(screen.getByText(/metric 1/i)).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();

    // Verify it is NOT showing the second persona content
    expect(screen.queryByText(/master your future/i)).not.toBeInTheDocument();
  });

  it("switches content when a different persona tab is clicked", () => {
    render(<SolutionsTabber personas={mockPersonas} />);

    // 1. Locate the "Students" tab button
    const studentTab = screen.getByRole("button", { name: /students/i });

    // 2. Click the tab
    fireEvent.click(studentTab);

    // 3. Verify content updates to Student data
    expect(screen.getByText(/master your future/i)).toBeInTheDocument();
    expect(screen.getByText(/student description/i)).toBeInTheDocument();

    // 4. Check specific Student metrics
    expect(screen.getByText(/metric 2/i)).toBeInTheDocument();
    expect(screen.getByText("200")).toBeInTheDocument();

    // 5. Verify Startup data is now gone
    expect(screen.queryByText(/fuel your vision/i)).not.toBeInTheDocument();
  });

  it("renders the correct number of feature points for the active persona", () => {
    render(<SolutionsTabber personas={mockPersonas} />);

    // Check for "Feature 1" in the Strategic Objectives list
    expect(screen.getByText(/feature 1/i)).toBeInTheDocument();
  });
});
