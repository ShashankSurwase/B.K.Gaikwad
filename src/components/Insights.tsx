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
    <section id="insights" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Legal Insights & Updates
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            Thought Leadership & Statutory Perspectives
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            Analytical commentary on landmark judicial decisions, statutory amendments, and practical litigation procedures in India.
          </p>
        </div>

        {/* Category Filter Tabs */}
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

        {/* Editorial Layout: Featured Article + Article List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Featured Highlight Article (7 cols) */}
          {featuredArticle && (
            <div className="lg:col-span-7">
              <div 
                onClick={() => onSelectArticle(featuredArticle)}
                className="group cursor-pointer rounded-2xl bg-slate-soft/50 border border-slate-200/90 hover:border-teal-500/40 hover:shadow-card transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between text-left h-full"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-50 text-teal-700 border border-teal-200/60 uppercase tracking-wider">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-muted">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-800 group-hover:text-teal-700 transition-colors leading-tight">
                    {featuredArticle.title}
                  </h3>

                  <p className="text-slate-muted text-sm sm:text-base leading-relaxed">
                    {featuredArticle.summary}
                  </p>

                  {/* Key Takeaways preview */}
                  <div className="pt-2 space-y-2">
                    <div className="text-xs font-bold text-navy-800 uppercase tracking-wider flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-teal-600" />
                      <span>Core Takeaway:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-dark/90 italic bg-white p-3 rounded-xl border border-slate-200/80">
                      "{featuredArticle.keyTakeaways[0]}"
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-dark font-medium">
                    <User className="w-4 h-4 text-teal-600" />
                    <span>{featuredArticle.author}</span>
                  </div>

                  <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-navy-800 group-hover:text-teal-700 transition-colors">
                    <span>Read Full Analysis</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 text-teal-600 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Stacked Article List (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {listArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-500/40 hover:shadow-card transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-dark uppercase tracking-wider">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-muted">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-navy-800 group-hover:text-teal-700 transition-colors leading-snug mb-2">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-muted line-clamp-2 leading-relaxed mb-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-muted font-medium">By {article.author}</span>
                  <span className="text-navy-800 font-semibold group-hover:text-teal-700 inline-flex items-center gap-1">
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 text-teal-600 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-soft border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-800">
              Seeking specialized legal perspective on your matter?
            </h4>
            <p className="text-slate-muted text-xs sm:text-sm">
              Our advocates provide bespoke case evaluation and clear legal options under the Advocates Act, 1961.
            </p>
          </div>
          <button
            onClick={onBookConsultation}
            className="px-6 py-3 rounded-xl bg-navy-800 hover:bg-navy-900 text-white font-semibold text-sm shadow-md transition-all shrink-0"
          >
            Consult With Our Counsel
          </button>
        </div>

      </div>
    </section>
  );
};
