import { useState } from 'react';
import { 
  Code2, 
  Globe, 
  Database, 
  Brain, 
  Cloud, 
  Wrench,
  CheckCircle2,
  Layers
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const categoryIcons: Record<string, typeof Code2> = {
    'Programming': Code2,
    'Web Development': Globe,
    'Backend & Database': Database,
    'AI & Data': Brain,
    'Cloud & Distributed Systems': Cloud,
    'Tools & Technologies': Wrench,
  };

  const filteredCategories = selectedFilter === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(cat => cat.title.toLowerCase().includes(selectedFilter.toLowerCase()));

  const totalSkillCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  return (
    <section id="skills" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>02</span>
              <span className="w-6 h-[1px] bg-cyan-500/50" />
              <span>Technical Competencies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills & Tooling
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Academic foundation and hands-on toolsets developed through engineering coursework and software projects.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3.5 py-2 rounded-xl border border-slate-800 self-start md:self-auto">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Categorized across <span className="text-slate-200 font-semibold">{SKILL_CATEGORIES.length}</span> domains ({totalSkillCount} technologies)</span>
          </div>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedFilter('all')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
              selectedFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Categories ({SKILL_CATEGORIES.length})
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              type="button"
              onClick={() => setSelectedFilter(cat.title)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap cursor-pointer ${
                selectedFilter === cat.title
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.title] || Code2;
            return (
              <div
                key={category.title}
                className="group rounded-2xl bg-[#111827]/70 border border-slate-800/90 hover:border-indigo-500/40 p-6 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-indigo-500/5"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 group-hover:text-cyan-200 group-hover:border-indigo-500/30 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white tracking-tight">
                        {category.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Clean Tags / Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <div
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 group-hover:border-slate-700/80 hover:border-cyan-500/50 hover:text-white transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext footnote */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                    <span>Academic & Project Application</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Academic note */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            <span className="text-slate-300 font-medium">Approach:</span> Continuous hands-on learning across theoretical foundations, algorithm design, and modern framework implementation.
          </p>
          <span className="font-mono text-cyan-400 text-[11px] whitespace-nowrap">VIT Computer Science & Engineering</span>
        </div>
      </div>
    </section>
  );
}
