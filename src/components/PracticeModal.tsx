import React from 'react';
import { X, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { PracticeArea } from '../types';

interface PracticeModalProps {
  area: PracticeArea | null;
  isOpen: boolean;
  onClose: () => void;
  onConsult: (areaTitle: string) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({
  area,
  isOpen,
  onClose,
  onConsult
}) => {
  if (!isOpen || !area) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-navy-900 text-white flex items-start justify-between border-b border-navy-800">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-400 bg-teal-950/80 px-2.5 py-0.5 rounded border border-teal-800">
              {area.category}
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-1.5 leading-tight">
              {area.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle mb-2">
              Practice Scope & Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-dark/90 leading-relaxed">
              {area.fullDesc}
            </p>
          </div>

          {/* Key Services Included */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle mb-3">
              Included Legal Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {area.keyServices.map((srv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-soft/80 border border-slate-200/70 text-xs text-navy-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Procedure */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle mb-2">
              Judicial & Procedural Roadmap
            </h4>
            <p className="text-xs sm:text-sm text-slate-muted leading-relaxed bg-navy-50/50 p-3.5 rounded-xl border border-navy-100">
              {area.procedure}
            </p>
          </div>

          {/* Required Documents */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-subtle mb-3 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-teal-600" />
              <span>Recommended Documents for Consultation</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-dark">
              {area.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-muted text-center sm:text-left">
            Schedule an initial consultation to discuss your specific facts.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-xs font-semibold text-slate-dark"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onConsult(area.title);
              }}
              className="flex-1 sm:flex-initial px-5 py-2 rounded-xl bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <span>Consult on this Matter</span>
              <ChevronRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
