import React from 'react';
import Button from '../ui/Button';
import HeroBentoGrid from '../hero/HeroBentoGrid';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-8 bg-gradient-to-b from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-6xl font-bold text-neutral-700 leading-tight">
              Bridging the gap from hypothesis to conviction
            </h1>

            <p className="text-lg text-neutral-700 leading-relaxed">
              KnowYourCompany.ai stays up to date and compiles 6 different critical
              sources needed to compile your financial thesis from investment research
              online to a firm thesis by providing insightful answers that matter.
            </p>

            <div className="flex flex-row gap-4">
              <Button variant="primary" size="lg">
                Try it now, it&apos;s free
              </Button>
              <Button variant="secondary" size="lg">
                Explore product demos
              </Button>
            </div>
          </div>

          {/* Right Visual - Bento Grid */}
          <div className="relative">
            <HeroBentoGrid />

            {/* Decorative circle element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}