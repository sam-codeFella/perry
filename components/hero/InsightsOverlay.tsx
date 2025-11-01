'use client';

import React from 'react';

export default function InsightsOverlay() {
  return (
    <div
      className="absolute left-[160.8px] top-[130.65px] w-[614.239px] h-[568.989px] bg-white border-[#fbf4e4] border-[1.065px] border-solid rounded-[19.255px] overflow-clip animate-fade-in-up"
      style={{
        boxShadow: '0px 3.851px 3.851px 0px rgba(0, 0, 0, 0.08) inset',
        animationDelay: '500ms'
      }}
    >
      <div className="relative size-full">
        {/* Component 6 - Main Container */}
        <div className="absolute left-[21.281px] top-[21.281px] w-[571.677px] h-[526.427px] rounded-[6.383px] overflow-clip">
          <div className="absolute inset-0 rounded-[6.383px]">
            <div className="relative size-full">
              {/* Card 1 - Top Left */}
              <div className="absolute left-0 top-0 w-[268.046px] h-[240.902px] bg-white rounded-[6.291px] p-[15.729px]" style={{ boxShadow: '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.05)' }}>
                <p className="text-[12.58px] leading-normal font-medium text-[#413d45]" style={{ fontFamily: 'Geist, var(--font-sans)' }}>
                  Evaluating Piramal's shift from generics to high-value CDMO operations
                </p>
              </div>

              {/* Card 2 - Top Right */}
              <div className="absolute left-[283.775px] top-0 w-[287.902px] h-[240.902px] bg-[#f1f1f1] rounded-[6.291px] p-[15.729px]">
                <p className="text-[12.58px] leading-[14.156px] font-medium text-[#413d45]" style={{ fontFamily: 'Geist, var(--font-sans)' }}>
                  Tracking molecule progress across peptides, ADCs, and injectables
                </p>
              </div>

              {/* Card 3 - Bottom Left */}
              <div className="absolute left-0 top-[256.63px] w-[268.046px] h-[269.797px] bg-[#f1f1f1] rounded-[6.291px] p-[15.729px]">
                <p className="text-[12.58px] leading-[14.156px] font-medium text-[#6b6b6b]" style={{ fontFamily: 'Geist, var(--font-sans)' }}>
                  Reviewing management cues on long-term partnerships
                </p>
              </div>

              {/* Card 4 - Bottom Right (Conviction) */}
              <div className="absolute left-[283.775px] top-[256.63px] w-[287.902px] h-[269.797px] bg-white rounded-[6.291px] p-[15.729px]" style={{ boxShadow: '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.08)' }}>
                <p className="text-[12.58px] leading-normal font-semibold text-[#ffe6e0]" style={{ fontFamily: 'Geist, var(--font-sans)' }}>
                  Conviction: Zero OAI status and USFDA approvals confirm late-phase scalability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-[295.055px] top-[32.561px] w-px h-[503.867px] bg-[#ebebeb]" />

        {/* Horizontal Divider */}
        <div className="absolute left-[21.281px] top-[283.774px] w-[571.677px] h-px bg-[#ebebeb]" />
      </div>
    </div>
  );
}