import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "@/src/app/globals.css";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "Autokid Mobility Solutions", template: "%s | Autokid" },
  description:
    "Trucks, financing, parts and service, all from one trusted partner.",
  icons: {
    icon: "/images/autokid-bg.png", // Replace with your actual file name
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const rootLayout = (
    <html
      lang="en"
      data-theme="autokid"
      className={`${manrope.variable} ${sora.variable}`}
    >
      <body className="bg-base-100 font-sans text-base-content antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );

  return rootLayout;
};

export default RootLayout;
