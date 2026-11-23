import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Flame,
  Swords,
  Compass,
  Crown,
  Film,
  ExternalLink,
  Sparkles,
  ScrollText,
} from 'lucide-react';

const SAGA_SEASONS = [
  {
    id: 'saga-0',
    badge: 'SAGA RP 0 • Grudzień 2025',
    title: 'SAGA RP 0 — Początek historii',
    subtitle: 'Modyfikacje, unikalne rasy i bunt przeciwko bogom serwera',
    quote:
      '„Jeden z bohaterów, Demo, zbuntował się przeciwko bogom serwera. W odpowiedzi na jego nieposłuszeństwo świat został zresetowany...”',
    paragraphs: [
      'Pierwsza odsłona SAGA RP przeniosła graczy do fantastycznego świata Minecrafta wzbogaconego o modyfikacje, niezwykłe biomy, magię i unikalne rasy postaci.',
      'Uczestnicy mogli wcielać się między innymi w ogry, walkirie, magów, elfy, gobliny, krasnoludy czy banshee. Każda postać rozwijała swoje umiejętności, zdobywała magiczne moce i próbowała przetrwać w nieznanej rzeczywistości.',
      'Najważniejszym celem był wyścig po legendarne Jajo Smoka, zdolne spełnić jedno życzenie. Niestety problemy techniczne uniemożliwiły kontynuowanie rozgrywki. Zamiast porzucić rozpoczętą historię, twórcy postanowili nadać tym wydarzeniom fabularne znaczenie.',
      'Jeden z bohaterów, Demo, zbuntował się przeciwko „bogom serwera”. W odpowiedzi na jego nieposłuszeństwo świat został zresetowany, a mieszkańcy utracili cały swój dotychczasowy postęp i zdobyte moce. Tak zakończył się pierwszy rozdział SAGA RP, otwierając drogę do zupełnie nowej przygody.',
    ],
    highlights: [
      { label: 'Grywane Rasy', value: 'Ogry, Walkirie, Magowie, Elfy, Gobliny, Krasnoludy, Banshee' },
      { label: 'Główny Artefakt', value: 'Legendarne Jajo Smoka (Jedno Życzenie)' },
      { label: 'Punkt Zwrotny', value: 'Bunt Demo i Wielki Reset Świata' },
    ],
  },
  {
    id: 'saga-1',
    badge: 'SAGA RP 1 • Luty 2026',
    title: 'SAGA RP 1 — Nowy świat, nowe zagrożenia',
    subtitle: 'Tajemnice Celedianu, rywalizujące frakcje i finał w Endzie',
    quote:
      '„Pozbawieni dawnych mocy i osiągnięć muszą rozpocząć swoją podróż od początku w tajemniczym świecie zwanym Celedianem.”',
    paragraphs: [
      'Po katastrofalnych wydarzeniach poprzedniej odsłony bohaterowie trafiają do tajemniczego świata zwanego Celedianem. Pozbawieni dawnych mocy i osiągnięć muszą rozpocząć swoją podróż od początku. Szybko odkrywają, że powrót do domu nie będzie prosty — ich największą nadzieją staje się legendarne Jajo Smoka.',
      'Z czasem okazuje się jednak, że Celedian skrywa znacznie więcej tajemnic. Bohaterowie odkrywają ruiny dawnych cywilizacji, zapiski poprzednich mieszkańców i niepokojące wskazówki dotyczące natury samego artefaktu.',
      'Wspólny cel nie wystarcza, aby utrzymać pokój. Uczestnicy dzielą się na rywalizujące frakcje, zawierają sojusze, prowadzą konflikty i podejmują decyzje, które wpływają na losy całego świata.',
      'SAGA RP wyróżnia się połączeniem klasycznej rozgrywki Minecraft z przygotowanymi scenami fabularnymi, wydarzeniami specjalnymi i autorskimi utworami muzycznymi. Dzięki temu historia przypomina interaktywny serial fantasy, w którym każdy z uczestników ma wpływ na rozwój wydarzeń. Finał pierwszego sezonu prowadzi bohaterów do Endu, gdzie rozstrzygają się losy Jaja Smoka.',
    ],
    highlights: [
      { label: 'Nowa Kraina', value: 'Celedian (Ruiny Dawnych Cywilizacji)' },
      { label: 'Format', value: 'Interaktywny Serial Fantasy + Autorska Muzyka' },
      { label: 'Kulminacja', value: 'Wielki Finał w Endzie & Zapowiedź 2026/2027' },
    ],
  },
];

