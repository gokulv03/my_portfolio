import { motion } from 'framer-motion';
import { ArrowDown, Download, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const TECH = ["C / C++", "MATLAB", "SIMULINK", "PYTHON", "STM32", "POWER ELECTRONICS", "CONTROL SYSTEMS", "ESP32", "GIT", "LABVIEW"];

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section id="top" className="relative pt-12 sm:pt-16">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Top meta line */}
        <div className="flex flex-wrap items-center justify-between gap-y-2 border-b border-hairline pb-3 mb-8 sm:mb-10">
          <span className="tag">Electrical Engineer — Automation</span>
          <span className="tag flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-accent" /> Nürnberg, DE · MSc EE
          </span>
        </div>

        <motion.div initial="hidden" animate="visible" variants={container}>
          {/* Marquee name — fills the fold */}
          <motion.h1
            variants={item}
            className="font-display font-black uppercase leading-[0.84] tracking-[-0.03em] text-ink"
            style={{ fontSize: 'var(--text-display)' }}
          >
            <span className="block">Gokul</span>
            <span className="block">
              Vemu<span className="text-accent">la</span>palli
            </span>
          </motion.h1>

          <motion.div variants={item} className="mt-8 sm:mt-10 grid lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <p className="lg:col-span-7 font-body text-lg sm:text-xl text-ink-2 leading-relaxed max-w-2xl">
              M.Sc. Electrical Engineering student specializing in Automation Technology.
              I bridge theoretical modeling with robust hardware deployments across{' '}
              <span className="text-ink font-semibold">dynamic control systems</span> and{' '}
              <span className="text-ink font-semibold">power electronics</span>.
            </p>

            <div className="lg:col-span-5 flex flex-wrap gap-3 lg:justify-end">
              <a href="#work" className="slab">
                Explore Work <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#" className="slab-outline">
                Résumé <Download className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact index row */}
          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t-2 border-ink"
          >
            <a href="mailto:gokulv0331@gmail.com" className="group flex items-center gap-3 py-4 sm:pr-6 border-b sm:border-b-0 sm:border-r border-hairline font-mono text-sm text-ink hover:text-accent transition-colors">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <span className="truncate">gokulv0331@gmail.com</span>
            </a>
            <span className="flex items-center gap-3 py-4 sm:px-6 border-b sm:border-b-0 sm:border-r border-hairline font-mono text-sm text-ink-2">
              <Phone className="w-4 h-4 shrink-0 text-accent" /> +49 15510176813
            </span>
            <a href="https://www.linkedin.com/in/gokul-vemulapalli" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 py-4 sm:px-6 border-b sm:border-b-0 sm:border-r border-hairline font-mono text-sm text-ink hover:text-accent transition-colors">
              LinkedIn <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
            <a href="https://github.com/gokulv03" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 py-4 sm:pl-6 font-mono text-sm text-ink hover:text-accent transition-colors">
              GitHub <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Brutalist tech marquee — full bleed, hard rules */}
      <div className="mt-16 border-y-[3px] border-ink bg-paper-2 overflow-hidden py-5">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, loop) => (
            <div key={loop} className="flex shrink-0 items-center">
              {TECH.map((t, i) => (
                <span key={i} className="flex items-center font-mono font-bold uppercase tracking-[0.1em] text-ink-2 text-base sm:text-xl px-6 sm:px-10">
                  {t}
                  <span className="ml-12 sm:ml-20 text-accent" aria-hidden="true">/</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
