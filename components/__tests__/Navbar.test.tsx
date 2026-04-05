import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Navbar } from "../Navbar";
import "@testing-library/jest-dom";

describe("Navbar Component", () => {
  const scrollWindow = (y: number): void => {
    window.scrollY = y;
    window.dispatchEvent(new Event("scroll"));
  };

  it("renders the Mintara brand logo correctly", () => {
    render(<Navbar />);
    expect(screen.getByText("Mintara")).toBeInTheDocument();
  });

  it("renders desktop navigation links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Features")[0]).toBeVisible();
    expect(screen.getAllByText("Solutions")[0]).toBeVisible();
    expect(screen.getAllByText("Pricing")[0]).toBeVisible();
    expect(screen.getAllByText("Company")[0]).toBeVisible();
  });

  it("renders action buttons in desktop and mobile views", () => {
    render(<Navbar />);
    // There are two "Get Started" buttons (Desktop and Mobile)
    const getStartedButtons = screen.getAllByRole("button", {
      name: /get started/i,
    });

    expect(getStartedButtons).toHaveLength(2);
  });

  describe("Mobile Menu Logic (Branch Coverage)", () => {
    it("toggles the mobile menu and updates overlay visibility", () => {
      render(<Navbar />);

      const toggle = screen.getByRole("button", { name: /open main menu/i });

      // Initially, the menu overlay should have classes for being hidden
      const menuOverlay = screen
        .getAllByText("Features")[1]
        .closest(".md\\:hidden");
      expect(menuOverlay).toHaveClass(
        "max-h-0",
        "opacity-0",
        "pointer-events-none",
      );

      // Open the menu
      fireEvent.click(toggle);
      expect(menuOverlay).toHaveClass("max-h-96", "opacity-100", "border-b");

      // Verify Hamburger changes to Close icon (implicitly via button text or aria-expanded if I added it)
      // I use aria-expanded={isOpen} in Navbar.tsx
      expect(toggle).toHaveAttribute("aria-expanded", "true");

      // Close the menu
      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("aria-expanded", "false");
    });

    it("closes the mobile menu when a navigation item is clicked", () => {
      render(<Navbar />);
      const toggle = screen.getByRole("button", { name: /open main menu/i });

      // Open
      fireEvent.click(toggle);
      expect(toggle).toHaveAttribute("aria-expanded", "true");

      // Click a mobile link (the second one, as the first is desktop)
      // Actually getAllByText will find both, we pick one inside the mobile menu
      const mobileFeaturesLink = screen.getAllByText("Features")[1];
      fireEvent.click(mobileFeaturesLink);

      expect(toggle).toHaveAttribute("aria-expanded", "false");
    });
  });

  describe("Scroll Effect Logic (Branch Coverage)", () => {
    beforeEach(() => {
      // Mock scrollY
      Object.defineProperty(window, "scrollY", { value: 0, writable: true });
    });

    it("applies transparent background when at the top", () => {
      render(<Navbar />);
      const nav = screen.getByRole("navigation");
      expect(nav).toHaveClass("bg-transparent");
      expect(nav).not.toHaveClass("backdrop-blur-md");
    });

    it("applies glassmorphism effect when scrolled down (> 20px)", () => {
      render(<Navbar />);
      const nav = screen.getByRole("navigation");

      act(() => {
        scrollWindow(50);
      });

      expect(nav).toHaveClass("bg-white/80", "backdrop-blur-md");
      expect(nav).not.toHaveClass("bg-transparent");
    });

    it("reverts to transparent background when scrolled back to top", () => {
      render(<Navbar />);
      const nav = screen.getByRole("navigation");

      act(() => {
        scrollWindow(100);
      });
      expect(nav).toHaveClass("bg-white/80");

      act(() => {
        scrollWindow(0);
      });
      expect(nav).toHaveClass("bg-transparent");
    });
  });
});
