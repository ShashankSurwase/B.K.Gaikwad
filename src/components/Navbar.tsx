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

      const sections = ['home', 'practice-areas', 'team', 'gallery', 'counselling', 'contact'];
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
    { name: 'Our Team', href: '#team', id: 'team' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Counselling', href: '#counselling', id: 'counselling' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-card border-b border-navy-800 py-3'
          : 'bg-navy-950 py-4 border-b border-navy-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center shadow-sm group-hover:bg-navy-700 transition-colors border border-navy-700 shrink-0">
              <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                <path d="M7 21h10" />
                <path d="M12 3v18" />
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                {firmConfig.name}
              </span>
              <span className="text-[11px] tracking-wide text-slate-400 font-medium">
                Advocates, Legal Counsel & Counselling Chambers
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium transition-all rounded-md relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors px-2 py-1.5 rounded-lg hover:bg-white/5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{firmConfig.phone}</span>
            </a>

            <button
              onClick={onToggleDark}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 border border-navy-800 transition-colors"
              aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Night Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-gold-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>

            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-lg shadow-gold-glow transition-all duration-200"
            >
              <span>Book Consultation</span>
              <ChevronRight className="w-4 h-4 text-navy-950" />
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onToggleDark}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 border border-navy-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-4 h-4 text-gold-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-navy-800 bg-navy-950 px-4 pt-3 pb-6 shadow-2xl space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? 'bg-navy-900 text-white font-semibold border-l-2 border-gold-500'
                  : 'text-slate-300 hover:bg-navy-900 hover:text-white'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
          <div className="pt-4 border-t border-navy-800 mt-2 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-lg shadow-gold-glow"
            >
              Book Consultation
              <ChevronRight className="w-4 h-4 text-navy-950" />
            </button>
            <a
              href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-navy-900 rounded-lg border border-navy-800"
            >
              <Phone className="w-4 h-4 text-teal-400" />
              <span>{firmConfig.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
