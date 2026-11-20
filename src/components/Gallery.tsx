import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Sparkles, Eye } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';

interface OfficePhoto {
  id: string;
  imageUrl: string;
  label: string;
}

export const Gallery: React.FC = () => {
  const [activePhotoModal, setActivePhotoModal] = useState<OfficePhoto | null>(null);

  // Exactly 4 authentic office photos provided in Office Photos folder
  const officePhotos: OfficePhoto[] = [
    {
      id: 'photo-1',
      imageUrl: getAssetUrl('images/office/reception-frosted-glass-entrance.jpg'),
      label: 'Reception, Frosted Glass Entrance & Bar Council Certificates'
    },
    {
      id: 'photo-2',
      imageUrl: getAssetUrl('images/office/main-executive-cabin.jpg'),
      label: 'Main Executive Cabin'
    },
    {
      id: 'photo-3',
      imageUrl: getAssetUrl('images/office/executive-chair-law-library.jpg'),
      label: 'Executive Chair, Scales of Justice Emblem & Law Library'
    },
    {
      id: 'photo-4',
      imageUrl: getAssetUrl('images/office/client-waiting-counselling-area.jpg'),
      label: 'Client Waiting & Counselling Wall Art Area'
    }
  ];

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhotoModal) return;
    const currentIndex = officePhotos.findIndex(p => p.id === activePhotoModal.id);
    const nextIndex = (currentIndex + 1) % officePhotos.length;
    setActivePhotoModal(officePhotos[nextIndex]);
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activePhotoModal) return;
    const currentIndex = officePhotos.findIndex(p => p.id === activePhotoModal.id);
    const prevIndex = (currentIndex - 1 + officePhotos.length) % officePhotos.length;
    setActivePhotoModal(officePhotos[prevIndex]);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white border-t border-navy-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-2xl mb-10 space-y-2 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Chambers Infrastructure
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Our Chambers & Facilities
          </h2>
          <div className="h-0.5 w-16 bg-gold-500" />
        </div>

        {/* 4 Pure Image Cards (Only Images, No Text Explanations) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {officePhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoModal(photo)}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-gold-500/30 hover:border-gold-400 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-navy-950"
            >
              <img
                src={photo.imageUrl}
                alt={photo.label}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter contrast-[1.04]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

              {/* Minimal Bottom Label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2 pointer-events-none">
                <span className="px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-navy-950/95 text-gold-300 border border-gold-400/40 backdrop-blur-sm shadow-md leading-tight line-clamp-2">
                  {photo.label}
                </span>
                <span className="p-1.5 rounded-lg bg-gold-500 text-navy-950 opacity-0 group-hover:opacity-100 transition-opacity shadow-md shrink-0">
                  <Eye className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Image Modal (Clean Image View Only) */}
      {activePhotoModal && (
        <div
          onClick={() => setActivePhotoModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-navy-900 border border-gold-500/40 shadow-2xl flex flex-col"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-navy-950 border-b border-navy-800">
              <span className="text-sm font-semibold text-gold-300">
                {activePhotoModal.label}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 transition-colors"
                  title="Previous photo"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-200 transition-colors"
                  title="Next photo"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhotoModal(null)}
                  className="p-1.5 rounded-lg bg-navy-800 hover:bg-red-500/80 text-slate-200 hover:text-white transition-colors ml-2"
                  title="Close"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Pure Image View (No Long Essays) */}
            <div className="relative flex-1 bg-black/80 flex items-center justify-center overflow-hidden p-3">
              <img
                src={activePhotoModal.imageUrl}
                alt={activePhotoModal.label}
                className="max-w-full max-h-[75vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
