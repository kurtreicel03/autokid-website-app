import React from "react";
import Link from "next/link";
import Container from "./Container";

const links = [
  { label: "Brands", href: "/brands" },
  { label: "Products", href: "/#products" },
  { label: "About Us", href: "/about" },
];

const Navbar: React.FC = () => {
  const navbar = (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-base-100/50 backdrop-blur-[22px] backdrop-saturate-150">
      <Container className="flex flex-wrap items-center justify-between gap-3 py-[18px]">
        <Link
          href="/"
          className="font-heading text-[22px] font-semibold tracking-tight"
        >
          autokid<span className="text-primary">.</span>
        </Link>
        <nav className="flex flex-wrap gap-9 text-[15px] font-medium text-neutral-content">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-base-content"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn btn-primary">
          Contact us
        </Link>
      </Container>
    </header>
  );

  return navbar;
};

export default Navbar;
