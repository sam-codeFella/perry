'use client';

import React from 'react';
import { motion } from 'framer-motion';
import HelpBubbleIcon from './icons/HelpBubbleIcon';

export default function AnimatedInsights() {
  // Animation variants for cards sliding in from right
  const cardVariants = {
    hidden: {
      x: 400,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative overflow-clip rounded-[19.255px] size-full">
      {/* Component 6 wrapper - removed overflow-clip to show cards */}
      <div className="absolute h-[409.731px] left-[0.2px] top-[22.5px] w-[479.723px]">
        {/* Inner container - positioning cards relative to Component 6 */}
        <div className="relative h-[307.495px] left-[36.18px] top-[41.68px] w-[394.788px]">
          {/* Card 1 - Top */}
          <motion.div
            className="absolute left-0 top-0 bg-white border-[#fbf4e4] border-[1.065px] border-solid rounded-[8px] z-10"
            style={{ boxShadow: '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.05)' }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-[9.437px] px-[15.729px]">
              <div className="bg-[#1a1a1a] rounded-[5.714px] shrink-0 size-[40px] my-[9.437px]" />
              <div className="py-[9.437px]">
                <p className="text-[12.58px] leading-normal font-medium text-[#413d45] w-[287.834px]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Evaluating Piramal's shift from generics to high-value CDMO operations
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - Middle Top (Gray) */}
          <motion.div
            className="absolute left-[60px] top-[70px] bg-[#f1f1f1] border-[#f9f9f9] border-[1.065px] border-solid rounded-[8px] z-10"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-[9.437px] px-[15.729px]">
              <div className="py-[9.437px]">
                <p className="text-[12.58px] leading-[14.156px] font-medium text-[#6b6b6b] w-[217.055px]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Tracking molecule progress across peptides, ADCs, and injectables
                </p>
              </div>
              <div className="bg-white rounded-[6.4px] shadow-[0px_3.146px_3.146px_0px_rgba(0,0,0,0.08)] shrink-0 size-[32px] my-[9.437px]">
                <HelpBubbleIcon />
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Middle Bottom (Gray) */}
          <motion.div
            className="absolute left-[60px] top-[140px] bg-[#f1f1f1] border-[#f9f9f9] border-[1.065px] border-solid rounded-[6.291px] z-10"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
          >
            <div className="flex items-start gap-[9.437px] px-[15.729px]">
              <div className="py-[9.437px]">
                <p className="text-[12.58px] leading-[14.156px] font-medium text-[#6b6b6b] w-[217.055px]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Reviewing management cues on long-term partnerships
                </p>
              </div>
              <div className="bg-white rounded-[6.4px] shadow-[0px_3.146px_3.146px_0px_rgba(0,0,0,0.08)] shrink-0 size-[32px] my-[9.437px]">
                <HelpBubbleIcon />
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Bottom (Conviction - Highlighted) */}
          <motion.div
            className="absolute left-0 top-[220px] bg-white border-[#fbf4e4] border-[1.065px] border-solid rounded-[6.291px] z-10"
            style={{ boxShadow: '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.08)' }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-start gap-[9.437px] px-[15.729px]">
              <div className="bg-[#1a1a1a] rounded-[5.714px] shrink-0 size-[40px] my-[9.437px]" />
              <div className="py-[9.437px]">
                <p className="text-[12.58px] leading-normal font-semibold text-[#ffe6e0] w-[286.261px]" style={{ fontFamily: 'var(--font-sans)' }}>
                  Conviction: Zero OAI status and USFDA approvals confirm late-phase scalability
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}