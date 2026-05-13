import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';

const fallbackProjects = [
  {
    name: "Interactive Portfolio Website",
    description: "A highly interactive, state-of-the-art cinematic personal portfolio built from scratch. Features Framer Motion physics animations, custom React Three Fiber 3D elements, and advanced CSS blending techniques.",
    html_url: "https://github.com/gokulv03/my_portfolio",
    homepage: "https://www.linkedin.com/in/gokul-vemulapalli",
    date: "May 2026",
    topics: ["React", "Three.js", "Tailwind CSS", "Framer Motion"]
  }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0a0f]/60 border border-white/5 p-8 transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.1)] hover:-translate-y-2 glass-card"
    >
      {/* Background Blueprint Reveal */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-emerald-500/5 mix-blend-overlay" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>

      <div className="flex flex-col h-full relative z-10">
        {/* Header: Date & Links */}
        <div className="flex justify-between items-start mb-8">
          {project.date ? (
            <div className="bg-white/5 text-gray-400 text-xs px-4 py-1.5 rounded-full font-medium tracking-wide">
              {project.date}
            </div>
          ) : <div />}
          
          <div className="flex gap-2">
            {project.homepage && (
              <a 
                href={project.homepage} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/5 hover:text-white transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.html_url && (
              <a 
                href={project.html_url} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 px-3 py-1.5 rounded-md border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/5 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Code
              </a>
            )}
          </div>
        </div>
        
        {/* Title & Description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{project.name || project.title}</h3>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-8">{project.description}</p>
        </div>

        {/* Tech Tags */}
        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {project.topics?.slice(0, 4).map((topic, i) => (
            <span key={i} className="text-[11px] font-medium px-3 py-1.5 bg-transparent border border-white/10 text-gray-400 rounded-full capitalize tracking-wide hover:text-gray-200 hover:border-white/20 transition-colors">
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Attempt to fetch live projects from GitHub
    fetch('https://api.github.com/users/gokulv03/repos?sort=updated&per_page=4')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          const formattedData = data.filter(repo => !repo.fork).slice(0, 4).map(repo => {
            const dateObj = new Date(repo.updated_at);
            const monthYear = dateObj.toLocaleString('en-US', { month: 'short', year: 'numeric' });
            return {
              ...repo,
              date: monthYear,
              // Fallback description if the repo lacks one
              description: repo.description || `An open-source repository focused on ${repo.language || 'software'} development and implementation.`,
              // Fallback topics if the repo lacks tags
              topics: repo.topics && repo.topics.length > 0 ? repo.topics : [repo.language || 'Code']
            };
          });
          setProjects(formattedData.length > 0 ? formattedData : fallbackProjects);
        } else {
          setProjects(fallbackProjects);
        }
      })
      .catch(() => setProjects(fallbackProjects));
  }, []);

  return (
    <section id="projects" className="py-32 px-4 md:px-10 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 md:mb-24 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 section-title">Featured Projects</h2>
        <p className="text-xl text-gray-400 max-w-2xl font-light mx-auto md:mx-0">
          A showcase of my robust technical projects bridging complex theoretical modeling with practical hardware and software deployments.
        </p>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <ProjectCard key={project.id || project.name} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
