import React, { useState, useEffect } from 'react';
import { Scale, CheckCircle2 } from 'lucide-react';
import { firmConfig } from '../data/firmData';

export const BCIDisclaimerModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('bci_disclaimer_accepted');
    if (!acknowledged) {
      // Show disclaimer on first visit after slight mount delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bci_disclaimer_accepted', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-navy-900 text-white flex items-center gap-3 border-b border-navy-800">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-gold-400 shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-white leading-tight">
              Bar Council of India Disclaimer
            </h3>
            <p className="text-xs text-slate-300">
              Regulatory compliance under Rule 36 of Bar Council of India Rules
            </p>
          </div>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-muted leading-relaxed max-h-[60vh] overflow-y-auto">
          <p className="font-medium text-navy-800">
            As per the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or advertising in any form or manner.
          </p>
          <p>
            By clicking <strong>“I Agree & Enter”</strong> below, you acknowledge and confirm that:
          </p>
          <ul className="space-y-2 pl-1">
            <li className="flex items-start gap-2 text-slate-dark text-xs">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
              <span>You are seeking information relating to <strong>{firmConfig.name}</strong> of your own accord and there has been no advertisement, personal communication, solicitation, or inducement by the firm or its advocates.</span>
            </li>
            <li className="flex items-start gap-2 text-slate-dark text-xs">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
              <span>The information provided under this website is solely available at your request for informational purposes only.</span>
            </li>
            <li className="flex items-start gap-2 text-slate-dark text-xs">
              <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
              <span>The contents of this website do not constitute legal advice and do not create an advocate-client relationship.</span>
            </li>
          </ul>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-navy-800 hover:bg-navy-900 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
          >
            I Agree & Enter Website
          </button>
        </div>
      </div>
    </div>
  );
};
