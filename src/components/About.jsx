import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const TAGS = ["Control Systems", "Embedded", "Power Electronics", "Hardware", "Open to Work"];
const FORWARD = [
  "Thesis positions in dynamic control",
  "Hardware-in-the-loop (HIL) simulations",
  "Working with electromagnetic actuators",
  "Developing real-time C/C++ firmware",
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className="py-20 sm:py-28 border-t-2 border-ink"
    >
      {/* Section head — number stacked above heading (same column) */}
      <header className="mb-12">
        <span className="section-num">00 — PROFILE</span>
        <h2 className="mt-2 font-display font-black uppercase text-4xl sm:text-5xl tracking-tight text-ink"
            style={{ fontSize: 'var(--text-4xl)' }}>
          About
        </h2>
      </header>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
        {/* Prose */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] px-3 py-2 border-2 border-ink text-ink">
              <GraduationCap className="w-4 h-4 text-accent" />
              M.Sc. EE @ Deggendorf
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] px-3 py-2 border-2 border-accent bg-accent text-accent-ink">
              Available for Thesis
            </span>
          </div>

          <p className="font-body text-lg text-ink-2 leading-relaxed mb-6 max-w-2xl">
            I&apos;m an M.Sc. Electrical Engineering student specializing in Automation
            Technology at Deggendorf Institute of Technology, Germany. I believe in closing
            the gap between complex theoretical modeling and practical, robust hardware
            deployments.
          </p>
          <p className="font-body text-lg text-ink-2 leading-relaxed mb-8 max-w-2xl">
            Currently leaning into <span className="text-ink font-semibold">Dynamic Control
            Methods</span> and building a solid foundation in <span className="text-ink font-semibold">
            Power Electronics</span>. Always open to connecting over embedded systems, control,
            or interesting hardware projects.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {TAGS.map((tag) => (
              <span key={tag} className="font-mono text-xs uppercase tracking-[0.08em] px-3 py-1.5 border border-ink text-ink-2 hover:text-accent hover:border-accent transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Portrait + forward list */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col gap-8">
          <figure className="card-hard overflow-hidden">
            <img
              src={profileImg}
              alt="Gokul Vemulapalli"
              className="w-full aspect-square object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-[filter] duration-500"
            />
            <figcaption className="font-mono text-xs uppercase tracking-[0.12em] text-ink-2 border-t-2 border-ink px-4 py-3 flex items-center justify-between">
              <span>Gokul Vemulapalli</span>
              <span className="text-accent">EE · MSc</span>
            </figcaption>
          </figure>

          <div className="card-hard p-6">
            <h3 className="font-mono text-sm uppercase tracking-[0.12em] text-ink mb-5 pb-3 border-b-2 border-ink">
              Looking forward to
            </h3>
            <ul className="flex flex-col">
              {FORWARD.map((it, i) => (
                <li key={i} className="group flex items-start gap-3 py-3 border-b border-hairline last:border-b-0 font-body text-ink-2">
                  <ArrowRight className="w-4 h-4 mt-1 shrink-0 text-accent group-hover:translate-x-1 transition-transform" />
                  <span className="group-hover:text-ink transition-colors">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
