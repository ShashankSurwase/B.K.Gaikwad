import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { firmConfig } from '../data/firmData';
import { getAssetUrl } from '../utils/assets';

interface AboutProps {
  onLearnApproach: () => void;
  onViewCertificates: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnApproach, onViewCertificates }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-soft/50 dark:bg-navy-900/60 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Office & Firm Visual */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 dark:border-navy-700 bg-white dark:bg-navy-950">
                <img
                  src={getAssetUrl('images/about-office.jpg')}
                  alt="Law firm chambers and client conference facility"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-center filter saturate-[0.98]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Firm Narrative & Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
                About The Firm
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-navy-800 dark:text-white leading-tight">
                Grounded in Judicial Ethics, Dedicated to Resolving Complex Legal Matters.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-dark/90 dark:text-slate-200 leading-relaxed font-normal">
              <strong className="font-semibold text-navy-800 dark:text-white">{firmConfig.name}</strong> (operating alongside <span className="font-medium text-navy-800 dark:text-white">{firmConfig.altName}</span>) was established with an uncompromising mandate: to deliver rigorous courtroom advocacy and pragmatic legal counsel without needless ambiguity or procedural over-complication.
            </p>

            <p className="text-slate-muted dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Founded on three and a half decades of senior trial advocacy dating back to 1987, our chambers integrate deep familiarity with civil procedures, land revenue codes, and criminal jurisprudence with specialized expertise in commercial contracts, consumer law, and certified counselling mediation.
            </p>

            {/* Core Commitments Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-800 dark:text-white">Strict Privilege & Uncompromising Confidentiality</h4>
                  <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400">All client records, strategic notes, and advisory disclosures are protected under Section 126 of the Evidence Act.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-800 dark:text-white">Transparent Case Evaluation & Timelines</h4>
                  <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400">We conduct comprehensive pre-litigation document examination to provide honest appraisals of procedural timelines and risks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-800 dark:text-white">Compliance with Bar Council of India Standards</h4>
                  <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400">Our advocates adhere strictly to the professional conduct and etiquette standards under the Advocates Act, 1961.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onLearnApproach}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-xl shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Our Approach</span>
                <ArrowRight className="w-4 h-4 ml-2 text-gold-400 dark:text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewCertificates}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-navy-800 dark:text-slate-200 bg-white dark:bg-navy-800 hover:bg-slate-soft dark:hover:bg-navy-700 rounded-xl shadow-xs border border-slate-300 dark:border-navy-700 transition-colors"
              >
                <Shield className="w-4 h-4 mr-2 text-teal-600 dark:text-teal-400" />
                <span>Verify Bar Council Enrolment</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
