"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
const variantsData = [
  { label: "Dropside", file: "TATA ACE DROPSIDE.png" }, // default
  { label: "Ambulance", file: "TATA ACE AMBULANCE.png" },
  { label: "FB Body", file: "TATA ACE FB BODY.png" },
  { label: "Ambush Type", file: "TATA ACE PATROL  CAR AMBUSH TYPE.png" },
  { label: "Reefer Van", file: "TATA ACE REEFER VAN.png" },
  { label: "Aluminum Van", file: "TATA ACE ALUMINUM VAN.png" },
];
const BASE = "/images/products";
const src = (file: string) => encodeURI(`${BASE}/${file}`);
const Variants: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  const [hasOverflow, setHasOverflow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    const row = rowRef.current;

    if (!container || !row) return;

    const updateProgress = () => {
      const maxScroll = container.scrollWidth - container.clientWidth;
      const overflowing = maxScroll > 1;

      setHasOverflow(overflowing);

      setProgress(
        overflowing
          ? Math.min(100, Math.max(0, (container.scrollLeft / maxScroll) * 100))
          : 0,
      );
    };

    const observer = new ResizeObserver(updateProgress);

    observer.observe(container);
    observer.observe(row);

    container.addEventListener("scroll", updateProgress, { passive: true });

    return () => {
      observer.disconnect();
      container.removeEventListener("scroll", updateProgress);
    };
  }, []);

  const scrollToVariant = (direction: "previous" | "next") => {
    const container = scrollRef.current;
    const row = rowRef.current;

    if (!container || !row) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (maxScroll <= 1) return;

    const currentPosition = Math.max(
      0,
      Math.min(maxScroll, container.scrollLeft),
    );

    const containerCenter =
      container.getBoundingClientRect().left +
      container.clientLeft +
      container.clientWidth / 2;

    // Calculate where each card would be centered.
    const positions = Array.from(row.children, (card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;

      const position = container.scrollLeft + cardCenter - containerCenter;

      // Keep the destination inside the scrollable area.
      return Math.max(0, Math.min(maxScroll, position));
    });

    const destination =
      direction === "next"
        ? (positions.find((position) => position > currentPosition + 1) ??
          maxScroll)
        : (positions
            .reverse()
            .find((position) => position < currentPosition - 1) ?? 0);

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    container.scrollTo({
      left: destination,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };
  const variants = (
    <>
      <div className="">
        <h2 className="text-center font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[1.05] tracking-tight">
          Choose your Ace variant
        </h2>

        <div className="mt-20 w-full min-w-0">
          <div
            ref={scrollRef}
            className="w-full min-w-0 overflow-x-auto scrollbar-none snap-x snap-mandatory"
          >
            <div
              ref={rowRef}
              className="mx-auto flex w-max flex-nowrap gap-30 px-3 py-6"
            >
              {variantsData.map((data) => (
                <div
                  key={data.file}
                  className="snap-center relative aspect-video shrink-0 flex flex-col items-center justify-center gap-3"
                >
                  <div>
                    <Image
                      src={src(data.file)}
                      alt={data.label}
                      height={300}
                      width={300}
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="mt-10 w-100 ">
                    <div className="text-2xl font-medium font-heading tracking-wide border-b border-base-300 px-1 pb-2">
                      {data.label}
                    </div>
                    <div className="mt-10 flex flex-col gap-2 border-b border-base-300 px-1 pb-2">
                      <p className="font-semibold">PHP 1,772,000 MSRP</p>
                      <p className="font-medium text-sm">PHP 32,211/mo</p>
                      <p className="text-neutral text-[11px] mt-10">
                        *For 20% DP and 60-month term. Computation is intended
                        solely for informational purposes and may not reflect
                        the actual amount offered by the dealership.
                      </p>
                    </div>

                    <div className="text-sm tracking-wide flex flex-col gap-2 mt-5 border-b-2 border-base-300 pb-4">
                      <p>
                        <span className="font-bold">Engine: </span>4 cylinder,
                        in-line, 16-valve DOHC
                      </p>

                      <p>
                        <span className="font-bold">Suspension: </span>
                        Lorem, ipsum dolor.
                      </p>

                      <p>
                        <span className="font-bold">Transmission: </span>
                        5-Speed MT
                      </p>

                      <p>
                        <span className="font-bold"> Chasis: </span>
                        Leaf Sprint Rear Suspension with 175R14 Steel Wheels
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {hasOverflow && (
          <div className="mt-4 flex items-center justify-center gap-3 px-3 py-2">
            <button
              type="button"
              aria-label="Previous variant"
              onClick={() => scrollToVariant("previous")}
              disabled={progress <= 0}
              className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            <div
              aria-hidden="true"
              className="pointer-events-none relative h-2 min-w-0 flex-1 rounded-full bg-base-300"
            >
              <div
                className="relative h-full rounded-full bg-amber-300"
                style={{ width: `${progress}%` }}
              >
                <span className="absolute right-0 top-1/2 size-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-amber-300" />
              </div>
            </div>

            <button
              type="button"
              aria-label="Next variant"
              onClick={() => scrollToVariant("next")}
              disabled={progress >= 100}
              className="grid size-10 shrink-0 cursor-pointer place-items-center rounded-full transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </>
  );

  return variants;
};

export default Variants;
