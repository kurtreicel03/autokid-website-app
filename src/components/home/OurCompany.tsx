import React from "react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import Image from "next/image";
import Button from "@/src/components/ui/Button";

const milestones = [
  { year: "2014", text: "Lorem, ipsum dolor." },
  { year: "2016", text: "Lorem ipsum dolor sit." },
  { year: "2019", text: "Lorem, ipsum dolor." },
  { year: "2022", text: "Lorem ipsum dolor sit amet consectetur." },
];

const OurCompany: React.FC = () => {
  const ourCompany = (
    <>
      <SectionTitle eyeBrow="Our company" title="About Autokid." />

      <div className="mt-8 grid items-center gap-8 sm:mt-10 lg:grid-cols-2 lg:gap-14">
        <div className="self-start space-y-6 text-sm font-medium leading-relaxed tracking-wide text-neutral-content sm:text-base lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            ratione perferendis vero provident illo quaerat. Quidem odio,
            aspernatur veniam tempora, asperiores corrupti quia maxime
            recusandae laudantium rerum architecto iure? Aliquid voluptatum
            alias beatae molestiae aut ea repellendus et at ratione dolore quas
            optio iure quam qui sapiente harum maiores ipsum maxime facilis,
            dicta nobis!
          </p>
          <p className="border-b border-b-white/40 pb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum iste
            nam ex numquam doloremque repellendus, voluptatem ad obcaecati
            cumque repellat voluptate aut quisquam. Sed illum recusandae harum
            labore pariatur ex!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {milestones.map((data, i) => (
              <div key={`${data.year}${i}`} className="flex flex-col">
                <p className="text-primary/90 font-semibold font-heading">
                  {data.year}
                </p>
                <p className="text-neutral-content/70">{data.text}</p>
              </div>
            ))}
          </div>

          <Button variant="ghost">Meet the team</Button>
        </div>

        <div className="mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">
          <Image
            src="/images/about/about1.jpeg"
            alt="Autokid truck highlight"
            width={1600}
            height={1600}
            sizes="(min-width: 1024px) 560px, (min-width: 640px) 512px, 100vw"
            className="h-auto w-full rounded-2xl lg:rounded-3xl"
          />
        </div>
      </div>
    </>
  );

  return ourCompany;
};

export default OurCompany;
