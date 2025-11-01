'use client';

import React from 'react';
import InsightsOverlay from './InsightsOverlay';

export default function HeroBentoGrid() {
  return (
    <div className="relative w-[640px] h-[593.245px] animate-fade-in-up">
      <div className="relative w-[640px] h-[593.245px] bg-black border-[#fbf4e4] border-[1.065px] border-solid rounded-[17.033px] overflow-clip">
        {/* Golden Gate Bridge Background - Rotated */}
        <div className="absolute left-[244.82px] top-[190.4px] w-[607.57px] h-[507.45px] origin-top-left mix-blend-luminosity" style={{ transform: 'rotate(90deg)', transformOrigin: '0 0' }}>
          <img
            src="/images/hero/golden-gate-bridge.png"
            alt="Golden Gate Bridge"
            className="block max-w-none size-full"
          />
        </div>

        {/* Top Left Image */}
        <div className="absolute left-0 top-0 w-[173.577px] h-[166.123px] overflow-hidden rounded-[5.325px]">
          <img
            src="/images/hero/top-left-image.png"
            alt="Top Left Image"
            className="block max-w-none size-full object-cover"
          />
        </div>

        {/* Empty Cell with Border - Top Middle */}
        <div className="absolute left-[172.51px] top-0 w-[132.047px] h-[166.123px] bg-black border-[#f9f4e6] border-[0.533px] border-solid rounded-[5.325px]" />

        {/* Top Right Pattern Image */}
        <div className="absolute left-[301.49px] top-0 w-[336.506px] h-[166.123px] overflow-hidden rounded-[5.325px]">
          <img
            src="/images/hero/top-right-pattern.png"
            alt="Pattern"
            className="block max-w-none size-full object-cover mix-blend-luminosity"
          />
        </div>

        {/* Empty Cell with Border - Middle Left */}
        <div className="absolute left-0 top-[165.06px] w-[173.577px] h-[172.512px] bg-black border-[#f9f4e6] border-[0.533px] border-solid rounded-[5.325px]" />

        {/* Bottom Left Portrait */}
        <div className="absolute left-0 top-[337.05px] w-[173.394px] h-[256.195px] overflow-hidden rounded-[5.325px]">
          <img
            src="/images/hero/bottom-left-portrait.png"
            alt="Portrait"
            className="block max-w-none size-full object-cover mix-blend-luminosity"
          />
        </div>

        {/* Empty Cell with Border - Bottom Middle */}
        <div className="absolute left-[172.51px] top-[510.08px] w-[386.556px] h-[83.062px] bg-black border-[#f9f4e6] border-[0.533px] border-solid rounded-[5.325px]" />

        {/* Small Bottom Right Image */}
        <div className="absolute left-[558px] top-[510.08px] w-[81.997px] h-[83.062px] overflow-hidden rounded-[5.325px]">
          <img
            src="/images/hero/bottom-right-small.png"
            alt="Small decorative"
            className="block max-w-none size-full object-cover"
          />
        </div>

        {/* Insights Overlay Card */}
        <InsightsOverlay />
      </div>
    </div>
  );
}