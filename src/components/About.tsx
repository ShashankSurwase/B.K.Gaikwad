import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Scale } from 'lucide-react';
import { firmConfig } from '../data/firmData';
import { getAssetUrl } from '../utils/assets';

interface AboutProps {
  onLearnApproach: () => void;
  onViewCertificates: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnApproach, onViewCertificates }) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-soft/40 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Office & Firm Credential Visuals */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              
              {/* Main Visual Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-card border border-slate-200 bg-white">
                <img
                  src={getAssetUrl('images/about-office.jpg')}
                  alt="Law firm chambers and client conference facility"
                  className="w-full h-[440px] object-cover object-center filter saturate-[0.95]"
                  loading="lazy"
                />
                
                {/* Subtle overlay card */}
                <div className="absolute inset-x-4 bottom-4 p-5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 text-left">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider">
                        <Scale className="w-3.5 h-3.5" />
                        <span>Bar Council Enrolment MAH/1647/1987</span>
                      </div>
                      <h4 className="font-serif text-base font-bold text-navy-800">
                        {firmConfig.chambersName}
                      </h4>
                      <p className="text-xs text-slate-muted">
                        Near District Court, Rajgurunagar (Pune) • High Court & District Judiciary
                      </p>
                    </div>
                    <button
                      onClick={onViewCertificates}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-navy-800 hover:bg-navy-900 text-gold-400 text-xs font-semibold shadow-xs transition-colors"
                    >
                      View Roll
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative accent block */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-36 h-36 bg-teal-500/10 rounded-2xl -z-10" />
              <div className="hidden sm:block absolute -top-6 -right-6 w-36 h-36 bg-navy-800/10 rounded-2xl -z-10" />
            </div>
          </div>

          {/* Right Column: Firm Narrative & Principles */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
            
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
                About The Practice
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-4xl font-bold text-navy-800 leading-tight">
                Grounded in Judicial Ethics, Dedicated to Resolving Complex Legal Matters.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-dark/90 leading-relaxed font-normal">
              <strong className="font-semibold text-navy-800">{firmConfig.name}</strong> (operating as <span className="font-medium text-navy-800">{firmConfig.altName}</span>) was established with a clear mandate: to provide principled legal advocacy and pragmatic counsel without needless ambiguity or procedural over-complication.
            </p>

            <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
              Founded on the bedrock of senior advocate courtroom experience dating back to 1987, the firm today combines deep familiarity with trial court procedures, land revenue codes, and civil jurisprudence with contemporary expertise in corporate advisory, consumer law, and certified counselling mediation.
            </p>

            {/* Core Commitments Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-800">Privilege & Uncompromising Confidentiality</h4>
                  <p className="text-xs sm:text-sm text-slate-muted">All documents, discussions, and advisory opinions are protected under professional legal privilege.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-800">Clear Procedural Timelines & Fact Analysis</h4>
                  <p className="text-xs sm:text-sm text-slate-muted">We conduct rigorous pre-litigation document examination to present you with clear, realistic legal options.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-navy-800">Compliance with Bar Council Standards</h4>
                  <p className="text-xs sm:text-sm text-slate-muted">Our practice operates strictly within the ethical framework of the Advocates Act, 1961 and the Bar Council of India rules.</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnApproach}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-xl shadow-sm hover:shadow transition-all group"
              >
                <span>Learn About Our Approach</span>
                <ArrowRight className="w-4 h-4 ml-2 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewCertificates}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-navy-800 bg-white hover:bg-slate-soft rounded-xl shadow-xs border border-slate-300 transition-colors"
              >
                <Shield className="w-4 h-4 mr-2 text-teal-600" />
                <span>Verify Bar Council Enrolment</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
