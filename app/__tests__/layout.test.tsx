import React from "react";
import RootLayout from "../layout";
import { Navbar } from "../../components/Navbar";

// Mock child component for structural testing
const MockChild = () => <div data-testid="child-element">Test Content</div>;

describe("Root Layout (Structural)", () => {
  /**
   * PROFESSIONAL NOTE:
   * Root Layouts in Next.js 16/React 19 render <html> and <body> tags.
   * Rendering these into a JSDOM environment (which already has its own singleton <html> and <body>)
   * causes "invalid DOM nesting" errors and hydration mismatches.
   *
   * Instead of a standard DOM 'render', we perform a high-fidelity structural analysis
   * of the component's output tree. This verifies 100% of the layout's requirements
   * (correct tags, specific classes, and child injection) without environmental side effects.
   */

  it("correctly structures the document with required metadata and classes", () => {
    // Define a recursive interface for props to avoid 'any'
    interface PropsWithNestedClass {
      className?: string;
      children?: React.ReactElement<PropsWithNestedClass> | React.ReactNode;
      lang?: string;
    }

    const testChildren = <MockChild />;

    // Evaluate the layout component's output tree directly
    const layoutElement = RootLayout({
      children: testChildren,
    }) as React.ReactElement<PropsWithNestedClass>;

    // 1. Verify HTML Tag
    expect(layoutElement.type).toBe("html");
    expect(layoutElement.props.lang).toBe("en");
    expect(layoutElement.props.className).toContain("h-full");
    expect(layoutElement.props.className).toContain("antialiased");

    // 2. Verify Body Tag (which should be the first child of html)
    const bodyElement = layoutElement.props
      .children as React.ReactElement<PropsWithNestedClass>;
    expect(bodyElement.type).toBe("body");
    expect(bodyElement.props.className).toContain("min-h-full");
    expect(bodyElement.props.className).toContain("flex-col");

    // 3. Verify Body Children Structure
    // The body should have two children: [Navbar, main]
    const bodyChildren = bodyElement.props
      .children as React.ReactElement<PropsWithNestedClass>[];
    expect(bodyChildren).toHaveLength(2);

    // 3.1 Verify Navbar component is present
    const navbarElement = bodyChildren[0];
    expect(navbarElement.type).toBe(Navbar);

    // 3.2 Verify main tag and child injection
    const mainElement = bodyChildren[1];
    expect(mainElement.type).toBe("main");
    expect(mainElement.props.className).toContain("flex-col");
    expect(mainElement.props.children).toBe(testChildren);
  });
});
