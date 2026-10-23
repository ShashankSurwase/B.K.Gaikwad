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
  Scale: <Scale className="w-6 h-6" />,
  ShieldAlert: <ShieldAlert className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Users2: <Users2 className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  FileCheck: <FileCheck className="w-6 h-6" />,
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
    <section id="practice-areas" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Our Legal Practice Areas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            Comprehensive Legal Advisory & Trial Advocacy
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            Specialized legal services tailored for individuals, families, businesses, and institutions with strict adherence to professional standards.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-navy-800 text-white shadow-sm'
                  : 'bg-slate-soft text-slate-dark hover:bg-slate-200/70'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Practice Area Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAreas.map((area) => (
            <div
              key={area.id}
              className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-500/40 hover:shadow-card-hover transition-all duration-300 relative text-left"
            >
              <div>
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-slate-soft group-hover:bg-teal-50 text-navy-800 group-hover:text-teal-600 flex items-center justify-center transition-colors border border-slate-200/70">
                    {practiceIconMap[area.icon] || <Scale className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-subtle bg-slate-100 px-2 py-0.5 rounded">
                    {area.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-xl font-bold text-navy-800 group-hover:text-teal-700 transition-colors mb-3 leading-snug">
                  {area.title}
                </h3>

                {/* Card Short Description */}
                <p className="text-sm text-slate-muted leading-relaxed mb-6">
                  {area.shortDesc}
                </p>

                {/* Key Preview Bullets */}
                <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
                  {area.keyServices.slice(0, 2).map((srv, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-dark">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{srv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectPracticeArea(area)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-teal-700 hover:text-teal-900 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Learn More & Scope</span>
                  <ArrowRight className="w-4 h-4 text-teal-600" />
                </button>
                <button
                  onClick={onBookConsultation}
                  className="text-xs text-navy-800 hover:text-navy-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-navy-800"
                >
                  Consult
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Configurable Note */}
        <div className="mt-12 p-4 rounded-xl bg-slate-soft/70 border border-slate-200/80 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-muted">
            <span className="font-semibold text-navy-800">Need legal assistance in another matter?</span> Our advocates also advise on municipal property compliance, tenancy disputes, and banking debt tribunals. Contact our chambers directly to discuss case viability.
          </p>
        </div>

      </div>
    </section>
  );
};
