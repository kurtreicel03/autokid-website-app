"use client";
import React from "react";
import Image from "next/image";
import Eyebrow from "../ui/Eyebrow";
const Hero: React.FC = () => {
  const hero = (
    <header className="hero-glow pt-28 pb-32">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex flex-col items-center justify-center gap-10 w-2/3">
          <Eyebrow>Autokid Mobility Solutions</Eyebrow>
          <h1 className="text-center font-heading text-[clamp(46px,7.2vw,300px)] font-semibold leading-none tracking-tight">
            We drive your business <span className="text-primary">.</span>
          </h1>
          <p className="text-neutral-content/80 text-xs sm:text-sm md:text-md lg:text-xl break-normal text-center">
            From versatile light trucks to heavy-duty fleets, discover your own
            mobility solutions designed to keep your operations moving
            seamlessly
          </p>
        </div>

        <div className="mt-20 w-full px-6">
          <div
            className="origin-top overflow-hidden rounded-[28px] border border-base-300 shadow-[0_40px_120px_rgba(255,196,0,0.08)]
                       motion-safe:supports-[animation-timeline:scroll()]:animate-hero-expand
                       motion-safe:supports-[animation-timeline:scroll()]:timeline-scroll
                       motion-safe:supports-[animation-timeline:scroll()]:animate-range-[0px_500px]"
          >
            <Image
              src="/images/home/highlight3.jpeg"
              alt="Autokid truck highlight"
              width={3000}
              height={2000}
              priority
              sizes="100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );

  return hero;
};

export default Hero;
