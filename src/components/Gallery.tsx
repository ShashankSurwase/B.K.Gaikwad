import React, { useState } from 'react';
import { Building, Newspaper, Trophy, Users, Award, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface GalleryItem {
  id: string;
  category: 'chambers' | 'media' | 'awards' | 'functions';
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  imageUrl?: string;
  icon?: React.ElementType;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Records', value: 'all' },
    { label: 'Chambers & Library', value: 'chambers' },
    { label: 'News & Media', value: 'media' },
    { label: 'Awards & Honors', value: 'awards' },
    { label: 'Court & Functions', value: 'functions' },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'chambers-suite',
      category: 'chambers',
      title: 'Advocate Chambers & Consultation Suite',
      subtitle: 'Shivanushka Advocate Chambers',
      description: 'Dedicated consultation chambers equipped for confidential client conferences, strategic briefs, and multi-party conciliations.',
      tag: 'Chambers Architecture',
      imageUrl: getAssetUrl('images/firm-architecture.jpg'),
      icon: Building,
    },
    {
      id: 'chambers-library',
      category: 'chambers',
      title: 'Judicial Repository & Law Library',
      subtitle: 'Statutory Research & Precedent Wing',
      description: 'Extensive private archive housing Supreme Court Cases (SCC), All India Reporter (AIR), state land enactments, and procedural digests.',
      tag: 'Legal Library',
      imageUrl: getAssetUrl('images/about-office.jpg'),
      icon: Building,
    },
    {
      id: 'media-notices',
      category: 'media',
      title: 'Newspaper Publications & Press Coverage',
      subtitle: 'Public Notices, Title Searches & Court News',
      description: 'Documented archive of statutory 30-year title public notices, press updates on trial outcomes, and legal columns in leading Marathi and English dailies.',
      tag: 'Press & Clippings',
      imageUrl: getAssetUrl('images/hero-legal.jpg'),
      icon: Newspaper,
    },
    {
      id: 'bar-felicitation',
      category: 'awards',
      title: '35-Year Courtroom Milestone & Bar Felicitation',
      subtitle: 'All-India Courtroom Practice & Senior Heritage',
      description: 'Recognizing continuous senior courtroom practice since December 1987 (MAH/1647/1987) with exemplary fidelity to judicial standards.',
      tag: 'Senior Heritage Award',
      icon: Trophy,
    },
    {
      id: 'bar-functions',
      category: 'functions',
      title: 'Bar Association Engagements & Court Conferences',
      subtitle: 'Bench-Bar Conclaves & Lok Adalat Panels',
      description: 'Active leadership in Rajgurunagar Bar Association functions, National Lok Adalat settlements, and professional development seminars.',
      tag: 'Judicial Functions',
      icon: Users,
    },
    {
      id: 'counselling-distinction',
      category: 'awards',
      title: 'Interdisciplinary Counselling & Wellbeing Distinction',
      subtitle: 'Medhavi Skills University & Brainway Research',
      description: 'Honored credentials in Basic Counselling Skills, Mental Health Literacy, and Brain Science integrated into pre-litigation family settlements.',
      tag: 'Academic Distinction',
      icon: Award,
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-navy-950 border-t border-slate-100 dark:border-navy-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-400">
            Heritage & Visual Records
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-navy-800 dark:text-white leading-tight">
            Gallery
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
          <p className="text-slate-muted dark:text-slate-400 text-base leading-relaxed pt-1">
            A visual record of our 35+ years of courtroom heritage, chamber facilities, newspaper publications, bar functions, and judicial milestones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.value
                  ? 'bg-navy-800 dark:bg-gold-500 text-white dark:text-navy-950 shadow-sm'
                  : 'bg-slate-soft dark:bg-navy-900 text-slate-muted dark:text-slate-300 hover:bg-slate-200/80 dark:hover:bg-navy-800 border border-slate-200/70 dark:border-navy-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item) => {
            const IconComponent = item.icon || ImageIcon;
            return (
              <div
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 overflow-hidden hover:border-gold-500/50 hover:shadow-card transition-all duration-300"
              >
                <div>
                  {/* Visual Top Frame */}
                  {item.imageUrl ? (
                    <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100 dark:bg-navy-950">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.03]"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-navy-900/85 text-gold-300 border border-gold-400/30 backdrop-blur-xs">
                          <IconComponent className="w-3 h-3 text-gold-400" />
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-56 sm:h-60 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-6 flex flex-col justify-between text-white">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-white/10 text-gold-300 border border-gold-400/30">
                          <IconComponent className="w-3 h-3 text-gold-400" />
                          {item.tag}
                        </span>
                        <Award className="w-5 h-5 text-gold-400/60" />
                      </div>
                      <div>
                        <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-3">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-white leading-snug">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gold-300/90 font-medium mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Body Content */}
                  <div className="p-6 space-y-2.5">
                    {item.imageUrl && (
                      <div>
                        <h4 className="font-serif text-lg font-bold text-navy-800 dark:text-white leading-snug group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    )}
                    <p className="text-xs text-slate-muted dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="px-6 pb-5 pt-0 flex items-center justify-between border-t border-slate-100 dark:border-navy-800/80 mt-2">
                  <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500 capitalize">
                    {item.category === 'chambers' ? 'Chambers Facility' : item.category === 'media' ? 'Press & Legal Notices' : item.category === 'awards' ? 'Honors & Credentials' : 'Bar Engagement'}
                  </span>
                  <span className="text-[11px] font-semibold text-navy-800 dark:text-gold-400 group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                    Verified
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
