import React from 'react';
import { Phone, Mail, MapPin, Shield, ChevronRight } from 'lucide-react';
import { firmConfig, practiceAreas } from '../data/firmData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'disclaimer') => void;
  onSelectPracticeArea: (areaId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onSelectPracticeArea }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          
          {/* Column 1: Brand & Introduction (4 cols) */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center border border-navy-700 shadow-xs">
                <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                  {firmConfig.name}
                </h3>
                <p className="text-xs text-teal-400 font-medium">
                  {firmConfig.altName} • {firmConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Established legal chambers in Maharashtra offering comprehensive advocacy in civil litigation, property disputes, corporate compliance, and alternative dispute resolution under the Advocates Act, 1961.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-[11px] text-slate-300">
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                <span>Bar Council of Maharashtra & Goa Accredited</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About the Firm</a></li>
              <li><a href="#practice-areas" className="hover:text-gold-400 transition-colors">Practice Areas</a></li>
              <li><a href="#approach" className="hover:text-gold-400 transition-colors">Our Approach</a></li>
              <li><a href="#team" className="hover:text-gold-400 transition-colors">Our Legal Team</a></li>
              <li><a href="#why-us" className="hover:text-gold-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-gold-400 transition-colors">Frequently Asked</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Chamber Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Selected Practice Areas (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              {practiceAreas.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => onSelectPracticeArea(pa.id)}
                    className="hover:text-gold-400 transition-colors text-left flex items-center gap-1.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-teal-500 group-hover:translate-x-0.5 transition-transform" />
                    <span className="line-clamp-1">{pa.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Chamber Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              Chambers
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">{firmConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold-400 transition-colors text-slate-300">
                  {firmConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${firmConfig.email}`} className="hover:text-gold-400 transition-colors text-slate-300">
                  {firmConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Bar Council of India Legal Notice */}
        <div className="py-6 border-b border-navy-800/80 text-left">
          <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800 text-[11px] leading-relaxed text-slate-400 space-y-1.5">
            <p className="font-semibold text-slate-200 uppercase tracking-wide">
              Bar Council of India Regulatory Disclaimer (Rule 36, Bar Council of India Rules):
            </p>
            <p>
              As per the rules of the Bar Council of India, advocates are prohibited from soliciting work or advertising in any form or manner. By accessing this website (<strong>{firmConfig.name} / {firmConfig.altName}</strong>), the user acknowledges that the information provided herein is solely available for informational purposes and does not create an advocate-client relationship. The website is not intended to be a source of advertising, solicitation, invitation, or inducement of any sort. The firm is not liable for any consequence of any action taken by the user relying on material or information provided on this website. For any specific legal matter, independent legal advice should always be sought.
            </p>
          </div>
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {firmConfig.name} & {firmConfig.altName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button
              onClick={() => onOpenPolicy('disclaimer')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Legal Disclaimer
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-gold-400 transition-colors underline-offset-2 hover:underline"
            >
              Terms of Use
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
