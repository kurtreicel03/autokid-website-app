"use client";
import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  {
    label: "Brands",
    href: "/brands",
    children: [
      { label: "Tata Motors", href: "/brands/tata-motors" },
      { label: "FAW Trucks", href: "/brands/faw" },
      { label: "Isuzu", href: "/brands/isuzu" },
      { label: "Weichai", href: "/brands/weichai" },
    ],
  },
  {
    label: "Trucks",
    href: "/#trucks",
    children: [
      { label: "Logistics", href: "/trucks/logistics" },
      { label: "Transportation", href: "/trucks/transportation" },
      { label: "Construction", href: "/trucks/construction" },
      { label: "Waste Management", href: "/trucks/waste-management" },
      { label: "Electric", href: "/trucks/electric" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Find a dealer", href: "/location" },
];

const linkStyle =
  "font-medium font-stretch-semi-condensed text-base-100 transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary md:text-sm lg:text-lg";

const Navbar: React.FC = () => {
  const drawerRef = useRef<HTMLInputElement>(null);

  const closeDrawer = () => {
    if (drawerRef.current) drawerRef.current.checked = false;
  };

  const navbar = (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-4 sm:px-8 lg:px-12 xl:px-24 2xl:px-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-zinc-900/40 shadow-2xl backdrop-blur-2xl"
      />
      <Link href="/" aria-label="Autokid home">
        <Image
          src="/images/home/ak-logo.png"
          alt="Autokid"
          height={500}
          width={500}
          priority
          className="h-auto w-28 p-0 lg:w-40"
        />
      </Link>

      <nav
        className="hidden items-center gap-4 md:flex lg:gap-8"
        aria-label="Main"
      >
        {navItems.map((item) =>
          item.children ? (
            <div key={item.label} className="dropdown dropdown-hover group">
              <Link
                href={item.href}
                tabIndex={0}
                aria-haspopup="menu"
                className={`${linkStyle} flex items-center gap-1`}
              >
                {item.label}
                <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <ul
                tabIndex={0}
                className="dropdown-content menu z-50 mt-0 w-56 rounded-sm border border-white/10 bg-black/80 p-2 text-base-100 shadow-2xl backdrop-blur-2xl"
              >
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link href={child.href} className="hover:text-primary">
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link key={item.href} href={item.href} className={linkStyle}>
              {item.label}
            </Link>
          ),
        )}
      </nav>

      <Link
        href="/#contact"
        className="btn btn-primary hidden font-medium text-primary-content md:inline-flex md:btn-sm lg:btn-md transition-transform duration-300 hover:-translate-y-1"
      >
        Contact us
      </Link>

      <div className="drawer drawer-end w-auto md:hidden">
        <input
          id="nav-drawer"
          ref={drawerRef}
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <label
            htmlFor="nav-drawer"
            aria-label="Open menu"
            className="flex cursor-pointer"
          >
            <Menu className="size-9 rounded-md bg-primary/90 p-1.5 text-primary-content shadow-xl hover:bg-primary/65" />
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="nav-drawer"
            aria-label="Close menu"
            className="drawer-overlay"
          ></label>
          <ul className="menu min-h-full w-72 bg-primary p-4 text-sm font-medium text-black sm:w-80">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <details>
                    <summary>
                      {item.href.startsWith("/#") ? (
                        <Link href={item.href} onClick={closeDrawer}>
                          {item.label}
                        </Link>
                      ) : (
                        item.label
                      )}
                    </summary>
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} onClick={closeDrawer}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} onClick={closeDrawer}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="mt-4">
              <Link
                href="/#contact"
                onClick={closeDrawer}
                className="btn btn-accent bg-zinc-900 transition-transform duration-300 text-primary hover:-translate-y-1 justify-center"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );

  return navbar;
};

export default Navbar;
