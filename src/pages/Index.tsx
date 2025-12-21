import ParticleEffectHero from "@/components/ui/particle-effect-for-hero";
import FloatingAdIcons from "@/components/FloatingAdIcons";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="relative bg-particle-bg">
      {/* Floating Ad Icons - Fixed position, reacts to scroll */}
      <FloatingAdIcons />
      
      {/* Hero Section */}
      <ParticleEffectHero />
      
      {/* Main Content */}
      <main>
        <Services />
        <Stats />
        <About />
        <Testimonials />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
