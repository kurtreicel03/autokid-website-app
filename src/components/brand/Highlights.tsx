import React from "react";
import Image from "next/image";
import { cn } from "@/src/lib/cn";

const highlights = [
  {
    title: "FUTURE-FOCUS, INNOVATIVE, INSPIRING",
    paragraphs: [
      'With over seven decades of heritage, Tata Motors is a leading manufacturer of diverse vehicles based in Mumbai, committed to "Connecting Aspirations" and shaping the future mobility worldwide.',
    ],
    src: "/images/brands/TATA 1.jpg",
    alt: "The brand's trucks on the road",
  },
  {
    title: "TATA AGILA FOR THE NATION",
    paragraphs: [
      "The Tata Agila takes flight in the Philippine market as a symbol of power, reliability, and determination. Like the national bird, it reflects the resilience and enduring spirit of the Filipino people. Built to uplift businesses, the Tata Agila drives progress wherever the road leads.",
    ],
    src: "/images/brands/TATA 2.jpg",
    alt: "Autokid and the brand's team together",
  },
  {
    title: "DRIVING FILIPINO PROGRESS",
    paragraphs: [
      "Autokid and Tata Motors unite to build a more connected and progressive Philippines. Combining local expertise and global innovation, they deliver stronger and more reliable mobility nationwide. Together, they move industries forward and empower communities to grow.",
    ],
    src: "/images/brands/TATA 3.jpg",
    alt: "Autokid and the brand's team together",
  },
];

const timeline = [
  { date: "2014", text: "Lorem ipsum dolor sit." },
  { date: "2016", text: "Lorem ipsum dolor sit amet." },
  { date: "2019", text: "Lorem ipsum dolor." },
  { date: "2022", text: "Lorem ipsum dolor sit amet consectetur." },
  { date: "2026", text: "Lorem ipsum dolor sit." },
];

const dot =
  "size-4 rounded-full border-2 border-base-100 bg-primary ring-2 ring-primary/40";

const Highlights: React.FC = () => {
  const highlightsSection = (
    <div className="space-y-16 lg:space-y-24 ">
      <div className="space-y-12 lg:space-y-20">
        {highlights.map((item, i) => (
          <div
            key={item.title}
            className="grid items-center gap-8 md:grid-cols-2 lg:gap-16"
          >
            <div className={cn(i % 2 === 1 && "md:order-2")}>
              <h2 className="font-heading text-[clamp(24px,4vw,44px)] font-bold leading-[1.08] tracking-tight">
                {item.title}{" "}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-base-content/80 sm:text-base lg:text-lg">
                {item.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </div>

            <div className={cn(i % 2 === 1 && "md:order-1")}>
              <div className="relative aspect-4/3 overflow-hidden rounded-md border border-base-300 shadow-lg">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="mb-10 text-center font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:mb-14">
          Our journey together
        </h3>

        <ol
          className="hidden md:grid"
          style={{
            gridTemplateColumns: `repeat(${timeline.length}, minmax(0, 1fr))`,
          }}
        >
          {timeline.map((item, i) => {
            const above = i % 2 === 0;
            const isFirst = i === 0;
            const isLast = i === timeline.length - 1;

            const text = (
              <div className="max-w-50">
                <time className="font-heading font-bold text-xl">
                  {item.date}
                </time>
                <p className="mt-1 text-base-content/70 text-sm">{item.text}</p>
              </div>
            );

            return (
              <li key={item.date} className="flex flex-col">
                <div className="flex h-44 flex-col items-center justify-end px-2 text-center">
                  {above && (
                    <>
                      {text}
                      <span className="mt-3 h-6 w-px bg-primary" />
                    </>
                  )}
                </div>

                <div
                  className={cn(
                    "relative flex h-4 items-center justify-center before:absolute before:top-1/2 before:h-1 before:bg-neutral-400 before:content-['']",
                    isFirst && "before:left-1/2 before:right-0",
                    isLast && "before:left-0 before:right-1/2",
                    !isFirst && !isLast && "before:left-0 before:right-0",
                  )}
                >
                  <span className={cn("relative z-10", dot)} />
                </div>
                <div className="flex h-44 flex-col items-center justify-start px-2 text-center">
                  {!above && (
                    <>
                      <span className="mb-3 h-6 w-px bg-primary" />
                      {text}
                    </>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        <ol className="relative ml-2 space-y-8 border-l-2 border-neutral-400 md:hidden">
          {timeline.map((item) => (
            <li key={item.date} className="relative pl-8">
              <span className={cn("absolute -left-2.25 top-1", dot)} />
              <time className="font-heading text-xl font-bold">
                {item.date}
              </time>
              <p className="mt-1 text-sm text-base-content/70">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

  return highlightsSection;
};

export default Highlights;
