import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/mockData';

export default function SpecialPhotography() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return 0;
      return prev === 0 ? GALLERY_PHOTOS.length - 1 : prev - 1;
    });
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => {
      if (prev === null) return 0;
      return prev === GALLERY_PHOTOS.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section id="fotografia" className="py-24 bg-[#FAF7F2] border-t border-[#C7A26A]/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core Layout: Description on the left/top, beautiful copy block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-playfair text-[#C7A26A] text-lg italic">Różnica tkwi w detalu</span>
            <h2 className="font-serif-lux text-3xl sm:text-4xl md:text-5xl text-[#4A3B2E] font-light leading-tight">
              Piękne zdjęcia sprzedają
            </h2>
            <div className="w-16 h-0.5 bg-[#C7A26A]" />
          </div>
          
          <div className="lg:col-span-7 font-sans text-sm sm:text-base text-[#4A3B2E]/90 leading-relaxed font-light flex flex-col gap-4 pl-0 lg:pl-10 lg:border-l border-[#C7A26A]/20">
            <p>
              Przez <strong>15 lat pracowałam w branży fotograficznej</strong>. Dzięki temu potrafię pokazać wnętrza w sposób estetyczny, naturalny i przyciągający uwagę najbardziej wymagających klientów.
            </p>
            <p className="font-playfair font-normal italic text-lg text-[#C7A26A]">
              &bdquo;Dobre zdjęcia nie są dodatkiem. Są jednym z najważniejszych narzędzi sprzedażowych.&ldquo;
            </p>
          </div>
        </div>

        {/* Modern Interactive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {GALLERY_PHOTOS.map((photo, index) => {
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  key={photo.id}
                  onClick={() => setLightboxIndex(index)}
                  className="group relative h-80 bg-[#EAE3D2] cursor-pointer overflow-hidden border border-[#C7A26A]/10"
                >
                  <img
                    src={photo.url}
                    alt="Zdjęcie nieruchomości"
                    className="w-full h-full object-cover transition-all duration-700 ease-out scale-100 group-hover:scale-106 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Elegant Overlay on Hover */}
                  <div className="absolute inset-0 bg-[#4A3B2E]/25 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center" />

                  {/* Icon zoom overlay indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF7F2] p-3 shadow-md border border-[#C7A26A]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none text-[#C7A26A]">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 bg-[#2F241C]/98 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-2 text-white/80 hover:text-white transition-colors z-10 focus:outline-none"
                aria-label="Zamknij"
              >
                <X className="w-7 h-7" />
              </button>

              <div className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center">
                {/* Image */}
                <motion.img
                  key={lightboxIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  src={GALLERY_PHOTOS[lightboxIndex].url}
                  alt="Zdjęcie nieruchomości"
                  className="max-w-full max-h-[82vh] object-contain border border-white/5 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right Controls */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 md:left-4 p-2 bg-[#4A3B2E]/40 hover:bg-[#C7A26A] text-white rounded-none transition-colors focus:outline-none"
                  aria-label="Poprzedni"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2 md:right-4 p-2 bg-[#4A3B2E]/40 hover:bg-[#C7A26A] text-white rounded-none transition-colors focus:outline-none"
                  aria-label="Następny"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
