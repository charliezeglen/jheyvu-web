import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Calendar,
  Tv,
  Gamepad2,
  FlaskConical,
  ExternalLink,
  Award,
} from 'lucide-react';
import { GAMES_ARSENAL, TIMELINE_EVENTS } from '../data/jheyvuData';

export const IdentityAndTimeline: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<'ALL' | '2025' | '2026'>('ALL');

  const filteredEvents =
    selectedYear === 'ALL'
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((e) => e.year === selectedYear);

  return (
    <section
      id="kim-jest"
      className="relative py-24 lg:py-32 border-b border-[#f2c97d]/20 overflow-hidden"
    >
      {/* Background atmospheric glow */}
      <div className="absolute top-20 right-[8%] w-96 h-96 rounded-full bg-[#b56eff]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-80 h-80 rounded-full bg-[#f2c97d]/10 blur-[120px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* PART 1: KIM JEST JHEYVU? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Portrait Showcase with Profilowe Jheyvu.png */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-[410px]">
              {/* Outer Golden Alchemical Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-b from-[#f2c97d]/35 via-[#b56eff]/25 to-[#f2c97d]/35 blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative rounded-2xl overflow-hidden border-2 border-[#f2c97d]/55 bg-[#140a20] shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
                <img
                  src="/assets/profilowe.png"
                  alt="Jheyvu trzymający fioletowy eliksir w zębach"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0611] via-transparent to-transparent opacity-85" />

                {/* Bottom Overlay Inscription */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex items-end justify-between gap-3">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1a0d2b]/90 border border-[#f2c97d]/45 text-[10px] font-mono-rune uppercase tracking-widest text-[#f2c97d] mb-1.5">
                      <FlaskConical className="w-3 h-3 text-[#b56eff]" />
                      Alchemik Społeczności
                    </span>
                    <h3 className="font-display text-lg font-bold text-[#f4effa]">
                      „Mroczny półelf ubrany w liliową koszulę”
                    </h3>
                  </div>
                </div>
              </div>

              {/* Redebiut Date Medallion */}
              <div className="mt-4 grimoire-panel rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#27153d] border border-[#f2c97d]/45 flex items-center justify-center text-[#f2c97d]">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-rune uppercase tracking-wider text-[#f2c97d]">
                      Kamień Milowy • 10.10.2026
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-[#f4effa]">
                      Ponowny Debiut z Nowym Modelem i Historią
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.twitch.tv/videos/2897434180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-[#f2c97d]/15 hover:bg-[#f2c97d] text-[#f2c97d] hover:text-[#0b0611] border border-[#f2c97d]/45 text-xs font-mono-rune font-semibold transition-all shrink-0 flex items-center gap-1"
                >
                  <span>VOD</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Editorial Copy & Games Arsenal */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-rune uppercase tracking-[0.25em] text-[#f2c97d]">
                <Sparkles className="w-3.5 h-3.5 text-[#b56eff]" />
                <span>Rozdział II • Portret Twórcy</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4effa] tracking-wide">
                Kim jest <span className="text-[#f2c97d]">Jheyvu</span>?
              </h2>
            </div>

            <div className="grimoire-panel rounded-2xl p-6 sm:p-7 space-y-4 text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
              <p>
                <strong className="text-[#f4effa]">Jheyvu</strong> to polski VTuber, streamer i twórca internetowy, którego działalność skupia się przede wszystkim na gamingu oraz budowaniu bliskiej relacji z widzami.
              </p>
              <p>
                Choć najczęściej można zobaczyć go w świecie{' '}
                <strong className="text-[#f2c97d]">Minecrafta</strong>, chętnie sięga również po gry fabularne, przygodowe i multiplayer, takie jak{' '}
                <span className="text-[#f4effa]">Cyberpunk 2077</span>,{' '}
                <span className="text-[#f4effa]">Genshin Impact</span>,{' '}
                <span className="text-[#f4effa]">Phasmophobia</span> czy{' '}
                <span className="text-[#f4effa]">Meccha Chameleon</span>. Ważną częścią jego twórczości są także transmisje{' '}
                <strong className="text-[#d8b4e2]">Just Chatting</strong>, podczas których stawia na bezpośredni kontakt ze społecznością, luźne rozmowy i wspólne spędzanie czasu.
              </p>
              <p>
                Sam przedstawia się jako{' '}
                <em className="font-serif-lore text-lg text-[#f2c97d]">
                  „mroczny półelf ubrany w liliową koszulę”
                </em>
                , a jego transmisje łączą spokojną atmosferę z humorem i nieprzewidywalnymi przygodami.
              </p>
              <p>
                Swoją przygodę jako VTuber rozpoczął w <strong className="text-[#f4effa]">2025 roku</strong>, debiutując podczas drugiej edycji serwera{' '}
                <strong className="text-[#f2c97d]">Total Drama Minecraft (TDM 2)</strong>. W kolejnych miesiącach rozwijał swoją działalność, angażując się w projekty społecznościowe i fabularne, w tym autorską{' '}
                <strong className="text-[#b56eff]">SAGA RP</strong>.
              </p>
              <p className="pt-2 border-t border-[#f2c97d]/20 text-[#f4effa]">
                <strong className="text-[#f2c97d]">10 października 2026 roku</strong> odbył się jego ponowny debiut, podczas którego zaprezentował nowy model VTubera, rozbudowaną historię swojej postaci oraz plany na dalszy rozwój twórczości.
              </p>
            </div>

            {/* Games & Broadcast Realms Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d] flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-[#b56eff]" />
                  Krainy Rozgrywki & Transmisji
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {GAMES_ARSENAL.map((game) => (
                  <div
                    key={game.name}
                    className="p-3.5 rounded-xl bg-[#160c24]/85 border border-[#f2c97d]/20 hover:border-[#f2c97d]/55 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-display text-sm font-bold text-[#f4effa] group-hover:text-[#f2c97d] transition-colors">
                        {game.name}
                      </span>
                      <span className="text-[10px] font-mono-rune text-[#b56eff] px-1.5 py-0.5 rounded bg-[#24133a]">
                        {game.rune}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono-rune text-[#f2c97d]/85 mb-1.5">
                      {game.tag}
                    </p>
                    <p className="text-xs text-[#b9a8cc] leading-relaxed">{game.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: HISTORIA DZIAŁALNOŚCI (Chronologiczna oś 2025 - 2026 z dokładnymi miesiącami) */}
        <div className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#f2c97d]/25 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono-rune uppercase tracking-[0.25em] text-[#f2c97d]">
                <Calendar className="w-3.5 h-3.5 text-[#b56eff]" />
                <span>Zapis ze Zwojów • 2025 — 2026</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f4effa]">
                Historia Działalności
              </h3>
              <p className="text-sm text-[#b9a8cc] max-w-2xl">
                Od pierwszego debiutu podczas Total Drama Minecraft 2 w sierpniu 2025 roku, przez narodziny SAGA RP, aż po wielki redebiut 10 października 2026 roku.
              </p>
            </div>

            {/* Year Filter Pills */}
            <div className="flex items-center gap-2 self-start md:self-auto bg-[#150b22] p-1.5 rounded-xl border border-[#f2c97d]/25">
              {(['ALL', '2025', '2026'] as const).map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono-rune uppercase tracking-wider transition-all cursor-pointer ${
                    selectedYear === yr
                      ? 'bg-[#f2c97d] text-[#0b0611] font-bold shadow'
                      : 'text-[#d8b4e2] hover:text-[#f2c97d]'
                  }`}
                >
                  {yr === 'ALL' ? 'Pełna Kronika (10)' : `Rok ${yr}`}
                </button>
              ))}
            </div>
          </div>

          {/* Golden Tree Constellation Timeline Grid */}
          <div className="relative">
            {/* Central Golden Branch Line on Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#f2c97d] via-[#b56eff] to-[#f2c97d] opacity-45" />

            <div className="space-y-6 lg:space-y-8">
              {filteredEvents.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.04 }}
                    className={`relative grid grid-cols-1 lg:grid-cols-12 gap-4 items-center ${
                      isEven ? '' : 'lg:direction-rtl'
                    }`}
                  >
                    {/* Card on Left or Right */}
                    <div
                      className={`lg:col-span-5 ${
                        isEven ? 'lg:col-start-1' : 'lg:col-start-8'
                      }`}
                    >
                      <div
                        className={`grimoire-panel rounded-2xl p-5 transition-all hover:border-[#f2c97d]/60 ${
                          item.highlight
                            ? 'border-[#f2c97d]/55 shadow-[0_0_30px_rgba(242,201,125,0.14)]'
                            : ''
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#241338] border border-[#f2c97d]/35 text-[11px] font-mono-rune text-[#f2c97d]">
                            {item.month}
                          </span>
                          <span className="text-[10px] font-mono-rune uppercase tracking-widest text-[#b56eff]">
                            {item.year}
                          </span>
                        </div>
                        <h4 className="font-display text-lg font-bold text-[#f4effa] mb-0.5">
                          {item.title}
                        </h4>
                        <p className="text-xs font-serif-lore italic text-[#f2c97d] mb-2">
                          {item.subtitle}
                        </p>
                        <p className="text-xs sm:text-sm text-[#b9a8cc] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Node on Desktop */}
                    <div className="hidden lg:flex lg:col-span-2 lg:col-start-6 justify-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-[0_0_20px_rgba(242,201,125,0.4)] ${
                          item.highlight
                            ? 'bg-[#f2c97d] text-[#0b0611] border-[#f4effa]'
                            : 'bg-[#1a0d2b] text-[#f2c97d] border-[#f2c97d]/60'
                        }`}
                      >
                        <span className="text-xs font-mono-rune font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Highlighted Callout for the Twitch Debut Video */}
          <div className="grimoire-panel rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-[#f2c97d]/45">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6c2bd9] to-[#b56eff] flex items-center justify-center text-white shrink-0 shadow-[0_0_25px_rgba(181,110,255,0.5)]">
                <Tv className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
                  Oficjalne Archiwum Twitch • 10.10.2026
                </span>
                <h4 className="font-display text-xl sm:text-2xl font-bold text-[#f4effa]">
                  Obejrzyj ponowny debiut Jheyvu
                </h4>
                <p className="text-xs sm:text-sm text-[#b9a8cc]">
                  Zobacz pełną prezentację nowego modelu, lore Sylvthary oraz plany rozwoju kanału.
                </p>
              </div>
            </div>

            <a
              href="https://www.twitch.tv/videos/2897434180"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#f2c97d] to-[#c89d51] text-[#0b0611] font-bold text-sm flex items-center gap-2 shadow-[0_10px_25px_rgba(242,201,125,0.3)] hover:brightness-110 transition-all shrink-0"
            >
              <span>Obejrzyj debiut na Twitchu</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
