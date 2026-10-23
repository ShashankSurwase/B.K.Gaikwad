import React from 'react';
import { Users, ShieldCheck, MessageSquareQuote, Compass } from 'lucide-react';
import { valueProps } from '../data/firmData';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6 text-teal-600" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-navy-800" />,
  MessageSquareQuote: <MessageSquareQuote className="w-6 h-6 text-gold-600" />,
  Compass: <Compass className="w-6 h-6 text-teal-600" />,
};

export const TrustValues: React.FC = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-xl bg-slate-soft/50 hover:bg-white border border-slate-200/80 hover:border-teal-500/30 transition-all duration-200 hover:shadow-card text-left"
            >
              <div className="w-12 h-12 rounded-lg bg-white group-hover:bg-teal-50/80 border border-slate-200/70 flex items-center justify-center mb-4 transition-colors shadow-xs">
                {iconMap[item.icon] || <ShieldCheck className="w-6 h-6 text-navy-800" />}
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800 mb-1.5 group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
