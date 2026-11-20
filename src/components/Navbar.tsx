import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronRight, Mail, Heart } from 'lucide-react';
import { firmConfig } from '../data/firmData';
import { getAssetUrl } from '../utils/assets';

interface NavbarProps {
  onBookConsultation: () => void;
  isDark?: boolean;
  onToggleDark?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'practice-areas', 'counselling', 'team', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
    { name: 'Legal Practices', href: '#practice-areas', id: 'practice-areas' },
    { name: 'MindCare Wing', href: '#counselling', id: 'counselling' },
    { name: 'Our Team', href: '#team', id: 'team' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Contact & Dedicated Email Bar */}
      <div className="bg-navy-950 border-b border-navy-800/80 text-xs py-1.5 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-300 font-medium">
              <Mail className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>Legal Advisory:</span>
              <a href="mailto:gaikwad.legaladvisory@gmail.com" className="hover:text-white underline decoration-gold-400/40">
                gaikwad.legaladvisory@gmail.com
              </a>
            </span>
            <span className="text-navy-700">•</span>
            <span className="flex items-center gap-1.5 text-teal-300 font-medium">
              <Heart className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>MindCare Wing:</span>
              <a href="mailto:themindcare.counselling@gmail.com" className="hover:text-white underline decoration-teal-400/40">
                themindcare.counselling@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+917507095230" className="flex items-center gap-1.5 text-slate-200 hover:text-white font-mono">
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>+91 75070 95230 / +91 98501 45197</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-md shadow-card border-b border-navy-800 py-2.5'
            : 'bg-navy-950 py-3 border-b border-navy-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Left: Authentic B.K. Gaikwad and Associates Logo */}
            <a href="#home" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none min-w-0">
              <img
                src={getAssetUrl('images/logo.jpeg')}
                alt="B.K. Gaikwad and Associates Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl object-contain shadow-md border border-gold-400/50 shrink-0 bg-navy-900 p-0.5 group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col text-left min-w-0">
                <span className="font-serif text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors truncate">
                  {firmConfig.name}
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-wide text-slate-300 font-medium hidden xl:inline whitespace-nowrap">
                  Advocates, Legal Counsel & MindCare Counselling Chambers
                </span>
              </div>
            </a>

            {/* Middle: Desktop Navigation Links (Cleanly Aligned, Single Row No Wrapping) */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 shrink-0">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`px-3 py-2 text-xs xl:text-sm font-medium whitespace-nowrap transition-all rounded-lg relative ${
                      isActive
                        ? 'text-white font-bold bg-white/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right: Book Consultation Button (Clean & Always Fully In View) */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <button
                onClick={onBookConsultation}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold text-navy-950 bg-gold-500 hover:bg-gold-400 rounded-xl shadow-gold-glow transition-all duration-200 shrink-0 whitespace-nowrap"
              >
                <span>Book Consultation</span>
                <ChevronRight className="w-4 h-4 text-navy-950" />
              </button>

              {/* Mobile Drawer Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-navy-900/80 border border-navy-700 hover:bg-navy-800 focus:outline-none shrink-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-navy-800 bg-navy-950 px-4 pt-3 pb-6 shadow-2xl space-y-2">
          {/* Mobile Dedicated Email Badges */}
          <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1.5 text-xs">
            <div className="flex items-center gap-2 text-gold-300">
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span className="font-semibold">Legal:</span>
              <a href="mailto:gaikwad.legaladvisory@gmail.com" className="truncate text-slate-200">
                gaikwad.legaladvisory@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-teal-300">
              <Heart className="w-3.5 h-3.5 text-teal-400" />
              <span className="font-semibold">MindCare:</span>
              <a href="mailto:themindcare.counselling@gmail.com" className="truncate text-slate-200">
                themindcare.counselling@gmail.com
              </a>
            </div>
          </div>

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

          <div className="pt-3 border-t border-navy-800 mt-2 space-y-2">
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