import React, { useState, useRef, useEffect } from 'react';
import {
  Scale, ShieldAlert, Briefcase, Building2, HeartHandshake,
  FileText, Gavel, FileCheck, ArrowRight, ChevronLeft, ChevronRight,
  Play, Pause, LayoutGrid, SlidersHorizontal, CheckCircle2, Shield
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
  onBookConsultation,
}) => {
  const [viewMode, setViewMode] = useState<'rolling' | 'grid'>('rolling');
  const [isRolling, setIsRolling] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef<boolean>(false);

  // Sync ref with state
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Duplicated list for seamless infinite loop
  const displayItems = [...practiceAreas, ...practiceAreas];

  // Smooth continuous horizontal scrolling (moving left to right / forward)
  useEffect(() => {
    if (viewMode !== 'rolling' || !isRolling) return;

    const el = carouselRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (isHoveredRef.current || !carouselRef.current) return;
      const { scrollLeft, scrollWidth } = carouselRef.current;
      const halfWidth = scrollWidth / 2;

      // When reaching half width, loop seamlessly back to 0
      if (scrollLeft >= halfWidth) {
        carouselRef.current.scrollLeft = scrollLeft - halfWidth;
      } else {
        carouselRef.current.scrollLeft += 1.2;
      }
    }, 28);

    return () => clearInterval(interval);
  }, [viewMode, isRolling]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 380;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="practice-areas" className="py-20 md:py-28 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white border-t border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Shield className="w-4 h-4 text-gold-400" />
              Areas of Legal Practice · 38+ Years Courtroom Heritage
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Trial Advocacy, Civil Litigation & Defense Jurisprudence
            </h2>
            <div className="h-0.5 w-20 bg-gold-500" />
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed pt-1">
              Rigorous representation before Judicial Magistrate First Class (JMFC), District & Sessions Courts, and Special Tribunals across Maharashtra and India.
            </p>
          </div>

          {/* Interactive Controls Bar */}
          <div className="flex items-center gap-2 self-start md:self-end shrink-0">
            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-navy-950/90 border border-navy-800">
              <button
                type="button"
                onClick={() => setViewMode('rolling')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  viewMode === 'rolling'
                    ? 'bg-gold-500 text-navy-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Continuous horizontal moving view"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Continuous Moving</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-gold-500 text-navy-950 shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
                title="Grid view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* Left / Right / Pause Buttons (Active in rolling mode) */}
            {viewMode === 'rolling' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setIsRolling(!isRolling)}
                  className="p-2 rounded-xl bg-navy-950 border border-navy-800 text-slate-300 hover:text-gold-400 hover:border-gold-500/50 transition-colors"
                  title={isRolling ? 'Pause Auto Scroll' : 'Resume Auto Scroll'}
                  aria-label={isRolling ? 'Pause' : 'Play'}
                >
                  {isRolling ? <Pause className="w-4 h-4 text-gold-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
                </button>
                <button
                  type="button"
                  onClick={() => handleManualScroll('left')}
                  className="p-2 rounded-xl bg-navy-950 border border-navy-800 text-slate-300 hover:text-white hover:border-gold-500/50 transition-colors"
                  title="Scroll left"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleManualScroll('right')}
                  className="p-2 rounded-xl bg-navy-950 border border-navy-800 text-slate-300 hover:text-white hover:border-gold-500/50 transition-colors"
                  title="Scroll right"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Continuous Rolling Mode */}
        {viewMode === 'rolling' ? (
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Edge Blur Gradients */}
            <div className="pointer-events-none absolute -left-1 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-navy-950 to-transparent hidden sm:block" />
            <div className="pointer-events-none absolute -right-1 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-navy-950 to-transparent hidden sm:block" />

            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scrollbar-none py-3 scroll-smooth no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {displayItems.map((area, index) => (
                <div
                  key={`${area.id}-${index}`}
                  className="w-[320px] sm:w-[380px] shrink-0 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-500/25 hover:border-gold-400/80 hover:shadow-card-hover transition-all duration-300 text-left group"
                >
                  <div className="space-y-4">
                    {/* Header Row: Icon + Category Badge */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors shadow-sm">
                        {practiceIconMap[area.icon] || <Scale className="w-6 h-6" />}
                      </div>
                      <span className="text-[11px] font-bold text-gold-300 bg-gold-500/10 border border-gold-400/30 px-3 py-1 rounded-full uppercase tracking-wider">
                        Trial & Advisory
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                      {area.title}
                    </h3>

                    {/* Short Description (Enlarged for 50+ Readability) */}
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {area.shortDesc}
                    </p>

                    {/* Key Services Preview Bullets */}
                    <div className="space-y-2 pt-2 border-t border-navy-800/80">
                      {area.keyServices.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Buttons */}
                  <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => onSelectPracticeArea(area)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-navy-750 text-gold-300 hover:text-white border border-gold-500/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Statutory Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-1 transition-colors shadow-sm shrink-0"
                    >
                      <span>Consult</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Hover Indicator Hint */}
            <div className="mt-3 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span>Continuously moving left to right · Hover over any box or button to pause</span>
            </div>
          </div>
        ) : (
          /* Grid View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-navy-900 to-navy-950 border border-gold-500/25 hover:border-gold-400/80 hover:shadow-card-hover transition-all duration-300 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-navy-800 text-gold-400 border border-gold-500/30 group-hover:bg-gold-500 group-hover:text-navy-950 flex items-center justify-center transition-colors shadow-sm">
                      {practiceIconMap[area.icon] || <Scale className="w-6 h-6" />}
                    </div>
                    <span className="text-[11px] font-bold text-gold-300 bg-gold-500/10 border border-gold-400/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      Trial & Advisory
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {area.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {area.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-navy-800/80">
                    {area.keyServices.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-navy-800 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectPracticeArea(area)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-navy-750 text-gold-300 hover:text-white border border-gold-500/30 text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Statutory Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={onBookConsultation}
                    className="py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs sm:text-sm font-bold flex items-center justify-center gap-1 transition-colors shadow-sm shrink-0"
                  >
                    <span>Consult</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
