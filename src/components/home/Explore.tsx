import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/src/components/ui/Button";
import { cn } from "@/src/lib/cn";

type ExploreCard = {
  title: string;
  description?: string;
  button: string;
  href: string;
  src: string;
  alt: string;
  full?: boolean;
};

const exploreData: ExploreCard[] = [
  {
    title: "Why Autokid?",
    button: "Explore Autokid",
    href: "/about",
    src: "/images/home/cover.jpg",
    alt: "Autokid trucks and team",
    full: true,
  },
  {
    title: "Promotion",
    description: "Check out the latest offers.",
    button: "Get offers",
    href: "/promotions",
    src: "/images/deals/deals2.jpeg",
    alt: "Autokid promotional trucks",
  },
  {
    title: "Customer Experience",
    description: "Welcome to the Autokid family.",
    button: "Visit now",
    href: "/location",
    src: "/images/testimonials/testimonials1.jpeg",
    alt: "Happy Autokid customers with their new truck",
  },
];

const Explore: React.FC = () => {
  const explore = (
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 ">
      {exploreData.map((card) => (
        <div
          key={card.title}
          className={cn(
            "relative isolate flex overflow-hidden rounded-md shadow-sm border border-black/20 inset-shadow-xs",
            card.full
              ? "h-70 sm:h-90 md:col-span-2 lg:h-110.5"
              : "h-70 sm:h-90 lg:h-110",
          )}
        >
          <Image
            src={card.src}
            alt={card.alt}
            fill
            sizes={card.full ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="-z-20 object-cover"
          />

          <div className="absolute inset-0 -z-10 bg-linear-to-r from-black/75 via-black/35 to-transparent" />

          <div className="flex w-full flex-col items-start justify-end gap-3 p-5 text-white sm:gap-4 sm:p-8 lg:p-10">
            <h3
              className={cn(
                "font-heading font-bold leading-tight tracking-tight",
                card.full
                  ? "text-3xl sm:text-5xl lg:text-6xl"
                  : "text-2xl sm:text-3xl lg:text-4xl",
              )}
            >
              {card.title}
            </h3>

            {card.description && (
              <p className="max-w-sm text-sm text-white/85 sm:text-base lg:text-lg">
                {card.description}
              </p>
            )}

            <Button className="mt-1 h-5 text-xs sm:text:sm  md:text-md md:h-10">
              {card.button}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );

  return explore;
};
// we are going to use the same domain, right now when you seach autokid to browser it will show first im just curious what will happen if we update the website because we will use next js deployed in vercel , and the back will use google cloud run, bucket storage, firestore
export default Explore;
