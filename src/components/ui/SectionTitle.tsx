"use-client";

import React, { ReactNode } from "react";
import { cn } from "@/src/lib/cn";
import Eyebrow from "./Eyebrow";
type SectionTileProps = {
  eyeBrow: string;
  eyebrowClassName?: string;
  title: string;
  titleClassName?: string;
  className?: string;
};

const SectionTitle: React.FC<SectionTileProps> = ({
  eyeBrow,
  title,
  eyebrowClassName = "",
  titleClassName = "",
  className = "",
}) => {
  const sectionTitle = (
    <div className={className}>
      <Eyebrow className={eyebrowClassName}>{eyeBrow}</Eyebrow>
      <h1
        className={cn(
          "leading-none tracking-tight font-semibold font-heading text-2xl sm:text-4xl md:text-5xl",
          titleClassName,
        )}
      >
        {title}
      </h1>
    </div>
  );

  return sectionTitle;
};

export default SectionTitle;
