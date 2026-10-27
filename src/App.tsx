import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustValues } from './components/TrustValues';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Approach } from './components/Approach';
import { Team } from './components/Team';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Insights } from './components/Insights';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { PracticeModal } from './components/PracticeModal';
import { InsightModal } from './components/InsightModal';
import { PolicyModals, PolicyType } from './components/PolicyModals';
import { BCIDisclaimerModal } from './components/BCIDisclaimerModal';
import { FloatingActions } from './components/FloatingActions';
import { PracticeArea, TeamMember, InsightArticle } from './types';
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

  // Modal states
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string>('bk-1987');
  
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [practiceModalOpen, setPracticeModalOpen] = useState(false);

  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [insightModalOpen, setInsightModalOpen] = useState(false);

  const [activePolicy, setActivePolicy] = useState<PolicyType>(null);
  const [policyModalOpen, setPolicyModalOpen] = useState(false);

  // Smooth scroll helper
  const scrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookConsultation = () => {
    scrollTo('contact');
  };

  const handleExploreServices = () => {
    scrollTo('practice-areas');
  };

  const handleLearnApproach = () => {
    scrollTo('approach');
  };

  const handleOpenCertificate = (certId?: string) => {
    if (certId) {
      setSelectedCertId(certId);
    }
    setCertModalOpen(true);
  };

  const handleViewMemberCertificates = (member: TeamMember) => {
    if (member.id === 'balu-gaikwad') {
      setSelectedCertId('bk-1987');
    } else if (member.id === 'shraddha-gaikwad') {
      setSelectedCertId('shraddha-2021');
    } else if (member.id === 'shreya-gaikwad') {
      setSelectedCertId('shreya-2021');
    } else if (member.id === 'shruti-gaikwad') {
      setSelectedCertId('shruti-cert');
    }
    setCertModalOpen(true);
  };

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

  const handleConsultWithMember = (_member: TeamMember) => {
    scrollTo('contact');
  };

  const handleSelectArticle = (article: InsightArticle) => {
    setSelectedArticle(article);
    setInsightModalOpen(true);
  };

  const handleConsultOnArticle = (_title: string) => {
    scrollTo('contact');
  };

  const handleOpenPolicy = (type: 'privacy' | 'terms' | 'disclaimer') => {
    setActivePolicy(type);
    setPolicyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-navy-950 text-slate-dark dark:text-slate-100 antialiased transition-colors duration-200">
      {/* Bar Council of India Entrance Disclaimer */}
      <BCIDisclaimerModal />

      {/* Main Navigation with Dark Mode Switch */}
      <Navbar 
        onBookConsultation={handleBookConsultation} 
        isDark={isDark}
        onToggleDark={toggleDarkMode}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero (Maheshwari-inspired with stats counters & clean imagery) */}
        <Hero
          onScheduleConsultation={handleBookConsultation}
          onExploreServices={handleExploreServices}
          onViewCertificates={() => handleOpenCertificate('bk-1987')}
        />

        {/* 2. Practice Areas Grid */}
        <PracticeAreas
          onSelectPracticeArea={handleSelectPracticeArea}
          onBookConsultation={handleBookConsultation}
        />

        {/* 3. About the Firm */}
        <About
          onLearnApproach={handleLearnApproach}
          onViewCertificates={() => handleOpenCertificate('bk-1987')}
        />

        {/* 4. Trust and Core Values */}
        <TrustValues />

        {/* 5. Our Legal Team / Meet Our Attorneys */}
        <Team
          onViewMemberCertificates={handleViewMemberCertificates}
          onConsultWithMember={handleConsultWithMember}
        />

        {/* 6. Why Choose Us */}
        <WhyChooseUs />

        {/* 7. Our 4-Step Approach */}
        <Approach
          onScheduleConsultation={handleBookConsultation}
        />

        {/* 8. Recent Blogs & Legal Insights */}
        <Insights
          onSelectArticle={handleSelectArticle}
          onBookConsultation={handleBookConsultation}
        />

        {/* 9. FAQ Accordion */}
        <FAQ />

        {/* 10. Contact Chambers & Validated Intake */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={handleOpenPolicy}
        onSelectPracticeArea={handleSelectPracticeById}
      />

      {/* Floating Action Hub (Responsive for Mobile & Desktop) */}
      <FloatingActions onBookConsultation={handleBookConsultation} />

      {/* Interactive Modals */}
      <CertificateModal
        isOpen={certModalOpen}
        onClose={() => setCertModalOpen(false)}
        selectedId={selectedCertId}
      />

      <PracticeModal
        area={selectedPracticeArea}
        isOpen={practiceModalOpen}
        onClose={() => setPracticeModalOpen(false)}
        onConsult={handleConsultOnArea}
      />

      <InsightModal
        article={selectedArticle}
        isOpen={insightModalOpen}
        onClose={() => setInsightModalOpen(false)}
        onConsult={handleConsultOnArticle}
      />

      <PolicyModals
        type={activePolicy}
        isOpen={policyModalOpen}
        onClose={() => setPolicyModalOpen(false)}
      />
    </div>
  );
};

export default App;
