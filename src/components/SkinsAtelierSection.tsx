import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Sparkles, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SKINS_SHOWCASE } from '../data/jheyvuData';

export const SkinsAtelierSection: React.FC = () => {
  const [selectedSkinId, setSelectedSkinId] = useState<string>('skin-jheyvu');
  const activeSkin =
    SKINS_SHOWCASE.find((s) => s.id === selectedSkinId) || SKINS_SHOWCASE[0];

  return (
    <section
      id="skiny"
      className="relative py-24 lg:py-32 border-b border-[#f2c97d]/25 overflow-hidden bg-gradient-to-b from-[#0b0611] via-[#130a1e] to-[#0b0611]"
    >
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1e1030] border border-[#f2c97d]/40 text-xs font-mono-rune uppercase tracking-[0.22em] text-[#f2c97d]">
              <Palette className="w-3.5 h-3.5 text-[#b56eff]" />
              <span>Rozdział VII • Rzemiosło na VGen</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4effa]">
              Skiny Minecraft <span className="text-[#f2c97d]">na zamówienie</span>
            </h2>

            <p className="text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
              Szukasz wyjątkowego skina do Minecrafta, który będzie pasował do Twojej postaci?{' '}
              <strong className="text-[#f4effa]">Jheyvu</strong> zajmuje się tworzeniem spersonalizowanych skinów Minecraft na zamówienie!
            </p>
            <p className="text-sm sm:text-base text-[#b9a8cc] leading-relaxed">
              Projektuje zarówno postacie inspirowane wyglądem klientów, jak i oryginalne kreacje fantasy czy skiny przygotowywane specjalnie na potrzeby serwerów i projektów fabularnych. Zamówienia realizowane są za pośrednictwem platformy{' '}
              <strong className="text-[#a3e635]">VGen</strong>, gdzie można zapoznać się z ofertą i szczegółami współpracy.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://vgen.co/jheyvu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f2c97d] via-[#e2b45e] to-[#c89d51] text-[#0b0611] font-bold text-sm shadow-[0_10px_30px_rgba(242,201,125,0.3)] hover:brightness-110 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Zamów własnego skina (vgen.co/jheyvu)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Official VGen Banner Showcase (Vgen Banner.png) */}
          <div className="lg:col-span-6">
            <a
              href="https://vgen.co/jheyvu"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-3xl overflow-hidden border-2 border-[#f2c97d]/50 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
            >
              <img
                src="/assets/vgen-banner.png"
                alt="Oficjalny baner VGen.co/Jheyvu — zamówienia na skiny Minecraft"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0611]/85 via-transparent to-transparent opacity-60 group-hover:opacity-35 transition-opacity" />
              <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full bg-[#12091c]/90 border border-[#f2c97d]/55 text-xs font-mono-rune text-[#f2c97d] flex items-center gap-1.5">
                <span>Otwórz Sklep VGen</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </a>
          </div>
        </div>

        {/* Przykładowe realizacje — 4 Pedestals Grid */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#f2c97d]/20 pb-4">
            <div>
              <span className="text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
                Portfolio Kuźni • Przykładowe Realizacje
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f4effa]">
                Kliknij postument, aby zbadać detale skina
              </h3>
            </div>
            <span className="text-xs font-mono-rune text-[#b9a8cc]">
              4 autorskie kreacje pikselowe
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKINS_SHOWCASE.map((skin) => {
              const isSelected = skin.id === selectedSkinId;
              return (
                <motion.div
                  key={skin.id}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedSkinId(skin.id)}
                  className={`grimoire-panel rounded-2xl p-5 flex flex-col justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[#f2c97d] shadow-[0_15px_45px_rgba(242,201,125,0.22)]'
                      : 'hover:border-[#f2c97d]/55'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#241338] border border-[#f2c97d]/35 text-[10px] font-mono-rune text-[#f2c97d]">
                        {skin.badge}
                      </span>
                      {/* Palette dots */}
                      <div className="flex items-center gap-1">
                        {skin.palette.slice(0, 4).map((hex) => (
                          <span
                            key={hex}
                            style={{ backgroundColor: hex }}
                            className="w-2.5 h-2.5 rounded-full border border-white/25"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Skin Pedestal Display */}
                    <div className="relative h-64 rounded-xl bg-gradient-to-b from-[#1e1030] via-[#12091d] to-[#0a0510] border border-[#f2c97d]/25 flex items-center justify-center p-4 overflow-hidden group">
                      <div
                        className="absolute bottom-3 inset-x-8 h-8 rounded-full blur-xl opacity-50"
                        style={{ backgroundColor: skin.palette[0] }}
                      />
                      <img
                        src={skin.image}
                        alt={`Skin Minecraft — ${skin.name}`}
                        className="h-52 w-auto object-contain drop-shadow-[0_14px_24px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-108"
                      />
                    </div>

                    <div className="mt-4 space-y-1">
                      <h4 className="font-display text-xl font-bold text-[#f4effa]">
                        {skin.name}
                      </h4>
                      <p className="text-xs font-serif-lore italic text-[#f2c97d]">
                        {skin.owner}
                      </p>
                      <p className="text-xs text-[#b9a8cc] leading-relaxed pt-1">
                        {skin.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#f2c97d]/15 flex items-center justify-between text-[11px] font-mono-rune text-[#d8b4e2]">
                    <span>{skin.role}</span>
                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isSelected ? 'text-[#f2c97d]' : 'text-[#5a4670]'
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Selected Skin Inspector Bar */}
          <div className="grimoire-panel rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-20 rounded-xl bg-[#11081b] border border-[#f2c97d]/40 flex items-center justify-center p-1.5 shrink-0">
                <img
                  src={activeSkin.image}
                  alt={activeSkin.name}
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono-rune uppercase tracking-widest text-[#f2c97d]">
                    Wybrana Realizacja: {activeSkin.name}
                  </span>
                </div>
                <p className="text-sm text-[#f4effa] max-w-2xl">{activeSkin.description}</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[11px] font-mono-rune text-[#b9a8cc]">
                    Paleta barw alchemicznych:
                  </span>
                  {activeSkin.palette.map((hex) => (
                    <span
                      key={hex}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#180d26] border border-white/10 text-[10px] font-mono-rune text-[#d8b4e2]"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: hex }}
                      />
                      {hex}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://vgen.co/jheyvu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#27153d] hover:bg-[#f2c97d] text-[#f2c97d] hover:text-[#0b0611] border border-[#f2c97d]/45 font-mono-rune text-xs font-bold uppercase tracking-wider transition-all shrink-0 flex items-center gap-2"
            >
              <span>Sprawdź Ofertę na VGen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
