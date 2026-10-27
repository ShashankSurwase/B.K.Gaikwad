import React from 'react';
import { Users, ShieldCheck, MessageSquareQuote, Lock } from 'lucide-react';
import { valueProps } from '../data/firmData';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-navy-800 dark:text-gold-400" />,
  MessageSquareQuote: <MessageSquareQuote className="w-5 h-5 text-gold-600 dark:text-gold-400" />,
  Lock: <Lock className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
};

export const TrustValues: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-navy-950 border-b border-slate-200/70 dark:border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {valueProps.map((item, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-xl bg-slate-soft/50 dark:bg-navy-900/50 hover:bg-white dark:hover:bg-navy-900 border border-slate-200/80 dark:border-navy-800 hover:border-teal-500/40 dark:hover:border-teal-500/40 transition-all duration-200 hover:shadow-card text-left"
            >
              <div className="w-10 h-10 rounded-lg bg-white dark:bg-navy-800 border border-slate-200/70 dark:border-navy-700 flex items-center justify-center mb-3.5 transition-colors shadow-xs">
                {iconMap[item.icon] || <ShieldCheck className="w-5 h-5 text-navy-800 dark:text-gold-400" />}
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800 dark:text-white mb-1.5 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-muted dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
