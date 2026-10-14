"use client";

import React, { useState } from "react";
import { Clock, Mail, MapPin, PhoneCall } from "lucide-react";
import Button from "@/src/components/ui/Button";

type Status = "idle" | "sending" | "success" | "error";

const contactInfo = [
  {
    icon: PhoneCall,
    label: "Call us",
    value: "+63 000 999 0000",
    href: "tel:+639176530000",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "support@autokid.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "122 Congressional Ave, Project 8, Quezon City",
  },
  {
    icon: Clock,
    label: "Opening hours",
    value: "[Mon – Sat, 8:30 AM – 5 PM]",
  },
];

const fieldClass =
  "input w-full bg-amber-50 focus:border-primary/50 focus:outline-primary/50 text-zinc-900";

const ContactUs: React.FC = () => {
  const contactUs = (
    <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
      <div className="lg:col-span-2">
        <h2 className="font-heading text-[clamp(32px,5vw,56px)] font-bold leading-[1.05] tracking-tight">
          Let&apos;s drive your business.
        </h2>
        <p className="mt-5 max-w-md text-sm text-base-content/70 sm:text-base lg:text-lg">
          Tell us what you need and our truck consultants will get back to you.
        </p>

        <ul className="mt-8 space-y-5 lg:mt-10">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-content">
                <Icon className="size-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <div className="text-sm font-semibold text-base-content/60">
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    className="wrap-break-word font-semibold hover:text-base-content/70"
                  >
                    {value}
                  </a>
                ) : (
                  <div className="wrap-break-word font-semibold">{value}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <form className="flex flex-col gap-5 rounded-md  border border-base-300 bg-zinc-900 p-6 shadow-lg sm:p-8 lg:col-span-3 lg:p-10">
        <div className="grid gap-5 sm:grid-cols-2 ">
          <label
            htmlFor="contact-name"
            className="flex flex-col gap-2 text-sm font-semibold text-amber-100"
          >
            Name
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClass}
            />
          </label>
          <label
            htmlFor="contact-phone"
            className="flex flex-col gap-2 text-sm font-semibold text-amber-100"
          >
            Phone
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClass}
            />
          </label>
        </div>

        <label
          htmlFor="contact-email"
          className="flex flex-col gap-2 text-sm font-semibold text-amber-100"
        >
          Email
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${fieldClass}`}
          />
        </label>

        <label
          htmlFor="contact-message"
          className="flex flex-col gap-2 text-sm font-semibold text-amber-100"
        >
          Message
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            className="textarea w-full bg-amber-50 focus:border-primary/50 focus:outline-primary/50 text-zinc-900"
          />
        </label>

        <input
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
        />

        <Button
          type="submit"
          size="lg"
          //   loading={status === "sending"}
          className="w-full sm:w-fit"
        >
          Send message
        </Button>

        {/* <p role="status" aria-live="polite" className="min-h-6 text-sm">
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
        </p> */}
      </form>
    </div>
  );

  return contactUs;
};

export default ContactUs;
