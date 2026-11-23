import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Wand2,
  Eye,
  BookOpen,
  Play,
  SlidersHorizontal,
  Shield,
  Shirt,
  Compass,
} from 'lucide-react';
import { HERO_FORMS, CHAMBER_EASTER_EGGS } from '../data/jheyvuData';

interface HeroSanctuaryProps {
  activeOutfit: 'fantasy' | 'casual';
  onChangeOutfit: (outfit: 'fantasy' | 'casual') => void;
}

export const HeroSanctuary: React.FC<HeroSanctuaryProps> = ({
  activeOutfit,
  onChangeOutfit,
}) => {
  const [isMorphing, setIsMorphing] = useState(false);
  const [inspectMode, setInspectMode] = useState(false);
  const [veilLevel, setVeilLevel] = useState(50); // Used only when inspectMode is active
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [showChamberSecrets, setShowChamberSecrets] = useState(false);
  const stageRef = useRef<HTMLDivElement | null>(null);

  const currentForm = HERO_FORMS[activeOutfit];

  const triggerTransformation = (target: 'fantasy' | 'casual') => {
    if (target === activeOutfit && !inspectMode) {
      // toggle to the other if user clicks same or main trigger
      target = activeOutfit === 'fantasy' ? 'casual' : 'fantasy';
    }
    setInspectMode(false);
    setIsMorphing(true);
    onChangeOutfit(target);
  };

  useEffect(() => {
    if (!isMorphing) return;
    const timer = setTimeout(() => {
      setIsMorphing(false);
    }, 1050);
    return () => clearTimeout(timer);
  }, [isMorphing, activeOutfit]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setMouseTilt({ x: nx * 12, y: ny * -10 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="komnata"
      className="relative min-h-screen pt-24 pb-16 lg:pt-28 lg:pb-24 flex items-center overflow-hidden border-b border-[#f2c97d]/25"
    >
      {/* SVG Filter Definitions for Magical Shadow-Weave Displacement */}
      <svg className="hidden" aria-hidden="true">
        <defs>
          <filter id="sylvthara-rift-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.025 0.06"
              numOctaves="3"
              seed="8"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={isMorphing ? 34 : 0}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Authentic Illustrated Chamber Backdrop (Tło.png) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/tlo-komnata.png"
          alt="Alchemiczna komnata Jheyvu z księgozbiorem, eliksirami i ołtarzem"
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-700"
          style={{
            transform: `scale(1.04) translate(${mouseTilt.x * -0.45}px, ${mouseTilt.y * -0.45}px)`,
          }}
        />
        {/* Atmospheric Vignette & Readability Layering that preserves the artwork */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09040f]/95 via-[#0e0717]/75 to-[#0b0512]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0611] via-transparent to-[#0b0611]/80" />
        {/* Warm Candlelight & Amethyst Lantern Glows matching Tło.png */}
        <div className="absolute top-[18%] left-[4%] w-64 h-64 rounded-full bg-[#b56eff]/20 blur-[90px] pointer-events-none animate-pulse-aura" />
        <div className="absolute bottom-[18%] left-[14%] w-56 h-56 rounded-full bg-[#f2c97d]/15 blur-[80px] pointer-events-none animate-pulse-aura" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: Elven Identity, Lore Intro & Transformation Controls */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Crest Badge */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#190d29]/90 border border-[#f2c97d]/40 shadow-[0_0_30px_rgba(181,110,255,0.25)]">
              <span className="w-2 h-2 rounded-full bg-[#f2c97d] shadow-[0_0_8px_#f2c97d]" />
              <span className="text-[11px] font-mono-rune uppercase tracking-[0.22em] text-[#f2c97d]">
                VTuber • Streamer • Gaming • Minecraft • Pół-Elf
              </span>
            </div>

            {/* Official Logo & Title */}
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <img
                  src="/assets/logo.png"
                  alt="Jheyvu"
                  className="h-20 sm:h-28 w-auto object-contain drop-shadow-[0_10px_28px_rgba(181,110,255,0.55)]"
                />
                <div className="hidden sm:flex flex-col border-l border-[#f2c97d]/30 pl-4">
                  <span className="text-xs font-mono-rune uppercase tracking-[0.25em] text-[#b56eff]">
                    Wygnaniec z Sylvthary
                  </span>
                  <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#f4effa] tracking-wide">
                    Mroczny Półelf w Liliowej Koszuli
                  </h1>
                  <span className="text-sm font-serif-lore italic text-[#f2c97d]">
                    „Gdzie magia Złotego Drzewa splata się z cieniem”
                  </span>
                </div>
              </div>

              <h1 className="sm:hidden font-display text-2xl font-bold text-[#f4effa]">
                Jheyvu — Mroczny Półelf z Sylvthary
              </h1>
            </div>

            {/* Main Lead Copy from Jheyvu Strona.md */}
            <div className="grimoire-panel rounded-2xl p-5 sm:p-6 space-y-3 backdrop-blur-xl">
              <p className="text-base sm:text-lg text-[#f4effa]/95 leading-relaxed">
                <strong className="text-[#f2c97d] font-semibold">Jheyvu</strong> to polski VTuber i streamer, który zabiera swoich widzów w świat gier, fantastycznych przygód i dobrej zabawy! Na jego kanale króluje{' '}
                <span className="text-[#d8b4e2] font-medium underline decoration-[#f2c97d]/50 underline-offset-4">
                  Minecraft
                </span>
                , ale nie brakuje również takich tytułów jak{' '}
                <span className="text-[#f2c97d]">Genshin Impact</span>,{' '}
                <span className="text-[#f2c97d]">Cyberpunk 2077</span>,{' '}
                <span className="text-[#f2c97d]">Phasmophobia</span> czy{' '}
                <span className="text-[#f2c97d]">Meccha Chameleon</span>.
              </p>
              <p className="text-sm sm:text-base text-[#b9a8cc] leading-relaxed">
                Oprócz gamingu Jheyvu uwielbia spędzać czas ze swoją społecznością podczas transmisji{' '}
                <strong className="text-[#f4effa]">Just Chatting</strong>, gdzie najważniejsze są swobodne rozmowy, dobry humor i przyjazna atmosfera.
              </p>

              {/* Dynamic Quote reflecting the currently selected Avatar Form */}
              <div className="pt-3 border-t border-[#f2c97d]/20 flex items-start gap-3">
                <img
                  src="/assets/profilowe.png"
                  alt="Portret Jheyvu z eliksirem"
                  className="w-12 h-12 rounded-xl object-cover border border-[#f2c97d]/50 shrink-0 shadow-md"
                />
                <p className="font-serif-lore italic text-base sm:text-lg text-[#f2c97d] leading-snug">
                  {currentForm.quote}
                </p>
              </div>
            </div>

            {/* RITE OF TRANSMUTATION — Avatar Form Switcher */}
            <div className="rounded-2xl bg-[#150b22]/90 border border-[#f2c97d]/40 p-4 sm:p-5 shadow-[0_15px_45px_rgba(0,0,0,0.8)] space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-4 h-4 text-[#f2c97d]" />
                  <span className="text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
                    Rytuał Przemiany Awatara (PNG Hero Morph)
                  </span>
                </div>
                <button
                  onClick={() => setInspectMode((prev) => !prev)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono-rune border transition-all cursor-pointer ${
                    inspectMode
                      ? 'bg-[#f2c97d] text-[#0b0611] border-[#f2c97d] font-bold'
                      : 'bg-[#211233] text-[#d8b4e2] border-[#f2c97d]/30 hover:border-[#f2c97d]'
                  }`}
                >
                  <SlidersHorizontal className="w-3 h-3" />
                  <span>{inspectMode ? 'Tryb Zasłony: Aktywny' : 'Suwak Zasłony Cienia'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Fantasy Form Button */}
                <button
                  onClick={() => triggerTransformation('fantasy')}
                  className={`group relative flex items-center gap-3.5 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    activeOutfit === 'fantasy' && !inspectMode
                      ? 'bg-gradient-to-r from-[#2e174a] to-[#1f1033] border-[#f2c97d] shadow-[0_0_25px_rgba(242,201,125,0.28)]'
                      : 'bg-[#12091c]/80 border-[#f2c97d]/20 hover:border-[#f2c97d]/50'
                  }`}
                >
                  <div className="w-11 h-11 rounded-lg bg-[#241338] border border-[#f2c97d]/40 flex items-center justify-center shrink-0 text-[#f2c97d]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono-rune uppercase tracking-wider text-[#f2c97d]">
                        Opcja I • Fantasy
                      </span>
                      {activeOutfit === 'fantasy' && !inspectMode && (
                        <span className="w-2 h-2 rounded-full bg-[#f2c97d]" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#f4effa] truncate">
                      Szata Wygnańca z Sylvthary
                    </p>
                    <p className="text-[11px] text-[#b9a8cc] truncate">
                      Kaptur, sakwa alchemiczna i sztylet
                    </p>
                  </div>
                </button>

                {/* Casual Form Button */}
                <button
                  onClick={() => triggerTransformation('casual')}
                  className={`group relative flex items-center gap-3.5 p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    activeOutfit === 'casual' && !inspectMode
                      ? 'bg-gradient-to-r from-[#31184f] to-[#1f1033] border-[#b56eff] shadow-[0_0_25px_rgba(181,110,255,0.35)]'
                      : 'bg-[#12091c]/80 border-[#f2c97d]/20 hover:border-[#b56eff]/60'
                  }`}
                >
                  <div className="w-11 h-11 rounded-lg bg-[#241338] border border-[#b56eff]/45 flex items-center justify-center shrink-0 text-[#d8b4e2]">
                    <Shirt className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono-rune uppercase tracking-wider text-[#d8b4e2]">
                        Opcja II • Zwykły
                      </span>
                      {activeOutfit === 'casual' && !inspectMode && (
                        <span className="w-2 h-2 rounded-full bg-[#b56eff]" />
                      )}
                    </div>
                    <p className="text-sm font-semibold text-[#f4effa] truncate">
                      Liliowa Koszula Streamera
                    </p>
                    <p className="text-[11px] text-[#b9a8cc] truncate">
                      Rozpięta koszula, łańcuchy i szarfa
                    </p>
                  </div>
                </button>
              </div>

              {/* Interactive Veil Slider when Inspect Mode is toggled */}
              {inspectMode && (
                <div className="pt-2 space-y-1.5 border-t border-[#f2c97d]/20">
                  <div className="flex justify-between text-[11px] font-mono-rune text-[#d8b4e2]">
                    <span>100% Strój Fantasy</span>
                    <span className="text-[#f2c97d]">
                      Przesuń zasłonę wymiarów ({veilLevel}%)
                    </span>
                    <span>100% Strój Zwykły</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={veilLevel}
                    onChange={(e) => setVeilLevel(Number(e.target.value))}
                    className="w-full h-2 accent-[#f2c97d] bg-[#26143b] rounded-lg cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Primary CTAs & Chamber Lore Trigger */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="https://www.twitch.tv/videos/2897434180"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f2c97d] via-[#e2b45e] to-[#c89d51] text-[#0d0714] font-bold text-sm shadow-[0_10px_30px_rgba(242,201,125,0.35)] hover:brightness-110 transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Obejrzyj Debiut 2.0 (Twitch)</span>
              </a>

              <a
                href="https://discord.com/invite/faaTujmWUE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#221235]/90 hover:bg-[#2f194a] text-[#f4effa] border border-[#b56eff]/50 font-semibold text-sm shadow-[0_10px_25px_rgba(181,110,255,0.2)] transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#b56eff]" />
                <span>Dołącz do Eliksirków</span>
              </a>

              <button
                onClick={() => setShowChamberSecrets((prev) => !prev)}
                className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-[#140a20]/85 hover:bg-[#1f1032] text-[#d8b4e2] border border-[#f2c97d]/30 text-xs font-mono-rune uppercase tracking-wider transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#f2c97d]" />
                <span>Sekrety Komnaty w Tle</span>
              </button>
            </div>

            {/* Collapsible Easter Eggs from Tło.png */}
            <AnimatePresence>
              {showChamberSecrets && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 rounded-xl bg-[#12091d]/95 border border-[#f2c97d]/40 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {CHAMBER_EASTER_EGGS.map((egg) => (
                      <div
                        key={egg.title}
                        className="p-3 rounded-lg bg-[#1c0f2b] border border-[#f2c97d]/15 space-y-1"
                      >
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#f2c97d]">
                          <Compass className="w-3.5 h-3.5 shrink-0" />
                          <span>{egg.title}</span>
                        </div>
                        <p className="text-xs text-[#b9a8cc] leading-relaxed">{egg.detail}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Interactive Avatar Portal & Alchemy Transmutation Stage */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => {
                if (!inspectMode) {
                  triggerTransformation(activeOutfit === 'fantasy' ? 'casual' : 'fantasy');
                }
              }}
              title="Kliknij postać Jheyvu, aby przemienić strój między wersją Fantasy a Zwykłą"
              className="relative w-full max-w-[440px] h-[590px] sm:h-[650px] flex items-center justify-center cursor-pointer select-none group"
              style={{
                perspective: '1200px',
              }}
            >
              {/* Gothic Arch Pedestal Backdrop */}
              <div className="absolute inset-x-4 top-6 bottom-6 gothic-arch-frame bg-gradient-to-b from-[#231138]/75 via-[#140a22]/85 to-[#0c0614]/95 border-2 border-[#f2c97d]/45 shadow-[0_25px_80px_rgba(0,0,0,0.95),inset_0_0_60px_rgba(181,110,255,0.22)] overflow-hidden">
                {/* Subtle crop of Tło.png gothic window inside the arch */}
                <img
                  src="/assets/tlo-komnata.png"
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover object-center opacity-35 mix-blend-luminosity scale-125"
                />

                {/* Rotating Alchemical Sigil Ring behind Jheyvu */}
                <div className="absolute top-16 inset-x-0 flex justify-center pointer-events-none">
                  <svg
                    viewBox="0 0 300 300"
                    className={`w-72 h-72 sm:w-80 sm:h-80 transition-all duration-700 ${
                      isMorphing
                        ? 'text-[#f2c97d] scale-110 opacity-95 animate-spin'
                        : activeOutfit === 'fantasy'
                        ? 'text-[#f2c97d]/40 animate-spin-slow'
                        : 'text-[#b56eff]/45 animate-spin-reverse-slow'
                    }`}
                  >
                    <circle
                      cx="150"
                      cy="150"
                      r="136"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeDasharray="6 4"
                    />
                    <circle
                      cx="150"
                      cy="150"
                      r="114"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                    {/* 8-point elven star geometry */}
                    <polygon
                      points="150,22 178,122 278,150 178,178 150,278 122,178 22,150 122,122"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.1"
                    />
                    <polygon
                      points="60,60 165,115 240,60 185,165 240,240 135,185 60,240 115,135"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.7"
                      opacity="0.7"
                    />
                    <circle cx="150" cy="150" r="68" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Ambient Floor Aura */}
                <div
                  className={`absolute bottom-4 inset-x-10 h-20 rounded-full blur-2xl transition-colors duration-700 ${
                    activeOutfit === 'fantasy' ? 'bg-[#f2c97d]/35' : 'bg-[#b56eff]/40'
                  }`}
                />
              </div>

              {/* Top Floating Badge inside Arch */}
              <div className="absolute top-10 z-30 flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11081c]/90 border border-[#f2c97d]/50 text-[10px] font-mono-rune tracking-[0.2em] text-[#f2c97d] uppercase shadow-lg">
                <Sparkles className="w-3 h-3 text-[#b56eff]" />
                <span>{inspectMode ? 'ZASŁONA WYMIARÓW' : currentForm.badge}</span>
              </div>

              {/* CHARACTER PNG LAYER STACK */}
              <div
                className="relative z-20 w-full h-full flex items-end justify-center pt-12 pb-6 px-4 transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mouseTilt.x}deg) rotateX(${mouseTilt.y}deg)`,
                  filter: isMorphing ? 'url(#sylvthara-rift-filter)' : 'none',
                }}
              >
                {inspectMode ? (
                  /* Dual-layer interactive split curtain comparison */
                  <div className="relative w-full h-full flex items-end justify-center">
                    {/* Base: Casual */}
                    <img
                      src={HERO_FORMS.casual.image}
                      alt="Jheyvu — Strój Zwykły"
                      className="absolute inset-x-0 bottom-0 mx-auto max-h-[520px] sm:max-h-[575px] w-auto object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.95)]"
                    />
                    {/* Clipped Top: Fantasy */}
                    <img
                      src={HERO_FORMS.fantasy.image}
                      alt="Jheyvu — Strój Fantasy"
                      style={{
                        clipPath: `inset(0 0 ${veilLevel}% 0)`,
                      }}
                      className="absolute inset-x-0 bottom-0 mx-auto max-h-[520px] sm:max-h-[575px] w-auto object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.95)]"
                    />
                    {/* Glowing Horizontal Veil Line */}
                    <div
                      style={{ bottom: `${veilLevel}%` }}
                      className="absolute inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#f2c97d] to-transparent shadow-[0_0_20px_#b56eff,0_0_35px_#f2c97d] pointer-events-none flex items-center justify-center"
                    >
                      <span className="px-2.5 py-0.5 rounded-full bg-[#12081e] border border-[#f2c97d] text-[9px] font-mono-rune text-[#f2c97d]">
                        SZCZELINA SYLVTHARY
                      </span>
                    </div>
                  </div>
                ) : (
                  /* Animated Ritual Transformation between Fantasy & Casual PNGs */
                  <div className="relative w-full h-full flex items-end justify-center">
                    {/* Fantasy Outfit Layer */}
                    <motion.img
                      src={HERO_FORMS.fantasy.image}
                      alt="Jheyvu w stroju fantasy z kapturem i sakwą"
                      initial={false}
                      animate={{
                        opacity: activeOutfit === 'fantasy' ? 1 : 0,
                        scale: activeOutfit === 'fantasy' ? 1 : 0.96,
                        filter:
                          activeOutfit === 'fantasy'
                            ? 'brightness(1) contrast(1.02) drop-shadow(0 18px 36px rgba(0,0,0,0.9))'
                            : 'brightness(1.8) blur(6px)',
                      }}
                      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 mx-auto max-h-[520px] sm:max-h-[575px] w-auto object-contain pointer-events-none"
                    />

                    {/* Casual Outfit Layer */}
                    <motion.img
                      src={HERO_FORMS.casual.image}
                      alt="Jheyvu w liliowej koszuli"
                      initial={false}
                      animate={{
                        opacity: activeOutfit === 'casual' ? 1 : 0,
                        scale: activeOutfit === 'casual' ? 1 : 0.96,
                        filter:
                          activeOutfit === 'casual'
                            ? 'brightness(1) contrast(1.02) drop-shadow(0 18px 36px rgba(0,0,0,0.9))'
                            : 'brightness(1.8) blur(6px)',
                      }}
                      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 mx-auto max-h-[520px] sm:max-h-[575px] w-auto object-contain pointer-events-none"
                    />
                  </div>
                )}

                {/* Vertical Magical Rune Sweep Beam during Transformation */}
                <AnimatePresence>
                  {isMorphing && (
                    <motion.div
                      key={`beam-${activeOutfit}`}
                      initial={{ top: '95%', opacity: 0 }}
                      animate={{ top: ['95%', '4%'], opacity: [0, 1, 1, 0] }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: 'easeInOut' }}
                      className="absolute inset-x-6 z-30 pointer-events-none flex flex-col items-center"
                    >
                      <div className="w-full h-1.5 rounded-full bg-gradient-to-r from-transparent via-[#f2c97d] to-transparent shadow-[0_0_30px_8px_rgba(181,110,255,0.95)]" />
                      <div className="w-4/5 h-16 -mt-8 bg-gradient-to-b from-[#b56eff]/40 via-[#f2c97d]/25 to-transparent blur-md" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Floating Quick-Switch Pill on Pedestal Base */}
              <div className="absolute bottom-2 inset-x-8 z-30 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#130a1f]/95 border border-[#f2c97d]/50 shadow-[0_12px_30px_rgba(0,0,0,0.9)] group-hover:border-[#f2c97d] transition-colors">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono-rune uppercase tracking-wider text-[#f2c97d]">
                    {currentForm.subtitle}
                  </span>
                  <span className="text-xs sm:text-sm font-display font-bold text-[#f4effa]">
                    {currentForm.name}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#281542] border border-[#f2c97d]/40 text-[11px] font-mono-rune text-[#f2c97d] group-hover:bg-[#f2c97d] group-hover:text-[#0d0714] transition-colors">
                  <Wand2 className="w-3.5 h-3.5" />
                  <span>Przemień</span>
                </span>
              </div>
            </div>

            {/* Character Attributes Bar below the Pedestal */}
            <div className="w-full max-w-[440px] mt-4 grid grid-cols-2 gap-2">
              {currentForm.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="px-3 py-2 rounded-xl bg-[#140a20]/85 border border-[#f2c97d]/20 flex flex-col"
                >
                  <span className="text-[10px] font-mono-rune uppercase tracking-wider text-[#9d88b8]">
                    {stat.label}
                  </span>
                  <span className="text-xs font-semibold text-[#f4effa] truncate">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
