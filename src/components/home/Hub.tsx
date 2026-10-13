import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/ui/Button";

const posts = [
  {
    slug: "news-post",
    src: "/images/blogs/news-blog.jpeg",
    alt: "Autokid news",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2026-10-12",
    category: "News",
  },
  {
    slug: "tips-post",
    src: "/images/blogs/tips-blog.jpeg",
    alt: "Autokid truck tips",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2026-10-05",
    category: "Tips",
  },
  {
    slug: "updates-post",
    src: "/images/blogs/update-blog.jpeg",
    alt: "Autokid updates",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "2026-09-28",
    category: "Updates",
  },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

const Hub: React.FC = () => {
  const hub = (
    <>
      {/* heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-heading text-[clamp(32px,5vw,64px)] font-bold uppercase leading-[1.05] tracking-tight">
          The Autokid Hub
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm text-base-content/70 sm:text-base lg:text-lg">
          Your go-to source for Autokid updates, milestone turnovers, and the
          cutting-edge trends shaping modern transportation
        </p>
      </div>

      {/* card | card | card, with vertical dividers from md up */}
      <div className="mt-10 grid grid-cols-1 divide-y divide-base-300 md:grid-cols-3 md:divide-x md:divide-y-0 lg:mt-16">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="py-8 first:pt-0 last:pb-0 md:px-6 md:py-0 md:first:pl-0 md:last:pr-0 lg:px-10"
          >
            <Link href={`/hub/${post.slug}`} className="group block">
              <div className="relative aspect-4/3 overflow-hidden rounded-md">
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>

              <h3 className="mt-5 font-heading text-lg font-medium leading-snug tracking-tight transition-colors group-hover:text-base-content/70 lg:text-xl">
                {post.title}
              </h3>

              <p className="mt-3 flex items-center gap-3 text-sm text-base-content/60">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span aria-hidden className="h-4 w-px bg-base-300" />
                <span className="text-neutral/80">{post.category}</span>
              </p>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center lg:mt-14">
        <Button size="sm">Check blogs</Button>
      </div>
    </>
  );

  return hub;
};

export default Hub;
