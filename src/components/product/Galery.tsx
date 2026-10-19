"use client";

import React from "react";
import Image from "next/image";
const imagesData = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/0.jpg",
];

const Gallery: React.FC = () => {
  const gallery = (
    <>
      <div className="">
        <h2 className="text-center font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[1.05] tracking-tight">
          Gallery
        </h2>

        <div className="mt-20 w-full min-w-0">
          <div className="w-full min-w-0 overflow-x-auto scrollbar-none snap-x snap-mandatory">
            <div className="mx-auto flex w-max flex-nowrap gap-0 px-3 py-6">
              {imagesData.map((src) => (
                <div
                  key={src}
                  className="snap-center relative aspect-video shrink-0 flex flex-col items-center justify-center gap-3 "
                >
                  <div className="">
                    <Image
                      src={src}
                      alt={src}
                      height={500}
                      width={500}
                      className="object-contain p-2 rounded-2xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
  return gallery;
};

export default Gallery;
