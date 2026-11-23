import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, Film, ExternalLink, ChevronRight } from 'lucide-react';
import { LORE_CHAPTERS } from '../data/jheyvuData';

export const LoreGrimoireSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentChapter = LORE_CHAPTERS[activeIndex];

  return (
    <section
      id="historia"
      className="relative py-24 lg:py-32 border-b border-[#f2c97d]/25 overflow-hidden bg-gradient-to-b from-[#0b0611] via-[#12091c] to-[#0b0611]"
    >
      {/* Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-[6%] w-96 h-96 rounded-full bg-[#f2c97d]/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[6%] w-96 h-96 rounded-full bg-[#b56eff]/15 blur-[140px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b0e2b] border border-[#f2c97d]/35 text-xs font-mono-rune uppercase tracking-[0.22em] text-[#f2c97d]">
            <BookOpen className="w-3.5 h-3.5 text-[#b56eff]" />
            <span>Rozdział III • Księga Wygnania</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4effa]">
            Historia <span className="text-[#f2c97d]">Jheyvu</span>
          </h2>
          <p className="text-sm sm:text-base text-[#b9a8cc] leading-relaxed">
            Od skrytego miasta Sylvthary i potężnego Złotego Drzewa, przez międzywymiarowy portal z Diyą i Ilką, aż po cień tajemniczego Voitha.
          </p>
        </div>

        {/* Chapter Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {LORE_CHAPTERS.map((chapter, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={chapter.id}
                onClick={() => setActiveIndex(idx)}
                className={`group text-left p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#2b1644] to-[#160b24] border-[#f2c97d] shadow-[0_12px_35px_rgba(242,201,125,0.2)]'
                    : 'bg-[#140a20]/75 border-[#f2c97d]/20 hover:border-[#f2c97d]/45'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
                    {chapter.numeral}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#f2c97d] translate-x-0.5' : 'text-[#7e6b94]'
                    }`}
                  />
                </div>
                <h3 className="font-display text-base sm:text-lg font-bold text-[#f4effa] group-hover:text-[#f2c97d] transition-colors">
                  {chapter.title}
                </h3>
                <p className="text-xs text-[#b9a8cc] mt-0.5">{chapter.subtitle}</p>
              </button>
            );
          })}
        </div>

        {/* Active Illuminated Manuscript Spread */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentChapter.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45 }}
            className="grimoire-panel rounded-3xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
          >
            {/* Illustration Column */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#f2c97d]/45 bg-[#0d0614] shadow-[0_20px_50px_rgba(0,0,0,0.85)] group">
                <img
                  src={currentChapter.image}
                  alt={currentChapter.imageAlt}
                  className="w-full max-h-[440px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0611]/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#130a1e]/90 border border-[#f2c97d]/45 text-[11px] font-mono-rune text-[#f2c97d]">
                    {currentChapter.numeral} • {currentChapter.title}
                  </span>
                </div>
              </div>
              <p className="text-xs font-serif-lore italic text-center text-[#b9a8cc]">
                {currentChapter.imageCaption}
              </p>
            </div>

            {/* Story Text Column */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-mono-rune uppercase tracking-[0.25em] text-[#b56eff]">
                  {currentChapter.numeral} — {currentChapter.subtitle}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f4effa]">
                  {currentChapter.title}
                </h3>
              </div>

              <blockquote className="p-4 rounded-xl bg-[#160b24]/90 border-l-2 border-[#f2c97d] font-serif-lore italic text-base sm:text-lg text-[#f2c97d]">
                {currentChapter.quote}
              </blockquote>

              <div className="space-y-3.5 text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
                {currentChapter.paragraphs.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Lore Artifacts Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {currentChapter.artifacts.map((art) => (
                  <div
                    key={art.label}
                    className="p-3 rounded-xl bg-[#140a20] border border-[#f2c97d]/25"
                  >
                    <span className="block text-[10px] font-mono-rune uppercase tracking-wider text-[#9d88b8]">
                      {art.label}
                    </span>
                    <span className="text-xs font-semibold text-[#f2c97d]">{art.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All 3 Lore Artworks Triptych Preview + Official Lore Video CTA */}
        <div className="grimoire-panel rounded-2xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 border border-[#f2c97d]/45">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#2a1230] border border-[#ff5c77]/50 flex items-center justify-center text-[#ff5c77] shrink-0 shadow-[0_0_25px_rgba(255,92,119,0.25)]">
              <Film className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
                Oficjalny Film Fabularny YouTube
              </span>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#f4effa]">
                Poznaj pełną historię Jheyvu
              </h4>
              <p className="text-xs sm:text-sm text-[#b9a8cc] max-w-xl">
                Obejrzyj animowaną opowieść o Sylvtharze, wygnaniu, spotkaniu z Diyą i Ilką oraz tajemnicy Voitha na oficjalnym kanale YouTube.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/watch?v=XSfA22ImMiM&t=103s"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f2c97d] to-[#c89d51] text-[#0b0611] font-bold text-sm shadow-[0_10px_30px_rgba(242,201,125,0.3)] hover:brightness-110 transition-all shrink-0"
          >
            <Sparkles className="w-4 h-4" />
            <span>Obejrzyj Historię na YouTube</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
