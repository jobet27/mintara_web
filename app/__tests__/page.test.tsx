import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders the getting started heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /to get started, edit the page\.tsx file\./i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("renders the Next.js logo with priority", () => {
    render(<Home />);

    const logo = screen.getByAltText(/next\.js logo/i);
    expect(logo).toBeInTheDocument();
  });

  it("contains the documentation link", () => {
    render(<Home />);

    const docLink = screen.getByRole("link", { name: /documentation/i });
    expect(docLink).toBeInTheDocument();
    expect(docLink).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/docs"),
    );
  });

  it("contains the deploy now link", () => {
    render(<Home />);

    const deployLink = screen.getByRole("link", { name: /deploy now/i });
    expect(deployLink).toBeInTheDocument();
    expect(deployLink).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/new"),
    );
  });
});
