"use client";

import React from "react";
import Image from "next/image";

const Highlights: React.FC = () => {
  const highlights = (
    <div className="min-h-screen">
      <Image
        src={"/images/brands/tata.png"}
        alt="logo"
        height={1000}
        width={1000}
        className="w-auto"
      />
    </div>
  );

  return highlights;
};

export default Highlights;
