"use client";

import { MapPin } from "lucide-react";
import React from "react";
import Button from "../ui/Button";

const Branches: React.FC = () => {
  const branches = (
    <>
      <div className="min-h-[70vh] pt-20">
        <div className="bg-zinc-900 text-amber-50 flex flex-col gap-8 sm:flex-row sm:gap-0 justify-around px-20 py-10 shadow-2xl">
          <div className="font-heading font-extrabold flex flex-col justify-center">
            <h3 className="text-7xl md:text-9xl">15</h3>
            <div className="tracking-wide text-4xl md:text-6xl">
              Branches Nationwide Near you.
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center justify-center group">
            <MapPin
              strokeWidth={1.5}
              className="size-20 md:size-40 group-hover:text-primary transition-transform duration-300 group-hover:-translate-y-1"
            />
            <button className="btn btn-md text-xs md:btn-xl md:text-lg bg-amber-50">
              Find dealer
            </button>
          </div>
        </div>
      </div>
    </>
  );

  return branches;
};

export default Branches;
