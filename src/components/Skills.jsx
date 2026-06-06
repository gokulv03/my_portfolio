import { motion } from 'framer-motion';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const GROUPS = [
  {
    code: "A",
    title: "Programming",
    rows: [
      { name: "C / C++", level: "Advanced" },
      { name: "MATLAB", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    code: "B",
    title: "Software & Tools",
    rows: [
      { name: "Simulink", level: "Advanced" },
      { name: "LabVIEW", level: "Advanced" },
      { name: "TIA Portal", level: "Intermediate" },
      { name: "Git & SPICE", level: "Intermediate" },
    ],
  },
  {
    code: "C",
    title: "Hardware",
    rows: [
      { name: "STM32 Microcontrollers", level: "Advanced" },
      { name: "Arduino", level: "Advanced" },
      { name: "ESP32 / ESP8266", level: "Intermediate" },
      { name: "cRIO / FPGA", level: "Intermediate" },
    ],
  },
  {
    code: "D",
    title: "Domain Expertise",
    rows: [
      { name: "Control Systems", level: "Advanced" },
      { name: "Power Electronics", level: "Advanced" },
      { name: "Real-Time OS", level: "Intermediate" },
      { name: "Digital Signal Processing", level: "Intermediate" },
    ],
  },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className="py-20 sm:py-28 border-t-2 border-ink"
    >
      <header className="mb-12 max-w-3xl">
        <span className="section-num">04 — TECHNICAL SPEC SHEET</span>
        <h2 className="mt-2 font-display font-black uppercase tracking-tight text-ink"
            style={{ fontSize: 'var(--text-4xl)' }}>
          Skills
        </h2>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {GROUPS.map((g) => (
          <div key={g.code} className="card-hard">
            <div className="flex items-center justify-between px-5 py-4 border-b-2 border-ink bg-paper-2">
              <h3 className="font-display font-extrabold text-xl uppercase tracking-tight text-ink">{g.title}</h3>
              <span className="font-mono text-sm text-accent">[{g.code}]</span>
            </div>
            <dl>
              {g.rows.map((r) => (
                <div key={r.name} className="flex items-center justify-between gap-4 px-5 py-3.5 border-b border-hairline last:border-b-0">
                  <dt className="font-mono text-sm text-ink min-w-0">{r.name}</dt>
                  <dd className={`font-mono text-xs uppercase tracking-[0.1em] shrink-0 ${r.level === 'Advanced' ? 'text-accent' : 'text-ink-2'}`}>
                    {r.level}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
