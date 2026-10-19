import React from "react";
import Image from "next/image";
import { cn } from "@/src/lib/cn";

const highlights = [
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    paragraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ipsa doloribus in atque quaerat omnis, molestias numquam similique, cupiditate necessitatibus, sint saepe itaque fugit beatae repellat maxime reiciendis aperiam enim.",
    ],
    src: "/images/products/tat-h-1.jpg",
    alt: "Lorem ipsum dolor sit amet consectetu",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    paragraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ipsa doloribus in atque quaerat omnis, molestias numquam similique, cupiditate necessitatibus, sint saepe itaque fugit beatae repellat maxime reiciendis aperiam enim.",
    ],
    src: "/images/products/tat-h-2.jpg",
    alt: "Lorem ipsum dolor sit amet consectetu",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    paragraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ipsa doloribus in atque quaerat omnis, molestias numquam similique, cupiditate necessitatibus, sint saepe itaque fugit beatae repellat maxime reiciendis aperiam enim.",
    ],
    src: "/images/products/tat-h-3.jpg",
    alt: "Lorem ipsum dolor sit amet consectetu",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur",
    paragraphs: [
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis ipsa doloribus in atque quaerat omnis, molestias numquam similique, cupiditate necessitatibus, sint saepe itaque fugit beatae repellat maxime reiciendis aperiam enim.",
    ],
    src: "/images/products/tat-h-4.jpg",
    alt: "Lorem ipsum dolor sit amet consectetu",
  },
];

const scrollReveal =
  "timeline-view animate-range-cover motion-safe:supports-[animation-timeline:view()]:animate-[highlight-reveal_1s_linear_both]";

const ProductHighlights: React.FC = () => {
  return (
    <div className="space-y-12 overflow-x-clip lg:space-y-20">
      {highlights.map((item, i) => (
        <div
          key={item.src}
          className="grid items-center gap-8 md:grid-cols-2 lg:gap-16"
        >
          {/* Text: direction follows its position in the row */}
          <div
            className={cn(
              "min-w-0 [view-timeline-name:--highlight-text]",
              scrollReveal,
              i % 2 === 1
                ? "md:order-2 [--highlight-offset:3rem]"
                : "[--highlight-offset:-3rem]",
            )}
          >
            <h2
              className="font-heading text-[clamp(24px,4vw,44px)] font-bold leading-[1.08] tracking-tight
               timeline-[--highlight-text] animate-range-cover
               motion-safe:supports-[animation-timeline:view()]:animate-[highlight-title-fade_1ms_linear_both]"
            >
              {item.title}
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-base-content/80 sm:text-base lg:text-lg">
              {item.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image: slides from the opposite side */}
          <div
            className={cn(
              "min-w-0",
              scrollReveal,
              i % 2 === 1
                ? "md:order-1 [--highlight-offset:-3rem]"
                : "[--highlight-offset:3rem]",
            )}
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-md">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1200px) 500px, (min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductHighlights;
