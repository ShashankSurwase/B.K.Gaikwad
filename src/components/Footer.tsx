import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Shield } from 'lucide-react';
import { firmConfig, practiceAreas } from '../data/firmData';

interface FooterProps {
  onSelectPracticeArea: (areaId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectPracticeArea }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-navy-800/80">

          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center border border-navy-700 shrink-0">
                <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                </svg>
              </div>
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

          {/* Col 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-white">Chambers</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">{firmConfig.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-gold-400 transition-colors">
                  {firmConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${firmConfig.email}`} className="hover:text-gold-400 transition-colors">
                  {firmConfig.email}
                </a>
              </li>
            </ul>

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
          </p>
        </div>

        {/* Bottom bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            © {currentYear} {firmConfig.name} & {firmConfig.altName}. All rights reserved.
          </div>
          <div className="text-[11px]">
            Advocates Act, 1961 · All-India Practice Rights under Section 30
          </div>
        </div>

      </div>
    </footer>
  );
};
