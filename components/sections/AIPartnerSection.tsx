import React from 'react';
import Card from '../ui/Card';

export default function AIPartnerSection() {
  const partners = [
    {
      title: '24/7 Research Analyst',
      description: 'Get instant answers to complex research questions anytime, powered by advanced AI that never sleeps.',
      gradient: 'from-orange-400 to-orange-500',
    },
    {
      title: 'Risk Metrics that Work',
      description: 'Comprehensive risk analysis with actionable metrics that help you make informed investment decisions.',
      gradient: 'from-orange-400 to-red-500',
    },
    {
      title: 'News Van - Industry News Analytics',
      description: 'Real-time industry news analysis that identifies trends and opportunities before the market reacts.',
      gradient: 'from-red-400 to-pink-500',
    },
    {
      title: 'Industry Benchmarking Performance',
      description: 'Compare performance across industries with detailed benchmarking data and competitive insights.',
      gradient: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4">
            Your AI Partner for Faster, Smarter Company Research
          </h2>
        </div>

        {/* AI Partner Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} variant="default" className="hover:shadow-lg transition-shadow">
              {/* Gradient Circle Icon */}
              <div className="mb-6">
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${partner.gradient} mx-auto flex items-center justify-center`}>
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-lg font-semibold text-neutral-700 mb-3">
                  {partner.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
