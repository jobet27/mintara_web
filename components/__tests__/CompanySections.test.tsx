import { render, screen } from "@testing-library/react";
import {
  CompanyHero,
  ValueMatrix,
  TeamArchitecture,
  CareersStats,
} from "../CompanySections";

/**
 * CompanySections Unit Tests
 * Verifies high-fidelity text matchers and structural logic.
 */

describe("Company Page Components", () => {
  it("renders the CompanyHero with 10rem clinical typography", () => {
    render(<CompanyHero />);

    expect(
      screen.getByRole("heading", { name: /mission precision/i, level: 1 }),
    ).toBeInTheDocument();
  });

  it("renders the Strategic DNA matrix with core values", () => {
    render(<ValueMatrix />);

    expect(
      screen.getByRole("heading", { name: /strategic dna/i, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(/absolute integrity/i)).toBeInTheDocument();
    expect(screen.getByText(/clinical innovation/i)).toBeInTheDocument();
    expect(screen.getByText(/persona-first/i)).toBeInTheDocument();
  });

  it("renders the TeamArchitecture with individual specialists", () => {
    render(<TeamArchitecture />);

    expect(screen.getByText(/dr\. elena vance/i)).toBeInTheDocument();
    expect(screen.getByText(/marcus thorne/i)).toBeInTheDocument();
    expect(screen.getByText(/architects/i)).toBeInTheDocument();
  });

  it("renders CareersStats with hiring information", () => {
    render(<CareersStats />);

    expect(
      screen.getByRole("heading", { name: /join the frontline/i, level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/core infrastructure engineer/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/global offices/i)).toBeInTheDocument();
  });
});
