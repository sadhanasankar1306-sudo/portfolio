import { Award, Clock, FileBadge2, Code2, Brain, Cloud, Terminal } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

export function Certificates() {
  const iconsByCategory: Record<string, typeof Code2> = {
    'Technical Learning': Terminal,
    'Programming / Development': Code2,
    'AI / Data': Brain,
    'Cloud / Technology': Cloud,
  };

  return (
    <section id="certificates" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>05</span>
            <span className="w-6 h-[1px] bg-cyan-500/50" />
            <span>Continuous Education</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications & Learning
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
            Selected certifications and learning experiences that complement my academic journey and technical development.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert) => {
            const Icon = iconsByCategory[cert.category] || FileBadge2;
            return (
              <div
                key={cert.id}
                className="group rounded-2xl bg-[#111827]/70 border border-slate-800/90 hover:border-indigo-500/40 p-6 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5 relative overflow-hidden"
              >
                {/* Top Subtle Identifier */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-2 py-0.5 rounded">
                      {cert.code}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {cert.category}
                  </h3>

                  {/* Explicit Requirement: Clearly label as "Certificate details to be added" */}
                  <div className="mt-4 p-3 rounded-xl bg-slate-900/90 border border-dashed border-slate-700/80 text-center">
                    <p className="text-xs font-medium text-slate-300">
                      {cert.note}
                    </p>
                    <span className="text-[10px] text-slate-400 font-mono mt-1 block">
                      Under ongoing coursework
                    </span>
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-[11px]">Academic Pathway</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <span>Active certifications will be published alongside completed academic course verifications.</span>
          <span className="font-mono text-cyan-400 text-[11px]">VIT CSE Department</span>
        </div>
      </div>
    </section>
  );
}
