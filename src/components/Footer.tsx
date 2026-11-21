import React from 'react';
import { ChevronRight, Shield } from 'lucide-react';
import { firmConfig, practiceAreas } from '../data/firmData';
import { getAssetUrl } from '../utils/assets';

interface FooterProps {
  onSelectPracticeArea: (areaId: string) => void;
  onOpenDisclaimer?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPracticeArea, onOpenDisclaimer }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-navy-800/80">

          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={getAssetUrl('images/logo.jpeg')}
                alt="B.K. Gaikwad and Associates Logo"
                className="w-11 h-11 rounded-xl object-contain border border-gold-400/50 bg-navy-900 p-0.5 shadow-md shrink-0"
              />
              <div>
                <h3 className="font-serif text-lg font-bold text-white">{firmConfig.name}</h3>
                <p className="text-xs text-gold-400/80">{firmConfig.altName} · {firmConfig.tagline}</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Established legal chambers offering comprehensive trial advocacy and legal consultancy in civil litigation, property disputes, criminal defense, corporate advisory, and dispute resolution across India.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-[11px] text-slate-300">
              <Shield className="w-3.5 h-3.5 text-teal-400" />
              <span>All-India Legal Practice · Advocates Act, 1961</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Practice Areas', href: '#practice-areas' },
                { label: 'Our Team', href: '#team' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Counselling', href: '#counselling' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-teal-500 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Practice Areas */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Practice Areas</h4>
            <ul className="space-y-2 text-xs">
              {practiceAreas.slice(0, 6).map((pa) => (
                <li key={pa.id}>
                  <button
                    onClick={() => onSelectPracticeArea(pa.id)}
                    className="hover:text-gold-400 transition-colors text-left text-slate-400 line-clamp-1 flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500/70 shrink-0" />
                    <span>{pa.title}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="pt-3">
              <a href="#contact" className="text-xs text-teal-400 hover:text-teal-300 font-semibold inline-flex items-center gap-1">
                <span>View Chamber Offices & Locations in Contact</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* BCI Disclaimer */}
        <div className="py-5 border-b border-navy-800/60">
          <p className="text-[11px] text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-400">Bar Council of India Disclaimer:</span>{' '}
            As per Rule 36 of the Bar Council of India Rules, advocates are prohibited from soliciting work or advertising in any form. By accessing this website, the user acknowledges that the information is solely for informational purposes and does not create an advocate-client relationship. Independent legal advice should always be sought for specific matters.
            {onOpenDisclaimer && (
              <button
                type="button"
                onClick={onOpenDisclaimer}
                className="ml-2 text-gold-400 hover:text-gold-300 underline font-semibold transition-colors cursor-pointer"
              >
                Review BCI Disclaimer Pop-up
              </button>
            )}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} {firmConfig.name}. All rights reserved.
          </div>
          <div className="text-[11px]">
            Advocates Act, 1961 · All-India Practice Rights under Section 30
          </div>
        </div>

      </div>
    </footer>
  );
};
