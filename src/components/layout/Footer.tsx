import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/src/components/layout/Container";

const columns = [
  {
    title: "Social media",
    external: true,
    links: [
      { label: "Facebook", href: "https://www.facebook.com/" },
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "Twitter X", href: "https://x.com/" },
      { label: "TikTok", href: "https://www.tiktok.com/" },
    ],
  },
  {
    title: "Brands",
    links: [
      { label: "Tata Motors", href: "/brands/tata-motors" },
      { label: "FAW Trucks", href: "/brands/faw" },
      { label: "Isuzu", href: "/brands/isuzu" },
      { label: "Weichai", href: "/brands/weichai" },
    ],
  },
  {
    title: "Trucks",
    links: [
      { label: "Logistics", href: "/trucks/logistics" },
      { label: "Transportation", href: "/trucks/transportation" },
      { label: "Construction", href: "/trucks/construction" },
      { label: "Waste Management", href: "/trucks/waste-management" },
      { label: "Electric", href: "/trucks/electric" },
    ],
  },
  {
    title: "About Autokid",
    links: [
      { label: "Company", href: "/about" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

const linkClass =
  "text-sm text-white/70 transition-colors duration-200 hover:text-primary sm:text-base";

const Footer: React.FC = () => {
  const footer = (
    <footer className="flex min-h-[90vh] flex-col justify-between bg-black pt-30 text-white md:pt-50 pb-5">
      <Container className="w-full">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-6 lg:gap-x-10">
          {/* company info */}
          <div className="col-span-2">
            <Link href="/" aria-label="Autokid home" className="inline-block">
              <Image
                src="/images/home/ak-logo.png"
                alt="Autokid Mobility Solutions"
                width={500}
                height={500}
                className="h-auto w-36 sm:w-44"
              />
            </Link>
            <p className="mt-6 max-w-xs text-sm text-white/70 sm:text-base">
              We drive your business. Trucks, financing, parts and service, all
              from one trusted partner.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-white/70 sm:text-base">
              <p>122 Congressional Ave, Project 8, Quezon City</p>
              <p>
                <a href="tel:+639176530000" className="hover:text-primary">
                  +63 917 653 0000
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-primary"
                >
                  [EMAIL ADDRESS]
                </a>
              </p>
            </address>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-heading text-base font-semibold tracking-tight sm:text-lg">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {col.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className={linkClass}>
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <Container className="mt-50 w-full">
        <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Autokid Mobility Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );

  return footer;
};

export default Footer;
