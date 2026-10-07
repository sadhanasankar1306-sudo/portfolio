import { ArrowUp, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Fun Facts', href: '#fun-facts' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-slate-800 bg-[#0B1020] pt-16 pb-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-800/80">
          {/* Brand & Identity (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-bold text-base text-cyan-300">
                    SS.
                  </span>
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {PERSONAL_INFO.role}
            </p>

            <div className="flex flex-col gap-1.5 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                <span>{PERSONAL_INFO.institution}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
            </div>
          </div>

          {/* Quick Links (5 cols) */}
          <div className="md:col-span-5">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-4 font-mono">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1 flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-slate-700" />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Back to top (2 cols) */}
          <div className="md:col-span-2 flex flex-col md:items-end justify-between h-full">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-cyan-300 transition-all flex items-center gap-2 text-xs cursor-pointer group"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <div className="mt-4 md:mt-0 text-left md:text-right">
              <span className="text-[11px] font-mono text-cyan-400/90 block">
                {PERSONAL_INFO.tagline}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Designed for genuine student & developer excellence · VIT
          </p>
        </div>
      </div>
    </footer>
  );
}
