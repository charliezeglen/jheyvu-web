import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, Play, Pause, Sparkles } from 'lucide-react';

export const MusicBoxController: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.42);
  const [awaitingInteraction, setAwaitingInteraction] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = volume;
    audio.loop = true;

    let unlocked = false;

    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAwaitingInteraction(false);
        unlocked = true;
      } catch {
        setIsPlaying(false);
        setAwaitingInteraction(true);
      }
    };

    attemptPlay();

    const unlockOnGesture = () => {
      if (unlocked || !audioRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          unlocked = true;
          setIsPlaying(true);
          setAwaitingInteraction(false);
          cleanupListeners();
        })
        .catch(() => {
          // keep waiting for explicit click
        });
    };

    const cleanupListeners = () => {
      window.removeEventListener('pointerdown', unlockOnGesture);
      window.removeEventListener('keydown', unlockOnGesture);
      window.removeEventListener('touchstart', unlockOnGesture);
    };

    window.addEventListener('pointerdown', unlockOnGesture, { passive: true });
    window.addEventListener('keydown', unlockOnGesture, { passive: true });
    window.addEventListener('touchstart', unlockOnGesture, { passive: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setAwaitingInteraction(false);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/assets/music-box.mp3"
        preload="auto"
        autoPlay
        loop
      />

      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
        {awaitingInteraction && !isPlaying && (
          <button
            onClick={togglePlay}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1a0d2a]/95 border border-[#f2c97d]/60 text-xs font-medium text-[#f2c97d] shadow-[0_0_25px_rgba(181,110,255,0.45)] hover:bg-[#281540] transition-all cursor-pointer animate-bounce"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#b56eff]" />
            <span>Nakręć pozytywkę komnaty (Kliknij, by włączyć dźwięk)</span>
          </button>
        )}

        <div
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          className="relative flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-[#130a1e]/92 backdrop-blur-xl border border-[#f2c97d]/35 shadow-[0_16px_45px_rgba(0,0,0,0.85),0_0_25px_rgba(181,110,255,0.2)] transition-all duration-300"
        >
          {/* Decorative corner filigree */}
          <span className="pointer-events-none absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#f2c97d]/70" />
          <span className="pointer-events-none absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#f2c97d]/70" />

          {/* Mechanical Alchemical Music Box Gear Button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Zatrzymaj pozytywkę' : 'Odtwórz pozytywkę'}
            className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#2b1742] to-[#12081c] border border-[#f2c97d]/45 flex items-center justify-center group cursor-pointer hover:border-[#f2c97d] transition-colors"
          >
            {/* Spinning cogwheel SVG */}
            <svg
              viewBox="0 0 48 48"
              className={`w-9 h-9 text-[#f2c97d]/45 transition-transform ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
            >
              <circle
                cx="24"
                cy="24"
                r="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              <path
                d="M24 4 L26 9 L22 9 Z M24 44 L26 39 L22 39 Z M4 24 L9 26 L9 22 Z M44 24 L39 26 L39 22 Z M9.8 9.8 L14 12.5 L12.5 14 Z M38.2 38.2 L34 35.5 L35.5 34 Z M38.2 9.8 L35.5 14 L34 12.5 Z M9.8 38.2 L12.5 34 L14 35.5 Z"
                fill="currentColor"
              />
            </svg>

            <span className="absolute inset-0 flex items-center justify-center text-[#f4effa] group-hover:text-[#f2c97d] transition-colors">
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </span>
          </button>

          {/* Track details */}
          <div className="flex flex-col pr-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-rune uppercase tracking-[0.2em] text-[#f2c97d]">
                Pozytywka Sylvthary
              </span>
              <span className="flex items-end gap-0.5 h-2.5">
                {[0, 1, 2, 3].map((bar) => (
                  <span
                    key={bar}
                    className={`w-0.5 rounded-full bg-[#b56eff] transition-all duration-300 ${
                      isPlaying && !isMuted
                        ? bar % 2 === 0
                          ? 'h-2.5 animate-pulse'
                          : 'h-1.5 animate-pulse'
                        : 'h-1 opacity-40'
                    }`}
                  />
                ))}
              </span>
            </div>
            <span className="text-xs font-serif-lore italic text-[#d8b4e2] whitespace-nowrap">
              Industrial Music Box — Kevin MacLeod
            </span>
          </div>

          {/* Mute & Volume controls */}
          <div
            className={`flex items-center gap-2 overflow-hidden transition-all duration-300 ${
              expanded ? 'max-w-[130px] opacity-100 pl-1' : 'max-w-[34px] opacity-90'
            }`}
          >
            <button
              onClick={toggleMute}
              aria-label={isMuted ? 'Włącz dźwięk' : 'Wycisz dźwięk'}
              className="p-1.5 rounded-lg text-[#b9a8cc] hover:text-[#f2c97d] hover:bg-white/5 transition-colors cursor-pointer"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-[#ff6b8b]" />
              ) : (
                <Volume2 className="w-4 h-4 text-[#f2c97d]" />
              )}
            </button>

            <input
              type="range"
              min="0"
              max="1"
              step="0.02"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              aria-label="Głośność muzyki w tle"
              className="w-16 h-1 accent-[#f2c97d] bg-[#2d1a42] rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};
