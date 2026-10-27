import React from 'react';
import { ChevronRight, Award, Scale, Briefcase, Users } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onScheduleConsultation: () => void;
  onExploreServices: () => void;
  onViewCertificates: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onScheduleConsultation,
  onExploreServices,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-soft/70 via-white to-white dark:from-navy-950 dark:via-navy-900 dark:to-navy-950 pt-10 pb-16 sm:pt-14 sm:pb-24 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Direct Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-50 dark:bg-navy-800/80 border border-navy-200/70 dark:border-navy-700 text-navy-800 dark:text-gold-300 text-xs sm:text-sm font-semibold tracking-wide">
              <span>Lawyers’ Associates</span>
              <span className="text-navy-300 dark:text-navy-600">•</span>
              <span className="text-teal-700 dark:text-teal-400">Advocates & Legal Consultants</span>
            </div>

            {/* Headline (Inspired by Maheshwari & Co.) */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-navy-800 dark:text-white leading-[1.14]">
              Expert Legal Advisory:{' '}
              <span className="text-teal-600 dark:text-teal-400 block sm:inline">Your Rights,</span>{' '}
              <span className="relative">
                Our Priority.
                <svg className="absolute -bottom-2 left-0 w-full text-gold-400/80 dark:text-gold-500/60 hidden sm:block" height="6" viewBox="0 0 300 6" fill="none">
                  <path d="M1 4.5C80 1.5 220 1.5 299 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-dark/90 dark:text-slate-300 leading-relaxed max-w-2xl font-normal">
              Combining 35+ years of senior trial advocacy with modern commercial acumen. We provide strategic legal representation across civil litigation, property disputes, criminal defense, family law, and corporate contracts.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                onClick={onScheduleConsultation}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-200 group border border-navy-700 dark:border-teal-500"
              >
                <span>Schedule a Consultation</span>
                <ChevronRight className="w-5 h-5 ml-2 text-gold-400 dark:text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-navy-800 dark:text-slate-200 bg-white dark:bg-navy-900 hover:bg-slate-soft dark:hover:bg-navy-800 rounded-xl shadow-xs hover:shadow transition-all duration-200 border border-slate-300 dark:border-navy-700"
              >
                <span>Explore Practice Areas</span>
              </button>
            </div>

            {/* Maheshwari-Style Stats Counters */}
            <div className="pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-navy-800 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 dark:text-white font-serif font-bold text-2xl sm:text-3xl">
                  <Award className="w-5 h-5 text-gold-500 shrink-0" />
                  <span>35+</span>
                </div>
                <div className="text-xs text-slate-muted dark:text-slate-400 font-medium">
                  Years Courtroom Heritage
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 dark:text-white font-serif font-bold text-2xl sm:text-3xl">
                  <Briefcase className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>10+</span>
                </div>
                <div className="text-xs text-slate-muted dark:text-slate-400 font-medium">
                  Practice Domains
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 dark:text-white font-serif font-bold text-2xl sm:text-3xl">
                  <Scale className="w-5 h-5 text-navy-600 dark:text-gold-400 shrink-0" />
                  <span>6+</span>
                </div>
                <div className="text-xs text-slate-muted dark:text-slate-400 font-medium">
                  Courts & High Court
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-navy-800 dark:text-white font-serif font-bold text-2xl sm:text-3xl">
                  <Users className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />
                  <span>100%</span>
                </div>
                <div className="text-xs text-slate-muted dark:text-slate-400 font-medium">
                  Direct Advocate Scrutiny
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Photographic Frame (Uncluttered) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 border border-slate-200 dark:border-navy-700 bg-slate-100 dark:bg-navy-900">
                <img
                  src={getAssetUrl('images/hero-legal.jpg')}
                  alt="Law library and court chambers"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center filter saturate-[0.98] contrast-[1.02]"
                  loading="eager"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
