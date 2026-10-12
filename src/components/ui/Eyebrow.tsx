// components/ui/Eyebrow.tsx
import React, { ReactNode } from "react";
import { cn } from "@/src/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

const Eyebrow: React.FC<EyebrowProps> = ({ children, className }) => {
  const eyebrow = (
    <div
      className={cn(
        "mb-5 inline-flex items-center gap-2.5 text-sm font-semibold text-neutral-content/70",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );

  return eyebrow;
};

export default Eyebrow;
