import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Shield, ChevronRight } from 'lucide-react';
import { firmConfig } from '../data/firmData';

interface NavbarProps {
  onBookConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'practice-areas', 'approach', 'team', 'why-us', 'faq', 'contact'];
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
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Practice Areas', href: '#practice-areas', id: 'practice-areas' },
    { name: 'Our Approach', href: '#approach', id: 'approach' },
    { name: 'Legal Team', href: '#team', id: 'team' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Advisory Bar */}
      <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="inline-block w-2 h-2 rounded-full bg-teal-400"></span>
            <span>Registered with Bar Council of Maharashtra & Goa | Est. 1987</span>
          </div>
          <div className="flex items-center gap-5 text-slate-300">
            <a 
              href={`tel:${firmConfig.phone.replace(/[^0-9+]/g, '')}`} 
              className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Chambers: {firmConfig.phone}</span>
            </a>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">Office: Mon–Sat 10:00 AM – 7:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'glass-nav shadow-card py-3 border-b border-slate-200/80' 
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Firm Monogram */}
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-lg bg-navy-800 text-gold-400 flex items-center justify-center shadow-md group-hover:bg-navy-900 transition-colors border border-navy-700">
                <svg className="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-2xl font-bold tracking-tight text-navy-800 group-hover:text-navy-950 transition-colors">
                    {firmConfig.name}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-200/60 hidden sm:inline-block">
                    Advocates
                  </span>
                </div>
                <span className="text-[12px] tracking-wide text-slate-muted font-medium">
                  {firmConfig.altName} • {firmConfig.tagline}
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3.5 py-2 text-sm font-medium transition-all rounded-md relative ${
                      isActive
                        ? 'text-navy-800 font-semibold'
                        : 'text-slate-dark/80 hover:text-navy-800 hover:bg-slate-soft'
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

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-navy-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <span>Book a Consultation</span>
                <ChevronRight className="w-4 h-4 ml-1.5 text-gold-400" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onBookConsultation}
                className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-navy-800 rounded-md"
              >
                Consult
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-dark hover:text-navy-800 hover:bg-slate-soft focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl space-y-1">
            <div className="py-2 text-xs font-semibold uppercase tracking-wider text-slate-subtle px-3">
              Menu Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-navy-50 text-navy-800 font-semibold'
                    : 'text-slate-dark hover:bg-slate-soft'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-subtle" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 mt-2 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-base font-semibold text-white bg-navy-800 hover:bg-navy-900 rounded-lg shadow-sm"
              >
                <Shield className="w-4 h-4 text-gold-400" />
                <span>Book a Consultation</span>
              </button>
              <div className="text-center text-xs text-slate-muted">
                Direct Chambers: <span className="font-semibold text-navy-800">{firmConfig.phone}</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
