"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
const brandsData = [
  {
    src: "/images/brands/tats.png",
    brandName: "Tata motors",
  },
  {
    src: "/images/brands/fw.png",
    brandName: "Faw trucks",
  },
  {
    src: "/images/brands/isz.png",
    brandName: "Isuzu",
  },
  {
    src: "/images/brands/wechi.png",
    brandName: "Weichai",
  },
];
const Brands: React.FC = () => {
  const brands = (
    <>
      <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[1.05] tracking-tight">
        Our Brands
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-10 ">
        {brandsData.map((data, i) => (
          <Link
            href={`brands/${data.brandName.toLowerCase().split(" ").join("-")}`}
            key={`${data.src}`}
            className="group flex flex-col items-center justify-center border border-zinc-900/30 shadow-md inset-shadow-xs backdrop:blur-2xl bg-amber-50/30 rounded-md px-5 pt-10 pb-2 cursor-pointer
            transition duration-300 hover:-translate-y-1 hover:shadow-xl
            "
          >
            <Image
              src={`${data.src}`}
              alt={`${data.brandName}`}
              height={200}
              width={200}
              sizes="100vh"
              className="w-auto h-20"
            />
            <div className="flex justify-between items-center w-full  text-zinc-900 font-heading font-bold text-xl mt-8 px-1">
              <h3>{data.brandName}</h3>
              <span className="flex size-9 shrink-0 items-center justify-center transition duration-300 group-hover:rotate-45  group-hover:-translate-y-1">
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="size-7  transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return brands;
};

export default Brands;
