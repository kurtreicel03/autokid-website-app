"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/cn";

const slides = [
  { src: "/images/home/highlight3.jpeg", alt: "Autokid truck highlight 1" },
  { src: "/images/home/highlight2.jpeg", alt: "Autokid truck highlight 2" },
  { src: "/images/home/highlight1.jpeg", alt: "Autokid truck highlight 3" },
];

const INTERVAL = 5000;
const ASPECT = "aspect-[16/9]";

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const go = (next: number) => setIndex((next + slides.length) % slides.length);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, reduceMotion]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) go(diff < 0 ? index + 1 : index - 1);
    touchStartX.current = null;
  };

  const hero = (
    <div className="w-full">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Highlights"
        tabIndex={0}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(index + 1);
          if (e.key === "ArrowLeft") go(index - 1);
        }}
        className="relative overflow-hidden  shadow-[0_30px_80px_rgba(0,0,0,0.35)] "
      >
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={`${i}-${slide.src}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== index}
              className={cn("relative w-full flex-none", ASPECT)}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                loading="eager"
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 sm:bottom-5">
          {slides.map((slide, i) => (
            <button
              key={`${i}-${slide.src}`}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "relative h-1.5 cursor-pointer rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.25)] transition-all duration-300 before:absolute before:-inset-x-1 before:-inset-y-3 before:content-['']",
                i === index
                  ? "w-7 bg-primary"
                  : "w-2 bg-white/50 hover:bg-white/80",
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return hero;
};

export default Hero;
