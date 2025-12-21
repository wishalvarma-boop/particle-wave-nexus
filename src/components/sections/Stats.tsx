import React from 'react';

const stats = [
  { value: '$50M+', label: 'Ad Spend Managed' },
  { value: '320%', label: 'Avg. ROAS' },
  { value: '150+', label: 'Brands Scaled' },
  { value: '98%', label: 'Client Retention' },
];

const Stats: React.FC = () => {
  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-particle-bg to-[#0a0a12]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#34A853] to-[#1877F2] mb-2">
                {stat.value}
              </div>
              <div className="text-particle-text/50 text-sm md:text-base uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
