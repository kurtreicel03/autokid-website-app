"use client";

import React from "react";
import Section from "@/src/components/layout/Section";
import BrandHeader from "@/src/components/brand/Header";
import Highlights from "@/src/components/brand/Highlights";
import Products from "@/src/components/brand/Products";

const Page: React.FC = () => {
  const page = (
    <>
      <BrandHeader />
      <Section>
        <Highlights />
      </Section>
      <Section>
        <Products />
      </Section>
    </>
  );

  return page;
};

export default Page;
