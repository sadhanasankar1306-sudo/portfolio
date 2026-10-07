import { ArrowRight, Terminal, Sparkles, MapPin, GraduationCap, Code2, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content, 7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Student badge / Status banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-xs text-slate-300 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-medium text-slate-200">Vellore Institute of Technology (VIT)</span>
              <span className="text-slate-500">·</span>
              <span className="text-cyan-300 font-mono text-[11px]">2026 Batch</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">{PERSONAL_INFO.name}.</span>
            </h1>

            {/* Large Supporting Text */}
            <h2 className="font-heading text-xl sm:text-2xl lg:text-3xl font-medium text-cyan-300/90 mb-5 tracking-tight">
              {PERSONAL_INFO.heroSupportingText}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Interactive Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white font-medium text-sm border border-slate-700 hover:border-slate-600 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <span>Get In Touch</span>
              </button>
            </div>

            {/* Meta summary footer */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>M.Tech Integrated CSE</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="italic">Build. Learn. Explore.</span>
              </div>
            </div>
          </div>

          {/* Right Column (Subtle Developer / Technology-inspired Visual, 5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative subtle ambient ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-75" />

              <div className="relative rounded-3xl bg-[#111827] border border-slate-800/80 p-6 sm:p-7 shadow-2xl backdrop-blur-sm overflow-hidden">
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    <span>portfolio.sadhana.vit</span>
                  </span>
                </div>

                {/* Developer Profile Identity Card (Circular Placeholder for Sadhana Sankar) */}
                <div className="flex flex-col items-center text-center my-2">
                  <div className="relative mb-4 group">
                    {/* Concentric subtle radar pulse rings */}
                    <div className="absolute -inset-3 rounded-full border border-indigo-500/20 animate-spin-slow pointer-events-none" />
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 p-[2px]">
                      <div className="w-full h-full bg-[#0B1020] rounded-full" />
                    </div>

                    {/* Circular placeholder specifically stating 'Sadhana Sankar' */}
                    <div 
                      className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#131c33] via-[#0e172a] to-[#18233d] flex flex-col items-center justify-center p-3 text-center shadow-inner border border-slate-700/60"
                      title="Sadhana Sankar"
                    >
                      <div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center mb-1">
                        <span className="font-heading font-bold text-lg text-cyan-300">
                          {PERSONAL_INFO.initials}
                        </span>
                      </div>
                      <span className="font-heading font-bold text-xs sm:text-sm tracking-tight text-white leading-tight">
                        {PERSONAL_INFO.name}
                      </span>
                      <span className="text-[10px] text-slate-400 mt-0.5">VIT Student</span>
                    </div>
                  </div>

                  <p className="text-xs font-mono text-slate-400 max-w-xs mb-5">
                    M.Tech Integrated Computer Science & Engineering
                  </p>

                  {/* Required Visual Badges: CSE, AI, Cloud, Web Development */}
                  <div className="w-full pt-4 border-t border-slate-800/80">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3 text-left flex items-center gap-1.5">
                      <Cpu className="w-3 h-3 text-indigo-400" />
                      <span>Core Focus Areas</span>
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {PERSONAL_INFO.heroBadges.map((badge) => (
                        <div
                          key={badge}
                          className="px-3 py-2 rounded-lg bg-slate-900/90 border border-slate-800 hover:border-indigo-500/40 transition-colors flex items-center gap-2 text-left"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                          <span className="text-xs font-medium text-slate-200">{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Micro Terminal Footnote */}
                  <div className="w-full mt-4 p-2.5 rounded-lg bg-[#0B1020]/80 border border-slate-800/80 text-left font-mono text-[11px] text-slate-400 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="text-slate-300">stack:</span>
                      <span className="text-slate-400">Java · Python · Cloud</span>
                    </span>
                    <span className="text-emerald-400 text-[10px]">● active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
