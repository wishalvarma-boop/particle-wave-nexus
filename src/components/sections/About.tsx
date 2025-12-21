import React from 'react';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#0a0a12]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <span className="inline-block py-1 px-4 border border-particle-text/20 rounded-full text-xs font-mono text-particle-text/60 tracking-widest uppercase mb-6">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-particle-text tracking-tight mb-6">
              We Turn Ad Spend Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FBBC04] to-[#EA4335]">
                Revenue Engines
              </span>
            </h2>
            <p className="text-lg text-particle-text/60 mb-6 leading-relaxed">
              At wish.all, we believe every business deserves access to world-class paid media expertise. Founded by performance marketers with experience at top agencies and Fortune 500 brands, we bring enterprise-level strategies to ambitious businesses ready to scale.
            </p>
            <p className="text-lg text-particle-text/60 mb-8 leading-relaxed">
              We're not just another agency—we're your growth partners. Every campaign we run is backed by rigorous testing, transparent reporting, and an obsession with results.
            </p>
            
            <button className="group inline-flex items-center gap-3 px-6 py-3 border border-particle-text/30 text-particle-text rounded-full font-medium hover:bg-particle-text hover:text-particle-bg transition-all duration-300">
              <span>Our Story</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#4285F4]/20 via-[#1877F2]/10 to-transparent border border-particle-text/10 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-particle-text to-particle-text/30">
                  wish.all
                </div>
                <p className="text-particle-text/40 text-lg">Your Growth. Our Mission.</p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#4285F4]/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#1877F2]/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
