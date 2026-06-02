import { Compass, Sparkles, Camera, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { DIFFERENTIALS } from '../data/mockData';

export default function Differentials() {
  // Helper to map icon names to actual Lucide components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-8 h-8 text-[#C7A26A] stroke-[1.25]" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-[#C7A26A] stroke-[1.25]" />;
      case 'Camera':
        return <Camera className="w-8 h-8 text-[#C7A26A] stroke-[1.25]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#C7A26A] stroke-[1.25]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#C7A26A] stroke-[1.25]" />;
    }
  };

  return (
    <section id="wyrozniki" className="py-24 bg-[#FAF7F2] border-t border-[#C7A26A]/10 relative">
      {/* Structural background ornaments */}
      <div className="absolute left-0 bottom-0 w-full h-[50%] bg-[#F5EFE7]/50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="font-playfair text-lg text-[#C7A26A] italic">Odkryj moją przewagę</span>
          <h2 className="font-serif-lux text-3xl sm:text-4xl text-[#4A3B2E] font-light tracking-wide">
            Dlaczego moi klienci osiągają lepsze wyniki?
          </h2>
          <div className="w-12 h-0.5 bg-[#C7A26A] mx-auto mt-2" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <motion.div
              key={diff.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#C7A26A]/15 p-8 transition-all duration-300 relative group flex flex-col justify-between h-full"
            >
              {/* Corner decorative golden notch on hover */}
              <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#C7A26A] transition-all duration-300 group-hover:w-full" />
              
              <div className="flex flex-col gap-6">
                {/* Icon Circle Container */}
                <div className="w-14 h-14 rounded-full bg-[#FAF7F2] border border-[#C7A26A]/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#C7A26A]/5">
                  {renderIcon(diff.iconName)}
                </div>

                <div className="flex flex-col gap-3">
                  <h3 className="font-serif-lux text-xl text-[#4A3B2E] font-medium group-hover:text-[#C7A26A] transition-colors duration-300">
                    {diff.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4A3B2E]/80 leading-relaxed font-light">
                    {diff.description}
                  </p>
                </div>
              </div>

              {/* Minimal sub-ornament */}
              <div className="mt-8 text-[10px] tracking-widest text-[#C7A26A] uppercase font-semibold flex items-center gap-2 font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Standard Olga R.</span>
                <span className="w-4 h-0.5 bg-[#C7A26A]" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
