import { motion } from 'motion/react';
import { Award, Compass, ShieldCheck } from 'lucide-react';

export default function AboutMe() {
  const profileImgUrl = 'https://i.ibb.co/Q3bfnrX4/702569919-122102236077316178-2245873408902128733-n.jpg';

  return (
    <section id="o-mnie" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative luxury architectural background lines */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-[#C7A26A]/5 filter blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-96 h-96 rounded-full bg-[#EAE3D2]/40 filter blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Elegant Portrait & Framed Styling (45% width on large) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px]"
            >
              {/* Outer decorative gold element */}
              <div className="absolute inset-0 border border-[#C7A26A]/30 translate-x-4 translate-y-4 scale-100 pointer-events-none" />
              
              {/* Solid luxury backup mask card */}
              <div className="absolute inset-0 bg-[#EAE3D2] pointer-events-none" />
              
              {/* Main portrait image framed smoothly in a subtle vintage style */}
              <div className="relative w-full h-full overflow-hidden border border-[#C7A26A] bg-white">
                <img
                  src={profileImgUrl}
                  alt="Olga Rapczyńska - Licencjonowany pośrednik nieruchomości Suwałki"
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float badges for high trust factor */}
              <div className="absolute -bottom-4 -left-4 bg-[#4A3B2E] text-white py-3 px-5 shadow-lg flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#C7A26A]" />
                <div className="flex flex-col">
                  <span className="text-[10px] tracking-widest uppercase text-white/60">Licencjonowana</span>
                  <span className="font-serif-lux text-xs tracking-wider">Etyka zawodowa</span>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm px-4 py-3 border border-[#C7A26A]/20 shadow-md flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C7A26A]" />
                <span className="font-serif-lux text-xs uppercase tracking-widest text-[#4A3B2E]">Ekspert Suwałki</span>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Compelling Story & Signature Details (55% width on large) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pl-4">
            
            <div className="flex flex-col gap-2">
              <span className="font-playfair italic text-lg text-[#C7A26A] tracking-wide">
                Indywidualne podejście • Pasja • Perfekcjonizm
              </span>
              <h2 className="font-serif-lux text-3xl sm:text-4xl md:text-5xl text-[#4A3B2E] font-light leading-tight">
                Cześć, jestem Olga Rapczyńska
              </h2>
              <div className="w-16 h-0.5 bg-[#C7A26A] mt-2" />
            </div>

            {/* Structured Biography Texts */}
            <div className="flex flex-col gap-5 text-sm sm:text-base text-[#4A3B2E]/90 leading-relaxed font-light">
              <p>
                Hej! Nazywam się <strong className="font-semibold text-[#4A3B2E]">Olga Rapczyńska</strong> i od <strong>8 lat</strong> zajmuję się sprzedażą oraz zakupem nieruchomości w Suwałkach i okolicy.
              </p>
              <p>
                Przez lata nauczyłam się jednego — dobrze przygotowana nieruchomość potrafi sprzedać się szybciej i z dużo większym zyskiem.
              </p>
              <p>
                Sama od lat kupuję, remontuję i sprzedaję nieruchomości, dzięki czemu doskonale rozumiem zarówno potrzeby sprzedających, jak i kupujących. 
              </p>
              <p>
                Pracuję głównie w oparciu o <strong className="text-[#C7A26A]">umowy na wyłączność</strong>, ponieważ wierzę, że tylko pełne zaangażowanie i przemyślana strategia marketingowa dają najlepsze efekty rynkowe.
              </p>
            </div>

            {/* Elegance detail: Handwritten style luxury signature signature name */}
            <div className="mt-4 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="font-playfair text-3xl italic text-[#C7A26A] tracking-widest select-none">
                  Olga Rapczynska
                </span>
                <span className="font-sans text-[10px] tracking-widest uppercase text-[#4A3B2E]/60 mt-1">
                  Licencjonowany Pośrednik Nieruchomości
                </span>
              </div>
              <div className="w-20 h-px bg-[#C7A26A]/30" />
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
