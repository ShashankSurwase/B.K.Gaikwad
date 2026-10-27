import React, { useState } from 'react';
import { 
  Scale, ShieldAlert, Briefcase, Building2, HeartHandshake, 
  FileText, Users2, Gavel, FileCheck, ArrowRight, CheckCircle2 
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
  Briefcase: <Briefcase className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  HeartHandshake: <HeartHandshake className="w-5 h-5" />,
  FileText: <FileText className="w-5 h-5" />,
  Users2: <Users2 className="w-5 h-5" />,
  Gavel: <Gavel className="w-5 h-5" />,
  FileCheck: <FileCheck className="w-5 h-5" />,
};

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ 
  onSelectPracticeArea, 
  onBookConsultation 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Services (10)', value: 'all' },
    { label: 'Litigation & Courts', value: 'litigation' },
    { label: 'Property & Real Estate', value: 'property' },
    { label: 'Corporate & Commercial', value: 'corporate' },
    { label: 'Family & Matrimonial', value: 'family' },
    { label: 'Documentation & Contracts', value: 'documentation' },
  ];

  const filteredAreas = activeCategory === 'all'
    ? practiceAreas
    : practiceAreas.filter(p => p.category === activeCategory);

  return (
    <section id="practice-areas" className="py-16 md:py-24 bg-white dark:bg-navy-950 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Practice Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            Comprehensive Legal Advisory & Trial Advocacy
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            Specialized representation tailored for individuals, families, businesses, and institutions with strict adherence to professional standards.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-navy-800 dark:bg-teal-600 text-white shadow-xs'
                  : 'bg-slate-soft dark:bg-navy-900 text-slate-dark dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-navy-800 border border-transparent dark:border-navy-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 hover:border-teal-500/40 dark:hover:border-teal-500/50 hover:shadow-card-hover transition-all duration-300 relative text-left"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-soft dark:bg-navy-800 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/40 text-navy-800 dark:text-slate-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 flex items-center justify-center transition-colors border border-slate-200/70 dark:border-navy-700">
                    {practiceIconMap[area.icon] || <Scale className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-subtle dark:text-slate-400 bg-slate-100 dark:bg-navy-800 px-2 py-0.5 rounded border border-slate-200/60 dark:border-navy-700">
                    {area.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-bold text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mb-2.5 leading-snug">
                  {area.title}
                </h3>

                {/* Card Short Description */}
                <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400 leading-relaxed mb-5">
                  {area.shortDesc}
                </p>

                {/* Key Preview Bullets */}
                <div className="space-y-1.5 mb-5 pt-2 border-t border-slate-100 dark:border-navy-800">
                  {area.keyServices.slice(0, 2).map((srv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-dark dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-navy-800 flex items-center justify-between">
                <button
                  onClick={() => onSelectPracticeArea(area)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 dark:text-teal-400 hover:text-teal-900 dark:hover:text-teal-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Learn More & Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                </button>
                <button
                  onClick={onBookConsultation}
                  className="text-xs text-navy-800 dark:text-gold-400 hover:text-teal-700 dark:hover:text-gold-300 font-medium underline underline-offset-4"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
