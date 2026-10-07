import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Fun Facts', href: '#fun-facts' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionElements = NAV_ITEMS.map((item) => {
        const id = item.href.substring(1);
        return {
          id,
          element: document.getElementById(id),
        };
      });

      const scrollPosition = window.scrollY + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const item = sectionElements[i];
        if (item.element) {
          const top = item.element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B1020]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Mark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md"
            aria-label="Sadhana Sankar - Home"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px] shadow-sm shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
              <div className="w-full h-full bg-[#0B1020] rounded-[7px] flex items-center justify-center">
                <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                  SS.
                </span>
              </div>
            </div>
            <span className="font-heading font-semibold text-sm tracking-tight text-slate-200 hidden sm:inline-block">
              Sadhana Sankar
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 lg:gap-2 p-1 rounded-full bg-[#111827]/60 border border-slate-800/60 backdrop-blur-sm"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-200 border border-indigo-500/30 shadow-sm'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/40'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Quick CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 rounded-2xl bg-[#111827] border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-indigo-500/20 text-cyan-200 border border-indigo-500/30'
                        : 'text-slate-300 hover:bg-slate-800/70 hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                  </a>
                );
              })}
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 px-1">
              <span>M.Tech CSE · VIT</span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="text-cyan-400 font-medium hover:underline"
              >
                Get in touch →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
