import { useState } from 'react';
import { ArrowUpRight, Cpu, Layers, Sparkles, Database, ShieldCheck, Clock, BookOpen, Radio } from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Simple abstract technology illustrations for each card
  const renderIllustration = (type: Project['illustrationType']) => {
    switch (type) {
      case 'nlp':
        return (
          <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-cyan-950/30 border border-slate-800/80 flex items-center justify-center p-4 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            {/* Abstract Neural Evidence Mesh */}
            <svg className="w-full h-full max-w-xs opacity-75" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 50 H110 M170 50 H240" stroke="#6366F1" strokeWidth="1.5" strokeDasharray="3 3" />
              <path d="M110 50 L140 25 M110 50 L140 75" stroke="#22D3EE" strokeWidth="1.5" />
              <path d="M140 25 L170 50 M140 75 L170 50" stroke="#22D3EE" strokeWidth="1.5" />
              <circle cx="40" cy="50" r="14" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <circle cx="110" cy="50" r="10" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <circle cx="140" cy="25" r="11" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
              <circle cx="140" cy="75" r="11" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
              <circle cx="170" cy="50" r="10" fill="#0f172a" stroke="#6366f1" strokeWidth="1.5" />
              <circle cx="240" cy="50" r="14" fill="#064e3b" stroke="#34d399" strokeWidth="1.5" />
              <text x="40" y="53" textAnchor="middle" fill="#c7d2fe" fontSize="8" fontFamily="monospace">PROMPT</text>
              <text x="140" y="28" textAnchor="middle" fill="#a5f3fc" fontSize="7" fontFamily="monospace">FACT 1</text>
              <text x="140" y="78" textAnchor="middle" fill="#a5f3fc" fontSize="7" fontFamily="monospace">FACT 2</text>
              <text x="240" y="53" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontFamily="monospace">VERIFIED</text>
            </svg>
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/60">
              <ShieldCheck className="w-3 h-3 text-cyan-400" />
              <span>NLI Fact-Checking</span>
            </div>
          </div>
        );

      case 'deadline':
        return (
          <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-purple-950/30 border border-slate-800/80 flex items-center justify-center p-4 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            {/* Abstract Timeline Conflict Graph */}
            <svg className="w-full h-full max-w-xs opacity-75" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="20" y1="80" x2="260" y2="80" stroke="#334155" strokeWidth="1.5" />
              {/* Task interval 1 */}
              <rect x="30" y="25" width="90" height="18" rx="4" fill="#312e81" stroke="#6366f1" strokeWidth="1.5" />
              <text x="75" y="37" textAnchor="middle" fill="#e0e7ff" fontSize="8" fontFamily="sans-serif">Task A: Priority 1</text>
              {/* Task interval 2 - overlapping */}
              <rect x="90" y="50" width="100" height="18" rx="4" fill="#581c87" stroke="#a855f7" strokeWidth="1.5" />
              <text x="140" y="62" textAnchor="middle" fill="#fae8ff" fontSize="8" fontFamily="sans-serif">Task B: Conflict Interval</text>
              {/* Conflict indicator line */}
              <rect x="90" y="20" width="30" height="52" rx="3" fill="#ef4444" fillOpacity="0.12" stroke="#ef4444" strokeWidth="1" strokeDasharray="2 2" />
              {/* Timeline ticks */}
              <circle cx="90" cy="80" r="3" fill="#ef4444" />
              <circle cx="120" cy="80" r="3" fill="#ef4444" />
              <circle cx="190" cy="80" r="3" fill="#6366f1" />
            </svg>
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-purple-300 bg-purple-950/60 border border-purple-800/60">
              <Clock className="w-3 h-3 text-purple-400" />
              <span>Interval Collision Detection</span>
            </div>
          </div>
        );

      case 'library':
        return (
          <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-emerald-950/30 border border-slate-800/80 flex items-center justify-center p-4 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            {/* Abstract Relational Schema / REST API Pipeline */}
            <svg className="w-full h-full max-w-xs opacity-75" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Entity: Users */}
              <rect x="20" y="20" width="60" height="55" rx="5" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
              <rect x="20" y="20" width="60" height="16" rx="5" fill="#1e3a8a" />
              <text x="50" y="31" textAnchor="middle" fill="#bfdbfe" fontSize="8" fontFamily="monospace">USERS</text>
              <line x1="26" y1="45" x2="74" y2="45" stroke="#334155" strokeWidth="1" />
              <line x1="26" y1="56" x2="68" y2="56" stroke="#334155" strokeWidth="1" />
              {/* Relational arrow */}
              <path d="M80 47 H110" stroke="#60a5fa" strokeWidth="1.5" />
              {/* Entity: Loans/Checkout */}
              <rect x="110" y="20" width="60" height="55" rx="5" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
              <rect x="110" y="20" width="60" height="16" rx="5" fill="#064e3b" />
              <text x="140" y="31" textAnchor="middle" fill="#a7f3d0" fontSize="8" fontFamily="monospace">LOANS</text>
              <line x1="116" y1="45" x2="164" y2="45" stroke="#334155" strokeWidth="1" />
              <line x1="116" y1="56" x2="158" y2="56" stroke="#334155" strokeWidth="1" />
              {/* Relational arrow */}
              <path d="M170 47 H200" stroke="#34d399" strokeWidth="1.5" />
              {/* Entity: Catalog / Books */}
              <rect x="200" y="20" width="60" height="55" rx="5" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
              <rect x="200" y="20" width="60" height="16" rx="5" fill="#78350f" />
              <text x="230" y="31" textAnchor="middle" fill="#fde68a" fontSize="8" fontFamily="monospace">BOOKS</text>
              <line x1="206" y1="45" x2="254" y2="45" stroke="#334155" strokeWidth="1" />
              <line x1="206" y1="56" x2="248" y2="56" stroke="#334155" strokeWidth="1" />
            </svg>
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-800/60">
              <Database className="w-3 h-3 text-emerald-400" />
              <span>Spring Boot + MySQL</span>
            </div>
          </div>
        );

      case 'cloud-edge':
        return (
          <div className="relative w-full h-36 rounded-xl bg-gradient-to-br from-indigo-950/40 via-slate-900/60 to-cyan-950/30 border border-slate-800/80 flex items-center justify-center p-4 overflow-hidden group-hover:border-indigo-500/30 transition-colors">
            {/* Abstract Edge-to-Cloud Distributed Mesh */}
            <svg className="w-full h-full max-w-xs opacity-75" viewBox="0 0 280 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Central Cloud Node */}
              <circle cx="210" cy="45" r="24" fill="#0f172a" stroke="#22d3ee" strokeWidth="1.5" />
              <text x="210" y="47" textAnchor="middle" fill="#a5f3fc" fontSize="8" fontFamily="monospace">CLOUD</text>
              <text x="210" y="58" textAnchor="middle" fill="#67e8f9" fontSize="6" fontFamily="sans-serif">Central API</text>
              {/* Edge Mesh Nodes */}
              <circle cx="50" cy="30" r="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <circle cx="50" cy="70" r="12" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <circle cx="110" cy="50" r="14" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <text x="50" y="33" textAnchor="middle" fill="#e0e7ff" fontSize="7" fontFamily="monospace">E1</text>
              <text x="50" y="73" textAnchor="middle" fill="#e0e7ff" fontSize="7" fontFamily="monospace">E2</text>
              <text x="110" y="53" textAnchor="middle" fill="#e0e7ff" fontSize="8" fontFamily="monospace">HUB</text>
              {/* Inter-edge links */}
              <line x1="50" y1="30" x2="50" y2="70" stroke="#6366f1" strokeWidth="1.5" />
              <line x1="50" y1="30" x2="110" y2="50" stroke="#6366f1" strokeWidth="1.5" />
              <line x1="50" y1="70" x2="110" y2="50" stroke="#6366f1" strokeWidth="1.5" />
              {/* Resilient bridge to cloud */}
              <path d="M124 50 H186" stroke="#22d3ee" strokeWidth="1.5" strokeDasharray="3 3" />
            </svg>
            <div className="absolute top-2 right-2 flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono text-cyan-300 bg-cyan-950/60 border border-cyan-800/60">
              <Radio className="w-3 h-3 text-cyan-400" />
              <span>Resilient Edge Mesh</span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>03</span>
              <span className="w-6 h-[1px] bg-cyan-500/50" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Practical software implementations and research concepts spanning AI verification, server-side algorithms, and distributed systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 self-start md:self-auto font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>4 Key Engineering Projects</span>
          </div>
        </div>

        {/* 2-Column Desktop Grid / 1-Column Mobile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[#111827]/80 border border-slate-800 hover:border-indigo-500/40 p-6 sm:p-7 transition-all duration-200 flex flex-col justify-between hover:shadow-2xl hover:shadow-indigo-500/5"
            >
              <div>
                {/* Abstract Technology Illustration */}
                <div className="mb-6">
                  {renderIllustration(project.illustrationType)}
                </div>

                {/* Project Highlight Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/50">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>{project.highlight}</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">VIT Academic Work</span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug mb-3">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  "{project.description}"
                </p>

                {/* Key Purpose */}
                <div className="mb-6 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-slate-200 block mb-1">Key Purpose:</span>
                  <span>{project.purpose}</span>
                </div>
              </div>

              {/* Technologies and Action Button */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-indigo-600 hover:text-white text-cyan-300 text-xs font-semibold transition-all duration-150 cursor-pointer border border-slate-700 hover:border-indigo-500 shadow-sm"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[11px] text-slate-400 font-mono">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
