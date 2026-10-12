"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionTitle from "@/src/components/ui/SectionTitle";
import Button from "@/src/components/ui/Button";
import Container from "@/src/components/layout/Container";

type Status = "idle" | "sending" | "success" | "error";

const contactInfo = [
  { icon: Phone, label: "+63 917 653 0000", href: "tel:+639176530000" },
  { icon: Mail, label: "[EMAIL ADDRESS]", href: "mailto:hello@example.com" },
  { icon: MapPin, label: "122 Congressional Ave, Project 8, Quezon City" },
];

const interests = [
  "Brand new trucks",
  "Surplus trucks",
  "Parts & service",
  "Financing",
  "Dealership",
];

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const contact = (
    <section
      id="contact"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden py-16 md:py-24"
    >
      {/* blurred photo backdrop, faded into the page at top and bottom */}
      <Image
        src="/images/home/cover.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-20 scale-110 object-cover blur-3xl brightness-[.4] saturate-[1.3]"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-base-100 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-base-100 to-transparent" />

      <Container>
        <div className="glass-card grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-16">
          {/* left: intro + contact details */}
          <div>
            <SectionTitle
              eyeBrow="Contact us"
              title="Let's drive your business."
            />
            <p className="mt-6 max-w-md text-base text-neutral-content/80 sm:text-lg">
              Tell us what you need and our truck consultants will get back to
              you.
            </p>

            <ul className="mt-8 space-y-4">
              {contactInfo.map(({ icon: Icon, label, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                  {href ? (
                    <a
                      href={href}
                      className="text-neutral-content hover:text-base-content"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-neutral-content">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* right: form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-content">
                Full name
                <input
                  name="fullName"
                  type="text"
                  required
                  autoComplete="name"
                  className="input w-full border-white/15 bg-white/5 text-base-content"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-content">
                Phone
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="input w-full border-white/15 bg-white/5 text-base-content"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-content">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="input w-full border-white/15 bg-white/5 text-base-content"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-content">
              I&apos;m looking for
              <select
                name="interest"
                defaultValue={interests[0]}
                className="select w-full border-white/15 bg-white/5 text-base-content"
              >
                {interests.map((item) => (
                  <option
                    key={item}
                    className="text-neutral-content bg-black/60 rounded-md mt-1 hover:bg-black/45"
                  >
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm font-semibold text-neutral-content">
              Message
              <textarea
                name="message"
                rows={4}
                className="textarea w-full border-white/15 bg-white/5 text-base-content"
              />
            </label>

            <Button
              type="submit"
              loading={status === "sending"}
              className="mt-2 w-full sm:w-fit"
            >
              Send message
            </Button>

            <p role="status" aria-live="polite" className="min-h-6 text-sm">
              {status === "success" && (
                <span className="text-success">
                  Thank you! We&apos;ll get back to you soon.
                </span>
              )}
              {status === "error" && (
                <span className="text-error">
                  Something went wrong. Please try again.
                </span>
              )}
            </p>
          </form>
        </div>
      </Container>
    </section>
  );

  return contact;
};

export default Contact;
