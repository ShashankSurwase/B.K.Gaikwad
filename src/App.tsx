import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustValues } from './components/TrustValues';
import { About } from './components/About';
import { PracticeAreas } from './components/PracticeAreas';
import { Approach } from './components/Approach';
import { Team } from './components/Team';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { PracticeModal } from './components/PracticeModal';
import { PolicyModals, PolicyType } from './components/PolicyModals';
import { BCIDisclaimerModal } from './components/BCIDisclaimerModal';
import { FloatingActions } from './components/FloatingActions';
import { PracticeArea, TeamMember } from './types';
import { practiceAreas } from './data/firmData';

export const App: React.FC = () => {
  // Modal states
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [selectedCertId, setSelectedCertId] = useState<string>('bk-1987');
  
  const [selectedPracticeArea, setSelectedPracticeArea] = useState<PracticeArea | null>(null);
  const [practiceModalOpen, setPracticeModalOpen] = useState(false);

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

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onScheduleConsultation={handleBookConsultation}
          onExploreServices={handleExploreServices}
          onViewCertificates={() => handleOpenCertificate('bk-1987')}
        />

        <TrustValues />

        <About
          onLearnApproach={handleLearnApproach}
          onViewCertificates={() => handleOpenCertificate('bk-1987')}
        />

        <PracticeAreas
          onSelectPracticeArea={handleSelectPracticeArea}
          onBookConsultation={handleBookConsultation}
        />

        <Approach
          onScheduleConsultation={handleBookConsultation}
        />

        <Team
          onViewMemberCertificates={handleViewMemberCertificates}
          onConsultWithMember={handleConsultWithMember}
        />

        <WhyChooseUs />

        <FAQ />

        <Contact />

        <CTA onContactClick={handleBookConsultation} />
      </main>

      {/* Footer */}
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

      <PolicyModals
        type={activePolicy}
        isOpen={policyModalOpen}
        onClose={() => setPolicyModalOpen(false)}
      />
    </div>
  );
};

export default App;
