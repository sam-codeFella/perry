'use client';

import React from 'react';
import AnimatedInsights from './AnimatedInsights';

export default function InsightsOverlay() {
  return (
    <div
      className="absolute left-[160.8px] top-[130.65px] w-[614.239px] h-[568.989px] overflow-clip rounded-[19.255px]"
      style={{
        boxShadow: '0px 3.851px 3.851px 0px inset rgba(255, 255, 255, 0.2)',
      }}
    >
      <AnimatedInsights />
    </div>
  );
}