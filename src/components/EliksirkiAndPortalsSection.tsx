import React from 'react';
import {
  FlaskConical,
  Sparkles,
  ExternalLink,
  MessageCircleHeart,
  Compass,
} from 'lucide-react';
import { SOCIAL_PORTALS } from '../data/jheyvuData';

export const EliksirkiAndPortalsSection: React.FC = () => {
  return (
    <section
      id="eliksirki"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background atmospheric glow */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[650px] h-[350px] rounded-full bg-[#b56eff]/15 blur-[150px] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PART 1: ELIKSIRKI DISCORD SANCTUARY */}
        <div className="grimoire-panel rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#f2c97d]/45 relative overflow-hidden">
          {/* Subtle background chamber texture */}
          <img
            src="/assets/tlo-komnata.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#12091e]/95 via-[#170c26]/90 to-[#12091e]/85" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#24133a] border border-[#f2c97d]/45 text-xs font-mono-rune uppercase tracking-[0.22em] text-[#f2c97d]">
                <FlaskConical className="w-3.5 h-3.5 text-[#b56eff]" />
                <span>Rozdział VIII • Gildia Społeczności</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f4effa]">
                Eliksirki — <span className="text-[#f2c97d]">dołącz do naszej społeczności!</span>
              </h2>

              <p className="text-sm sm:text-base text-[#d8c8eb] leading-relaxed">
                <strong className="text-[#f2c97d]">Eliksirki</strong> to serwer Discord skupiający społeczność Jheyvu. To miejsce, w którym możesz poznać nowych ludzi, porozmawiać o grach, dzielić się swoimi zainteresowaniami i wspólnie spędzać czas.
              </p>

              <p className="text-sm sm:text-base text-[#b9a8cc] leading-relaxed">
                Niezależnie od tego, czy regularnie oglądasz transmisje, czy dopiero poznajesz twórczość Jheyvu —{' '}
                <strong className="text-[#f4effa]">jesteś mile widziany!</strong>
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://discord.com/invite/faaTujmWUE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-[#7c3aed] via-[#9b4dff] to-[#b56eff] text-white font-bold text-sm sm:text-base border border-[#f2c97d]/50 shadow-[0_12px_35px_rgba(181,110,255,0.45)] hover:brightness-110 transition-all"
                >
                  <MessageCircleHeart className="w-5 h-5" />
                  <span>Dołącz do Eliksirków (Discord)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <span className="text-xs font-mono-rune text-[#f2c97d]">
                  discord.com/invite/faaTujmWUE
                </span>
              </div>
            </div>

            {/* Right: Portrait with Purple Elixir Bottle */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 rounded-2xl overflow-hidden border-2 border-[#f2c97d]/55 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group">
                <img
                  src="/assets/profilowe.png"
                  alt="Jheyvu z fioletowym eliksirem"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0611] via-transparent to-transparent" />
                <div className="absolute bottom-3 inset-x-3 text-center">
                  <span className="px-3 py-1 rounded-full bg-[#140a20]/90 border border-[#f2c97d]/45 text-[10px] font-mono-rune uppercase tracking-widest text-[#f2c97d]">
                    Wypij Eliksir Przyjaźni
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PART 2: ZNAJDŹ JHEYVU W SIECI! (All 7 Official Links) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-rune uppercase tracking-[0.25em] text-[#f2c97d]">
              <Compass className="w-3.5 h-3.5 text-[#b56eff]" />
              <span>Kompas Wielosferowy</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#f4effa]">
              Znajdź <span className="text-[#f2c97d]">Jheyvu</span> w sieci!
            </h3>
            <p className="text-sm sm:text-base text-[#b9a8cc]">
              Chcesz być na bieżąco z transmisjami, nowymi filmami i kolejnymi projektami? Obserwuj Jheyvu w mediach społecznościowych i dołącz do jego społeczności!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOCIAL_PORTALS.map((portal) => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grimoire-panel rounded-2xl p-5 flex flex-col justify-between border border-[#f2c97d]/25 hover:border-[#f2c97d] transition-all hover:-translate-y-1"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-[10px] font-mono-rune uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#1f1033] border border-white/10"
                      style={{ color: portal.accent }}
                    >
                      {portal.runeCode}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[#9d88b8] group-hover:text-[#f2c97d] transition-colors" />
                  </div>

                  <h4 className="font-display text-xl font-bold text-[#f4effa] group-hover:text-[#f2c97d] transition-colors">
                    {portal.name}
                  </h4>
                  <p className="text-xs font-serif-lore italic text-[#f2c97d]">
                    {portal.subtitle}
                  </p>
                  <p className="text-xs text-[#b9a8cc] leading-relaxed">
                    {portal.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#f2c97d]/15 flex items-center justify-between text-xs font-mono-rune text-[#f4effa] group-hover:text-[#f2c97d]">
                  <span>{portal.cta}</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
