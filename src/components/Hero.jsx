import { motion } from 'framer-motion';
import { ChevronDown, Download, MapPin, Mail, Phone, ExternalLink, Sparkles } from 'lucide-react';
import MagneticButton from './MagneticButton';
import Hero3DObject from './Hero3DObject';

const Hero = () => {
  const staggerContainer = {
    hidden: { opacity: 0 }, 
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      } 
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      <section className="relative flex items-center min-h-[100svh] pt-32 lg:pt-40 pb-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10 w-full">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-extrabold tracking-tighter mb-6 mt-4">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400">Gokul</span> Vemulapalli
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl font-light">
              M.Sc. Electrical Engineering student specializing in Automation Technology. Passionate about bridging theoretical modeling with robust hardware deployments in <span className="text-slate-200 font-medium">dynamic control systems</span> and <span className="text-slate-200 font-medium">power electronics</span>.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 items-center z-20">
              <MagneticButton as="a" href="#projects" className="px-8 py-3.5 rounded-xl bg-white text-slate-900 font-semibold hover:bg-emerald-400 hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] transition-colors duration-300 flex items-center gap-2">
                Explore Projects <ChevronDown className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton as="a" href="#" className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-slate-200 font-semibold hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 group backdrop-blur-sm cursor-pointer shadow-[0_0_15px_rgba(59,130,246,0.05)]">
                Download Resume <Download className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </MagneticButton>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-8 mt-16 text-sm text-slate-400 border-t border-white/5 pt-8">
              <span className="flex items-center gap-2.5 hover:text-white transition-colors cursor-default"><MapPin className="w-4 h-4 text-blue-400"/> Nürnberg, Germany</span>
              <a href="mailto:gokulv0331@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors"><Mail className="w-4 h-4 text-emerald-400"/> gokulv0331@gmail.com</a>
              <span className="flex items-center gap-2.5 hover:text-white transition-colors cursor-default"><Phone className="w-4 h-4 text-teal-400"/> +49-15510176813</span>
              <a href="https://www.linkedin.com/in/gokul-vemulapalli" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-blue-400 transition-colors group">
                <ExternalLink className="w-4 h-4 text-blue-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/> LinkedIn
              </a>
              <a href="https://github.com/gokulv03" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors group">
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"/> GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Abstract/Terminal Column (Keeping it simple and thematic) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="relative hidden lg:flex justify-center items-center w-full -mt-24 h-[500px]"
          >
            <Hero3DObject />
          </motion.div>
        </div>
      </section>

      {/* INFINITE TECH MARQUEE */}
      <section className="py-10 border-y border-white/5 bg-[#050a15]/30 overflow-hidden flex relative -mx-6 md:-mx-12 lg:-mx-24 w-screen">
        <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#030712] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#030712] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, loopIdx) => (
            <div key={loopIdx} className="flex shrink-0 items-center gap-12 sm:gap-24 px-6 sm:px-12">
              {["C/C++", "MATLAB", "SIMULINK", "PYTHON", "STM32", "POWER ELECTRONICS", "CONTROL SYSTEMS", "ESP32", "GIT", "LABVIEW"].map((tech, idx) => (
                <div key={idx} className="flex items-center gap-12 sm:gap-24">
                  <span className="text-2xl sm:text-4xl font-black tracking-widest text-slate-800 hover:text-emerald-400 hover:scale-110 transition-all duration-300 cursor-default">
                    {tech}
                  </span>
                  <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800/80" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
