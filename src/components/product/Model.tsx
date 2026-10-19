"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/cn";

const BASE = "/images/products";

const variants = [
  { label: "Dropside", file: "TATA ACE DROPSIDE.png" }, // default
  { label: "Ambulance", file: "TATA ACE AMBULANCE.png" },
  { label: "FB Body", file: "TATA ACE FB BODY.png" },
  { label: "Ambush Type", file: "TATA ACE PATROL  CAR AMBUSH TYPE.png" },
  { label: "Reefer Van", file: "TATA ACE REEFER VAN.png" },
  { label: "Aluminum Van", file: "TATA ACE ALUMINUM VAN.png" },
];

const src = (file: string) => encodeURI(`${BASE}/${file}`);

const Model: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = variants[active];

  const model = (
    <>
      <h2 className="text-center font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[1.05] tracking-tight">
        TATA ACE
      </h2>

      <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="relative aspect-video w-full lg:col-span-8">
          {variants.map((v, i) => (
            <Image
              key={v.file}
              src={src(v.file)}
              alt={i === active ? `TATA ACE ${v.label}` : ""}
              aria-hidden={i !== active}
              fill
              sizes="(min-width: 1024px) 50vw, 66vw"
              priority={i === 0}
              quality={100}
              className={cn(
                "object-contain xl:p-10 2xl:p-25 transition-opacity duration-300 motion-reduce:transition-none",
                i === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>

        <div className="min-w-0  pt-6 lg:col-span-4 lg:pl-8 lg:pt-0">
          <h3 className="font-heading text-sm font-bold tracking-wide">
            Explore application<span className="text-rose-600">*</span>
          </h3>

          <p
            key={current.label}
            aria-live="polite"
            className="mt-3 animate-slide-in-left text-sm font-medium text-base-content/70 sm:text-base"
          >
            {current.label}
          </p>

          <div
            role="radiogroup"
            className="mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-thin lg:grid  lg:grid-cols-3 lg:gap-4 xl:gap-2 lg:overflow-visible"
          >
            {variants.map((v, i) => (
              <button
                key={v.file}
                type="button"
                role="radio"
                onClick={(e) => {
                  setActive(i);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                  });
                }}
                className={cn(
                  "relative aspect-video w-20 shrink-0 cursor-pointer snap-start rounded-md transition duration-300 hover:bg-amber-50/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none sm:w-28 md:w-20 xl:w-30",
                  i === active && "bg-amber-50/50 shadow-2xl",
                )}
              >
                <Image
                  src={src(v.file)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 140px, 160px"
                  className="object-contain p-1"
                />
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs text-base-content/60 sm:text-sm">
            <span className="text-rose-600">**</span> This photo is a different
            spec variant, actual unit may vary.
          </p>
        </div>
      </div>
    </>
  );

  return model;
};

export default Model;
