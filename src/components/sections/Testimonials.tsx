import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "wish.all transformed our digital presence. Our Google Ads ROAS went from 2x to 5x in just three months. They're not just running ads—they're building a growth machine.",
    author: 'Sarah Chen',
    role: 'CEO, TechFlow Solutions',
    rating: 5,
  },
  {
    quote: "The Meta campaigns they created for our e-commerce brand have been game-changing. Our customer acquisition cost dropped by 40% while revenue doubled.",
    author: 'Marcus Williams',
    role: 'Founder, Urban Essentials',
    rating: 5,
  },
  {
    quote: "Finally, an agency that actually delivers on their promises. Transparent reporting, constant optimization, and real results. Couldn't ask for a better partner.",
    author: 'Emily Rodriguez',
    role: 'CMO, HealthFirst',
    rating: 5,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-particle-bg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 border border-particle-text/20 rounded-full text-xs font-mono text-particle-text/60 tracking-widest uppercase mb-6">
            Client Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-particle-text tracking-tight">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34A853] to-[#4285F4]">
              Growth Leaders
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-particle-text/10 bg-gradient-to-b from-particle-text/5 to-transparent hover:border-particle-text/20 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FBBC04] text-[#FBBC04]" />
                ))}
              </div>
              <blockquote className="text-particle-text/80 text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-particle-text">{testimonial.author}</div>
                <div className="text-particle-text/50 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
