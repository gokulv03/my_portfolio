'use client';

import { motion, type Variants } from 'framer-motion';
import { useState } from 'react';

const reveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const ROLES = [
  {
    period: 'Jan 2023 — Jun 2023',
    title: 'Power Electronics & Control Systems Developer',
    org: 'Academic Project · Bangalore, India',
    body: 'Optimized electromagnetic actuator performance by developing real-time C/C++ control firmware on STM32 microcontrollers, achieving sub-10-microsecond pulse timing accuracy. Simulated power electronics circuits in MATLAB/Simulink and validated via 15+ measurement campaigns.',
  },
  {
    period: 'Oct 2022 — Dec 2022',
    title: 'Optical Hardware Engineer',
    org: 'V2V Visible Light Communication · Bangalore, India',
    body: 'Improved signal detection reliability by 15% by extracting raw sensor data via oscilloscopes and developing threshold-based detection logic using MATLAB. Processed 500+ measurement data points.',
  },
  {
    period: 'Mar 2022 — Aug 2022',
    title: 'Embedded Systems Engineer',
    org: 'Wireless Automotive Monitoring System · Bangalore, India',
    body: 'Evaluated sensor transmission reliability across varying operating conditions by integrating an ESP8266 multi-sensor data acquisition pipeline.',
  },
];

const Experience = () => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      {/* EXPERIENCE */}
      <motion.section
        id="experience"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={reveal}
        className="py-20 sm:py-28 border-t-2 border-ink"
      >
        <header className="mb-12">
          <span className="section-num">02 — EXPERIENCE</span>
          <h2
            className="mt-2 font-display font-black uppercase tracking-tight text-ink"
            style={{ fontSize: 'var(--text-4xl)' }}
          >
            Experience
          </h2>
        </header>

        <div className="border-t-2 border-ink">
          {ROLES.map((r, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-12 gap-3 lg:gap-8 py-8 border-b-2 border-ink group"
            >
              <div className="lg:col-span-3">
                <span className="font-mono text-sm text-ink-2">{r.period}</span>
              </div>
              <div className="lg:col-span-9">
                <h3 className="font-display font-extrabold text-2xl text-ink leading-tight group-hover:text-accent transition-colors">
                  {r.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mt-2 mb-4">
                  {r.org}
                </p>
                <p className="font-body text-ink-2 leading-relaxed max-w-3xl">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={reveal}
        className="py-20 sm:py-28 border-t-2 border-ink"
      >
        <header className="mb-12">
          <span className="section-num">03 — EDUCATION</span>
          <h2
            className="mt-2 font-display font-black uppercase tracking-tight text-ink"
            style={{ fontSize: 'var(--text-4xl)' }}
          >
            Education
          </h2>
        </header>

        <div className="flex flex-col gap-6">
          {/* Deggendorf */}
          <div className="card-hard p-7">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
              <h3 className="font-display font-extrabold text-2xl text-ink leading-tight">
                Deggendorf Institute of Technology
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-2 shrink-0">
                Expected Apr 2026
              </span>
            </div>
            <h4 className="font-mono text-sm uppercase tracking-[0.08em] text-accent mb-4">
              M.Sc. Electrical & Information Technology
            </h4>
            <p className="font-body text-ink-2 leading-relaxed mb-5 max-w-3xl">
              Master&apos;s program specializing in Automation Technology, focusing on dynamic
              control methods and electromagnetic systems.
            </p>
            <p className="font-body text-sm text-ink-2 leading-relaxed mb-5 border-l-2 border-accent pl-4 max-w-3xl">
              <span className="font-semibold text-ink">Coursework: </span>
              Power Electronics, Control Systems, Digital Signal Processing, Real-Time OS,
              Analog/Digital Circuits, Electromagnetics.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.06em] px-2.5 py-1.5 border border-ink text-ink-2">
                Control Systems
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.06em] px-2.5 py-1.5 border border-ink text-ink-2">
                Power Electronics
              </span>
              {!expand ? (
                <button
                  onClick={() => setExpand(true)}
                  className="font-mono text-xs uppercase tracking-[0.06em] px-2.5 py-1.5 border-2 border-accent text-accent hover:bg-accent hover:text-accent-ink transition-colors"
                >
                  +5 skills
                </button>
              ) : (
                ['Signal Processing', 'Real-Time OS', 'Hardware-in-the-loop', 'MATLAB', 'Simulink'].map(
                  (s) => (
                    <span
                      key={s}
                      className="font-mono text-xs uppercase tracking-[0.06em] px-2.5 py-1.5 border border-ink text-ink-2"
                    >
                      {s}
                    </span>
                  )
                )
              )}
            </div>
          </div>

          {/* Dayananda Sagar */}
          <div className="card-hard p-7">
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-3">
              <h3 className="font-display font-extrabold text-2xl text-ink leading-tight">
                Dayananda Sagar College of Engineering
              </h3>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-2 shrink-0">
                Graduated Jun 2023
              </span>
            </div>
            <h4 className="font-mono text-sm uppercase tracking-[0.08em] text-accent mb-4">
              B.E. Electronics & Communication Engineering
            </h4>
            <p className="font-body text-ink-2 leading-relaxed max-w-3xl">
              Core focus on electronics, communication systems, hardware testing, and embedded
              software development.
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Experience;
