import React from 'react';

interface InsightCardProps {
  text: string;
  backgroundColor: string;
  textColor: string;
  isConviction?: boolean;
  className?: string;
}

export default function InsightCard({
  text,
  backgroundColor,
  textColor,
  isConviction = false,
  className = ''
}: InsightCardProps) {
  const isGrayCard = backgroundColor === '#f1f1f1';

  return (
    <div
      className={`relative rounded-[6.291px] ${className}`}
      style={{
        backgroundColor: backgroundColor === 'white' ? '#ffffff' : backgroundColor,
        boxShadow: isConviction
          ? '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.08)'
          : backgroundColor === 'white'
          ? '0px 3.146px 3.146px 0px rgba(0, 0, 0, 0.05)'
          : undefined
      }}
    >
      {/* Text Content */}
      <div className="absolute left-[15.729px] top-[25.166px] right-[15.729px] bottom-[25.166px] flex items-start">
        <p
          className="text-[12.58px] leading-[14.156px]"
          style={{
            color: textColor,
            fontFamily: 'Geist, var(--font-sans)',
            fontWeight: isConviction ? 600 : 500,
            lineHeight: isGrayCard ? '14.156px' : 'normal'
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}