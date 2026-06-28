'use client';

import { useEffect, useRef, useState } from 'react';

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [blocked, setBlocked] = useState(false);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryPlay = async () => {
      try {
        audio.volume = 0.6;
        audio.muted = muted;
        await audio.play();
        setBlocked(false);
      } catch {
        setBlocked(true);
      }
    };

    void tryPlay();

    const handleFirstInteraction = () => {
      void tryPlay();
    };

    window.addEventListener('pointerdown', handleFirstInteraction, { passive: true });
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('pointerdown', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [muted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = muted;
  }, [muted]);

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" autoPlay loop preload="auto" className="hidden" />

      <div className="fixed bottom-4 right-4 z-[1000] flex flex-col gap-2">
        {blocked ? (
          <button
            type="button"
            onClick={() => {
              const audio = audioRef.current;
              if (!audio) return;
              audio.muted = muted;
              void audio.play().then(() => setBlocked(false)).catch(() => setBlocked(true));
            }}
            className="rounded-full bg-[#F5A3C7] px-4 py-2 text-sm font-semibold text-black shadow-lg"
          >
            Play music
          </button>
        ) : null}

        <button
          type="button"
          onClick={() => setMuted(current => !current)}
          className="rounded-full border border-[#F5A3C7]/60 bg-black/75 px-4 py-2 text-sm font-semibold text-[#F5A3C7] shadow-lg backdrop-blur"
        >
          {muted ? 'Unmute music' : 'Mute music'}
        </button>
      </div>
    </>
  );
}
