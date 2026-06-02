import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';

export default function Process() {
  return (
    <section id="proces" className="py-24 bg-[#FAF7F2] relative overflow-hidden">
      {/* Editorial aesthetic watermark */}
      <div className="absolute right-[-10%] bottom-[-5%] font-display text-[15vw] text-[#4A3B2E]/2 tracking-widest pointer-events-none select-none">
        STRATEGIA
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-20 flex flex-col gap-3">
          <span className="font-playfair text-[#C7A26A] text-lg italic">Ścieżka do sukcesu</span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#4A3B2E] font-style tracking-wide">
            Jak wygląda współpraca?
          </h2>
          <div className="w-12 h-0.5 bg-[#C7A26A] mx-auto mt-2" />
          <p className="font-sans text-xs sm:text-sm text-[#4A3B2E]/70 font-light mt-1">
            Bezpieczny, zorganizowany i precyzyjnie zaprojektowany proces krok po kroku.
          </p>
        </div>

        {/* Elegant Timeline Representation */}
        
        {/* Desktop Timline view (hidden on small screen, flex on lg) */}
        <div className="hidden lg:grid grid-cols-5 gap-6 relative mt-12">
          {/* Connector long horizontal line */}
          <div className="absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#C7A26A]/10 via-[#C7A26A]/40 to-[#C7A26A]/10 -z-10" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Step indicator circle */}
              <div className="w-[90px] h-[90px] rounded-full border border-[#C7A26A]/20 bg-white shadow-sm flex items-center justify-center transition-all duration-500 group-hover:border-[#C7A26A] group-hover:scale-105 z-10 relative">
                <div className="w-[74px] h-[74px] rounded-full bg-[#FAF7F2] border border-[#C7A26A]/5 flex items-center justify-center transition-colors group-hover:bg-[#C7A26A]/10">
                  <span className="font-serif-lux text-xl font-semibold text-[#4A3B2E]">
                    0{step.step}
                  </span>
                </div>
                
                {/* Micro golden diamond node at the bottom of circle */}
                <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#C7A26A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Step content */}
              <div className="mt-8 flex flex-col gap-3 px-3">
                <span className="font-sans text-[10px] tracking-[0.2em] font-semibold uppercase text-[#C7A26A]">
                  Krok {step.step}
                </span>
                <h3 className="font-serif-lux text-lg font-medium text-[#4A3B2E] leading-snug group-hover:text-[#C7A26A] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="font-sans text-xs text-[#4A3B2E]/75 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Stepper View (flex on mobile, hidden on large screens) */}
        <div className="flex lg:hidden flex-col gap-10 relative pl-8 border-l border-[#C7A26A]/25">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline circle anchor on the left border */}
              <div className="absolute left-[-49px] top-0 w-[34px] h-[34px] rounded-full bg-white border border-[#C7A26A] flex items-center justify-center shadow-sm group-hover:bg-[#C7A26A] transition-colors duration-300">
                <span className="font-serif-lux text-xs font-semibold text-[#4A3B2E] group-hover:text-white transition-colors duration-300">
                  {step.step}
                </span>
              </div>

              {/* Card content */}
              <div className="bg-white p-6 border border-[#C7A26A]/10 shadow-sm flex flex-col gap-2">
                <span className="font-sans text-[9px] tracking-wider font-semibold uppercase text-[#C7A26A]">
                  Działanie {step.step} z 5
                </span>
                <h3 className="font-serif-lux text-lg font-medium text-[#4A3B2E]">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4A3B2E]/80 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
