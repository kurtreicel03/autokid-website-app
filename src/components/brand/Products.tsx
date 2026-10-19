import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/src/lib/cn";

const products = [
  { name: "TATA SIGNA DUMPTRUCK", layout: "col-span-2 md:row-span-2" },
  { name: "TATA ULTRA T9", layout: "" },
  { name: "TATA AGILA", layout: "" },
  { name: "TATA SIGNA TRACTOR", layout: "col-span-2" },
  { name: "TATA ACE", layout: "md:row-span-2" },
  { name: "TATA ULTRA T16", layout: "md:col-span-2" },
  { name: "TATA ULTRA T6", layout: "col-span-2 md:col-span-1" },
  { name: "TATA LP 916 BUS", layout: "col-span-2 md:col-span-3" },
];

const slugify = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

const Products: React.FC = () => {
  const productsSection = (
    <>
      <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[1.05] tracking-tight">
        Available Models
      </h2>

      <div className="mt-10 grid grid-cols-2 auto-rows-47.5 gap-3 sm:gap-4 md:auto-rows-55 md:grid-cols-4 lg:mt-14 lg:auto-rows-65 lg:gap-5">
        {products.map((product) => (
          <Link
            key={product.name}
            href={`/products/${product.name.toLowerCase().split(" ").join("-")}`}
            className={cn(
              "group flex min-h-0 flex-col overflow-hidden rounded-md bg-amber-50/30 border border-zinc-900/20 inset-shadow-xs transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none",
              product.layout,
            )}
          >
            <div className="relative min-h-0 flex-1">
              <Image
                src={encodeURI(`/images/products/${product.name}.png`)}
                alt={product.name}
                fill
                sizes="(min-width: 1200px) 560px, (min-width: 768px) 50vw, 100vw"
                className="object-contain p-4 transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>

            <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 text-zinc-900">
              <h3 className="line-clamp-2 font-heading text-xs font-bold leading-snug tracking-tight sm:text-lg">
                {product.name}
              </h3>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-base-100 transition duration-300 group-hover:bg-primary group-hover:text-primary-content">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );

  return productsSection;
};

export default Products;
