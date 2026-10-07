import { GraduationCap, MapPin, Calendar, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>04</span>
            <span className="w-6 h-[1px] bg-cyan-500/50" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Integrated engineering degree focused on computer science foundations, algorithms, systems design, and emerging computing paradigms.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/30 ml-2 sm:ml-4 space-y-12">
          {/* Timeline Item */}
          <div className="relative group">
            {/* Timeline node icon */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-[#0B1020] border-2 border-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-4 h-4 text-cyan-300" />
            </div>

            {/* Timeline card */}
            <div className="rounded-2xl bg-[#111827]/80 border border-slate-800 hover:border-indigo-500/30 p-6 sm:p-8 transition-all duration-200 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-2.5 py-1 rounded-md mb-2">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    <span>{EDUCATION_DATA.timeline}</span>
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-white tracking-tight">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <h4 className="text-lg font-medium text-indigo-300 mt-1">
                    {EDUCATION_DATA.degree}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800 self-start">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{EDUCATION_DATA.location}</span>
                </div>
              </div>

              {/* Description from prompt */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                "{EDUCATION_DATA.description}"
              </p>

              {/* Coursework & Learning Pillars */}
              <div className="pt-6 border-t border-slate-800/80">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Curriculum Areas & Foundational Coursework</span>
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                  {EDUCATION_DATA.courseworkAreas.map((area) => (
                    <div
                      key={area}
                      className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800/90 flex items-center gap-2 text-xs text-slate-300 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="leading-tight">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Track Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
                <span>Integrated Engineering Program</span>
                <span className="font-mono text-cyan-400">School of Computer Science & Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
