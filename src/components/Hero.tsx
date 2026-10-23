import React from 'react';
import { Shield, ChevronRight, Award, FileCheck2, Scale } from 'lucide-react';
import { firmConfig } from '../data/firmData';

interface HeroProps {
  onScheduleConsultation: () => void;
  onExploreServices: () => void;
  onViewCertificates: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScheduleConsultation,
  onExploreServices,
  onViewCertificates,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-soft/80 via-white to-slate-soft/30 pt-10 pb-20 md:pt-16 md:pb-28 border-b border-slate-200/60">
      {/* Subtle decorative background geometry */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-navy-800/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Regulatory & Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-50/80 border border-navy-200/70 text-navy-800 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              <span>Chambers of Balu K. Gaikwad & Associates</span>
              <span className="text-navy-300">•</span>
              <span className="text-teal-700 font-semibold">Advocates</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-800 leading-[1.12]">
                Trusted Legal Counsel.{' '}
                <span className="text-teal-600 block sm:inline">Clear Direction.</span>{' '}
                <span className="relative">
                  Stronger Outcomes.
                  <svg className="absolute -bottom-2 left-0 w-full text-gold-400/70" height="8" viewBox="0 0 300 8" fill="none">
                    <path d="M1 5.5C80 2 220 2 299 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </div>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-dark/85 leading-relaxed max-w-2xl font-normal">
              Practical legal guidance, thoughtful representation, and client-focused solutions for individuals, professionals, and businesses across civil, property, corporate, and dispute resolution matters.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <button
                onClick={onScheduleConsultation}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-200 group border border-navy-700"
              >
                <span>Schedule a Consultation</span>
                <ChevronRight className="w-5 h-5 ml-2 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-navy-800 bg-white hover:bg-slate-soft rounded-xl shadow-sm hover:shadow transition-all duration-200 border border-slate-300"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Anchors */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 sm:gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 font-serif font-bold text-lg sm:text-xl">
                  <Award className="w-4 h-4 text-gold-500" />
                  <span>1987</span>
                </div>
                <div className="text-xs text-slate-muted leading-snug">
                  Senior Founder Bar Enrolment
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 font-serif font-bold text-lg sm:text-xl">
                  <Scale className="w-4 h-4 text-teal-600" />
                  <span>BCI Verified</span>
                </div>
                <div className="text-xs text-slate-muted leading-snug">
                  Maha & Goa Bar Council
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 font-serif font-bold text-lg sm:text-xl">
                  <FileCheck2 className="w-4 h-4 text-navy-600" />
                  <span>100% Direct</span>
                </div>
                <div className="text-xs text-slate-muted leading-snug">
                  Advocate Case Scrutiny
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="/images/hero-legal.jpg"
                  alt="Law library and court chambers"
                  className="w-full h-[430px] sm:h-[480px] object-cover object-center filter saturate-[0.95] contrast-[1.05]"
                  loading="eager"
                />
                
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                        Official Legal Practice
                      </p>
                      <h4 className="font-serif text-base font-bold text-navy-800">
                        {firmConfig.name} • {firmConfig.altName}
                      </h4>
                      <p className="text-[12px] text-slate-muted">
                        District & Sessions Court • High Court of Bombay
                      </p>
                    </div>
                    <button
                      onClick={onViewCertificates}
                      title="Inspect Bar Council Certificates"
                      className="p-2.5 rounded-lg bg-navy-800 hover:bg-navy-900 text-gold-400 shadow-sm transition-all text-xs font-semibold flex items-center gap-1"
                    >
                      <Shield className="w-4 h-4" />
                      <span className="hidden sm:inline">Verify</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-white rounded-xl p-3 shadow-card border border-slate-200/90 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 border border-teal-200/60">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-navy-800">Bar Council Enrolled</div>
                  <div className="text-[11px] text-slate-muted">Advocates Act, 1961</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
