import { render, screen, fireEvent } from "@testing-library/react";
import PricingPage from "../page";

/**
 * Pricing Page Unit Tests
 * Verifies that the PHP localization and interactive
 * switching logic work correctly.
 */

describe("Pricing Page", () => {
  it("renders the primary PHP pricing tiers", () => {
    render(<PricingPage />);

    // 1. Check Header
    expect(
      screen.getByRole("heading", { name: /elite value/i }),
    ).toBeInTheDocument();

    // 2. Check Tiers (Use Role and Level to disambiguate from Hero and feature list)
    expect(
      screen.getByRole("heading", { name: /^starter$/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^pro$/i, level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /^elite$/i, level: 3 }),
    ).toBeInTheDocument();

    // 3. Check PHP Localization (₱ symbol)
    // Default is monthly: ₱0, ₱699, ₱2499
    expect(screen.getAllByText(/₱/i)).toHaveLength(3);
    expect(screen.getByText("₱0")).toBeInTheDocument();
    expect(screen.getByText("₱699")).toBeInTheDocument();
    expect(screen.getByText("₱2499")).toBeInTheDocument();
  });

  it("switches to annual pricing when the toggle is clicked", () => {
    render(<PricingPage />);

    // 1. Locate the annual toggle (button) by its accessible name
    const toggle = screen.getByRole("button", {
      name: /toggle annual pricing/i,
    });

    // 2. Trigger toggle
    fireEvent.click(toggle);

    // 3. Verify labels update to annual pricing
    // Pro: ₱699 -> ₱559 | Elite: ₱2499 -> ₱1999
    expect(screen.getByText("₱559")).toBeInTheDocument();
    expect(screen.getByText("₱1999")).toBeInTheDocument();

    // Check for the "Yearly" indicator
    expect(screen.getAllByText(/yearly/i).length).toBeGreaterThan(0);
  });

  it("contains strategic FAQ content", () => {
    render(<PricingPage />);

    expect(
      screen.getByText(/how does the php conversion work\?/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/global compliance/i)).toBeInTheDocument();
  });
});
