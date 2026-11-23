import React from 'react';
import { Sparkles, Music } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#07030c] border-t border-[#f2c97d]/30 pt-14 pb-24 text-xs text-[#9d88b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="/assets/logo.png"
              alt="Logo Jheyvu"
              className="h-14 w-auto object-contain"
            />
            <div className="space-y-0.5">
              <p className="font-display text-sm font-bold text-[#f4effa]">
                Jheyvu — Sanktuarium Mrocznego Półelfa
              </p>
              <p className="font-serif-lore italic text-xs text-[#f2c97d]">
                VTuber • Streamer • SAGA RP • Kuźnia Skinów VGen
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono-rune">
            <a href="#komnata" className="hover:text-[#f2c97d] transition-colors">
              Komnata
            </a>
            <span>•</span>
            <a href="#kim-jest" className="hover:text-[#f2c97d] transition-colors">
              Historia Działalności
            </a>
            <span>•</span>
            <a href="#historia" className="hover:text-[#f2c97d] transition-colors">
              Lore Sylvthary
            </a>
            <span>•</span>
            <a href="#saga-rp" className="hover:text-[#f2c97d] transition-colors">
              SAGA RP
            </a>
            <span>•</span>
            <a href="#skiny" className="hover:text-[#f2c97d] transition-colors">
              Skiny VGen
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-[#f2c97d]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="flex items-center gap-1.5 text-[#b9a8cc]">
            <Sparkles className="w-3.5 h-3.5 text-[#f2c97d]" />
            <span>
              © {new Date().getFullYear()} Jheyvu. Wszystkie ilustracje i kreacje należą do Jheyvu oraz współpracujących artystów.
            </span>
          </p>
          <p className="flex items-center gap-1.5 text-[#7e6b94]">
            <Music className="w-3.5 h-3.5 text-[#b56eff]" />
            <span>
              Muzyka w tle: „Industrial Music Box” — Kevin MacLeod (incompetech.com, CC BY 4.0)
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