export const SagaRpSection: React.FC = () => {
  const [activeSeason, setActiveSeason] = useState<'saga-0' | 'saga-1'>('saga-1');
  const season = SAGA_SEASONS.find((s) => s.id === activeSeason) || SAGA_SEASONS[1];

  return (
    <section
      id="saga-rp"
      className="relative py-24 lg:py-32 border-b border-[#f2c97d]/25 overflow-hidden bg-gradient-to-b from-[#0b0611] via-[#160b24] to-[#0b0611]"
    >
      {/* Ambient Dragon Egg Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-[#b56eff]/12 blur-[150px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#211134] border border-[#f2c97d]/40 text-xs font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
              <Crown className="w-3.5 h-3.5 text-[#b56eff]" />
              <span>Rozdział V • Autorski Projekt Roleplay</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4effa] leading-tight">
              SAGA RP — Minecraft, w którym{' '}
              <span className="text-[#f2c97d]">historia ma znaczenie</span>
            </h2>

            <p className="text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
              <strong className="text-[#f2c97d]">SAGA RP</strong> to fabularny projekt Minecraft współtworzony przez <strong className="text-[#f4effa]">Jheyvu</strong> i VTuberkę{' '}
              <strong className="text-[#f2c97d]">Diyę</strong>, znaną również jako{' '}
              <span className="underline decoration-[#f2c97d]/50 underline-offset-4">
                C4llMeDiya
              </span>
              . Wraz z innymi twórcami wcielają się w bohaterów fantastycznego świata, w którym magia, tajemnice, rywalizacja i nieoczekiwane sojusze stają się częścią jednej, wspólnie rozwijanej opowieści.
            </p>

            <p className="text-sm sm:text-base text-[#b9a8cc] leading-relaxed">
              Głównym celem bohaterów jest odnalezienie legendarnego{' '}
              <strong className="text-[#f2c97d]">Jaja Smoka</strong> — potężnego artefaktu, który według legend potrafi spełnić życzenie i umożliwić im powrót do domu. Na przełom lat <strong className="text-[#f4effa]">2026 i 2027</strong> zaplanowano kolejną odsłonę projektu!
            </p>
          </div>

          {/* Right: Dragon Egg & Co-Creators Emblem Card */}
          <div className="lg:col-span-5">
            <div className="grimoire-panel rounded-3xl p-6 space-y-5 border border-[#f2c97d]/45">
              <div className="relative rounded-2xl overflow-hidden border border-[#f2c97d]/35 h-52">
                <img
                  src="/assets/jheyvu-diya-ilka.png"
                  alt="Jheyvu, Diya i Ilka — twórcy i bohaterowie SAGA RP"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0611] via-[#0b0611]/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono-rune uppercase tracking-widest text-[#f2c97d]">
                      Współtwórcy Projektu
                    </span>
                    <p className="font-display text-base font-bold text-[#f4effa]">
                      Jheyvu & Diya (C4llMeDiya)
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-[#f2c97d] text-[#0b0611] text-[10px] font-mono-rune font-bold">
                    SEZON 2026/2027 WKRÓTCE
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-xl bg-[#140a20] border border-[#f2c97d]/20">
                  <span className="block font-display text-lg font-bold text-[#f2c97d]">
                    XII 2025
                  </span>
                  <span className="text-[10px] font-mono-rune text-[#b9a8cc] uppercase">
                    SAGA RP 0 (Test)
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#140a20] border border-[#f2c97d]/20">
                  <span className="block font-display text-lg font-bold text-[#b56eff]">
                    II 2026
                  </span>
                  <span className="text-[10px] font-mono-rune text-[#b9a8cc] uppercase">
                    Start Celedianu
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#140a20] border border-[#f2c97d]/20">
                  <span className="block font-display text-lg font-bold text-[#f4effa]">
                    26 / 27
                  </span>
                  <span className="text-[10px] font-mono-rune text-[#b9a8cc] uppercase">
                    Nowa Odsłona
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Season Switcher Tabs (SAGA RP 0 vs SAGA RP 1) */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            {SAGA_SEASONS.map((s) => {
              const active = s.id === activeSeason;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSeason(s.id as 'saga-0' | 'saga-1')}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    active
                      ? 'bg-gradient-to-r from-[#2e1749] to-[#1b0d2c] border-[#f2c97d] shadow-[0_10px_30px_rgba(242,201,125,0.22)]'
                      : 'bg-[#140a20]/80 border-[#f2c97d]/20 hover:border-[#f2c97d]/50'
                  }`}
                >
                  {s.id === 'saga-0' ? (
                    <Flame className="w-5 h-5 text-[#f2c97d]" />
                  ) : (
                    <Swords className="w-5 h-5 text-[#b56eff]" />
                  )}
                  <div>
                    <span className="block text-[10px] font-mono-rune uppercase tracking-widest text-[#f2c97d]">
                      {s.badge}
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-[#f4effa]">
                      {s.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={season.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="grimoire-panel rounded-3xl p-6 sm:p-8 lg:p-10 space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#f2c97d]/20 pb-5">
                <div>
                  <span className="text-xs font-mono-rune uppercase tracking-[0.22em] text-[#f2c97d]">
                    {season.badge}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#f4effa] mt-1">
                    {season.title}
                  </h3>
                  <p className="text-sm font-serif-lore italic text-[#d8b4e2]">
                    {season.subtitle}
                  </p>
                </div>

                <a
                  href="https://www.youtube.com/watch?v=tgFVCe4ME0k&list=PL3y-FwUYObB6MP40fthsLr6XoqvM6gsuA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-[#f2c97d] to-[#c89d51] text-[#0b0611] font-bold text-xs sm:text-sm shadow-lg hover:brightness-110 transition-all self-start"
                >
                  <Film className="w-4 h-4" />
                  <span>Obejrzyj Playlistę SAGA RP</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <blockquote className="p-4 rounded-xl bg-[#160b24] border-l-2 border-[#f2c97d] font-serif-lore italic text-base sm:text-lg text-[#f2c97d]">
                {season.quote}
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
                {season.paragraphs.map((p, i) => (
                  <p key={i} className="flex items-start gap-2.5">
                    <ScrollText className="w-4 h-4 text-[#f2c97d] shrink-0 mt-1.5" />
                    <span>{p}</span>
                  </p>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#f2c97d]/20">
                {season.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="p-3.5 rounded-xl bg-[#130a1e] border border-[#f2c97d]/25"
                  >
                    <span className="flex items-center gap-1.5 text-[10px] font-mono-rune uppercase tracking-wider text-[#9d88b8]">
                      <Compass className="w-3 h-3 text-[#f2c97d]" />
                      {h.label}
                    </span>
                    <span className="block text-xs sm:text-sm font-semibold text-[#f4effa] mt-1">
                      {h.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
