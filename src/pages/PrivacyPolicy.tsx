import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-particle-bg text-particle-text">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-particle-text/60 hover:text-particle-text transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-particle-text/60 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-particle-text/80 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">
              We collect information you provide directly to us, such as when you fill out a contact form, 
              subscribe to our newsletter, or communicate with us. This may include your name, email address, 
              phone number, and any other information you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide customer service</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and website</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">3. Information Sharing</h2>
            <p className="leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except as necessary to provide our services or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">4. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">5. Cookies</h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience on our website. 
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">6. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or delete your personal information. 
              Contact us at hello@wish.all to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">7. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at hello@wish.all.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
