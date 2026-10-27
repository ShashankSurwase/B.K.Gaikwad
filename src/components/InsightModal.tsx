import React, { useEffect } from 'react';
import { X, Calendar, Clock, User, Tag, BookOpen, ArrowRight, Shield } from 'lucide-react';
import { InsightArticle } from '../types';

interface InsightModalProps {
  article: InsightArticle | null;
  isOpen: boolean;
  onClose: () => void;
  onConsult: (articleTitle: string) => void;
}

export const InsightModal: React.FC<InsightModalProps> = ({
  article,
  isOpen,
  onClose,
  onConsult,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !article) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-navy-950/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-navy-950 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden border border-slate-200 dark:border-navy-800 text-left transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-5 sm:p-6 bg-slate-soft dark:bg-navy-900 border-b border-slate-200 dark:border-navy-800 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/50 uppercase tracking-wider">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-muted dark:text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-subtle" />
                <span>{article.date}</span>
                <span>•</span>
                <Clock className="w-3.5 h-3.5 text-slate-subtle" />
                <span>{article.readTime}</span>
              </div>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-800 dark:text-white leading-snug">
              {article.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-slate-dark/80 dark:text-slate-300 pt-0.5">
              <User className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>Authored by: <strong className="font-semibold text-navy-800 dark:text-white">{article.author}</strong></span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-muted hover:text-navy-800 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/70 dark:hover:bg-navy-800 transition-colors shrink-0"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-dark dark:text-slate-200 leading-relaxed">
          
          {/* Summary Callout */}
          <div className="p-4 rounded-xl bg-teal-50/60 dark:bg-navy-900 border border-teal-200/70 dark:border-teal-800 text-slate-dark dark:text-slate-200 text-sm sm:text-base font-medium leading-relaxed">
            <p>{article.summary}</p>
          </div>

          {/* Key Takeaways */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-navy-800 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-teal-600 dark:text-teal-400" />
              <span>Key Legal Takeaways</span>
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {article.keyTakeaways.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-soft dark:bg-navy-900 text-xs sm:text-sm text-slate-dark dark:text-slate-300 border border-slate-200/70 dark:border-navy-800">
                  <span className="w-5 h-5 rounded-full bg-navy-800 dark:bg-teal-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Detailed Analysis */}
          <div className="space-y-4 pt-2">
            <h4 className="font-serif text-lg font-bold text-navy-800 dark:text-white">
              Detailed Statutory Analysis
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-dark/90 dark:text-slate-300 leading-relaxed">
              {article.fullAnalysis.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200 dark:border-navy-800 flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-muted dark:text-slate-400 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Topics:</span>
            </span>
            {article.tags.map((tag, idx) => (
              <span key={idx} className="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-navy-800 text-slate-dark dark:text-slate-300 font-medium border border-slate-200/60 dark:border-navy-700">
                #{tag}
              </span>
            ))}
          </div>

          {/* Compliance Disclaimer */}
          <div className="p-3.5 rounded-lg bg-gold-50/60 dark:bg-navy-900 border border-gold-200/70 dark:border-navy-700 flex items-start gap-2.5 text-xs text-slate-dark dark:text-slate-300">
            <Shield className="w-4 h-4 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
            <p>
              <strong>Compliance Disclaimer:</strong> This article is published solely for general legal awareness and education under Bar Council of India guidelines. It does not constitute formal legal advice.
            </p>
          </div>

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-5 bg-slate-soft dark:bg-navy-900 border-t border-slate-200 dark:border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-muted dark:text-slate-400">
            Need advice regarding this topic?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-dark dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-navy-800 rounded-xl transition-colors w-full sm:w-auto text-center"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(article.title);
              }}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <span>Consult on this Matter</span>
              <ArrowRight className="w-4 h-4 text-gold-400 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
