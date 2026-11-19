import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Counselling } from './components/Counselling';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PracticeModal } from './components/PracticeModal';
import { PracticeArea } from './types';
import { practiceAreas } from './data/firmData';

export const App: React.FC = () => {
  // Dark / Night Mode state with localStorage persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(prev => !prev);
  };

  // Practice Modal state
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [practiceModalOpen, setPracticeModalOpen] = useState(false);

  // Smooth scroll helper
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookConsultation = () => scrollTo('contact');
  const handleExploreServices = () => scrollTo('practice-areas');

  const handleSelectPracticeArea = (area: PracticeArea) => {
    setSelectedPracticeArea(area);
    setPracticeModalOpen(true);
  };

  const handleSelectPracticeById = (areaId: string) => {
    const found = practiceAreas.find(p => p.id === areaId);
    if (found) {
      setSelectedPracticeArea(found);
      setPracticeModalOpen(true);
    }
  };

  const handleConsultOnArea = (_areaTitle: string) => {
    scrollTo('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-navy-950 text-slate-dark dark:text-slate-100 antialiased transition-colors duration-200">

      <Navbar
        onBookConsultation={handleBookConsultation}
        isDark={isDark}
        onToggleDark={toggleDarkMode}
      />

      <main className="flex-1">
        {/* 1. Hero & About Chambers (Integrated) */}
        <Hero
          onScheduleConsultation={handleBookConsultation}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Practice Areas */}
        <PracticeAreas
          onSelectPracticeArea={handleSelectPracticeArea}
          onBookConsultation={handleBookConsultation}
        />

        {/* 3. Team & Active Jurisdictions */}
        <Team onConsultWithMember={() => handleBookConsultation()} />

        {/* 4. Gallery & Media */}
        <Gallery />

        {/* 5. Counselling Services */}
        <Counselling />

        {/* 6. Contact & Consultation Intake */}
        <Contact />
      </main>

      <Footer onSelectPracticeArea={handleSelectPracticeById} />

      {/* Practice Area Modal */}
      <PracticeModal
        area={selectedPracticeArea}
        isOpen={practiceModalOpen}
        onClose={() => setPracticeModalOpen(false)}
        onConsult={handleConsultOnArea}
      />
    </div>
  );
};

export default App;
