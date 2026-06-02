import { ArrowUp, Star } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#4A3B2E] text-white/90 py-12 border-t border-[#C7A26A]/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        {/* Subtle geometric overlay lines */}
        <div className="absolute top-0 left-10 w-px h-full bg-white" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Brand Credits */}
        <div className="flex flex-col text-center md:text-left gap-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display text-base tracking-[0.16em] uppercase text-white">
              Agent Olga
            </span>
            <span className="text-[#C7A26A] text-xs">•</span>
            <span className="font-serif-lux text-xs tracking-widest text-[#C7A26A] uppercase font-light">
              Nieruchomości Premium
            </span>
          </div>
          
          <p className="font-sans text-[10px] text-white/50 tracking-wider">
            Sprzedaż nieruchomości w Suwałkach i sąsiadujących powiatach
          </p>
        </div>

        {/* Center: Legal copyright */}
        <div className="text-center">
          <p className="font-sans text-xs text-white/60 tracking-wider text-center">
            &copy; {new Date().getFullYear()} Agent Olga Nieruchomości Rapczyńska. Wszelkie prawa zastrzeżone.
          </p>
        </div>

        {/* Right Side: Back to top action */}
        <button
          onClick={handleScrollToTop}
          className="flex items-center gap-2 hover:text-[#C7A26A] transition-colors focus:outline-none text-xs tracking-widest uppercase font-semibold text-white/75"
          aria-label="Wróć na górę"
        >
          <span>Wróć na górę</span>
          <div className="p-2 border border-white/20 hover:border-[#C7A26A] transition-all bg-[#4A3B2E] rounded-none">
            <ArrowUp className="w-3.5 h-3.5 text-[#C7A26A]" />
          </div>
        </button>

      </div>
    </footer>
  );
}
