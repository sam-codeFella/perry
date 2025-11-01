import React from 'react';
import HeroBentoGrid from '../hero/HeroBentoGrid';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-8 bg-gradient-to-b from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-between h-full min-h-[500px]">
            {/* Top Section - Heading */}
            <div>
              <h1 className="text-6xl font-bold text-[#1a1a1a] leading-tight">
                Bridging the gap from hypothesis to conviction
              </h1>
            </div>

            {/* Bottom Section - Description and CTA */}
            <div className="flex flex-col gap-5">
              <p className="text-xl text-[#6b6b6b] leading-relaxed">
                Deploy Agentic AI today to track your coverage & offload manual review,
                surface signals faster, sharpen conviction and publish alpha-generating
                insights. Move from information overload to signal clarity
              </p>

              {/* Email Input with CTA Button */}
              <div className="bg-[#141414] h-14 rounded-[32px] pl-5 pr-2 flex items-center justify-between w-full">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  className="bg-transparent outline-none text-white placeholder:text-white/50 flex-1 text-sm"
                />
                <button className="bg-[#ff5c35] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#ff5c35]/90 transition-colors">
                  Get a demo
                </button>
              </div>
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