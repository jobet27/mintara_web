import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Home Page", () => {
  it("renders the getting started heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to mintara/i,
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
});
