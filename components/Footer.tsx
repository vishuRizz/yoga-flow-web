import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Classes", href: "/classes" },
    { label: "Teachers", href: "/teachers" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#f5f1eb] border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-orange-500"
            >
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-2xl font-serif text-gray-900">Yoga Flow</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-light text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <Link
                href="/privacy-policy"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
              >
                Terms & Conditions
              </Link>
              <span className="text-gray-400">•</span>
              <Link
                href="/delete"
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light"
              >
                Delete Account
              </Link>
            </div>

            {/* Copyright */}
            <p
              className="text-center text-gray-500 text-sm font-light"
              style={{ fontFamily: "serif" }}
            >
              © 2025 Yoga Flow. From the Heart of Rishikesh. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
