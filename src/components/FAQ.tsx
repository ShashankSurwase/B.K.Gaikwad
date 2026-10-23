import React, { useState } from 'react';
import { ChevronDown, AlertCircle } from 'lucide-react';
import { faqs } from '../data/firmData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-md border border-teal-200/60 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-800">
            Clear Answers to Common Legal Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-muted">
            General guidance on consultation procedures, fee structures, and document handling.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 rounded-xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-soft/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-navy-800">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-soft flex items-center justify-center shrink-0 text-navy-800 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-50 text-teal-700' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-muted leading-relaxed border-t border-slate-100 bg-slate-soft/20 text-left">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informational Disclaimer Box */}
        <div className="mt-12 p-4 rounded-xl bg-gold-50/70 border border-gold-200/80 flex items-start gap-3 text-left">
          <AlertCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-dark leading-relaxed">
            <strong className="font-semibold text-navy-800">Important Note:</strong> Answers provided above are for general informational awareness only. Legal timelines, statutory strategies, court fees, and judicial outcomes vary significantly based on the specific facts, evidence, and jurisdiction of each case.
          </p>
        </div>

      </div>
    </section>
  );
};
