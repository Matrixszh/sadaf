"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface IntroRevealProps {
  children: React.ReactNode;
}

export default function IntroReveal({ children }: IntroRevealProps) {
  const [revealed, setRevealed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setRevealed(true);
      return;
    }

    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => setRevealed(true), 900);
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = "";
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (revealed) document.body.style.overflow = "";
  }, [revealed]);

  const overlayTransition = prefersReducedMotion ? "" : "transition-all duration-700 ease-out";
  const contentTransition = prefersReducedMotion ? "" : "transition-all duration-700 ease-out";

  return (
    <div className="relative min-h-full">
      <div className={revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}>
        <div className={contentTransition}>{children}</div>
      </div>

      <div
        aria-hidden={revealed}
        className={[
          "fixed inset-0 z-[999] flex w-full items-center justify-center bg-[#F5A3C7] px-6",
          overlayTransition,
          revealed ? "pointer-events-none opacity-0" : "opacity-100",
        ].join(" ")}
      >
        <div className="flex flex-col items-center justify-center text-center">
          <div className={prefersReducedMotion ? "" : "animate-pulse"}>
            <Image
              src="/tulip.png"
              alt="Tulip"
              width={520}
              height={520}
              priority
              className="pointer-events-none h-auto w-[200px] select-none sm:w-[280px] md:w-[320px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
