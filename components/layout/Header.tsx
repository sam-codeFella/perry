'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-neutral-700">
              KnowYourCompany.ai
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-neutral-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/pricing" className="text-neutral-700 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/terms" className="text-neutral-700 hover:text-primary transition-colors">
              Terms
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary" size="sm">
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
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

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              href="/about"
              className="block text-neutral-700 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/pricing"
              className="block text-neutral-700 hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/terms"
              className="block text-neutral-700 hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Button variant="primary" size="sm" className="w-full">
              Get Started Free
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
