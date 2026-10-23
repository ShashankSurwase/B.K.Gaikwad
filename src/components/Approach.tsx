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
    <section id="approach" className="py-20 md:py-28 bg-slate-soft/50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Our Client Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            A Transparent, Four-Step Legal Roadmap
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            Navigating a legal proceeding requires methodical preparation, statutory clarity, and disciplined execution at each stage.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Line (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/4 left-12 right-12 h-0.5 bg-gradient-to-r from-teal-500/20 via-navy-800/30 to-gold-500/40 -z-0" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {approachSteps.map((step, idx) => (
              <div 
                key={step.number}
                className="group flex flex-col p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-card hover:border-teal-500/40 transition-all duration-300 text-left"
              >
                {/* Number & Icon Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-navy-800 group-hover:bg-teal-600 text-gold-400 group-hover:text-white flex items-center justify-center font-bold text-lg font-serif transition-colors shadow-sm">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-slate-soft group-hover:bg-teal-50 text-slate-muted group-hover:text-teal-600 flex items-center justify-center transition-colors">
                    {stepIconMap[step.icon] || <CheckCircle2 className="w-5 h-5" />}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-navy-800 group-hover:text-teal-700 transition-colors mb-2">
                  {step.title}
                </h3>

                {/* Subtitle / Summary */}
                <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-3">
                  {step.summary}
                </div>

                {/* Detailed Narrative */}
                <p className="text-sm text-slate-muted leading-relaxed">
                  {step.details}
                </p>

                {/* Step indicator footer */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-slate-subtle">
                  <span>Phase {idx + 1} of 4</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-navy-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Ready to take the first step in resolving your legal matter?
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm">
              Schedule an introductory intake session with our advocates.
            </p>
          </div>
          <button
            onClick={onScheduleConsultation}
            className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all shrink-0"
          >
            Start Initial Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
