import React from 'react';
import { Crown, Sparkles, Feather } from 'lucide-react';

export const RoyalDovecoteSection: React.FC = () => {
  return (
    <section
      id="golebie"
      className="relative py-24 lg:py-28 border-b border-[#f2c97d]/20 overflow-hidden"
    >
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grimoire-panel rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Royal Crowned Pigeon Artwork (Gołąb.png) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-64 h-64 sm:w-76 sm:h-76 flex items-center justify-center">
              {/* Soft royal aura */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#b56eff]/25 via-[#f2c97d]/20 to-transparent blur-2xl animate-pulse-aura" />

              {/* Decorative Heraldic Ring */}
              <svg
                viewBox="0 0 240 240"
                className="absolute inset-0 w-full h-full text-[#f2c97d]/35 animate-spin-slow"
              >
                <circle
                  cx="120"
                  cy="120"
                  r="110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="4 6"
                />
                <circle
                  cx="120"
                  cy="120"
                  r="94"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                />
              </svg>

              <img
                src="/assets/golab.png"
                alt="Królewski gołąb w złotej koronie — symbol Jheyvu"
                className="relative z-10 w-56 sm:w-64 h-auto object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.85)] animate-float-slow"
              />
            </div>

            <div className="mt-3 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1a0d2a] border border-[#f2c97d]/40 text-[11px] font-mono-rune text-[#f2c97d]">
              <Crown className="w-3.5 h-3.5 text-[#f2c97d]" />
              <span>Królewski Posłaniec Sylvthary</span>
            </div>
          </div>

          {/* Right: Editorial Lore Text from Jheyvu Strona.md */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono-rune uppercase tracking-[0.25em] text-[#f2c97d]">
              <Feather className="w-3.5 h-3.5 text-[#b56eff]" />
              <span>Rozdział VI • Królewski Gołębnik</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#f4effa]">
              Gruch, gruch! <span className="text-[#f2c97d]">Skrzydlata Fascynacja</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
              <p>
                Poza Minecraftem, fantastyką i gamingiem <strong className="text-[#f4effa]">Jheyvu</strong> ma jeszcze jedną, dość nietypową fascynację —{' '}
                <strong className="text-[#f2c97d]">gołębie!</strong>
              </p>
              <p>
                Tak, dokładnie te pierzaste stworzenia, które większość osób codziennie mija na ulicy. Dla Jheyvu są czymś znacznie ciekawszym, dlatego gołębie zajmują szczególne miejsce wśród jego zainteresowań oraz w samej symbolice jego uniwersum.
              </p>
            </div>

            <blockquote className="p-4 sm:p-5 rounded-2xl bg-[#160b24]/90 border-l-2 border-[#f2c97d] font-serif-lore italic text-lg sm:text-xl text-[#f2c97d]">
              „Bo kto powiedział, że mroczny półelf nie może być jednocześnie wielkim miłośnikiem gołębi?”
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#140a20] border border-[#f2c97d]/20 flex items-start gap-3">
                <Sparkles className="w-4 h-4 text-[#f2c97d] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-[#f4effa]">
                    Świetliste Ptaki z Sylvthary
                  </span>
                  <span className="text-xs text-[#b9a8cc]">
                    Już w dzieciństwie pierwsza magia Jheyvu przybierała postać złotych gołębi.
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#140a20] border border-[#f2c97d]/20 flex items-start gap-3">
                <Crown className="w-4 h-4 text-[#b56eff] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-semibold text-[#f4effa]">
                    Maskotka Społeczności
                  </span>
                  <span className="text-xs text-[#b9a8cc]">
                    Pierzasty monarcha w złotej koronie czuwa nad komnatą Eliksirków.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
