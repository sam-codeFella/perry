'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgba(249,244,231,0.2)] backdrop-blur-sm border-b border-neutral-200/30 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {/* Logo with gradient background */}
              <div className="relative w-8 h-8 rounded-md bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center">
                <span className="text-white text-lg">🔥</span>
              </div>
              <span className="text-[18px] font-medium text-[#1a1a1a]">knowyourcompany.ai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className="text-base font-normal text-black hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-base font-normal text-black hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-base font-normal text-black hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              className="bg-[#ff5c35] hover:bg-[#ff5c35]/90 text-white font-medium text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5"
            >
              Track your coverage today
              <ChevronRight />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-700 hover:text-primary transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-neutral-200/30">
            <Link
              href="/about"
              className="block px-2 py-2 text-base text-black hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="block px-2 py-2 text-base text-black hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="block px-2 py-2 text-base text-black hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Terms
            </Link>
            <div className="pt-4">
              <Button
                variant="primary"
                size="sm"
                className="w-full bg-[#ff5c35] hover:bg-[#ff5c35]/90 text-white font-medium text-sm px-5 py-2.5 rounded-lg flex items-center justify-center gap-1.5"
              >
                Track your coverage today
                <ChevronRight />
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

// Chevron Right Icon Component
function ChevronRight() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
