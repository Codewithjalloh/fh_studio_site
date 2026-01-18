'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <Link href="/" className="text-base md:text-xl font-bold tracking-tight uppercase text-navy">
            Fieldhouse Studio
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/services" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/projects" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            href="/work-with-us"
            className="hidden sm:inline-block bg-navy hover:bg-slate-800 text-white px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-bold transition-all shadow-md"
          >
            Work with Us
          </Link>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-primary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-6 py-4 space-y-3">
            <Link
              href="/services"
              className="block text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/projects"
              className="block text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/work-with-us"
              className="block bg-navy text-white px-6 py-2.5 rounded-lg text-sm font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Work with Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 