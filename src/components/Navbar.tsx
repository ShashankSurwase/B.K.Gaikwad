import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Sun, Moon } from 'lucide-react';
import { firmConfig } from '../data/firmData';

interface NavbarProps {
  onBookConsultation: () => void;
  isDark: boolean;
  onToggleDark: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation, isDark, onToggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'practice-areas', 'about', 'team', 'approach', 'insights', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Practice Areas', href: '#practice-areas', id: 'practice-areas' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Attorneys', href: '#team', id: 'team' },
    { name: 'Our Approach', href: '#approach', id: 'approach' },
    { name: 'Insights', href: '#insights', id: 'insights' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-card py-3 border-b border-slate-200/80 dark:border-navy-800' 
          : 'bg-white/95 dark:bg-navy-950/95 py-3.5 sm:py-4 border-b border-slate-100 dark:border-navy-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Firm Monogram */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-navy-800 dark:bg-navy-900 text-gold-400 flex items-center justify-center shadow-md group-hover:bg-navy-900 dark:group-hover:bg-navy-800 transition-colors border border-navy-700/60 shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-navy-800 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {firmConfig.name}
                </span>
                <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal-50 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/50 hidden md:inline-block">
                  Advocates
                </span>
              </div>
              <span className="text-[11px] sm:text-[12px] tracking-wide text-slate-muted dark:text-slate-400 font-medium">
                {firmConfig.altName} • Advocates & Legal Consultants
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all rounded-md relative ${
                    isActive
                      ? 'text-navy-800 dark:text-white font-semibold'
                      : 'text-slate-dark/80 dark:text-slate-300 hover:text-navy-800 dark:hover:text-white hover:bg-slate-soft dark:hover:bg-navy-900'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-teal-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Phone Call */}
            <a
              href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden md:flex items-center gap-2 text-xs font-semibold text-slate-dark dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 transition-colors py-2 px-2.5 rounded-lg hover:bg-slate-soft dark:hover:bg-navy-900"
              title="Call Chambers Directly"
            >
              <div className="w-7 h-7 rounded-full bg-teal-50 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span>{firmConfig.phone}</span>
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleDark}
              type="button"
              className="p-2 rounded-lg text-slate-dark dark:text-slate-200 hover:bg-slate-soft dark:hover:bg-navy-900 border border-slate-200 dark:border-navy-700 transition-colors"
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Night Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Night Mode"}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-gold-400" />
              ) : (
                <Moon className="w-4 h-4 text-navy-800" />
              )}
            </button>

            {/* Consultation CTA */}
            <button
              onClick={onBookConsultation}
              className="inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-navy-700 dark:border-teal-500"
            >
              <span>Schedule Consultation</span>
              <ChevronRight className="w-4 h-4 ml-1 text-gold-400 dark:text-white" />
            </button>
          </div>

          {/* Mobile Right Controls: Dark Mode Toggle + Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onToggleDark}
              type="button"
              className="p-2 rounded-lg text-slate-dark dark:text-slate-200 hover:bg-slate-soft dark:hover:bg-navy-900 border border-slate-200 dark:border-navy-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-navy-800" />}
            </button>

            <button
              onClick={onBookConsultation}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-navy-800 dark:bg-teal-600 rounded-lg shadow-xs"
            >
              Consult
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-dark dark:text-slate-200 hover:bg-slate-soft dark:hover:bg-navy-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-navy-800 bg-white dark:bg-navy-950 px-4 pt-3 pb-6 shadow-2xl space-y-1 animate-fade-in text-left">
          <div className="py-2 text-xs font-semibold uppercase tracking-wider text-slate-subtle dark:text-slate-400 px-3">
            Navigation Menu
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-navy-50 dark:bg-navy-900 text-navy-800 dark:text-white font-semibold'
                  : 'text-slate-dark dark:text-slate-300 hover:bg-slate-soft dark:hover:bg-navy-900'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-subtle dark:text-slate-500" />
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 dark:border-navy-800 mt-2 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-navy-800 hover:bg-navy-900 dark:bg-teal-600 dark:hover:bg-teal-500 rounded-lg shadow-sm"
            >
              <span>Schedule a Consultation</span>
              <ChevronRight className="w-4 h-4 text-gold-400 dark:text-white" />
            </button>
            <a
              href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-navy-800 dark:text-slate-200 bg-slate-soft dark:bg-navy-900 rounded-lg border border-slate-200 dark:border-navy-700"
            >
              <Phone className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Call: {firmConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
