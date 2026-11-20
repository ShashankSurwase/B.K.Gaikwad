import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import { firmConfig } from '../data/firmData';
import { getAssetUrl } from '../utils/assets';

interface DisclaimerModalProps {
  forceOpen?: boolean;
  onCloseForce?: () => void;
}

export const DisclaimerModal: React.FC<DisclaimerModalProps> = ({ forceOpen = false, onCloseForce }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const [declined, setDeclined] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      setDeclined(false);
      return;
    }
    // Check if user has already accepted in this session
    const hasAccepted = sessionStorage.getItem('bkg_disclaimer_accepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  const handleProceed = () => {
    if (!isChecked) return;
    sessionStorage.setItem('bkg_disclaimer_accepted', 'true');
    setIsOpen(false);
    if (onCloseForce) onCloseForce();
  };

  const handleDecline = () => {
    setDeclined(true);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-navy-950/90 backdrop-blur-md overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      <div className="relative w-full max-w-2xl my-auto rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-500/40 shadow-2xl overflow-hidden flex flex-col text-left">
        
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold-500 via-teal-400 to-gold-500" />

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-navy-800 bg-navy-950/70">
          <div className="flex items-center gap-3.5 mb-2">
            <img
              src={getAssetUrl('images/logo.jpeg')}
              alt="Firm Logo"
              className="w-12 h-12 rounded-xl object-contain border border-gold-400/50 p-0.5 bg-navy-900 shadow-md shrink-0"
            />
            <div>
              <h2 id="disclaimer-title" className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide">
                {firmConfig.name}
              </h2>
              <p className="text-xs sm:text-sm text-gold-300 font-medium">
                Advocates, Legal Counsel & MindCare Counselling Chambers
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-bold uppercase tracking-wider mt-2">
            <Scale className="w-3.5 h-3.5 text-gold-400" />
            <span>Bar Council of India Rule 36 Disclaimer</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-4 max-h-[60vh] overflow-y-auto text-slate-200 text-xs sm:text-sm sm:leading-relaxed">
          {declined ? (
            <div className="p-5 rounded-xl bg-red-950/50 border border-red-700/60 text-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-red-300 font-bold text-base">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <span>Access Restricted</span>
              </div>
              <p className="text-sm">
                In strict compliance with the rules of the Bar Council of India, access to this website requires your voluntary acknowledgement of the disclaimer.
              </p>
              <p className="text-xs text-slate-300">
                If you wish to view information regarding our chambers and practice areas, please click below to review and accept the disclaimer.
              </p>
              <button
                type="button"
                onClick={() => setDeclined(false)}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-navy-800 hover:bg-navy-700 border border-slate-600 text-gold-300 text-xs font-semibold"
              >
                Return to Disclaimer
              </button>
            </div>
          ) : (
            <>
              <p className="text-justify text-slate-200">
                By accessing this website, you confirm that you are seeking information about <strong className="text-white font-medium">{firmConfig.name}</strong> of your own accord, with no solicitation, advertisement, personal communication, invitation, or inducement having taken place, in compliance with the Bar Council of India rules.
              </p>

              <p className="text-justify text-slate-200">
                The content provided herein is for informational purposes only, does not constitute legal advice, and does not create an advocate-client relationship. You are advised to seek independent legal counsel before acting on any information provided on this website.
              </p>

              <p className="text-justify text-slate-200">
                <strong className="text-white font-medium">{firmConfig.name}</strong> shall not be liable for any loss or consequence arising from reliance on the information contained herein. All information is subject to change without notice and may not be applicable to your specific circumstances or jurisdiction.
              </p>

              <p className="text-justify text-slate-200">
                The contents of this website are the intellectual property of <strong className="text-gold-300 font-medium">{firmConfig.name} – Advocates & Legal Counsel</strong> and may not be reproduced without prior written permission.
              </p>
            </>
          )}
        </div>

        {/* Footer & Acceptance */}
        {!declined && (
          <div className="p-5 sm:p-6 bg-navy-950 border-t border-navy-800 space-y-4">
            {/* Acceptance Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
                className="mt-0.5 w-4 h-4 rounded border-navy-600 text-gold-500 focus:ring-gold-400 bg-navy-900 cursor-pointer"
              />
              <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white">
                I have read and understood the above disclaimer.
              </span>
            </label>

            {/* Action Buttons */}
            <div className="flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={handleDecline}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-400 hover:text-white hover:bg-navy-900 border border-transparent hover:border-navy-700 transition-colors"
              >
                Decline & Exit
              </button>

              <button
                type="button"
                onClick={handleProceed}
                disabled={!isChecked}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md ${
                  isChecked
                    ? 'bg-gold-500 hover:bg-gold-400 text-navy-950 shadow-gold-glow cursor-pointer'
                    : 'bg-navy-800 text-slate-500 cursor-not-allowed border border-navy-700'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>PROCEED TO WEBSITE</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
