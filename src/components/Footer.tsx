import React from 'react';
import { MapPin, ChevronRight, Shield } from 'lucide-react';
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

          {/* Col 3: Contact Info (Both Offices) */}
          <div className="space-y-4">
            <div>
              <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Chamber Offices</h4>
            </div>

            {/* Office 1: Pune */}
            <div className="space-y-2 text-sm">
              <div className="font-semibold text-gold-400 text-xs uppercase tracking-wider">
                Principal Chambers (Pune / Khed)
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-snug">{firmConfig.address}</span>
              </div>
              <div className="flex items-center gap-3 pt-0.5 font-mono text-xs sm:text-sm font-semibold">
                <a href="tel:+917507095230" className="hover:text-gold-400 text-slate-200 transition-colors">
                  +91 75070 95230
                </a>
                <span>•</span>
                <a href="tel:+919850145197" className="hover:text-gold-400 text-slate-200 transition-colors">
                  +91 98501 45197
                </a>
              </div>
            </div>

            {/* Office 2: Tuljapur Associate Partner Chambers */}
            <div className="space-y-2 text-sm pt-3 border-t border-navy-800/80">
              <div className="font-semibold text-teal-400 text-xs uppercase tracking-wider">
                Associate Partner Chambers (Tuljapur / Dharashiv)
              </div>
              <div className="text-xs text-amber-300 font-semibold -mt-1">
                Chambers of Adv. Deepak Hundekar (Associate Partner)
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-200 leading-snug">
                  Kranti Lodge, Bhavani Road, Near Tuljabhavani Temple, Tuljapur, Dist. Dharashiv - 413601
                </span>
              </div>
              <div className="flex items-center gap-2 pt-0.5 font-mono text-xs sm:text-sm font-semibold">
                <a href="tel:+919890006200" className="hover:text-gold-400 text-slate-200 transition-colors">
                  +91 98900 06200
                </a>
              </div>
            </div>

            {/* Practice Areas quick list */}
            <div className="pt-4 border-t border-navy-800 space-y-2">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Practice Areas</div>
              <ul className="space-y-1.5 text-xs">
                {practiceAreas.slice(0, 5).map((pa) => (
                  <li key={pa.id}>
                    <button
                      onClick={() => onSelectPracticeArea(pa.id)}
                      className="hover:text-gold-400 transition-colors text-left text-slate-400 line-clamp-1"
                    >
                      {pa.title}
                    </button>
                  </li>
                ))}
              </ul>
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
