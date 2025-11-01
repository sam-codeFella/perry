import React from 'react';

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        {/* Section Heading */}
        <h2 className="text-[28px] font-semibold text-[#1a1a1a] leading-[1.2] text-center max-w-[1086px]">
          Accelerate your research with instant, accurate and source-linked insights
        </h2>

        {/* Feature Dashboard Image */}
        <div className="border border-[#d9d9d9] rounded-sm w-full max-w-[1082px]">
          <img
            src="/images/features/feature-dashboard.png"
            alt="KnowYourCompany.ai Dashboard showing Piramal Pharma analysis with financial metrics and insights"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}