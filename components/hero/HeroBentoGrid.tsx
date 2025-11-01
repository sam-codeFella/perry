'use client';

import React from 'react';
import InsightsOverlay from './InsightsOverlay';

export default function HeroBentoGrid() {
  return (
    <div className="relative w-[640px] h-[593.245px] animate-fade-in-up">
      <div
        className="bg-black border-[#fbf4e4] border-[1.065px] border-solid relative size-full overflow-clip"
        style={{
          '--transform-inner-width': 0,
          '--transform-inner-height': 0
        } as React.CSSProperties}
      >
        {/* Golden Gate Bridge Background - Rotated */}
        <div
          className="absolute flex items-center justify-center left-[-258.21px] mix-blend-luminosity top-0"
          style={{
            height: 'calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))',
            width: 'calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))',
            '--transform-inner-width': 0,
            '--transform-inner-height': 0
          } as React.CSSProperties}
        >
          <div className="flex-none rotate-[90deg]">
            <div className="h-[1191.06px] relative w-[639.726px]">
              <div className="absolute inset-0">
                <img
                  src="/images/hero/golden-gate-bridge.png"
                  alt="Golden Gate Bridge"
                  className="block max-w-none size-full object-50%-50%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top Left Image Cell */}
        <div className="absolute border-[#f9f4e6] border-[1.065px] border-solid h-[166.123px] left-0 top-0 w-[173.577px]">
          <div className="h-[166.123px] overflow-clip relative rounded-[inherit] w-[173.577px]">
            <div className="absolute h-[215px] left-0 top-[0.14px] w-[173px]">
              <img
                src="/images/hero/top-left-image.png"
                alt="Top Left Image"
                className="block max-w-none size-full object-50%-50%"
              />
            </div>
          </div>
        </div>

        {/* Top Middle Empty Cell */}
        <div className="absolute bg-black border-[#f9f4e6] border-[1.065px] border-solid h-[166.123px] left-[172.51px] top-0 w-[132.047px]" />

        {/* Top Right Pattern Image Cell */}
        <div className="absolute border-[#f9f4e6] border-[1.065px] border-solid h-[166.123px] left-[301.49px] top-0 w-[336.506px]">
          <div className="h-[166.123px] overflow-clip relative rounded-[inherit] w-[336.506px]">
            <div className="absolute border-[#f9f4e6] border-[1.065px] border-solid h-[166.123px] left-[0.51px] top-0 w-[336.506px]">
              <div className="h-[166.123px] overflow-clip relative rounded-[inherit] w-[336.506px]">
                <div className="absolute h-[366.323px] left-[1.06px] mix-blend-luminosity top-0 w-[335.441px]">
                  <img
                    src="/images/hero/top-right-pattern.png"
                    alt="Pattern"
                    className="block max-w-none size-full object-50%-50%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Left Empty Cell */}
        <div className="absolute bg-black border-[#f9f4e6] border-[1.065px] border-solid h-[172.512px] left-0 top-[165.06px] w-[173.577px]" />

        {/* Bottom Left Portrait Cell */}
        <div className="absolute border-[#f9f4e6] border-[1.065px] border-solid h-[256.195px] left-0 top-[337.05px] w-[173.394px]">
          <div className="h-[256.195px] overflow-clip relative rounded-[inherit] w-[173.394px]">
            <div className="absolute h-[255.574px] left-[1.06px] mix-blend-luminosity top-[0.52px] w-[171.448px]">
              <img
                src="/images/hero/bottom-left-portrait.png"
                alt="Portrait"
                className="block max-w-none size-full object-50%-50%"
              />
            </div>
          </div>
        </div>

        {/* Bottom Middle Empty Cell */}
        <div className="absolute bg-black border-[#f9f4e6] border-[1.065px] border-solid h-[83.062px] left-[172.51px] top-[510.08px] w-[386.556px]" />

        {/* Bottom Right Small Image Cell */}
        <div className="absolute border-[#f9f4e6] border-[1.065px] border-solid h-[83.062px] left-[558px] top-[510.08px] w-[81.997px]">
          <div className="h-[83.062px] overflow-clip relative rounded-[inherit] w-[81.997px]">
            <div className="absolute left-[-11.71px] size-[106.489px] top-[-8.52px]">
              <img
                src="/images/hero/bottom-right-small.png"
                alt="Small decorative"
                className="block max-w-none size-full object-50%-50%"
              />
            </div>
          </div>
        </div>

        {/* Insights Overlay Card */}
        <InsightsOverlay />
      </div>
    </div>
  );
}