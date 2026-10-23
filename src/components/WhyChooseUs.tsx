import React from 'react';
import { Compass, UserCheck, Scale, MessagesSquare, GitBranch, Lock } from 'lucide-react';
import { whyChooseUsPillars } from '../data/firmData';

const pillarIcons: Record<string, React.ReactNode> = {
  Compass: <Compass className="w-5 h-5 text-teal-600" />,
  UserCheck: <UserCheck className="w-5 h-5 text-navy-800" />,
  Scale: <Scale className="w-5 h-5 text-gold-600" />,
  MessagesSquare: <MessagesSquare className="w-5 h-5 text-teal-600" />,
  GitBranch: <GitBranch className="w-5 h-5 text-navy-800" />,
  Lock: <Lock className="w-5 h-5 text-teal-600" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-soft/30 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Professional Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            Why Individuals & Businesses Trust Our Counsel
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            Legal matters demand a disciplined equilibrium between aggressive courtroom advocacy and cautious pre-litigation analysis.
          </p>
        </div>

        {/* 6 Editorial Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-500/30 hover:shadow-card transition-all duration-300 text-left relative group"
            >
              <div className="w-11 h-11 rounded-xl bg-slate-soft group-hover:bg-teal-50 border border-slate-200/70 flex items-center justify-center mb-5 transition-colors">
                {pillarIcons[item.icon] || <Scale className="w-5 h-5 text-navy-800" />}
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-800 group-hover:text-teal-700 transition-colors mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
