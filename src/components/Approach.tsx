import React from 'react';
import { Ear, Search, Target, RefreshCw, CheckCircle2 } from 'lucide-react';
import { approachSteps } from '../data/firmData';

interface ApproachProps {
  onScheduleConsultation: () => void;
}

const stepIconMap: Record<string, React.ReactNode> = {
  Ear: <Ear className="w-5 h-5" />,
  Search: <Search className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  RefreshCw: <RefreshCw className="w-5 h-5" />,
};

export const Approach: React.FC<ApproachProps> = ({ onScheduleConsultation }) => {
  return (
    <section id="approach" className="py-16 md:py-24 bg-slate-soft/50 dark:bg-navy-900/60 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Our Approach
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            A Transparent, Four-Step Legal Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            Navigating a legal proceeding requires methodical preparation, statutory clarity, and disciplined execution at each stage.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {approachSteps.map((step, idx) => (
            <div 
              key={step.number}
              className="group flex flex-col p-6 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 shadow-xs hover:shadow-card hover:border-teal-500/40 dark:hover:border-teal-500/50 transition-all duration-300 text-left"
            >
              {/* Number & Icon Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-navy-800 dark:bg-navy-800 group-hover:bg-teal-600 dark:group-hover:bg-teal-600 text-gold-400 dark:text-gold-300 group-hover:text-white flex items-center justify-center font-bold text-lg font-serif transition-colors shadow-xs border border-navy-700 dark:border-navy-700">
                  {step.number}
                </div>
                <div className="w-9 h-9 rounded-lg bg-slate-soft dark:bg-navy-800 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/40 text-slate-muted dark:text-slate-400 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center justify-center transition-colors">
                  {stepIconMap[step.icon] || <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-1.5">
                {step.title}
              </h3>

              {/* Subtitle / Summary */}
              <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-2.5">
                {step.summary}
              </div>

              {/* Detailed Narrative */}
              <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400 leading-relaxed">
                {step.details}
              </p>

              {/* Step indicator footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 dark:border-navy-800 flex items-center gap-1.5 text-[11px] text-slate-subtle dark:text-slate-500">
                <span>Phase {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left transition-colors">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-800 dark:text-white">
              Ready to take the first step in resolving your legal matter?
            </h4>
            <p className="text-slate-muted dark:text-slate-400 text-xs sm:text-sm">
              Schedule an introductory intake session with our advocates.
            </p>
          </div>
          <button
            onClick={onScheduleConsultation}
            className="px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all shrink-0"
          >
            Start Initial Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
