import { render, screen } from "@testing-library/react";
import CompanyPage from "../page";

/**
 * Company Page Integration Tests
 * Verifies high-fidelity branding and full-page layout consistency.
 */

describe("Company Page", () => {
  it("renders the primary strategic mission and brand components", () => {
    render(<CompanyPage />);

    // 1. Verify Global Navigation
    expect(screen.getAllByText(/mintara/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText("Features")[0]).toBeInTheDocument();

    // 2. Verify Company Page Hero
    expect(
      screen.getByRole("heading", { name: /mission precision/i, level: 1 }),
    ).toBeInTheDocument();

    // 3. Verify Strategic Sections
    expect(
      screen.getByRole("heading", { name: /strategic dna/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/the architects/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /join the frontline/i }),
    ).toBeInTheDocument();

    // 4. Verify Final CTA
    expect(screen.getByText(/fuel the architecture/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /view open roles/i }),
    ).toBeInTheDocument();

    // 5. Verify Footer Presence
    expect(screen.getByText(/all systems operational/i)).toBeInTheDocument();
  });
});
