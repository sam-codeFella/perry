import React from 'react';
import Button from '../ui/Button';

export default function FooterCTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-400">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          Unlock financial AI for your firm
        </h2>

        <Button
          variant="secondary"
          size="lg"
          className="bg-white text-primary hover:bg-neutral-100"
        >
          Get Started Free
        </Button>
      </div>
    </section>
  );
}
