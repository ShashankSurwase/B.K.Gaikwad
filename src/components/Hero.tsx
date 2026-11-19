import React from 'react';
import { getAssetUrl } from '../utils/assets';
import { firmConfig } from '../data/firmData';
import { Shield, Scale, Brain, ChevronRight, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onScheduleConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleConsultation, onExploreServices }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-900 dark:bg-navy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[82vh] items-center">

          {/* Left: Content */}
          <div className="py-16 md:py-24 pr-0 lg:pr-12 space-y-7">

            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/40 text-gold-400 text-xs font-semibold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500 inline-block"></span>
              {firmConfig.name} · {firmConfig.tagline} · Est. {firmConfig.foundedYear}
            </div>

            {/* Headline */}
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight">
                Justice.
                <br />
                <span className="text-gold-400">Integrity.</span>
                <br />
                Excellence.
              </h1>
            </div>

            {/* Sub-headline / Heritage Quote */}
            <blockquote className="border-l-2 border-gold-400 pl-4 py-1 max-w-xl">
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                “Over 35+ years of distinguished trial advocacy and judicial experience across comprehensive civil, criminal, commercial, property, and appellate jurisdictions.”
              </p>
              <cite className="block text-xs text-gold-400/90 font-medium not-italic mt-2">
                — Grounded in courtroom heritage, committed to uncompromising integrity and justice.
              </cite>
            </blockquote>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onScheduleConsultation}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-lg shadow-gold-glow transition-all duration-200"
              >
                Book Consultation
              </button>
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                Explore Legal Practices
              </button>
            </div>

            {/* The Two Clear Front Doors (Legal is Major, Counselling is Allied) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Door 1: Legal Practice (Primary & Major Foundation) */}
              <div className="p-4 sm:p-5 rounded-xl bg-navy-800/80 border border-gold-500/40 relative group hover:border-gold-400 transition-all text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-400/30">
                    Primary Practice · 35+ Yrs
                  </span>
                  <Scale className="w-4 h-4 text-gold-400" />
                </div>
                <h3 className="font-serif text-base font-bold text-white leading-snug">
                  Legal Advocacy & Litigation
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                  Civil recovery, criminal defense, bail, land revenue, property title & commercial trials across India.
                </p>
                <button
                  onClick={onExploreServices}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300"
                >
                  <span>Explore Practice Areas</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Door 2: Dedicated Counselling Wing (Allied Specialized Division) */}
              <div className="p-4 sm:p-5 rounded-xl bg-navy-800/80 border border-teal-500/40 relative group hover:border-teal-400 transition-all text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-400/30">
                    Allied Wellness Division
                  </span>
                  <Brain className="w-4 h-4 text-teal-400" />
                </div>
                <h3 className="font-serif text-base font-bold text-white leading-snug">
                  MindCare & Life Counselling
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed line-clamp-2">
                  Certified guidance for Relationships, Stress, OCD support, Career transitions & Student wellbeing.
                </p>
                <a
                  href="#counselling"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300"
                >
                  <span>Explore Counselling Wing</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

          {/* Right: Image Frame */}
          <div className="hidden lg:block relative h-full min-h-[82vh]">
            <div className="absolute inset-0">
              <img
                src={getAssetUrl('images/hero-legal.jpg')}
                alt="Law chambers and court library"
                className="w-full h-full object-cover object-center opacity-60 filter contrast-[1.05]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/30 to-transparent" />
            </div>
          </div>

        </div>

        {/* Merged About Us & Practice Legacy Section */}
        <div className="py-14 sm:py-18 border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left title pillar */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 inline-flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                About Our Chambers
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                A Legacy of Principled Advocacy Across All Indian Courts
              </h2>
              <div className="h-0.5 w-16 bg-gold-500" />
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-navy-800 border border-navy-700 text-xs font-mono text-gold-300">
                  <Scale className="w-3.5 h-3.5 text-gold-400" />
                  <span>Advocates Act, 1961 · Section 30 All-India Right of Practice</span>
                </div>
              </div>
            </div>

            {/* Right narrative: Why Combined (Legal + MindCare) */}
            <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-white font-semibold">{firmConfig.name}</strong> (operating as <span className="text-slate-100 font-medium">{firmConfig.altName}</span>) was founded in 1987 by Senior Counsel Shri Balu K. Gaikwad. With over 35+ years of senior trial advocacy, our chambers provide comprehensive courtroom defense and legal counsel before District Courts, Sessions Forums, High Courts, and Tribunals across India.
              </p>
              <div className="p-4 rounded-xl bg-navy-800/60 border border-navy-700 space-y-1.5">
                <div className="text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-gold-400" />
                  <span>Integrated Practice: Legal Defense + Human Care</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Many legal disputes stem from emotional turmoil, acute stress, or broken communication. As a specialized allied service, our chambers house the <strong>Shivanushka MindCare & Counselling Wing</strong>, providing certified psychological support for relationships, stress, OCD traits, and career challenges—resolving human conflict before or alongside courtroom litigation.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
