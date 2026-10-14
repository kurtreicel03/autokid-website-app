"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/cn";

const BrandHeader: React.FC = () => {
  const brandHeader = (
    <div className="">
      <Image
        src={"/images/brands/cover-tata.jpeg"}
        alt="brand cover"
        height={1536}
        width={2752}
        priority
        loading="eager"
        sizes="100vw"
        className="w-full"
      />
    </div>
  );

  return brandHeader;
};

export default BrandHeader;
