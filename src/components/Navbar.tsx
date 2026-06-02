import { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'O mnie', href: '#o-mnie' },
    { name: 'Dlaczego ja', href: '#wyrozniki' },
    { name: 'Proces', href: '#proces' },
    { name: 'Fotografia', href: '#fotografia' },
    { name: 'Kontakt', href: '#kontakt' },
  ];

  const handleScrollToContact = () => {
    setMobileMenuOpen(false);
    document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#C7A26A]/10 py-3 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#" className="group flex flex-col focus:outline-none">
            <span className="font-display text-lg sm:text-2xl tracking-[0.16em] uppercase text-[#4A3B2E] group-hover:text-[#C7A26A] transition-colors duration-300">
              Agent Olga
            </span>
            <span className="font-serif-lux text-xs tracking-[0.25em] text-[#C7A26A] uppercase font-light -mt-1 group-hover:text-[#4A3B2E] transition-colors duration-300">
              Nieruchomości Rapczyńska
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-xs tracking-widest uppercase text-[#4A3B2E]/80 hover:text-[#C7A26A] font-medium transition-colors duration-300 relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C7A26A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:608073584"
              className="flex items-center gap-2 text-xs tracking-widest uppercase font-medium text-[#4A3B2E] hover:text-[#C7A26A] transition-colors duration-300 focus:outline-none"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7A26A]" />
              <span>608 073 584</span>
            </a>
            <button
              onClick={handleScrollToContact}
              className="bg-[#C7A26A] text-white hover:bg-[#4A3B2E] px-5 py-2.5 text-xs tracking-widest uppercase font-semibold rounded-none transition-all duration-300 shadow-sm flex items-center gap-1 hover:gap-2 active:scale-95"
            >
              <span>Kontakt</span>
              <ArrowRight className="w-3.5 h-3.5 transition-all" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-4">
            <a
              href="tel:608073584"
              className="p-2 text-[#4A3B2E] hover:text-[#C7A26A] transition-colors"
              aria-label="Make a call"
            >
              <Phone className="w-4 h-4 text-[#C7A26A]" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3B2E] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Backdrop & Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#FAF7F2] lg:hidden flex flex-col justify-center px-8"
          >
            {/* Elegant Background Lines */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#F5EFE7]/50 to-transparent pointer-events-none" />
            <div className="absolute left-1/3 top-0 bottom-0 w-px bg-[#C7A26A]/5 pointer-events-none" />
            
            <div className="flex flex-col gap-6 text-center">
              <span className="font-display text-2xl tracking-[0.16em] uppercase text-[#4A3B2E]">
                OLGA RAPCZYŃSKA
              </span>
              <div className="w-10 h-px bg-[#C7A26A] mx-auto mb-4" />
              
              <div className="flex flex-col gap-5">
                {menuItems.map((item, index) => (
                  <motion.a
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-playfair text-xl italic text-[#4A3B2E] hover:text-[#C7A26A] transition-all"
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>

              <div className="w-full h-px bg-[#C7A26A]/10 my-6" />

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col gap-4 items-center"
              >
                <a
                  href="tel:608073584"
                  className="flex items-center gap-2 justify-center py-2 px-4 border border-[#C7A26A]/20 text-[#4A3B2E] hover:bg-[#C7A26A]/5 tracking-widest text-xs uppercase"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C7A26A]" />
                  <span>Zadzwoń: 608 073 584</span>
                </a>
                
                <button
                  onClick={handleScrollToContact}
                  className="w-full max-w-xs bg-[#C7A26A] text-white py-3 text-xs tracking-widest uppercase font-semibold transition-all hover:bg-[#4A3B2E]"
                >
                  Skontaktuj się ze mną
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
