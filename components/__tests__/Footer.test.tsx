import React from "react";
import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";
import "@testing-library/jest-dom";

/**
 * Mintara Global Footer Component Tests
 * Achieving 100% branch coverage for navigation and social nodes.
 */

describe("Footer Component", () => {
  it("renders the brand logo and professional description", () => {
    render(<Footer />);

    expect(screen.getByText("Mintara")).toBeInTheDocument();
    expect(
      screen.getByText(/revolutionizing budget planning/i),
    ).toBeInTheDocument();
  });

  it("renders all navigation columns and links", () => {
    render(<Footer />);

    // Product Column
    expect(screen.getByText("Product")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Features" })).toHaveAttribute(
      "href",
      "#features",
    );
    expect(screen.getByRole("link", { name: "Pricing" })).toHaveAttribute(
      "href",
      "/pricing",
    );

    // Company Column
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Privacy Policy" }),
    ).toHaveAttribute("href", "#privacy");
  });

  it("renders correctly formed social connectivity nodes", () => {
    render(<Footer />);

    const twitterLink = screen.getByLabelText("Twitter");
    expect(twitterLink).toHaveAttribute("href", "https://twitter.com/mintara");
    expect(twitterLink).toHaveAttribute("target", "_blank");

    const githubLink = screen.getByLabelText("Github");
    expect(githubLink).toHaveAttribute("href", "https://github.com/mintara");

    const linkedinLink = screen.getByLabelText("Linkedin");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/company/mintara",
    );

    const emailLink = screen.getByLabelText("Email");
    expect(emailLink).toHaveAttribute("href", "mailto:hello@mintara.com");
  });

  it("displays the correct current copyright year and system status", () => {
    render(<Footer />);

    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
    expect(screen.getByText(/all systems operational/i)).toBeInTheDocument();
  });
});
