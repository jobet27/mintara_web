import { render, screen, fireEvent } from "@testing-library/react";
import { PricingTabber } from "../PricingTabber";

/**
 * PricingTabber Unit Tests
 * Verifies the PHP-localized tier logic and
 * interactive price switching.
 */

describe("PricingTabber Component", () => {
  it("renders with default monthly PHP pricing", () => {
    render(<PricingTabber />);

    // Check Tiers (Use Role and Level to disambiguate from Hero and feature list)
    expect(
      screen.getByRole("heading", { name: /^starter$/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^pro$/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^elite$/i, level: 3 }),
    ).toBeInTheDocument();

    // Check PHP Localization
    expect(screen.getByText("₱0")).toBeInTheDocument();
    expect(screen.getByText("₱699")).toBeInTheDocument();
    expect(screen.getByText("₱2499")).toBeInTheDocument();

    // Verify "Monthly" label is highlighted
    expect(screen.getByText(/^monthly$/i)).toBeInTheDocument();
  });

  it("updates pricing to annual values when toggle is clicked", () => {
    render(<PricingTabber />);

    // 1. Find the toggle by its accessibility label
    const toggle = screen.getByLabelText(/toggle annual pricing/i);

    // 2. Click the toggle
    fireEvent.click(toggle);

    // 3. Verify annual discounts calculated from PricingTier data
    // Pro: 699 -> 559 | Elite: 2499 -> 1999
    expect(screen.getByText("₱559")).toBeInTheDocument();
    expect(screen.getByText("₱1999")).toBeInTheDocument();

    // Check for yearly label
    expect(screen.getAllByText(/yearly/i).length).toBeGreaterThan(0);
  });

  it("displays the Strategic FAQ matrix correctly", () => {
    render(<PricingTabber />);

    expect(screen.getByText(/uptime reliability/i)).toBeInTheDocument();
    expect(screen.getByText(/global compliance/i)).toBeInTheDocument();
  });
});
