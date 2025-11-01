'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[rgba(249,244,231,0.2)] backdrop-blur-sm border-b border-neutral-200/30 z-50">
      <nav className="max-w-7xl mx-auto px-20">
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
          <div className="flex items-center gap-8">
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
          <div>
            <Button
              variant="primary"
              size="sm"
              className="bg-[#ff5c35] hover:bg-[#ff5c35]/90 text-white font-medium text-sm px-5 py-2.5 rounded-lg flex items-center gap-1.5"
            >
              Track your coverage today
              <ChevronRight />
            </Button>
          </div>
        </div>
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