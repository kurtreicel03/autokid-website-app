"use client";

import React from "react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import {
  Package,
  Hammer,
  Trash,
  Zap,
  BusFront,
  MoveUpRight,
} from "lucide-react";

const applicationData = [
  {
    icon: <Package strokeWidth={1.3} />,
    title: "Logistics",
    description: "Dependable units for moving goods.",
  },
  {
    icon: <Hammer strokeWidth={1.3} />,
    title: "Construction",
    description: "Robus trucks and heavy equipment.",
  },

  {
    icon: <Trash strokeWidth={1.3} />,
    title: "Waste Management",
    description: "Vehicles built for waste handling",
  },
  {
    icon: <Zap strokeWidth={1.3} />,
    title: "Electric",
    description: "Electric commercial vehicles.",
  },
  {
    icon: <BusFront strokeWidth={1.3} />,
    title: "Transportation",
    description: "Buses and passenger transport.",
  },
];

const Application: React.FC = () => {
  const application = (
    <>
      <SectionTitle
        eyeBrow="Application"
        title="Discover your own mobility solution."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 h-fit xl:h-80 mt-10 gap-5">
        {applicationData.map((data, i) => (
          <div
            key={`${i}${data.title}`}
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

            <div className="mt-10 tex-center ">
              <h1 className="font-heading font-semibold leading-none tracking-tight lg:text-lg 2xl:text-xl text-neutral-content text-left">
                {data.title}
              </h1>
              <div className="text-neutral-content/70 text-sm font-medium mt-3 text-left">
                {data.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  return application;
};

export default Application;
