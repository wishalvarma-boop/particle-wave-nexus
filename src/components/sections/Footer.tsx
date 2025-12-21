import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050508] border-t border-particle-text/10 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#4285F4] to-[#1877F2] rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-lg">W</span>
              </div>
              <span className="text-particle-text font-bold text-xl">wish.all</span>
            </div>
            <p className="text-particle-text/50 text-sm leading-relaxed mb-6">
              Your trusted partner for paid growth. We help ambitious brands scale with Google Ads & Meta Ads.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-particle-text/20 flex items-center justify-center text-particle-text/60 hover:text-particle-text hover:border-particle-text/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-particle-text/20 flex items-center justify-center text-particle-text/60 hover:text-particle-text hover:border-particle-text/40 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-particle-text/20 flex items-center justify-center text-particle-text/60 hover:text-particle-text hover:border-particle-text/40 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-particle-text font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Google Ads Management</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Meta Ads Campaigns</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Performance Analytics</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Conversion Optimization</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Growth Strategy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-particle-text font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">About Us</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Case Studies</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Blog</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-particle-text font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#4285F4]" />
                <a href="mailto:hello@wish.all" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">hello@wish.all</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#34A853]" />
                <a href="tel:+1234567890" className="text-particle-text/50 hover:text-particle-text transition-colors text-sm">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FBBC04] mt-0.5" />
                <span className="text-particle-text/50 text-sm">123 Growth Street<br />San Francisco, CA 94102</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-particle-text/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-particle-text/40 text-sm">
            © {new Date().getFullYear()} wish.all. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-particle-text/40 hover:text-particle-text text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-particle-text/40 hover:text-particle-text text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
