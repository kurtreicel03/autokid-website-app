"use client";
import React from "react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import Image from "next/image";
import { MoveUpRight } from "lucide-react";
const brandsData = [
  { src: "/images/brands/tats.png", brand: "Tata motors" },
  { src: "/images/brands/isz.png", brand: "Isuzu" },
  { src: "/images/brands/fw.png", brand: "Faw trucks" },
  { src: "/images/brands/wechi.png", brand: "Weichai" },
];

const Brands: React.FC = () => {
  const brands = (
    <>
      <SectionTitle eyeBrow="Brands" title="Top brands, one dealer." />
      <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4">
        {brandsData.map((data, i) => (
          <div
            key={`${i}${data.brand}`}
            className="glass-card relative cursor-pointer p-3 transition-transform duration-300 motion-reduce:transition-none hover:-translate-y-2 sm:p-6 lg:p-8"
          >
            <MoveUpRight
              strokeWidth={1.7}
              size={8}
              className="absolute right-2.5 top-2.5 size-3 text-neutral-content/80 hover:text-primary/80 sm:right-3 sm:top-3 sm:size-4"
            />
            <div className="glass-card flex flex-col items-center justify-center p-4 pt-8 sm:p-6 lg:p-8">
              <div className="relative h-14 w-full sm:h-20 lg:h-24">
                <Image
                  src={data.src}
                  alt={data.brand}
                  fill
                  sizes="(min-width: 1024px) 15vw, 40vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-3 text-center font-heading text-base font-semibold tracking-tight sm:mt-5 sm:text-lg lg:text-xl">
              {data.brand}
            </div>
          </div>
        ))}
      </div>
    </>
  );
  return brands;
};

export default Brands;
