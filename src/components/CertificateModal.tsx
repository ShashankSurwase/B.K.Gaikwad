import React, { useState } from 'react';
import { X, Shield, ZoomIn, ZoomOut, ExternalLink } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

export interface CertificateItem {
  id: string;
  holderName: string;
  title: string;
  authority: string;
  enrolmentNo?: string;
  date?: string;
  imageUrl: string;
  description: string;
  badge: string;
}

const allCertificates: CertificateItem[] = [
  {
    id: 'bk-1987',
    holderName: 'Shri Balu Kundalik Gaikwad',
    title: 'The Bar Council of Maharashtra — Roll of Advocates',
    authority: 'Bar Council of Maharashtra (Section 17, Advocates Act 1961)',
    enrolmentNo: 'MAH / 1647 / 1987 (Sr. No. 30261)',
    date: '22nd December 1987',
    imageUrl: getAssetUrl('images/certificate-bk.jpg'),
    description: 'Original Certificate of Enrolment under the seal of the Bar Council of Maharashtra at Bombay, admitting Shri Balu Kundalik Gaikwad (B.A., LL.B.) to the Roll of Advocates.',
    badge: 'Senior Enrolment (1987)'
  },
  {
    id: 'shraddha-2021',
    holderName: 'Gaikwad Shraddha Balasaheb',
    title: 'Bar Council of Maharashtra & Goa — Roll of Advocates',
    authority: 'Bar Council of Maharashtra & Goa',
    enrolmentNo: 'En. No. MAH/11145/2021 (Sr. No. 205520)',
    date: '11th October 2021',
    imageUrl: getAssetUrl('images/certificate-shraddha.png'),
    description: 'Official Certificate of Enrolment granted under Section 17 of the Advocates Act, 1961 at Bombay, certifying Gaikwad Shraddha Balasaheb (B.A. LL.B.) as an Advocate.',
    badge: 'Advocate on Roll (2021)'
  },
  {
    id: 'shreya-2021',
    holderName: 'Gaikwad Shreya Balasaheb',
    title: 'Bar Council of Maharashtra & Goa — Roll of Advocates',
    authority: 'Bar Council of Maharashtra & Goa',
    enrolmentNo: 'En. No. MAH/10606/2021 (Sr. No. 204981)',
    date: '11th October 2021',
    imageUrl: getAssetUrl('images/certificate-shreya.png'),
    description: 'Official Certificate of Enrolment granted under Section 17 of the Advocates Act, 1961 at Bombay, certifying Gaikwad Shreya Balasaheb (B.A. LL.B.) as an Advocate.',
    badge: 'Advocate on Roll (2021)'
  },
  {
    id: 'shraddha-counsel',
    holderName: 'Adv. Shraddha Mahavir Sontakke (Gaikwad)',
    title: 'Diploma in Basic Counselling Skill & Brain Science',
    authority: 'Brainway Research Foundation & Medhavi Skills University (ISO 9001:2015)',
    enrolmentNo: 'Certificate No. 1973/2026 (Reg. N. Maha.1582/2022)',
    date: 'August 2026',
    imageUrl: getAssetUrl('images/certificate-shraddha-counsel.jpg'),
    description: 'Certificate awarded for field work and project on Counselling and Brain Science activities in Mental Health Awareness, Brain Science, and Psychology.',
    badge: 'Certified Mediation & Counselling'
  },
  {
    id: 'shruti-cert',
    holderName: 'Miss Shruti Balasaheb Gaikwad',
    title: 'Diploma in Basic Counselling Skill & Brain Science',
    authority: 'Brainway Research Foundation & Medhavi Skills University (ISO 9001:2015)',
    enrolmentNo: 'Certificate No. 1930/2026 (Reg. N. Maha.1582/2022)',
    date: 'August 2026',
    imageUrl: getAssetUrl('images/certificate-shruti.jpg'),
    description: 'Certificate awarded for field work and project on Counselling and Brain Science activities in Mental Health Awareness, Brain Science, and Psychology.',
    badge: 'Legal Research & Intake'
  }
];

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedId?: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  selectedId
}) => {
  const [activeCertId, setActiveCertId] = useState<string>(selectedId || 'bk-1987');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  React.useEffect(() => {
    if (selectedId) {
      setActiveCertId(selectedId);
    }
  }, [selectedId]);

  if (!isOpen) return null;

  const currentCert = allCertificates.find(c => c.id === activeCertId) || allCertificates[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Top Bar */}
        <div className="px-5 py-4 bg-navy-900 text-white flex items-center justify-between border-b border-navy-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white leading-tight">
                Bar Council Enrolments & Official Verifications
              </h3>
              <p className="text-[11px] text-slate-300">
                Official records under the Advocates Act, 1961 (India)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Switcher Tabs */}
        <div className="bg-slate-50 border-b border-slate-200 px-4 py-2.5 flex items-center gap-2 overflow-x-auto">
          {allCertificates.map((cert) => (
            <button
              key={cert.id}
              onClick={() => {
                setActiveCertId(cert.id);
                setIsZoomed(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeCertId === cert.id
                  ? 'bg-navy-800 text-white shadow-xs'
                  : 'bg-white text-slate-dark border border-slate-200 hover:bg-slate-100'
              }`}
            >
              <span className="font-semibold">{cert.holderName.split(' ')[0]}</span>
              <span className="opacity-75 ml-1">({cert.badge.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Certificate Image Frame */}
          <div className="lg:col-span-8 bg-slate-100 rounded-xl border border-slate-300 p-2 relative overflow-hidden flex items-center justify-center min-h-[350px]">
            <div className={`transition-all duration-300 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
              <img
                src={currentCert.imageUrl}
                alt={currentCert.title}
                className="max-h-[480px] w-auto max-w-full object-contain rounded shadow-md"
              />
            </div>

            {/* Zoom Toggle Overlay */}
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="absolute bottom-3 right-3 p-2 rounded-lg bg-navy-900/80 hover:bg-navy-900 text-white text-xs backdrop-blur-md flex items-center gap-1.5 shadow-sm"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4 text-gold-400" /> : <ZoomIn className="w-4 h-4 text-gold-400" />}
              <span>{isZoomed ? 'Reset View' : 'Zoom Certificate'}</span>
            </button>
          </div>

          {/* Certificate Metadata Details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1">
              <span className="inline-block px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 border border-teal-200 text-xs font-semibold">
                {currentCert.badge}
              </span>
              <h4 className="font-serif text-xl font-bold text-navy-800 leading-tight">
                {currentCert.holderName}
              </h4>
              <p className="text-xs text-slate-muted">
                {currentCert.title}
              </p>
            </div>

            <div className="space-y-3 pt-2 text-xs border-t border-slate-100">
              {currentCert.enrolmentNo && (
                <div>
                  <span className="font-semibold text-navy-800 block">Registration / Roll No:</span>
                  <span className="font-mono text-teal-800 bg-teal-50 px-2 py-0.5 rounded mt-0.5 inline-block">
                    {currentCert.enrolmentNo}
                  </span>
                </div>
              )}

              <div>
                <span className="font-semibold text-navy-800 block">Statutory Issuing Body:</span>
                <span className="text-slate-muted">{currentCert.authority}</span>
              </div>

              {currentCert.date && (
                <div>
                  <span className="font-semibold text-navy-800 block">Enrolment Date:</span>
                  <span className="text-slate-muted">{currentCert.date}</span>
                </div>
              )}

              <div>
                <span className="font-semibold text-navy-800 block">Official Record Scope:</span>
                <p className="text-slate-muted leading-relaxed mt-0.5">
                  {currentCert.description}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <a
                href={currentCert.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-navy-800 hover:bg-navy-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                <span>Open Full Original File</span>
              </a>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-muted">
          <span>Bar Council of Maharashtra & Goa • Section 17 Roll</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-dark font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
