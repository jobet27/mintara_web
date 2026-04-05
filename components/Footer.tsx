"use client";

import React from "react";
import Link from "next/link";
import { Wallet, X, Globe, Code, Mail } from "lucide-react";

/**
 * Mintara Global Footer Component
 * Designed for High-Fidelity Landing Pages.
 * Zero 'any' types, full responsiveness, and premium dark-mode aesthetics.
 */

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "/pricing" },
    { label: "Security", href: "#security" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#tos" },
  ],
  social: [
    { icon: X, href: "https://twitter.com/mintara", label: "Twitter" },
    { icon: Code, href: "https://github.com/mintara", label: "Github" },
    {
      icon: Globe,
      href: "https://linkedin.com/company/mintara",
      label: "Linkedin",
    },
    { icon: Mail, href: "mailto:hello@mintara.com", label: "Email" },
  ],
};

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-zinc-950 pt-24 pb-12 overflow-hidden border-t border-zinc-900">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 max-w-xs">
            <Link href="/" className="flex items-center gap-2 group mb-6">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20 transition-transform group-hover:scale-110">
                <Wallet className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">
                Mintara
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed font-medium">
              Revolutionizing budget planning with clinical precision and
              innovation-driven growth tools. Join our global community of smart
              planners.
            </p>
          </div>

          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Product
              </h3>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
                Company
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-zinc-500 hover:text-emerald-400 transition-colors duration-300 font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">
              Connect With Us
            </h3>
            <div className="flex gap-4 mb-8">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 w-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
            <p className="text-zinc-600 text-sm font-medium">
              Sign up for our monthly newsletter for the latest budget
              strategies and platform updates.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-zinc-600 text-sm font-medium">
            © {new Date().getFullYear()} Mintara Finance Inc. All rights
            reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-medium text-zinc-600">
            <span className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
