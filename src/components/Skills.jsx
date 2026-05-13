import { motion } from 'framer-motion';
import { Terminal, Layers, Cpu, Brain, Code2 } from 'lucide-react';

const Skills = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="py-16 border-t border-white/5">
      <div className="flex items-center gap-3 mb-12">
        <div className="h-px w-12 bg-blue-500/50"></div>
        <h2 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
          <Code2 className="w-7 h-7 text-blue-400" />
          Tech Arsenal
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Category 1: Programming */}
        <div className="bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-blue-500/50 transition-colors group relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-blue-500/20" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Programming</h3>
          </div>
          <div className="space-y-6 relative z-10">
            {[
              { name: 'C / C++', level: 'Advanced', percent: 90 },
              { name: 'MATLAB', level: 'Advanced', percent: 85 },
              { name: 'Python', level: 'Intermediate', percent: 75 },
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-200 tracking-wide">{skill.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 hidden sm:block">{skill.level}</span>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 2: Software & Tools */}
        <div className="bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-emerald-500/50 transition-colors group relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-emerald-500/20" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(52,211,153,0.1)]">
              <Layers className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Software & Tools</h3>
          </div>
          <div className="space-y-6 relative z-10">
            {[
              { name: 'Simulink', level: 'Advanced', percent: 90 },
              { name: 'LabView', level: 'Advanced', percent: 85 },
              { name: 'TIA Portal', level: 'Intermediate', percent: 75 },
              { name: 'Git & SPICE', level: 'Intermediate', percent: 70 },
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-200 tracking-wide">{skill.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 hidden sm:block">{skill.level}</span>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category 3: Hardware */}
        <div className="bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 transition-colors group relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-purple-500/20" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(168,85,247,0.1)]">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Hardware</h3>
          </div>
          <div className="space-y-6 relative z-10">
            {[
              { name: 'STM32 Microcontrollers', level: 'Advanced', percent: 85 },
              { name: 'Arduino', level: 'Advanced', percent: 90 },
              { name: 'ESP32 / ESP8266', level: 'Intermediate', percent: 80 },
              { name: 'cRIO / FPGA', level: 'Intermediate', percent: 70 },
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-200 tracking-wide">{skill.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium border border-purple-500/20 hidden sm:block">{skill.level}</span>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Category 4: Domain Knowledge */}
        <div className="bg-[#0a0f1c]/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:border-amber-500/50 transition-colors group relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none transition-all group-hover:bg-amber-500/20" />
          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="p-3 bg-amber-500/10 rounded-2xl text-amber-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(245,158,11,0.1)]">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100">Domain Expertise</h3>
          </div>
          <div className="space-y-6 relative z-10">
            {[
              { name: 'Control Systems', level: 'Advanced', percent: 90 },
              { name: 'Power Electronics', level: 'Advanced', percent: 85 },
              { name: 'Real-Time OS', level: 'Intermediate', percent: 75 },
              { name: 'Digital Signal Processing', level: 'Intermediate', percent: 70 },
            ].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-slate-200 tracking-wide">{skill.name}</span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20 hidden sm:block">{skill.level}</span>
                  </div>
                  <span className="text-slate-400 text-sm font-mono">{skill.percent}%</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-400 rounded-full transition-all duration-1000 ease-out" style={{ width: `${skill.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
