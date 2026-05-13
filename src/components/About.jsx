import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, ChevronRight } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id="about"
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={fadeInUp}
      className="py-16"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-blue-500/50"></div>
            <h2 className="text-3xl font-bold tracking-tight text-white">About Me</h2>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium border rounded-xl border-blue-500/20 bg-blue-500/10 text-blue-300">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              M.Sc. EE @ Deggendorf Institute of Technology
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium border rounded-xl border-emerald-500/20 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(52,211,153,0.05)]">
              <Sparkles className="w-4 h-4" />
              Available for Thesis / Opportunities
            </div>
          </div>
          
          <p className="text-slate-400 leading-relaxed mb-6 font-light text-lg">
            Hi! I&apos;m an M.Sc. Electrical Engineering student specializing in Automation Technology at Deggendorf Institute of Technology, Germany. I strongly believe in bridging the gap between complex theoretical modeling and practical, robust hardware deployments.
          </p>
          <p className="text-slate-400 leading-relaxed mb-8 font-light text-lg">
            Currently leaning into <span className="text-slate-200 font-medium">Dynamic Control Methods</span> & building a solid foundation in <span className="text-slate-200 font-medium">Power Electronics</span>. Always open to connecting over new technologies, embedded systems, or interesting hardware projects!
          </p>
          <div className="flex flex-wrap gap-2.5">
            {["#ControlSystems", "#Embedded", "#PowerElectronics", "#Hardware", "#OpenToWork"].map((tag) => (
              <span key={tag} className="text-xs px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 font-medium hover:bg-blue-500/20 transition-colors cursor-default">{tag}</span>
            ))}
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex flex-col gap-8">
          <div className="relative w-full aspect-square max-w-[280px] mx-auto rounded-[2rem] overflow-hidden p-[2px] group shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            {/* Glowing Animated Border */}
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#3b82f6_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite]" />
            <div className="absolute inset-[-50%] bg-[conic-gradient(from_180deg,transparent_0_340deg,#10b981_360deg)] opacity-70 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_4s_linear_infinite]" />
            
            <div className="relative w-full h-full rounded-[1.85rem] overflow-hidden bg-[#0a0f1c]">
              {/* The Vignette/Blend Mask */}
              <div className="absolute inset-0 z-10 pointer-events-none" style={{ 
                background: 'radial-gradient(circle at 50% 40%, transparent 35%, #0a0f1c 85%)'
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10 opacity-90 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_20px_#0a0f1c] z-10 pointer-events-none" />
              
              <img 
                src={profileImg} 
                alt="Gokul Vemulapalli" 
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
          </div>

          <div className="relative p-1 rounded-2xl bg-gradient-to-b from-blue-500/20 via-emerald-500/10 to-transparent">
            <div className="bg-[#0a0f1c] rounded-xl p-8 h-full border border-white/5 relative z-10">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-white">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                Looking forward to:
              </h3>
              <ul className="space-y-4 text-slate-400">
                {[
                  "Thesis positions in dynamic control",
                  "Hardware-in-the-loop (HIL) simulations",
                  "Working with electromagnetic actuators",
                  "Developing real-time C/C++ firmware"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <ChevronRight className="w-5 h-5 text-blue-400 shrink-0 group-hover:translate-x-1 transition-transform" /> 
                    <span className="group-hover:text-slate-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
