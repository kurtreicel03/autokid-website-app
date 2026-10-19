"use client";

import React from "react";
import Section from "@/src/components/layout/Section";
import ProductHeader from "@/src/components/product/Header";
import Model from "@/src/components/product/Model";
import Variants from "@/src/components/product/Variants";
import ProductHighlights from "@/src/components/product/Highlights";
import Gallery from "@/src/components/product/Galery";

const Page: React.FC = () => {
  const page = (
    <>
      <ProductHeader />
      <Section fullScreen={false} className="min-h-[80vh] p-0 pt-10 md:p-20">
        <Model />
      </Section>
      <Section fullScreen={false} className="min-h-[90vh] p-0 pb-20">
        <Variants />
      </Section>
      <Section className="p-0 sm:p-25">
        <ProductHighlights />
      </Section>
      <ProductHeader
        src="home/highlight3.jpeg"
        className="timeline-view animate-zoom-in animate-range-[entry_5%_contain_10%]"
      />
      <Section fullScreen={false} className="p-0">
        <Gallery />
      </Section>
    </>
  );

  return page;
};

export default Page;
