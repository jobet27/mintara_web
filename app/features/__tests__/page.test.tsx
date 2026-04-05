import { render, screen } from "@testing-library/react";
import FeaturesPage from "../page";
import "@testing-library/jest-dom";

/**
 * Mintara Features Page Level Tests
 * Verifying the deep-dive product exploration and assembly of
 * specialized high-fidelity components.
 */

describe("Features Page", () => {
  it("renders the primary features hero with precision branding", () => {
    render(<FeaturesPage />);

    expect(
      screen.getByRole("heading", { name: /precision power tools/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/unleash the full potential of your personal finance/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/New: AI Insights 2.0/i)).toBeInTheDocument();
  });

  it("renders all high-fidelity feature deep-dive sections", () => {
    render(<FeaturesPage />);

    // AI Savings Optimizer
    expect(
      screen.getByRole("heading", { name: /ai savings optimizer/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/automated savings rules/i)).toBeInTheDocument();

    // Global Account Sync
    expect(
      screen.getByRole("heading", { name: /global account sync/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/international account support/i),
    ).toBeInTheDocument();

    // Custom Budget Goals
    expect(
      screen.getByRole("heading", { name: /custom budget goals/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/dynamic budget adjustments/i)).toBeInTheDocument();
  });

  it("renders the comprehensive power-tool grid", () => {
    render(<FeaturesPage />);

    expect(
      screen.getByRole("heading", { name: /every tool you need/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Bank-Grade Security")).toBeInTheDocument();
    expect(screen.getByText("Dynamic Reports")).toBeInTheDocument();
    expect(screen.getByText("Open API")).toBeInTheDocument();
    expect(screen.getByText("Mobile App")).toBeInTheDocument();
  });

  it("integrates essential global components for conversion and navigation", () => {
    render(<FeaturesPage />);

    // Brand and Navigation Nodes (Verify brand presence in Navbar and Footer)
    const brandElements = screen.getAllByText(/mintara/i);
    expect(brandElements.length).toBeGreaterThan(0);
    expect(brandElements[0]).toBeInTheDocument();

    // CTA Section Assembly (Conversion nodes)
    expect(
      screen.getByText(/Transform Your Finances Ready\?/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /get started now/i }),
    ).toBeInTheDocument();

    // Global Footer and Legal Notice
    expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
    expect(screen.getByText(/all systems operational/i)).toBeInTheDocument();
  });
});
