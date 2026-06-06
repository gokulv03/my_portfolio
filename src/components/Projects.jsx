import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const fallbackProjects = [
  {
    name: "Interactive Portfolio Website",
    description: "A highly interactive personal portfolio built from scratch with React, Three.js and Framer Motion physics animations and advanced CSS blending techniques.",
    html_url: "https://github.com/gokulv03/my_portfolio",
    homepage: "https://www.linkedin.com/in/gokul-vemulapalli",
    date: "May 2026",
    topics: ["React", "Three.js", "Tailwind CSS", "Framer Motion"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

const ProjectCard = ({ project, index }) => (
  <article className="card-hard group flex flex-col p-7 hover:bg-paper-2 transition-colors duration-200">
    <div className="flex items-start justify-between mb-6">
      <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, '0')}</span>
      {project.date && (
        <span className="font-mono text-xs uppercase tracking-[0.1em] text-ink-2">{project.date}</span>
      )}
    </div>

    <h3 className="font-display font-extrabold text-2xl text-ink mb-3 leading-tight">
      {project.name || project.title}
    </h3>
    <p className="font-body text-[15px] text-ink-2 leading-relaxed mb-6">
      {project.description}
    </p>

    <div className="mt-auto flex flex-wrap gap-2 mb-6">
      {project.topics?.slice(0, 4).map((t, i) => (
        <span key={i} className="font-mono text-[11px] uppercase tracking-[0.06em] px-2.5 py-1 border border-hairline text-ink-2">
          {t}
        </span>
      ))}
    </div>

    <div className="flex gap-5 pt-5 border-t-2 border-ink">
      {project.homepage && (
        <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink hover:text-accent transition-colors">
          Live <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
      {project.html_url && (
        <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.08em] text-ink hover:text-accent transition-colors">
          Code <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  </article>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/gokulv03/repos?sort=updated&per_page=4')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.filter(repo => !repo.fork).slice(0, 4).map(repo => {
            const dateObj = new Date(repo.updated_at);
            const monthYear = dateObj.toLocaleString('en-US', { month: 'short', year: 'numeric' });
            return {
              ...repo,
              date: monthYear,
              description: repo.description || `An open-source repository focused on ${repo.language || 'software'} development and implementation.`,
              topics: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'Code'],
            };
          });
          setProjects(formatted.length > 0 ? formatted : fallbackProjects);
        } else {
          setProjects(fallbackProjects);
        }
      })
      .catch(() => setProjects(fallbackProjects));
  }, []);

  return (
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      className="py-20 sm:py-28 border-t-2 border-ink"
    >
      <header className="mb-12 max-w-3xl">
        <span className="section-num">01 — SELECTED WORK</span>
        <h2 className="mt-2 font-display font-black uppercase tracking-tight text-ink"
            style={{ fontSize: 'var(--text-4xl)' }}>
          Work
        </h2>
        <p className="mt-5 font-body text-lg text-ink-2 leading-relaxed">
          Technical projects bridging complex theoretical modeling with practical hardware
          and software deployments. Pulled live from GitHub.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id || project.name} project={project} index={i} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
