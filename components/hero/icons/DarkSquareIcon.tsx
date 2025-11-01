import React from 'react';

interface DarkSquareIconProps {
  className?: string;
}

export default function DarkSquareIcon({ className = '' }: DarkSquareIconProps) {
  return (
    <div
      className={`w-10 h-10 bg-[#1a1a1a] rounded-[5.714px] flex-shrink-0 ${className}`}
      aria-hidden="true"
    />
  );
}