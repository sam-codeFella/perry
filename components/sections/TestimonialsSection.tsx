import React from 'react';
import Card from '../ui/Card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: 'Trow brings so much peace and substance to my work',
      author: 'Sarah Johnson',
      role: 'Senior Research Analyst',
      company: 'Investment Partners LLC',
    },
    {
      quote: 'It saves hours that the clutter in my head was holding me back',
      author: 'Michael Chen',
      role: 'Portfolio Manager',
      company: 'Alpha Capital',
    },
    {
      quote: 'It saves me precious minutes with - a connection to expert and a dynamic knowledge base',
      author: 'Emily Rodriguez',
      role: 'Financial Advisor',
      company: 'Wealth Management Co',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-700 mb-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="bordered" className="relative">
              {/* Quote Icon */}
              <div className="text-primary text-5xl mb-4 opacity-20">
                &ldquo;
              </div>

              <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="mt-auto">
                <p className="font-semibold text-neutral-700">
                  {testimonial.author}
                </p>
                <p className="text-sm text-neutral-700">
                  {testimonial.role}
                </p>
                <p className="text-sm text-neutral-700">
                  {testimonial.company}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
