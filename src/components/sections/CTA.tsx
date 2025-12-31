import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useContactDialog } from '@/contexts/ContactDialogContext';

const CTA: React.FC = () => {
  const { openDialog } = useContactDialog();

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#0a0a12] to-particle-bg overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4285F4]/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#1877F2]/10 rounded-full blur-[100px]" />

      <div className="container relative mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 border border-[#4285F4]/30 rounded-full text-sm text-[#4285F4] mb-8 bg-[#4285F4]/10">
            <Sparkles className="w-4 h-4" />
            <span>Free Growth Audit</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-particle-text tracking-tight mb-6">
            Ready to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4285F4] via-[#FBBC04] to-[#1877F2]">
              Accelerate
            </span>{' '}
            Your Growth?
          </h2>

          <p className="text-xl text-particle-text/60 mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation audit of your current paid media strategy. Discover hidden opportunities and learn how we can help you scale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={openDialog}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4285F4] to-[#1877F2] text-white rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Get Your Free Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={openDialog}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-particle-text/30 text-particle-text rounded-full font-bold text-lg hover:bg-particle-text/10 transition-all duration-300"
            >
              <span>Schedule a Call</span>
            </button>
          </div>

          <p className="mt-8 text-particle-text/40 text-sm">
            Join 150+ brands already scaling with Wish.All
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
