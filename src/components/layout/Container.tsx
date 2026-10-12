import React, { ReactNode } from "react";
import { cn } from "@/src/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const container = (
    <div className={cn("mx-auto w-full max-w-1200px px-6", className)}>
      {children}
    </div>
  );

  return container;
};

export default Container;
