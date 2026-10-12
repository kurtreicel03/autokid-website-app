import React from "react";
import Link from "next/link";
import Container from "./Container";

const Footer: React.FC = () => {
  const footer = (
    <footer className="pb-12 pt-14 text-sm leading-[1.9] text-neutral-content/70">
      <Container className="flex flex-wrap justify-between gap-8">
        <div>
          <span className="font-heading text-[22px] font-semibold text-base-content">
            autokid<span className="text-primary">.</span>
          </span>
          <p>We drive your business.</p>
          <p>122 Congressional Ave, Project 8, Quezon City</p>
        </div>
        <nav className="flex flex-col">
          <b className="text-base-content">Explore</b>
          <Link href="/brands">Brands</Link>
          <Link href="/#products">Products</Link>
          <Link href="/about">About Us</Link>
        </nav>
      </Container>
    </footer>
  );

  return footer;
};

export default Footer;
