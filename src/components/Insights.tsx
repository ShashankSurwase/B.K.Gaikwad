import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, BookOpen } from 'lucide-react';
import { insightArticles } from '../data/firmData';
import { InsightArticle } from '../types';

interface InsightsProps {
  onSelectArticle: (article: InsightArticle) => void;
  onBookConsultation: () => void;
}

export const Insights: React.FC<InsightsProps> = ({ onSelectArticle, onBookConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { label: 'All Insights', value: 'all' },
    { label: 'Judicial Pronouncements', value: 'Judicial Pronouncements' },
    { label: 'Regulatory Updates', value: 'Regulatory Updates' },
    { label: 'Commercial Advisory', value: 'Commercial Advisory' },
    { label: 'Procedural Guides', value: 'Procedural Guides' },
  ];

  const filteredArticles = activeCategory === 'all'
    ? insightArticles
    : insightArticles.filter(a => a.category === activeCategory);

  const featuredArticle = filteredArticles[0];
  const listArticles = filteredArticles.slice(1);

  return (
    <section id="insights" className="py-16 md:py-24 bg-white dark:bg-navy-950 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Recent Blogs & Insights
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            Statutory Perspectives & Commentary
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            Authoritative analysis on landmark judicial pronouncements, regulatory amendments, and trial procedures in India.
          </p>
        </div>

        {/* Category Filter Tabs */}
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

        {/* Editorial Layout: Featured Article + Article List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 items-start">
          
          {/* Left Column: Featured Highlight Article (7 cols) */}
          {featuredArticle && (
            <div className="lg:col-span-7">
              <div 
                onClick={() => onSelectArticle(featuredArticle)}
                className="group cursor-pointer rounded-2xl bg-slate-soft/50 dark:bg-navy-900/50 border border-slate-200/90 dark:border-navy-800 hover:border-teal-500/40 dark:hover:border-teal-500/50 hover:shadow-card transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between text-left h-full"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/50 uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-muted dark:text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-slate-muted dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {featuredArticle.summary}
                  </p>

                  {/* Core Takeaway */}
                  <div className="pt-2 space-y-1.5">
                    <div className="text-[11px] font-bold text-navy-800 dark:text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                      <span>Core Takeaway:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-dark/90 dark:text-slate-300 italic bg-white dark:bg-navy-800 p-3 rounded-xl border border-slate-200/80 dark:border-navy-700">
                      "{featuredArticle.keyTakeaways[0]}"
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-200/80 dark:border-navy-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-dark dark:text-slate-300 font-medium">
                    <User className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                    <span>{featuredArticle.author}</span>
                  </div>

                  <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-navy-800 dark:text-teal-400 group-hover:text-teal-600 transition-colors">
                    <span>Read Analysis</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Stacked Article List (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            {listArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200/90 dark:border-navy-800 hover:border-teal-500/40 dark:hover:border-teal-500/50 hover:shadow-card transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-800 text-slate-dark dark:text-slate-300 uppercase tracking-wider border border-slate-200/60 dark:border-navy-700">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-muted dark:text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <h4 className="font-serif text-base sm:text-lg font-bold text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors leading-snug mb-1.5">
                  {article.title}
                </h4>

                <p className="text-xs text-slate-muted dark:text-slate-400 line-clamp-2 leading-relaxed mb-2.5">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-navy-800 text-xs">
                  <span className="text-slate-muted dark:text-slate-400 text-[11px]">By {article.author}</span>
                  <span className="text-navy-800 dark:text-teal-400 font-semibold group-hover:text-teal-600 inline-flex items-center gap-1 text-[11px]">
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3 text-teal-600 dark:text-teal-400 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-slate-soft dark:bg-navy-900 border border-slate-200/80 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left transition-colors">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-800 dark:text-white">
              Seeking specialized legal perspective on your matter?
            </h4>
            <p className="text-slate-muted dark:text-slate-400 text-xs sm:text-sm">
              Our advocates provide bespoke case evaluation and clear legal options under the Advocates Act, 1961.
            </p>
          </div>
          <button
            onClick={onBookConsultation}
            className="px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 text-white font-semibold text-sm shadow-md transition-all shrink-0"
          >
            Consult With Our Counsel
          </button>
        </div>

      </div>
    </section>
  );
};
