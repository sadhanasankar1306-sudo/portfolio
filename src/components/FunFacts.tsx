import { Compass, Puzzle, Rocket, Sparkles, Lightbulb, HeartHandshake } from 'lucide-react';
import { FUN_FACTS } from '../data/portfolioData';

export function FunFacts() {
  const iconMap: Record<string, typeof Compass> = {
    compass: Compass,
    puzzle: Puzzle,
    rocket: Rocket,
    sparkles: Sparkles,
  };

  const colors = [
    { bg: 'from-indigo-950/40 to-slate-900', border: 'border-indigo-500/30', accent: 'text-indigo-400', iconBg: 'bg-indigo-500/10' },
    { bg: 'from-cyan-950/40 to-slate-900', border: 'border-cyan-500/30', accent: 'text-cyan-400', iconBg: 'bg-cyan-500/10' },
    { bg: 'from-violet-950/40 to-slate-900', border: 'border-violet-500/30', accent: 'text-violet-400', iconBg: 'bg-violet-500/10' },
    { bg: 'from-sky-950/40 to-slate-900', border: 'border-sky-500/30', accent: 'text-sky-400', iconBg: 'bg-sky-500/10' },
  ];

  return (
    <section id="fun-facts" className="py-20 md:py-28 relative border-t border-slate-800/60 bg-[#0B1020]/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>06</span>
            <span className="w-6 h-[1px] bg-cyan-500/50" />
            <span>Mindset & Approach</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A glimpse into how I approach problem solving, curiosity-driven engineering, and continuous growth.
          </p>
        </div>

        {/* 4 Cards Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FUN_FACTS.map((fact, index) => {
            const Icon = iconMap[fact.icon] || Sparkles;
            const theme = colors[index % colors.length];

            return (
              <div
                key={fact.title}
                className={`group rounded-2xl bg-gradient-to-b ${theme.bg} border ${theme.border} p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl ${theme.iconBg} ${theme.accent} border border-slate-800 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-200 transition-colors mb-3">
                    {fact.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {fact.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[11px]">Developer Mindset</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Philosophy Ribbon */}
        <div className="mt-10 p-6 rounded-2xl bg-[#111827]/60 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-cyan-400">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                "Build. Learn. Explore."
              </p>
              <p className="text-xs text-slate-400">
                Guiding philosophy throughout my computer science journey at VIT.
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-indigo-400 bg-indigo-950/40 border border-indigo-800/50 px-3 py-1.5 rounded-lg whitespace-nowrap">
            Sadhana Sankar · 2026
          </span>
        </div>
      </div>
    </section>
  );
}
