"use client";

import React from "react";
import Section from "@/src/components/layout/Section";
import Highlights from "@/src/components/brand/Highlights";

const Page: React.FC = () => {
  const page = (
    <>
      <Section>
        <Highlights />
      </Section>
    </>
  );

  return page;
};

export default Page;
