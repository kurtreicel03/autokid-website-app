import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BusFront,
  Hammer,
  Package,
  Trash,
  Zap,
} from "lucide-react";

const applicationData = [
  {
    icon: Package,
    title: "Logistics",
    href: "/trucks/logistics",
    src: "/images/products/application1.png",
  },
  {
    icon: Hammer,
    title: "Construction",
    href: "/trucks/construction",
    src: "/images/products/application2.png",
  },
  {
    icon: Trash,
    title: "Waste Management",
    href: "/trucks/waste-management",
    src: "/images/products/application5.png",
  },
  {
    icon: Zap,
    title: "Electric",
    href: "/trucks/electric",
    src: "/images/products/application4.png",
  },
  {
    icon: BusFront,
    title: "Transportation",
    href: "/trucks/transportation",
    src: "/images/products/application3.png",
  },
];

const Application: React.FC = () => {
  const application = (
    <>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold leading-[1.05] tracking-tight">
          Discover your own mobility solutions
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-sm text-base-content/70  sm:text-lg lg:text-xl">
          From versatile light trucks to heavy-duty fleets, discover your own
          mobility solutions designed to keep your operations moving seamlessly
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-5 lg:mt-16">
        {applicationData.map(({ icon: Icon, title, href, src }) => (
          <Link
            key={title}
            href={""}
            className="bg-zinc-900  group w-full rounded-md border border-base-300 bshadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(20%-16px)]"
          >
            <div className="relative">
              <div className="relative aspect-4/3 overflow-hidden rounded-t-sm bg-amber-50">
                <Image
                  src={src}
                  alt={`${title} truck`}
                  height={2000}
                  width={2000}
                  sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 30vw, (min-width: 640px) 40vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none p-5 bg-white-/30 backdrop-blur-2xl px-5 py-10"
                />
              </div>
              <span className="p-1 absolute -bottom-6 left-5 flex size-52px items-center justify-center rounded-xl border-4 border-base-100 bg-primary text-primary-content">
                <Icon className="size-6" strokeWidth={1.5} />
              </span>
            </div>

            <div className="flex items-center justify-between gap-3 px-5 pb-5 pt-10 rounded-b-md">
              <h3 className=" text-md font-bold  tracking-wide text-amber-50">
                {title}
              </h3>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-amber-50 transition duration-300 group-hover:bg-primary group-hover:text-primary-content">
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return application;
};

export default Application;
