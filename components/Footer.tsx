import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
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
              <path 
                d="M12 2L2 7L12 12L22 7L12 2Z" 
                fill="currentColor"
              />
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
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light text-base">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light text-base">
              Classes
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light text-base">
              Teachers
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light text-base">
              About Us
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors font-light text-base">
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-gray-500 text-sm font-light" style={{ fontFamily: 'serif' }}>
          © 2023 Yoga Flow. From the Heart of Rishikesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}