import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/mockData';

interface CountUpProps {
  to: number;
  suffix: string;
  duration?: number;
}

function CountUp({ to, suffix, duration = 1.5 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = to;
    if (start === end) return;

    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 25);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return (
    <span ref={ref} className="font-serif-lux text-5xl md:text-6xl lg:text-7xl font-light text-[#C7A26A] tracking-wider">
      {count}
      <span className="font-semibold text-3xl md:text-4xl text-[#4A3B2E] select-none ml-0.5">
        {suffix}
      </span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-[#F5EFE7] relative overflow-hidden border-y border-[#C7A26A]/10">
      {/* Dynamic luxury structural grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-[#4A3B2E]/10" />
        <div className="absolute left-2/4 top-0 bottom-0 w-px bg-[#4A3B2E]/10" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-[#4A3B2E]/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col gap-3 p-4 justify-center items-center"
            >
              {/* Number with live anim */}
              <div className="h-20 flex items-center justify-center">
                <CountUp to={stat.numberValue} suffix={stat.suffix} />
              </div>
              
              {/* Divide Line */}
              <div className="w-8 h-px bg-[#C7A26A]/40 my-1" />

              {/* Stat Description */}
              <p className="font-sans text-xs sm:text-sm uppercase tracking-widest text-[#4A3B2E]/85 font-medium leading-relaxed max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
