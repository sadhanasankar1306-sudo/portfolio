import { GraduationCap, MapPin, Compass, Layers, Brain, Cloud, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  const interestIcons = [
    { label: 'Computer Science', icon: Terminal, desc: 'Foundational algorithms, data structures & system concepts' },
    { label: 'AI & ML', icon: Brain, desc: 'Natural language processing, intelligent models & verification' },
    { label: 'Cloud Computing', icon: Cloud, desc: 'Distributed architectures, AWS concepts & edge networks' },
    { label: 'Full-Stack Development', icon: Layers, desc: 'Modern web architecture, Spring Boot & REST APIs' },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-t border-slate-800/60">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>01</span>
            <span className="w-6 h-[1px] bg-cyan-500/50" />
            <span>Profile & Background</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#111827]/80 border border-slate-800 p-6 sm:p-8 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a Computer Science Engineering student at VIT with an interest in software development and emerging technologies. My academic journey has allowed me to explore areas such as artificial intelligence, cloud computing, web development, databases, distributed systems, and blockchain.
              </p>
              <p>
                I enjoy working on projects that combine technical concepts with real-world problems. I am continuously improving my programming, problem-solving, and development skills through academic projects and hands-on experimentation.
              </p>
            </div>

            {/* Quick Context Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Institution</span>
                  <span className="text-sm font-semibold text-slate-200">Vellore Institute of Technology (VIT)</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Vellore, Tamil Nadu</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Degree Track</span>
                  <span className="text-sm font-semibold text-slate-200">M.Tech Integrated CSE</span>
                  <span className="text-xs text-slate-400 block mt-0.5">Graduating 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interest & Technical Focus Areas (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-[#111827]/60 border border-slate-800">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4 flex items-center justify-between">
                <span>Core Engineering Interests</span>
                <span className="text-xs font-mono text-cyan-400">VIT CSE</span>
              </h3>

              <div className="space-y-3">
                {interestIcons.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-indigo-500/30 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-800 text-cyan-300 group-hover:bg-indigo-900/40 group-hover:text-cyan-200 transition-colors shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors">
                            {item.label}
                          </h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-snug">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </span>
                <span className="font-mono text-indigo-400 text-[11px]">Academic & Practical Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
