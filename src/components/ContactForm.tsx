import React from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Facebook, Globe, MessageSquare } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="kontakt" className="py-24 bg-[#FAF7F2] border-t border-[#C7A26A]/20 relative overflow-hidden">
      {/* Decorative elegant gold circle ornaments */}
      <div className="absolute right-[-100px] bottom-[-100px] w-[350px] h-[350px] border border-[#C7A26A]/10 rounded-full pointer-events-none" />
      <div className="absolute left-[-50px] top-[-50px] w-64 h-64 bg-[#EAE3D2]/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Centered Premium Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-playfair text-[#C7A26A] text-lg italic">Nawiążmy kontakt</span>
          <h2 className="font-serif-lux text-3.5xl sm:text-4xl text-[#4A3B2E] font-light tracking-wide">
            Planujesz sprzedaż nieruchomości?
          </h2>
          <div className="w-12 h-0.5 bg-[#C7A26A] mx-auto mt-2" />
          <p className="font-sans text-xs sm:text-sm text-[#4A3B2E]/70 font-light max-w-lg mx-auto">
            Porozmawiajmy o możliwościach i sprawdźmy, jak mogę pomóc Ci sprzedać Twój dom, mieszkanie lub działkę z maksymalnym zyskiem.
          </p>
        </div>

        {/* Focused Premium Contact Card Grid */}
        <div className="bg-white border border-[#C7A26A]/25 p-8 md:p-12 shadow-md relative group overflow-hidden">
          {/* Accent decoration line over the card */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#C7A26A]" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            
            {/* Column 1: Direct phone call button and text */}
            <div className="flex flex-col justify-between gap-6 md:border-r md:border-[#C7A26A]/15 md:pr-10">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#C7A26A] uppercase font-bold">
                  Szybki kontakt bezpośredni
                </span>
                
                <div className="flex flex-col">
                  <h3 className="font-display text-2xl tracking-[0.12em] uppercase text-[#4A3B2E]">
                    Agent Olga
                  </h3>
                  <h4 className="font-serif-lux text-base tracking-[0.2em] text-[#C7A26A] uppercase font-light -mt-0.5">
                    Nieruchomości Rapczyńska
                  </h4>
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#4A3B2E]/85 font-light leading-relaxed">
                  Zadzwoń teraz, by umówić bezpłatną konsultację i omówić szczegóły. Odpowiem na wszystkie Twoje pytania.
                </p>
              </div>

              <a
                href="tel:608073584"
                className="inline-flex items-center justify-center gap-3 bg-[#C7A26A] text-white hover:bg-[#4A3B2E] px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-colors duration-300 shadow-md text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Zadzwoń: 608 073 584</span>
              </a>
            </div>

            {/* Column 2: Service detail parameters & Social accounts link */}
            <div className="flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-4">
                <span className="font-sans text-[10px] tracking-[0.2em] text-[#C7A26A] uppercase font-bold">
                  Obszar działania i social media
                </span>

                <div className="flex flex-col gap-4 mt-2">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#4A3B2E]/5 rounded-none text-[#C7A26A] mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-medium text-[#4A3B2E]/50 tracking-wider">Lokalizacja usług</span>
                      <span className="font-serif-lux text-[#4A3B2E] font-medium text-sm sm:text-base">
                        Suwałki oraz sąsiadujące powiaty (woj. podlaskie)
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-[#4A3B2E]/5 rounded-none text-[#C7A26A] mt-0.5">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-medium text-[#4A3B2E]/50 tracking-wider">Forma współpracy</span>
                      <span className="font-serif-lux text-[#4A3B2E] font-medium text-sm">
                        Umowy na wyłączność zapewniające 100% zaangażowania
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.facebook.com/profile.php?id=61589485346638"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center gap-3 bg-[#1877F2] text-white hover:bg-[#166FE5] px-6 py-4 text-xs tracking-wider uppercase font-semibold transition-colors duration-300 shadow-sm"
              >
                <Facebook className="w-4 h-4 fill-white" />
                <span>Mój Profil na Facebooku</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
