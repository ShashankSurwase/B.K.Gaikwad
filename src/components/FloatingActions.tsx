import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Calendar } from 'lucide-react';
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
      {/* Floating Action Container */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        
        {/* Quick Consultation Pill (Desktop & Tablet) */}
        <button
          onClick={onBookConsultation}
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-navy-800 hover:bg-navy-900 text-white shadow-card hover:shadow-card-hover border border-navy-700 text-xs font-semibold transition-all group"
          title="Schedule Initial Consultation"
        >
          <Calendar className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
          <span>Book Consultation</span>
        </button>

        {/* Floating Quick Call Button */}
        <a
          href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
          className="w-12 h-12 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-card flex items-center justify-center transition-all hover:scale-105"
          title={`Call Chambers: ${firmConfig.phone}`}
          aria-label="Call Advocate Chambers"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Back to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-soft text-navy-800 shadow-md border border-slate-200 flex items-center justify-center transition-all hover:-translate-y-0.5"
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
