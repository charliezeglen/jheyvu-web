import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layers, Wand2 } from 'lucide-react';
import { MODEL_GENERATIONS } from '../data/jheyvuData';

interface ModelsEvolutionSectionProps {
  onSelectHeroOutfit: (outfit: 'fantasy' | 'casual') => void;
}

export const ModelsEvolutionSection: React.FC<ModelsEvolutionSectionProps> = ({
  onSelectHeroOutfit,
}) => {
  const [selectedId, setSelectedId] = useState<string>('gen-new-fantasy');
  const activeModel =
    MODEL_GENERATIONS.find((m) => m.id === selectedId) || MODEL_GENERATIONS[3];

  return (
    <section
      id="modele"
      className="relative py-24 lg:py-32 border-b border-[#f2c97d]/20 overflow-hidden"
    >
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-rune uppercase tracking-[0.25em] text-[#f2c97d]">
              <Layers className="w-3.5 h-3.5 text-[#b56eff]" />
              <span>Rozdział IV • Galeria Inkarnacji</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4effa]">
              Ewolucja Modelu <span className="text-[#f2c97d]">VTubera</span>
            </h2>
            <p className="text-sm sm:text-base text-[#b9a8cc] max-w-2xl">
              Porównaj wszystkie historyczne i współczesne oblicza Jheyvu — od pierwszego modelu z kosturem z 2025 roku, przez postać 3D, aż po dwie wersje nowego modelu 2.0 z października 2026.
            </p>
          </div>
        </div>

        {/* 4 Model Cards Selector + Detailed Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 4 Generations Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {MODEL_GENERATIONS.map((model) => {
              const isSelected = model.id === selectedId;
              return (
                <button
                  key={model.id}
                  onClick={() => setSelectedId(model.id)}
                  className={`group text-left p-4 rounded-2xl border transition-all flex items-center gap-4 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#2c1646] to-[#170c26] border-[#f2c97d] shadow-[0_10px_30px_rgba(242,201,125,0.2)]'
                      : 'bg-[#140a20]/80 border-[#f2c97d]/20 hover:border-[#f2c97d]/50'
                  }`}
                >
                  <div className="w-16 h-20 rounded-xl bg-[#0c0613] border border-[#f2c97d]/30 overflow-hidden shrink-0 flex items-center justify-center p-1">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="h-full w-auto object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-mono-rune uppercase tracking-widest text-[#f2c97d]">
                      {model.era}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#f4effa] truncate">
                      {model.name}
                    </h3>
                    <p className="text-xs text-[#b9a8cc] line-clamp-2 mt-0.5">
                      {model.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Full Figure Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="grimoire-panel rounded-3xl p-6 sm:p-8 h-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Full PNG Standing Render */}
                <div className="md:col-span-6 relative h-[420px] sm:h-[470px] rounded-2xl bg-gradient-to-b from-[#211134] via-[#130a1e] to-[#0a0510] border border-[#f2c97d]/35 flex items-center justify-center p-4 overflow-hidden">
                  <div
                    className="absolute inset-x-10 bottom-6 h-16 rounded-full blur-2xl opacity-50"
                    style={{ backgroundColor: activeModel.accent }}
                  />
                  <img
                    src={activeModel.image}
                    alt={activeModel.name}
                    className="relative z-10 max-h-full w-auto object-contain drop-shadow-[0_16px_30px_rgba(0,0,0,0.9)]"
                  />
                </div>

                {/* Details */}
                <div className="md:col-span-6 space-y-5">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-[#241338] border border-[#f2c97d]/40 text-[10px] font-mono-rune uppercase tracking-widest text-[#f2c97d] mb-2">
                      {activeModel.era}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-[#f4effa]">
                      {activeModel.name}
                    </h3>
                    <p className="text-xs font-serif-lore italic text-[#d8b4e2] mt-0.5">
                      {activeModel.title} • {activeModel.date}
                    </p>
                  </div>

                  <p className="text-sm text-[#d8c8eb] leading-relaxed">
                    {activeModel.description}
                  </p>

                  <div className="space-y-2">
                    <span className="text-[11px] font-mono-rune uppercase tracking-wider text-[#f2c97d]">
                      Cechy Charakterystyczne:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {activeModel.traits.map((trait) => (
                        <div
                          key={trait}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#150b22] border border-[#f2c97d]/20 text-xs text-[#f4effa]"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-[#f2c97d] shrink-0" />
                          <span>{trait}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {(activeModel.id === 'gen-new-fantasy' ||
                    activeModel.id === 'gen-new-casual') && (
                    <a
                      href="#komnata"
                      onClick={() =>
                        onSelectHeroOutfit(
                          activeModel.id === 'gen-new-fantasy' ? 'fantasy' : 'casual'
                        )
                      }
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#f2c97d] text-[#0b0611] font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all"
                    >
                      <Wand2 className="w-3.5 h-3.5" />
                      <span>Aktywuj ten strój w Ołtarzu Głównym</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
