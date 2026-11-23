import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ExternalLink } from 'lucide-react';

interface NavbarProps {
  activeOutfit: 'fantasy' | 'casual';
  onToggleOutfit: () => void;
}

const NAV_ITEMS = [
  { label: 'Komnata', href: '#komnata', numeral: 'I' },
  { label: 'Kim Jest', href: '#kim-jest', numeral: 'II' },
  { label: 'Kronika Sylvthary', href: '#historia', numeral: 'III' },
  { label: 'Modele', href: '#modele', numeral: 'IV' },
  { label: 'SAGA RP', href: '#saga-rp', numeral: 'V' },
  { label: 'Gołębnik', href: '#golebie', numeral: 'VI' },
  { label: 'Kuźnia Skinów', href: '#skiny', numeral: 'VII' },
  { label: 'Eliksirki', href: '#eliksirki', numeral: 'VIII' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeOutfit, onToggleOutfit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'py-2.5 bg-[#0c0613]/90 backdrop-blur-xl border-b border-[#f2c97d]/25 shadow-[0_10px_40px_rgba(0,0,0,0.85)]'
          : 'py-4 bg-gradient-to-b from-[#0b0611]/90 via-[#0b0611]/55 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Official Jheyvu Logo */}
        <a
          href="#komnata"
          className="relative flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative">
            <div className="absolute -inset-2 bg-[#b56eff]/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src="/assets/logo.png"
              alt="Logo Jheyvu"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-[0_0_14px_rgba(181,110,255,0.5)] transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="hidden xl:flex flex-col border-l border-[#f2c97d]/25 pl-3">
            <span className="text-[10px] font-mono-rune tracking-[0.25em] uppercase text-[#f2c97d]">
              Sanktuarium Półelfa
            </span>
            <span className="text-xs font-serif-lore italic text-[#d8b4e2]">
              Sylvthara • Eliksirki • SAGA RP
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[#160c24]/75 border border-[#f2c97d]/20 rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative px-2.5 py-1.5 text-xs font-medium text-[#d8c8eb] hover:text-[#f2c97d] transition-colors whitespace-nowrap"
            >
              <span className="font-mono-rune text-[9px] text-[#b56eff] mr-1 opacity-75 group-hover:opacity-100">
                {item.numeral}.
              </span>
              <span>{item.label}</span>
              <span className="absolute bottom-0.5 left-2.5 right-2.5 h-[1px] bg-gradient-to-r from-transparent via-[#f2c97d] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>

        {/* Quick Actions: Quick Avatar Morph + Twitch */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onToggleOutfit}
            title="Przemień strój Jheyvu na sekcji głównej"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1e1030]/90 hover:bg-[#2a1644] border border-[#f2c97d]/40 text-xs font-medium text-[#f4effa] shadow-[0_0_20px_rgba(181,110,255,0.2)] transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#f2c97d]" />
            <span className="text-[11px] uppercase tracking-wider font-mono-rune">
              {activeOutfit === 'fantasy' ? 'Strój: Fantasy' : 'Strój: Zwykły'}
            </span>
          </button>

          <a
            href="https://www.twitch.tv/jheyvu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#6c2bd9] to-[#9b4dff] hover:from-[#7c3aed] hover:to-[#b56eff] text-xs font-semibold text-white border border-[#f2c97d]/40 shadow-[0_0_20px_rgba(155,77,255,0.45)] transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-[#f2c97d] animate-ping" />
            <span>Twitch</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Otwórz księgę nawigacji"
          className="lg:hidden p-2.5 rounded-xl bg-[#1a0e29] border border-[#f2c97d]/35 text-[#f2c97d]"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 mx-4 p-5 rounded-2xl bg-[#130a1e]/98 border border-[#f2c97d]/35 backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-2 gap-2.5 mb-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#1d102e]/80 border border-[#f2c97d]/15 text-xs text-[#f4effa] hover:border-[#f2c97d]/50"
              >
                <span className="font-mono-rune text-[10px] text-[#f2c97d]">
                  {item.numeral}.
                </span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#f2c97d]/20">
            <button
              onClick={() => {
                onToggleOutfit();
                setMobileOpen(false);
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#27153d] border border-[#f2c97d]/45 text-xs font-mono-rune text-[#f2c97d]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                Przemień: {activeOutfit === 'fantasy' ? 'Fantasy → Zwykły' : 'Zwykły → Fantasy'}
              </span>
            </button>
            <a
              href="https://www.twitch.tv/jheyvu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#7e3af2] text-xs font-semibold text-white"
            >
              Twitch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
