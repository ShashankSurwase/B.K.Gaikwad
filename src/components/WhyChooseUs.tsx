import React from 'react';
import { Compass, UserCheck, Scale, MessagesSquare, GitBranch, Lock } from 'lucide-react';
import { whyChooseUsPillars } from '../data/firmData';

const pillarIcons: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  UserCheck: <UserCheck className="w-5 h-5 text-navy-800 dark:text-gold-400" />,
  Scale: <Scale className="w-5 h-5 text-gold-600 dark:text-gold-400" />,
  MessagesSquare: <MessagesSquare className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  GitBranch: <GitBranch className="w-5 h-5 text-navy-800 dark:text-teal-400" />,
  Lock: <Lock className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-soft/50 dark:bg-navy-900/60 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Firm Principles
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            Why Individuals & Businesses Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            Legal matters demand a disciplined equilibrium between aggressive courtroom advocacy and cautious pre-litigation analysis.
          </p>
        </div>

        {/* 6 Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {whyChooseUsPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 hover:border-teal-500/30 dark:hover:border-teal-500/50 hover:shadow-card transition-all duration-300 text-left relative group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-soft dark:bg-navy-800 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/40 border border-slate-200/70 dark:border-navy-700 flex items-center justify-center mb-4 transition-colors">
                {pillarIcons[item.icon] || <Scale className="w-5 h-5 text-navy-800 dark:text-gold-400" />}
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
