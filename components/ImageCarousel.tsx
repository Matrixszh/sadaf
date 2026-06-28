"use client";

import { cn } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

interface ImageCarouselProps {
  slides?: Slide[];
  className?: string;
}

const defaultSlides: Slide[] = [
  { src: "/gussa_gussa.jpeg", alt: "Carousel slide 1" },
  { src: "/face_mask.jpeg", alt: "GUSSA GUSSA" },
  { src: "/inorbit.jpeg", alt: "Carousel slide 4" },
    { src: "/humarekhadam.jpeg", alt: "GUSSA GUSSA" },
  { src: "/valentinesus.jpeg", alt: "Carousel slide 3" },
  { src: "/tansen.jpeg", alt: "Carousel slide 4" },
];

export default function ImageCarousel({ slides, className }: ImageCarouselProps) {
  const items = useMemo(() => (slides && slides.length ? slides : defaultSlides), [slides]);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const el = viewportRef.current;
    if (!el) return;
    const next = Math.max(0, Math.min(index, items.length - 1));
    el.scrollTo({ left: el.clientWidth * next, behavior: "smooth" });
    setActiveIndex(next);
  };

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onScroll = () => {
      const width = el.clientWidth || 1;
      const next = Math.max(0, Math.min(Math.round(el.scrollLeft / width), items.length - 1));
      setActiveIndex(next);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [items.length]);

  useEffect(() => {
    const onResize = () => scrollToIndex(activeIndex);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIndex, items.length]);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < items.length - 1;

  return (
    <div className={cn("relative w-full", className)}>
      <div
        ref={viewportRef}
        className="no-scrollbar flex w-full snap-x snap-mandatory overflow-x-auto scroll-smooth rounded-2xl border border-white/10 bg-neutral-950/40"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items.map((slide, idx) => (
          <div className="relative min-w-full snap-start" key={slide.src + idx}>
            <div className="flex w-full items-center justify-center px-6 py-10">
              <img
                src={slide.src}
                alt={slide.alt}
                className="max-h-[360px] w-full max-w-3xl select-none rounded-xl object-contain"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => scrollToIndex(activeIndex - 1)}
        disabled={!canGoPrev}
        className={cn(
          "absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-white backdrop-blur transition",
          canGoPrev ? "hover:bg-black/70" : "opacity-40",
        )}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => scrollToIndex(activeIndex + 1)}
        disabled={!canGoNext}
        className={cn(
          "absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 px-4 py-2 text-white backdrop-blur transition",
          canGoNext ? "hover:bg-black/70" : "opacity-40",
        )}
      >
        ›
      </button>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => scrollToIndex(idx)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition",
              idx === activeIndex ? "bg-white" : "bg-white/30 hover:bg-white/50",
            )}
          />
        ))}
      </div>
    </div>
  );
}

