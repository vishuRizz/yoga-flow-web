"use client"
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f1eb] px-6 py-5 border-b border-gray-200 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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
        <div className="flex items-center gap-12">
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-lg">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-lg">
            Classes
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-lg">
            Teachers
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors font-light text-lg">
            About Us
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-8 py-3 bg-[#f0dcc8] text-gray-900 rounded-full font-light text-base hover:bg-[#e8d4be] transition-colors">
            Start Free Trial
          </button>
          <button className="px-8 py-3 bg-[#ff8c42] text-white rounded-full font-light text-base hover:bg-[#ff7a28] transition-colors">
            Join Our Classes
          </button>
        </div>
      </div>
    </nav>
  );
}