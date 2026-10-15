import React from "react";
import type { Metadata } from "next";
import { avantGarde } from "@/src/lib/fonts";
import "@/src/app/globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
export const metadata: Metadata = {
  title: { default: "Autokid Mobility Solutions", template: "%s | Autokid" },
  description:
    "Trucks, financing, parts and service, all from one trusted partner.",
  icons: {
    icon: "/images/autokid-icon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="bumblebee"
      data-scroll-behavior="smooth"
      className={`${avantGarde.variable}`}
    >
      <body className="">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
