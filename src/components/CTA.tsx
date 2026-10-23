import React from 'react';
import { Phone, ChevronRight, ShieldCheck } from 'lucide-react';
import { firmConfig } from '../data/firmData';

interface CTAProps {
  onContactClick: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-slate-soft via-white to-slate-soft border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-card space-y-6 relative overflow-hidden">
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-teal-500/10 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-navy-800/10 blur-2xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-semibold border border-teal-200/60">
            <ShieldCheck className="w-4 h-4 text-teal-600" />
            <span>Confidential & Professional Counsel</span>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 tracking-tight max-w-2xl mx-auto">
            Have a Legal Question? Start with a Conversation.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-muted max-w-xl mx-auto leading-relaxed">
            Connect with our team to discuss your concerns and understand the possible next steps.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onContactClick}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-200 group border border-navy-700"
            >
              <span>Contact Lawyers’ Associates</span>
              <ChevronRight className="w-5 h-5 ml-2 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-navy-800 bg-slate-soft hover:bg-slate-200/80 rounded-xl transition-all duration-200 border border-slate-300"
            >
              <Phone className="w-4 h-4 mr-2 text-teal-600" />
              <span>Chamber: {firmConfig.phone}</span>
            </a>
          </div>

          <p className="text-xs text-slate-subtle">
            All introductory inquiries are evaluated under advocate-client confidentiality guidelines.
          </p>

        </div>

      </div>
    </section>
  );
};
