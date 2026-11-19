import React from 'react';
import {
  Scale, ShieldAlert, Briefcase, Building2, HeartHandshake,
  FileText, Gavel, FileCheck, ArrowRight
} from 'lucide-react';
import { practiceAreas } from '../data/firmData';
import { PracticeArea } from '../types';

interface PracticeAreasProps {
  onSelectPracticeArea: (area: PracticeArea) => void;
  onBookConsultation: () => void;
}

const practiceIconMap: Record<string, React.ReactNode> = {
  Scale: <Scale className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  ShieldCheck: <Scale className="w-5 h-5" />,
  Briefcase: <Briefcase className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Gavel: <Gavel className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
};

export const PracticeAreas: React.FC<PracticeAreasProps> = ({
  onSelectPracticeArea,
}) => {
  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-slate-soft dark:bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            What We Do
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Areas of Practice
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="text-slate-muted dark:text-slate-400 text-base leading-relaxed pt-1">
            Comprehensive legal advocacy and trial representation across courts and tribunals across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className="group flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-navy-800 border border-slate-200/80 dark:border-navy-700 hover:border-l-4 hover:border-l-gold-500 hover:shadow-card transition-all duration-200 text-left"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-navy-700 text-navy-700 dark:text-slate-200 group-hover:bg-navy-800 group-hover:text-gold-400 flex items-center justify-center transition-colors">
                  {practiceIconMap[area.icon] || <Scale className="w-5 h-5" />}
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-navy-800 dark:text-white leading-snug">
                  {area.title}
                </h3>

                {/* Short desc */}
                <p className="text-sm text-slate-muted dark:text-slate-400 leading-relaxed">
                  {area.shortDesc}
                </p>
              </div>

              {/* Footer link */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-navy-700">
                <button
                  onClick={() => onSelectPracticeArea(area)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 group/link transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
