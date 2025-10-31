import React from 'react';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function ResearchInterfaceSection() {
  const exampleQueries = [
    'Analyze recent market trends',
    'Compare financial statements',
    'Identify investment opportunities',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Form/Interface */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-700">
              Start your research here
            </h2>

            <Card variant="default">
              <div className="space-y-4">
                <Button variant="primary" size="lg" className="w-full">
                  Try it now, it&apos;s free
                </Button>

                <div className="space-y-3">
                  <p className="text-sm font-semibold text-neutral-700">
                    Explore popular searches:
                  </p>
                  {exampleQueries.map((query, index) => (
                    <button
                      key={index}
                      className="w-full text-left p-3 rounded-md bg-neutral-100 hover:bg-neutral-200 transition-colors text-neutral-700 text-sm"
                    >
                      {query}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-200">
                  <p className="text-xs text-neutral-700">
                    Get instant access to comprehensive research analysis powered by AI
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Interface Preview */}
          <div>
            <Card variant="gradient">
              <div className="aspect-[4/3] bg-white/80 backdrop-blur rounded-lg p-6 flex items-center justify-center">
                <div className="text-center space-y-4 w-full">
                  <div className="space-y-2">
                    <div className="h-3 bg-neutral-200 rounded w-3/4 mx-auto"></div>
                    <div className="h-3 bg-neutral-200 rounded w-full"></div>
                    <div className="h-3 bg-neutral-200 rounded w-5/6 mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="h-20 bg-neutral-100 rounded"></div>
                    <div className="h-20 bg-neutral-100 rounded"></div>
                    <div className="h-20 bg-neutral-100 rounded"></div>
                    <div className="h-20 bg-neutral-100 rounded"></div>
                  </div>

                  <p className="text-sm text-neutral-700 pt-4">
                    Research Interface Preview
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
