import { motion } from 'motion/react';
import { ArrowDown, Phone, CalendarRange } from 'lucide-react';

export default function Hero() {
  // Use the exact path pointing to our generated gorgeous image
  const heroImgUrl = '/src/assets/images/hero_estate_bg_1780383909180.png';

  const handleScrollToContact = () => {
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      {/* Background Image with Delicate Beige Filter */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImgUrl}
          alt="Luksusowe wnętrze nieruchomości premium"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.88] contrast-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Luxurious Multi-layered Overlay Gradient for Rich Legibility */}
        <div className="absolute inset-x-0 inset-y-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/80 to-[#FAF7F2]/45 md:from-[#FAF7F2]/90 md:via-[#FAF7F2]/70 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FAF7F2]/60 to-transparent" />
      </div>

      {/* Exquisite Grid Layout Aligning with European Boutique Brands */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col gap-6 text-left">
          
          {/* Subtitle / Micro-tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-wrap items-center gap-2 text-xs md:text-sm tracking-[0.25em] uppercase text-[#C7A26A] font-semibold"
          >
            <span>8 Lat Doświadczenia</span>
            <span className="text-[#C7A26A]/40">•</span>
            <span>Profesjonalna Fotografia</span>
            <span className="text-[#C7A26A]/40">•</span>
            <span>Wiarygodna Strategia</span>
          </motion.div>

          {/* Core Captivating Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-serif-lux text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#4A3B2E] leading-[1.12] tracking-normal font-light"
          >
            Pomagam właścicielom nieruchomości w Suwałkach sprzedawać <br />
            <span className="font-playfair italic font-normal text-[#C7A26A] underline decoration-[#C7A26A]/20 underline-offset-8">
              nawet 10% drożej
            </span>
            .
          </motion.h1>

          {/* Brief Premium Explainer Body */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="font-sans text-[#4A3B2E] text-base md:text-lg leading-relaxed max-w-xl font-light"
          >
            Sprzedaj nieruchomość szybciej, bez chaosu i z maksymalnym potencjałem ceny. Odkryj butikowy standard pośrednictwa, w którym każdy detal ma znaczenie.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-4"
          >
            <button
              onClick={handleScrollToContact}
              className="bg-[#C7A26A] text-white hover:bg-[#4A3B2E] px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
            >
              <CalendarRange className="w-4 h-4" />
              <span>Porozmawiajmy</span>
            </button>
            
            <a
              href="tel:608073584"
              className="border border-[#4A3B2E] text-[#4A3B2E] hover:bg-[#4A3B2E] hover:text-white px-8 py-4 text-xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Zadzwoń: 608 073 584</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Soft Animated Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#C7A26A] transition-colors"
        onClick={() => {
          document.getElementById('o-mnie')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#4A3B2E]/60">
          Przewiń
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-[#C7A26A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
