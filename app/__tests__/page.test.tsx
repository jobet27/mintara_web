import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders the primary landing page sections", () => {
    render(<Home />);

    // Advance Hero Section
    expect(
      screen.getByRole("heading", { name: /budgeting reimagined/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/take control of your budget with mintara/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /start planning/i }),
    ).toBeInTheDocument();

    // Advance Features & Solutions
    expect(
      screen.getByRole("heading", { name: /modern budgeting tools/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /solutions for every stage/i }),
    ).toBeInTheDocument();

    // Global Footer
    expect(
      screen.getByText(/© \d{4} mintara finance inc/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/all systems operational/i)).toBeInTheDocument();
  });

  it("contains essential navigation links in the footer", () => {
    render(<Home />);

    expect(screen.getByRole("link", { name: /pricing/i })).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /privacy policy/i }),
    ).toBeInTheDocument();

    // Social links (aria-labels)
    expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });
});
