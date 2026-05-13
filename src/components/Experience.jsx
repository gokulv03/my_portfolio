import { motion } from 'framer-motion';
import { Building2, GraduationCap } from 'lucide-react';
import { useState } from 'react';

const Experience = () => {
  const [expandEduSkills, setExpandEduSkills] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <>
      {/* EXPERIENCE */}
      <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-12 bg-emerald-500/50"></div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <Building2 className="w-7 h-7 text-emerald-400" />
            Experience
          </h2>
        </div>
        
        <div className="relative border-l-2 border-slate-800 ml-4 pl-10 pb-12">
          <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1.5 ring-4 ring-[#0a0f1c] shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
          <div className="mb-2 text-sm font-mono text-emerald-400 bg-emerald-400/10 inline-block px-3 py-1 rounded-full">Jan 2023 - Jun 2023</div>
          <h3 className="text-2xl font-bold text-white mt-3">Power Electronics & Control Systems Developer</h3>
          <div className="text-slate-400 font-medium mb-4 flex items-center gap-2 mt-1">
            Academic Project · Bangalore, India
          </div>
          <p className="text-slate-500 font-light max-w-2xl leading-relaxed">
            Optimized electromagnetic actuator performance by developing real-time C/C++ control firmware on STM32 microcontrollers, achieving sub-10-microsecond pulse timing accuracy. Simulated power electronics circuits in MATLAB/Simulink and validated via 15+ measurement campaigns.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 pl-10 pb-12">
          <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1.5 ring-4 ring-[#0a0f1c] shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
          <div className="mb-2 text-sm font-mono text-emerald-400 bg-emerald-400/10 inline-block px-3 py-1 rounded-full">Oct 2022 - Dec 2022</div>
          <h3 className="text-2xl font-bold text-white mt-3">Optical Hardware Engineer</h3>
          <div className="text-slate-400 font-medium mb-4 flex items-center gap-2 mt-1">
            V2V Visible Light Communication · Bangalore, India
          </div>
          <p className="text-slate-500 font-light max-w-2xl leading-relaxed">
            Improved signal detection reliability by 15% by extracting raw sensor data via oscilloscopes and developing threshold-based detection logic using MATLAB. Processed 500+ measurement data points.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 pl-10 pb-4">
          <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1.5 ring-4 ring-[#0a0f1c] shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
          <div className="mb-2 text-sm font-mono text-emerald-400 bg-emerald-400/10 inline-block px-3 py-1 rounded-full">Mar 2022 - Aug 2022</div>
          <h3 className="text-2xl font-bold text-white mt-3">Embedded Systems Engineer</h3>
          <div className="text-slate-400 font-medium mb-4 flex items-center gap-2 mt-1">
            Wireless Automotive Monitoring System · Bangalore, India
          </div>
          <p className="text-slate-500 font-light max-w-2xl leading-relaxed">
            Evaluated sensor transmission reliability across varying operating conditions by integrating an ESP8266 multi-sensor data acquisition pipeline.
          </p>
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section id="education" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16 border-t border-white/5">
        <div className="flex items-center gap-3 mb-12">
          <div className="h-px w-12 bg-white/20"></div>
          <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-slate-300" />
            Education
          </h2>
        </div>
        
        <div className="flex flex-col gap-6">
          {/* Deggendorf */}
          <div className="group relative bg-[#0a0f1c]/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.03] hover:border-blue-500/30 transition-all duration-500 flex flex-col md:flex-row gap-6 md:items-start overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center shrink-0 shadow-sm overflow-hidden p-2">
              <GraduationCap className="w-8 h-8 text-slate-800" />
            </div>
            
            <div className="relative z-10 flex-grow text-left">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Deggendorf Institute of Technology</h3>
                <div className="text-sm font-mono text-slate-400 bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/5 mt-2 md:mt-0 w-max shrink-0">Expected Apr 2026</div>
              </div>
              
              <h4 className="text-lg font-medium text-slate-300 mb-3">M.Sc. Electrical & Information Technology</h4>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-3xl">
                Master's program specializing in Automation Technology, focusing on dynamic control methods and electromagnetic systems.
              </p>
              
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/5 text-sm text-slate-400 max-w-3xl leading-relaxed">
                <span className="font-semibold text-slate-200">Coursework:</span> Power Electronics, Control Systems, Digital Signal Processing, Real-Time OS, Analog/Digital Circuits, Electromagnetics.
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-medium px-2.5 py-1.5 bg-white/10 border border-white/10 rounded-md text-slate-300">Control Systems</span>
                <span className="text-xs font-medium px-2.5 py-1.5 bg-white/10 border border-white/10 rounded-md text-slate-300">Power Electronics</span>
                
                {!expandEduSkills ? (
                  <button 
                    onClick={() => setExpandEduSkills(true)}
                    className="text-xs font-medium px-2.5 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-md text-blue-400 hover:bg-blue-500/20 transition-colors cursor-pointer"
                  >
                    +5 skills
                  </button>
                ) : (
                  ["Signal Processing", "Real-Time OS", "Hardware-in-the-loop", "MATLAB", "Simulink"].map((skill) => (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      key={skill} 
                      className="text-xs font-medium px-2.5 py-1.5 bg-white/10 border border-white/10 rounded-md text-slate-300"
                    >
                      {skill}
                    </motion.span>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Dayananda Sagar */}
          <div className="group relative bg-[#0a0f1c]/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/[0.03] hover:border-emerald-500/30 transition-all duration-500 flex flex-col md:flex-row gap-6 md:items-start overflow-hidden shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-white border border-white/10 flex items-center justify-center shrink-0 shadow-sm p-2">
               <GraduationCap className="w-8 h-8 text-slate-800" />
            </div>

            <div className="relative z-10 flex-grow text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">Dayananda Sagar College of Engineering</h3>
                  <div className="text-sm font-mono text-slate-400 bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/5 mt-2 md:mt-0 w-max shrink-0">Graduated Jun 2023</div>
                </div>
                
                <h4 className="text-lg font-medium text-slate-300 mb-3">B.E. Electronics and Communication Engineering</h4>
                <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
                  Core focus on electronics, communication systems, hardware testing, and embedded software development.
                </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
