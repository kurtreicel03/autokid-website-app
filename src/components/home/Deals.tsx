"use client";

import React from "react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import Image from "next/image";
import Button from "../ui/Button";
const dealsData = [
  {
    src: "/images/deals/deals1.jpg",
    title: "🚚 BER-MONTHS BOOST-UP 🚀",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde maxime repellendus, rem fugiat modi voluptatibus impedit.",
  },
  {
    src: "/images/deals/deals2.jpeg",
    title: "🎊 3 Days Mega-Sale 🎊",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde maxime repellendus, rem fugiat modi voluptatibus impedit.",
  },
  {
    src: "/images/deals/deals3.jpeg",
    title: "🎁 MID MEGA - YEAR SALE 🎁",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde maxime repellendus, rem fugiat modi voluptatibus impedit.",
  },
];
const Deals: React.FC = () => {
  const deals = (
    <>
      <div className="flex justify-between items-center">
        <SectionTitle eyeBrow="Deals" title="Current deals & promotions" />
        <Button variant="ghost">View all deals</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-10">
        {dealsData.map((data, i) => (
          <div
            key={`${data.title}${i}`}
            className="glass-card px-8 py-10 flex flex-col items-center justify-center transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
          >
            <Image
              src={data.src}
              alt={data.title}
              height={200}
              width={200}
              className="object-contain w-auto rounded-2xl"
            />

            <div className="mt-8">
              <p className="font-semibold font-heading text-xl tracking-wide">
                {data.title}
              </p>
              <p className="text-md text-neutral-content/80 mt-5">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return deals;
};

export default Deals;
