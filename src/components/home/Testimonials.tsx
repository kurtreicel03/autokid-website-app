"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import { cn } from "@/src/lib/cn";
import Button from "@/src/components/ui/Button";
const stories = [
  {
    src: "/images/testimonials/testimonials1.jpeg",
    alt: "Autokid customer receiving a new truck",
    tag: "Truck turnover",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus doloribus eligendi fugit animi atque nulla labore pariatur voluptas similique",
    name: "[Customer name]",
    company: "[Position] · [Company]",
  },
  {
    src: "/images/testimonials/testimonials2.jpeg",
    alt: "Autokid service team at work",
    tag: "Support service",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus doloribus eligendi fugit animi atque nulla labore pariatur voluptas similique",
    name: "[Customer name]",
    company: "[Position] · [Company]",
  },
  {
    src: "/images/testimonials/testimonials3.jpg",
    alt: "New trucks delivered to a customer",
    tag: "Truck turnover",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minus doloribus eligendi fugit animi atque nulla labore pariatur voluptas similique",
    name: "[Customer name]",
    company: "[Position] · [Company]",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % stories.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  const testimonials = (
    <>
      <div className="flex justify-between items-center">
        <SectionTitle
          eyeBrow="Customer Stories"
          title="Driven by Trust. Built for Every Mile Ahead."
        />
        <Button variant="ghost">View Testimonials</Button>
      </div>

      <div
        className="mt-10 overflow-hidden rounded-[28px] border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        role="region"
        aria-roledescription="carousel"
        aria-label="Customer stories"
      >
        <div
          className="flex transition-transform duration-[600ms] ease-[cubic-bezier(.22,.8,.24,1)] motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {stories.map((story, i) => (
            <div
              key={story.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${stories.length}`}
              aria-hidden={i !== index}
              className="relative flex min-h-[520px] min-w-0 basis-full flex-none items-end justify-end p-4 sm:min-h-[580px] sm:items-stretch sm:p-8"
            >
              <Image
                src={story.src}
                alt={story.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-base-100/50 px-3 py-1.5 text-xs font-semibold backdrop-blur-[14px] sm:left-8 sm:top-8 sm:text-sm">
                {story.tag}
              </span>

              <div className="relative flex w-full flex-col justify-between gap-6 bg-base-200 p-5 sm:gap-8 sm:p-8 md:max-w-[480px] md:rounded-3xl md:border md:border-white/20 md:bg-base-100/50 md:p-8 md:shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] md:backdrop-blur-[24px] md:backdrop-saturate-150 lg:max-w-[540px] lg:p-10">
                <div>
                  <Quote className="size-9 text-primary" strokeWidth={1.5} />
                  <p className="mt-5  text-shadow-2xs text-shadow-white/40 font-heading text-lg font-medium leading-snug tracking-tight sm:text-xl lg:text-2xl">
                    {story.quote}
                  </p>
                </div>
                <div className="flex items-center gap-3.5">
                  <div className="size-12 shrink-0 rounded-full border border-white/20 bg-neutral" />
                  <div>
                    <div className="font-semibold text-shadow-2xs text-shadow-black/50">
                      {story.name}
                    </div>
                    <div className="text-sm text-neutral-content/80">
                      {story.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2.5">
        {stories.map((story, i) => (
          <button
            key={story.src}
            type="button"
            aria-label={`Go to story ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={cn(
              "h-1.5 cursor-pointer rounded-full transition-all duration-300",
              i === index
                ? "w-8 bg-primary"
                : "w-2.5 bg-white/25 hover:bg-white/40",
            )}
          />
        ))}
      </div>
    </>
  );

  return testimonials;
};

export default Testimonials;
