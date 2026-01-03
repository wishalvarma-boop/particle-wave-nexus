import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Service</h1>
        <p className="text-particle-text/60 mb-12">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-particle-text/80 max-w-3xl">
          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using Wish.All's services, you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">2. Services</h2>
            <p className="leading-relaxed">
              Wish.All provides digital marketing and advertising services, including but not limited to 
              Google Ads management, Meta Ads campaigns, performance analytics, and growth strategy consulting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">3. Client Responsibilities</h2>
            <p className="leading-relaxed mb-4">As a client, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Pay all fees associated with our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">4. Payment Terms</h2>
            <p className="leading-relaxed">
              Payment terms will be outlined in your service agreement. Late payments may result in 
              service suspension or termination.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content, designs, and strategies created by Wish.All remain our intellectual property 
              unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              Wish.All shall not be liable for any indirect, incidental, or consequential damages 
              arising from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">7. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate the service agreement with 30 days written notice. 
              Upon termination, you agree to pay for all services rendered up to the termination date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-particle-text mb-4">8. Contact</h2>
            <p className="leading-relaxed">
              For questions about these Terms of Service, please contact us at hello@wish.all.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
