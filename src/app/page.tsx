import React from "react";
import Section from "@/src/components/layout/Section";
import Hero from "@/src/components/home/Hero";
import Application from "@/src/components/home/Application";
import Explore from "@/src/components/home/Explore";
import Hub from "@/src/components/home/Hub";
import ContactUs from "@/src/components/home/ContactUs";
import Brands from "@/src/components/home/Brands";
const Page: React.FC = () => {
  const page = (
    <>
      <Hero />
      <Section fullScreen={false} className="min-h-[80vh]">
        <Application />
      </Section>
      <Section id="/brands" fullScreen={false} className="min-h-[70vh]">
        <Brands />
      </Section>
      <Section>
        <Explore />
      </Section>
      <Section>
        <Hub />
      </Section>
      <Section>
        <ContactUs />
      </Section>
    </>
  );

  return page;
};

export default Page;
