import React from "react";
import Section from "@/src/components/layout/Section";
import Hero from "@/src/components/home/Hero";
import Application from "@/src/components/home/Application";
import Brands from "@/src/components/home/Brands";
import WhyUs from "@/src/components/home/WhyUs";
import Deals from "@/src/components/home/Deals";
import Testimonials from "@/src/components/home/Testimonials";
import OurCompany from "@/src/components/home/OurCompany";
import Contact from "@/src/components/home/ContactUs";
const Page: React.FC = () => {
  const page = (
    <>
      <Hero />
      <Section id="application">{<Application />}</Section>
      <Section id="brands" alt={true}>
        {<Brands />}
      </Section>
      <Section id="whyUs">{<WhyUs />}</Section>
      <Section id="deals" alt={true}>
        {<Deals />}
      </Section>

      <Section id="testimonials">{<Testimonials />}</Section>
      <Section id="company" alt={true}>
        {<OurCompany />}
      </Section>
      <Contact />
    </>
  );
  return page;
};

export default Page;
