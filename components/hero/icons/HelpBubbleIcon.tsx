import React from 'react';

interface HelpBubbleIconProps {
  className?: string;
}

export default function HelpBubbleIcon({ className = '' }: HelpBubbleIconProps) {
  return (
    <div
      className={`w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        boxShadow: '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.08)'
      }}
      aria-hidden="true"
    >
      <span className="text-[#6b6b6b] text-xs font-medium">?</span>
    </div>
  );
}