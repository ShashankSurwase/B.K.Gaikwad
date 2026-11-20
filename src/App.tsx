import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PracticeAreas } from './components/PracticeAreas';
import { Counselling } from './components/Counselling';
import { Team } from './components/Team';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PracticeModal } from './components/PracticeModal';
import { DisclaimerModal } from './components/DisclaimerModal';
import { PracticeArea } from './types';
import { practiceAreas } from './data/firmData';

export const App: React.FC = () => {
  // Unified single view theme (Rich Dark Navy Luxury Chambers Theme)
  useEffect(() => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Practice Modal state
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [practiceModalOpen, setPracticeModalOpen] = useState(false);

  // Disclaimer Modal state (can be triggered from footer as well)
  const [disclaimerForceOpen, setDisclaimerForceOpen] = useState(false);

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

      {/* Mandatory Bar Council of India Rule 36 Pop-up Notice on Entry */}
      <DisclaimerModal
        forceOpen={disclaimerForceOpen}
        onCloseForce={() => setDisclaimerForceOpen(false)}
      />

      <Navbar onBookConsultation={handleBookConsultation} />

      <main className="flex-1">
        {/* 1. Hero & About Chambers (Integrated) */}
        <Hero
          onScheduleConsultation={handleBookConsultation}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Legal Practice Areas */}
        <PracticeAreas
          onSelectPracticeArea={handleSelectPracticeArea}
          onBookConsultation={handleBookConsultation}
        />

        {/* 3. Mind Care & Counselling Wing (Positioned before Team Section) */}
        <Counselling />

        {/* 4. Our Team & Advocates */}
        <Team onConsultWithMember={() => handleBookConsultation()} />

        {/* 5. Chambers Gallery (Positioned before Get In Touch / Contact) */}
        <Gallery />

        {/* 6. Contact & Consultation Intake (Get In Touch) */}
        <Contact />
      </main>

      <Footer
        onSelectPracticeArea={handleSelectPracticeById}
        onOpenDisclaimer={() => setDisclaimerForceOpen(true)}
      />

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
