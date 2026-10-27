import React, { useState } from 'react';
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
    <div className="min-h-screen flex flex-col bg-white text-slate-dark antialiased">
      {/* Bar Council of India Entrance Disclaimer */}
      <BCIDisclaimerModal />

      {/* Main Navigation */}
      <Navbar onBookConsultation={handleBookConsultation} />

      {/* Main Content Sections in exact sequential order */}
      <main className="flex-1">
        {/* 2. Hero */}
        <Hero
          onScheduleConsultation={handleBookConsultation}
          onExploreServices={handleExploreServices}
          onViewCertificates={() => handleOpenCertificate('bk-1987')}
        />

        {/* 3. Trust and Values */}
        <TrustValues />

        {/* 4. About the Firm */}
        <About
          onLearnApproach={handleLearnApproach}
          onViewCertificates={() => handleOpenCertificate('bk-1987')}
        />

        {/* 5. Practice Areas */}
        <PracticeAreas
          onSelectPracticeArea={handleSelectPracticeArea}
          onBookConsultation={handleBookConsultation}
        />

        {/* 6. Our Approach */}
        <Approach
          onScheduleConsultation={handleBookConsultation}
        />

        {/* 7. Our Legal Team */}
        <Team
          onViewMemberCertificates={handleViewMemberCertificates}
          onConsultWithMember={handleConsultWithMember}
        />

        {/* 8. Why Choose Us */}
        <WhyChooseUs />

        {/* 9. Insights and Legal Updates */}
        <Insights
          onSelectArticle={handleSelectArticle}
          onBookConsultation={handleBookConsultation}
        />

        {/* 10. FAQ */}
        <FAQ />

        {/* 11. Contact */}
        <Contact />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPolicy={handleOpenPolicy}
        onSelectPracticeArea={handleSelectPracticeById}
      />

      {/* Floating Helpers */}
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
