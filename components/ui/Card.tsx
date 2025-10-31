import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'bordered';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variantStyles = {
    default: 'bg-white shadow-sm border border-neutral-200',
    gradient: 'bg-gradient-to-br from-primary-100 to-white',
    bordered: 'border-2 border-neutral-300 bg-white',
  };

  return (
    <div className={`rounded-lg p-6 ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
