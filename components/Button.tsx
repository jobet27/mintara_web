"use client";

import React, { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Mintara Professional and Advance Button Components
 * Designed for Budget and Financing Apps
 */

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "professional" | "advance" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className = "",
      variant = "professional",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      ...props
    },
    ref,
  ) => {
    // Filter out custom props to prevent DOM leakage
    const domProps = { ...props };
    // Base styles for all buttons
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    // Professional Variant: Clean, stable, high-trust (FinTech Standard)
    const professionalStyles =
      "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm ring-1 ring-zinc-950 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200";

    // Advance Variant: Premium, wealth-focused, dynamic (Growth/Investment focus)
    const advanceStyles =
      "bg-gradient-to-br from-emerald-600 to-teal-700 text-white hover:from-emerald-500 hover:to-teal-600 shadow-[0_4px_14px_0_rgba(16,185,129,0.39)] ring-1 ring-emerald-500/20";

    // Outline Variant: Secondary actions
    const outlineStyles =
      "bg-transparent border border-zinc-200 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900";

    // Ghost Variant: Tertiary actions
    const ghostStyles =
      "bg-transparent text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-100";

    // Size variants
    const sizes = {
      sm: "h-9 px-3 text-xs rounded-md",
      md: "h-11 px-5 text-sm rounded-lg",
      lg: "h-13 px-8 text-base rounded-xl",
      xl: "h-15 px-10 text-lg rounded-2xl",
    };

    // Variant mapping
    const variants = {
      professional: professionalStyles,
      advance: advanceStyles,
      outline: outlineStyles,
      ghost: ghostStyles,
    };

    const variantStyles = variants[variant] || variants.professional;
    const sizeStyles = sizes[size] || sizes.md;
    const widthStyles = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        disabled={isLoading || disabled}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${widthStyles} ${className}`}
        {...domProps}
      >
        {isLoading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
        <span className="relative flex items-center">{children}</span>
        {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}
      </button>
    );
  },
);

Button.displayName = "Button";
