import React, { ReactNode } from "react";
import Container from "./Container";
import { cn } from "@/src/lib/cn";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
  fullScreen?: boolean;
};

const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  alt,
  fullScreen = true,
}) => {
  const section = (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-20 ",
        fullScreen && "flex min-h-screen flex-col justify-center",
        alt && "section-alt",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );

  return section;
};

export default Section;
