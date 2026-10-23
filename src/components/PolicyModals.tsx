import React from 'react';
import { X, Scale } from 'lucide-react';
import { firmConfig } from '../data/firmData';

export type PolicyType = 'privacy' | 'terms' | 'disclaimer' | null;

interface PolicyModalProps {
  type: PolicyType;
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModals: React.FC<PolicyModalProps> = ({ type, isOpen, onClose }) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-gold-400" />
            <h3 className="font-serif text-xl font-bold text-white capitalize">
              {type === 'privacy' && 'Privacy & Confidentiality Policy'}
              {type === 'terms' && 'Terms of Website Use'}
              {type === 'disclaimer' && 'Legal & Bar Council Disclaimer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-dark leading-relaxed">
          {type === 'disclaimer' && (
            <>
              <div className="p-3 bg-gold-50 border border-gold-200 rounded-lg text-xs font-medium text-navy-800">
                Rule 36 of the Bar Council of India Rules prohibits advocates from advertising, soliciting work, or seeking publicity through public media.
              </div>
              <h4 className="font-serif font-bold text-navy-800 text-base">Informational Purpose Only</h4>
              <p>
                The information provided on this website is for general informational awareness only and should not be construed as formal legal advice on any subject matter. No recipients of content from this site, clients or otherwise, should act or refrain from acting on the basis of any content included without seeking appropriate legal or other professional advice from an advocate licensed in their relevant jurisdiction.
              </p>
              <h4 className="font-serif font-bold text-navy-800 text-base">No Advocate-Client Relationship</h4>
              <p>
                Browsing this website, submitting an inquiry via contact forms, or transmitting electronic messages does not create or constitute an advocate-client relationship between <strong>{firmConfig.name}</strong> / <strong>{firmConfig.altName}</strong> and the user. An advocate-client relationship is strictly established only upon formal conflict verification and written engagement.
              </p>
              <h4 className="font-serif font-bold text-navy-800 text-base">No Guarantees or Endorsements</h4>
              <p>
                The firm makes no warranties or representations of any kind regarding case outcomes, statutory timelines, or court fees, which depend entirely on individual facts and judicial discretion.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <h4 className="font-serif font-bold text-navy-800 text-base">Advocate-Client Privilege & Privilege Safeguards</h4>
              <p>
                Under Section 126 of the Indian Evidence Act, 1872, all formal confidential communications between client and advocate are protected by legal professional privilege. While exploratory website forms are handled with high diligence, please do not disclose trade secrets or sensitive evidence until formal engagement is confirmed.
              </p>
              <h4 className="font-serif font-bold text-navy-800 text-base">Collection of Information</h4>
              <p>
                We only collect information voluntarily submitted by you (such as your name, telephone number, email address, and general nature of your inquiry) for the sole purpose of scheduling consultations and performing conflict checks.
              </p>
              <h4 className="font-serif font-bold text-navy-800 text-base">Zero Commercial Data Sharing</h4>
              <p>
                We do not sell, rent, or lease your contact information or personal data to third parties, marketing agencies, or data brokers under any circumstances.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <h4 className="font-serif font-bold text-navy-800 text-base">Acceptance of Terms</h4>
              <p>
                By accessing and using this website, you agree to comply with and be bound by these Terms of Use and all applicable laws of the Republic of India.
              </p>
              <h4 className="font-serif font-bold text-navy-800 text-base">Intellectual Property Rights</h4>
              <p>
                All trademarks, emblems, original editorial content, and structure on this site are the property of {firmConfig.name} / {firmConfig.altName} and are protected under Indian copyright and intellectual property laws.
              </p>
              <h4 className="font-serif font-bold text-navy-800 text-base">Governing Jurisdiction</h4>
              <p>
                Any dispute arising out of or related to the use of this website shall be subject to the exclusive jurisdiction of the competent courts in Pune / Bombay High Court, Maharashtra, India.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
