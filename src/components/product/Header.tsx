"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/src/lib/cn";
type ProductHeaderProps = {
  src?: string;
  className?: string;
};

const ProductHeader: React.FC<ProductHeaderProps> = ({
  src = "products/product-header.jpeg",
  className,
}) => {
  const ProductHeader = (
    <>
      <div>
        <Image
          src={`/images/${src}`}
          alt="brand cover"
          height={1536}
          width={2752}
          priority
          loading="eager"
          sizes="100vw"
          className={`w-full ${className}`}
        />
      </div>
    </>
  );

  return ProductHeader;
};

export default ProductHeader;
