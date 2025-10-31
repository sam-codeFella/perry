import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 leading-tight">
              Bridging the gap from hypothesis to conviction
            </h1>

            <p className="text-lg text-neutral-700 leading-relaxed">
              Trow Agents AI stays up to date and compiles 6 different critical
              sources needed to compile your financial thesis from investment research
              online to a firm thesis by providing insightful answers that matter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Try it now, it&apos;s free
              </Button>
              <Button variant="secondary" size="lg">
                Explore product demos
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
              {/* Placeholder for hero image/visualization */}
              <div className="aspect-[4/3] bg-gradient-to-br from-neutral-700 to-black flex items-center justify-center">
                <div className="text-center text-white/60">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <p className="text-sm">Data Visualization</p>
                </div>
              </div>
            </div>

            {/* Decorative circle element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
