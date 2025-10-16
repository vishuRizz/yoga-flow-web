"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Classes", href: "/classes" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href) ?? false;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Hide navbar when scrolling down past first page
      if (currentScrollY > windowHeight && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f1eb] px-4 md:px-6 py-4 md:py-5 border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            className="text-orange-500 md:w-6 md:h-6"
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
          <span className="text-lg md:text-2xl font-serif text-gray-900">
            Yoga Flow
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors font-light text-lg ${
                isActive(item.href)
                  ? "text-[#ff8c42]"
                  : "text-gray-700 hover:text-gray-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="px-8 py-3 bg-[#f0dcc8] text-gray-900 rounded-full font-light text-base hover:bg-[#e8d4be] transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 bg-[#ff8c42] text-white rounded-full font-light text-base hover:bg-[#ff7a28] transition-colors">
            Join Our Classes
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-opacity ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-900 transition-transform ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition-colors font-light text-base ${
                  isActive(item.href)
                    ? "text-[#ff8c42]"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <button className="w-full px-6 py-3 bg-[#f0dcc8] text-gray-900 rounded-full font-light text-sm hover:bg-[#e8d4be] transition-colors">
                Start Free Trial
              </button>
              <button className="w-full px-6 py-3 bg-[#ff8c42] text-white rounded-full font-light text-sm hover:bg-[#ff7a28] transition-colors">
                Join Our Classes
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
