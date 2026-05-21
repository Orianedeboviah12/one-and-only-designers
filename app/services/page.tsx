
import React from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const services = [
  {
    icon: "✦",
    title: "Graphic Design",
    desc: "We create visual identities that speak for your brand — from logos and typography to full brand systems.",
    items: ["Logo & Brand Identity", "Business Cards & Stationery", "Social Media Graphics", "Brochures & Flyers", "Packaging Design"],
  },
  {
    icon: "◈",
    title: "Printing",
    desc: "High-quality printing services for all your business and personal needs.",
    items: ["Large Format Printing", "Business Cards", "Banners & Signage", "Magazines & Booklets", "Custom Merchandise"],
  },
  {
    icon: "◎",
    title: "Photography & Events",
    desc: "Professional photography for corporate events, portraits, products, and everything in between.",
    items: ["Corporate Events", "Portrait Sessions", "Product Photography", "Wedding Coverage", "Promotional Shoots"],
  },
  {
    icon: "▶",
    title: "Video Production",
    desc: "From concept to final cut, we produce cinematic videos that tell your story.",
    items: ["Brand Films", "Corporate Videos", "Social Media Content", "Event Highlights", "Documentary Production"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24">
        <section className="bg-brand-black py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green">What We Offer</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
              Creative services for every need.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/60">
              Four core disciplines. One studio. Endless creative possibilities.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              {services.map((s) => (
                <div key={s.title} className="rounded-2xl border border-brand-black/8 p-8 transition hover:border-brand-green hover:shadow-xl">
                  <span className="text-3xl text-brand-green">{s.icon}</span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-brand-black">{s.title}</h2>
                  <p className="mt-3 text-brand-black/60 leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-brand-black/70">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/bookings" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-green hover:underline">
                    Book this service →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-green py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Not sure what you need?</h2>
            <p className="mt-4 text-white/75">Talk to us and we&apos;ll find the right solution for your project.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/bookings" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green hover:bg-white/90 transition">
                Book a Consultation
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
