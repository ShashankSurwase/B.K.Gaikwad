import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Calendar, MessageCircle } from 'lucide-react';
import { firmConfig } from '../data/firmData';

interface FloatingActionsProps {
  onBookConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookConsultation }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Action Bar (App-like UX) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-navy-950/95 backdrop-blur-md border-t border-slate-200 dark:border-navy-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
        <a
          href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
          className="flex-1 py-2 px-2.5 rounded-lg bg-slate-soft dark:bg-navy-900 text-navy-800 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 border border-slate-200 dark:border-navy-700"
        >
          <Phone className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
          <span>Call Now</span>
        </a>

        <a
          href={`https://wa.me/${firmConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20Lawyers%20Associates,%20I%20would%20like%20to%20inquire%20about%20legal%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-2.5 rounded-lg bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onBookConsultation}
          className="flex-1 py-2 px-2.5 rounded-lg bg-navy-800 dark:bg-teal-600 text-white text-xs font-semibold flex items-center justify-center gap-1 shadow-xs"
        >
          <Calendar className="w-3.5 h-3.5 text-gold-400 dark:text-white" />
          <span>Consult</span>
        </button>
      </div>

      {/* Desktop / Tablet Floating Action Hub */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {/* WhatsApp Quick Action */}
        <a
          href={`https://wa.me/${firmConfig.phone.replace(/[^0-9]/g, '')}?text=Hello%20Lawyers%20Associates,%20I%20would%20like%20to%20inquire%20about%20legal%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-11 h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-card flex items-center justify-center transition-all hover:scale-105"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        {/* Floating Quick Call Button */}
        <a
          href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
          className="w-11 h-11 rounded-full bg-navy-800 dark:bg-teal-600 hover:bg-navy-900 dark:hover:bg-teal-500 text-white shadow-card flex items-center justify-center transition-all hover:scale-105 border border-navy-700 dark:border-teal-400"
          title={`Call Chambers: ${firmConfig.phone}`}
          aria-label="Call Advocate Chambers"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white dark:bg-navy-900 hover:bg-slate-soft dark:hover:bg-navy-800 text-navy-800 dark:text-slate-200 shadow-md border border-slate-200 dark:border-navy-700 flex items-center justify-center transition-all hover:-translate-y-0.5"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </>
  );
};
