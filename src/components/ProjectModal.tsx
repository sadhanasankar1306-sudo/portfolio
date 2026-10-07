import { X, CheckCircle, Cpu, Layers, ExternalLink, BookOpen } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#111827] border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-cyan-300 text-xs font-medium mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.highlight}</span>
          </div>
          <h3 id="modal-title" className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="text-sm text-cyan-200/90 font-mono mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Core Overview */}
        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>Project Summary</span>
            </h4>
            <p className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 leading-relaxed text-sm">
              "{project.description}"
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2">
              Key Engineering Purpose
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {project.purpose}
            </p>
          </div>

          {/* Key Features & Architecture Highlights */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Technical Highlights & Methodology</span>
            </h4>
            <ul className="space-y-2.5">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-4 border-t border-slate-800">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700/80 text-xs font-mono text-cyan-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Academic Portfolio Concept</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
