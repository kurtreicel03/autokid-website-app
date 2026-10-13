import localFont from "next/font/local";

export const avantGarde = localFont({
  src: [
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Pro-XLt.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Pro-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Pro-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Pro-Demi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ITC Avant Garde Gothic Pro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avant-garde",
  display: "swap",
  preload: true,
});
