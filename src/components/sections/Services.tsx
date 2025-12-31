import React from 'react';
import { Search, Target, TrendingUp, BarChart3, Zap, Users } from 'lucide-react';
import { useContactDialog } from '@/contexts/ContactDialogContext';

const services = [
  {
    icon: Search,
    title: 'Google Ads Management',
    description: 'Strategic search campaigns that put your business at the top of search results when customers are actively looking for your services.',
  },
  {
    icon: Target,
    title: 'Meta Ads Mastery',
    description: 'Precision-targeted Facebook & Instagram campaigns that reach your ideal audience with compelling creative that converts.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven strategies tailored to your business goals. We analyze, optimize, and scale your paid media for maximum ROI.',
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Real-time dashboards and comprehensive reports that give you complete visibility into your campaign performance.',
  },
  {
    icon: Zap,
    title: 'Conversion Optimization',
    description: 'Landing page optimization and A/B testing to ensure every click has the highest chance of becoming a customer.',
  },
  {
    icon: Users,
    title: 'Audience Building',
    description: 'Build and nurture custom audiences. Retargeting strategies that keep your brand top-of-mind throughout the buyer journey.',
  },
];

const Services: React.FC = () => {
  const { openDialog } = useContactDialog();

  return (
    <section id="services" className="relative py-24 md:py-32 bg-particle-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block py-1 px-4 border border-particle-text/20 rounded-full text-xs font-mono text-particle-text/60 tracking-widest uppercase mb-6">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-particle-text tracking-tight mb-6">
            Paid Growth,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] to-[#1877F2]">
              Perfected
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-particle-text/60">
            We combine creative excellence with data-driven precision to deliver campaigns that don't just reach audiences—they move them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={openDialog}
              className="group relative p-8 rounded-2xl border border-particle-text/10 bg-particle-text/5 backdrop-blur-sm hover:border-particle-text/30 hover:bg-particle-text/10 transition-all duration-500 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4285F4] to-[#1877F2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-particle-text mb-3">
                {service.title}
              </h3>
              <p className="text-particle-text/60 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
