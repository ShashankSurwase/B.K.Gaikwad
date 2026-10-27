import React, { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { faqs } from '../data/firmData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-soft/50 dark:bg-navy-900/60 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-900/40 px-3 py-1 rounded-md border border-teal-200/60 dark:border-teal-700/50 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800 dark:text-white">
            Clear Answers to Common Legal Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-muted dark:text-slate-400">
            General guidance on consultation procedures, fee structures, and document handling.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 dark:border-navy-800 rounded-xl overflow-hidden transition-all duration-200 bg-white dark:bg-navy-900 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-soft/50 dark:hover:bg-navy-800/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-navy-800 dark:text-white">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-soft dark:bg-navy-800 flex items-center justify-center shrink-0 text-navy-800 dark:text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-400' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-muted dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-navy-800 bg-slate-soft/20 dark:bg-navy-950/30 text-left">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-10 p-4 rounded-xl bg-gold-50/70 dark:bg-navy-900 border border-gold-200/80 dark:border-navy-700 flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-dark dark:text-slate-300 leading-relaxed">
            <strong className="font-semibold text-navy-800 dark:text-white">Important Note:</strong> Answers provided above are for general informational awareness only. Legal timelines, statutory strategies, court fees, and judicial outcomes vary based on the specific facts, evidence, and jurisdiction of each case.
          </p>
        </div>

      </div>
    </section>
  );
};
