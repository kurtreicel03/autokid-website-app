"use client";

import React from "react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import {
  MapPin,
  Truck,
  Headset,
  Banknote,
  Wrench,
  UserRoundCheck,
  Waypoints,
  MoveUpRight,
} from "lucide-react";
//  {
//     icon: <MapPin strokeWidth={1.3} />,
//     title: "Nationwide Reach",
//     description: "Branches Nationwide near you.",
//   },
const whyUsData = [
  {
    icon: <Truck strokeWidth={1.3} />,
    title: "Many truck & brand options",
    description: "Brand new vehicle across trusted brands.",
  },

  {
    icon: <Banknote strokeWidth={1.3} />,
    title: "Finance",
    description: "Financing partners and a loan calculator",
  },
  {
    icon: <Headset strokeWidth={1.3} />,
    title: "Aftersales",
    description: "Autokid Service Care keeps your trucks working.",
  },
  {
    icon: <Wrench strokeWidth={1.3} />,
    title: "Parts service",
    description: "Truckstop: Parts & Accessories for your fleet.",
  },
  {
    icon: <UserRoundCheck strokeWidth={1.3} />,
    title: "Truck Consultant",
    description:
      "We guide you through the technical complexities of your needs.",
  },
  {
    icon: <Waypoints strokeWidth={1.3} />,
    title: "End-to-end solution",
    description: "From selection to service, all in one place.",
  },
];
const WhyUs: React.FC = () => {
  const whyUs = (
    <>
      <SectionTitle eyeBrow="Why Autokid" title="Why choose us?" />
      <div className="grid gap-5 lg:grid-cols-3 mt-8">
        <div className="flex flex-col justify-between min-h-440px rounded-2xl bg-primary p-10 text-primary-content lg:col-span-1 transition-transform duration-300 hover:-translate-y-2 cursor-pointer font-medium tracking-tight font-heading text-xl">
          <div className="flex items-center justify-between">
            <p className="">Nationwide reach</p>
            <MapPin strokeWidth={1.5} className="size-8" />
          </div>
          <div className="">
            <div className="text-8xl">15</div>
            <div className="text-3xl">Branches Nationwide Near you.</div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          {whyUsData.map((data, i) => (
            <div
              key={`${data.title}${i}`}
              className="glass-card p-8 transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="flex justify-between">
                <div className="text-primary bg-primary/15 w-fit p-3 rounded-sm">
                  {data.icon}
                </div>
                <MoveUpRight
                  strokeWidth={1.7}
                  className="text-neutral-content/80 hover:text-primary/80 self-start size-4"
                />
              </div>
              <div className="mt-5">
                <div className="font-heading font-semibold tracking-tight text-xl text-neutral-content">
                  {data.title}
                </div>
                <div className="text-neutral-content/80 text-sm md:text-md">
                  {data.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return whyUs;
};

export default WhyUs;
