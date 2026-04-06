import { render, screen } from "@testing-library/react";
import SolutionsPage from "../page";

/**
 * Solutions Page Unit Tests
 * Verifies that the specialized persona-driven layout and
 * Strategic components render correctly.
 */

describe("Solutions Page", () => {
  it("renders the strategic header and persona-switcher", () => {
    render(<SolutionsPage />);

    // 1. Verify Strategic Header (Distinct from Home)
    expect(
      screen.getByRole("heading", { name: /precision solutions/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/strategic optimization 2\.0/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /mintara's advance platform adapts with clinical precision to your life stage/i,
      ),
    ).toBeInTheDocument();

    // 2. Verify Persona Tab Selection
    // Startups is the default active tab
    expect(
      screen.getByRole("button", { name: /startups/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /students/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /investors/i }),
    ).toBeInTheDocument();

    // 3. Verify Default Persona Content (Startups Strategy)
    expect(screen.getByText(/startups strategy/i)).toBeInTheDocument();
    expect(
      screen.getByText(/fuel your vision with dynamic growth/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/runway insight/i)).toBeInTheDocument();
    expect(screen.getByText(/24 mo\+/i)).toBeInTheDocument();
  });

  it("renders the strategic highlights grid", () => {
    render(<SolutionsPage />);

    // Unique strategy grid items (vs marketing features on Home)
    expect(screen.getByText(/growth focused/i)).toBeInTheDocument();
    expect(screen.getByText(/security 100/i)).toBeInTheDocument();
    expect(screen.getByText(/goal matrix/i)).toBeInTheDocument();
  });

  it("contains the final conversion CTA", () => {
    render(<SolutionsPage />);

    expect(
      screen.getByRole("heading", { name: /ready to start your strategy\?/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get started now/i }),
    ).toBeInTheDocument();
  });
});
