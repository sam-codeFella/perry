import React from 'react';
import Card from '../ui/Card';

export default function FeaturesSection() {
  const features = [
    {
      title: 'Comprehensive Research',
      description: 'Access insights from multiple sources compiled into actionable intelligence',
      icon: '📊',
    },
    {
      title: 'Source-Linked Insights',
      description: 'Every answer comes with verified sources for transparency and accuracy',
      icon: '🔗',
    },
    {
      title: 'Real-Time Updates',
      description: 'Stay current with the latest market information and research findings',
      icon: '⚡',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4">
            Accelerate your research with instant, accurate and source-linked insights
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto">
            Transform your research workflow with AI-powered analysis that delivers
            comprehensive insights from multiple critical sources
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card key={index} variant="bordered">
              <div className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-700">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Showcases */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature Demo 1 */}
          <div className="space-y-4">
            <Card>
              <div className="aspect-[4/3] bg-neutral-100 rounded flex items-center justify-center">
                <div className="text-center text-neutral-700">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm">Research Interface Preview</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Feature Demo 2 */}
          <div className="space-y-4">
            <Card>
              <div className="aspect-[4/3] bg-neutral-100 rounded flex items-center justify-center">
                <div className="text-center text-neutral-700">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Data Analysis View</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
