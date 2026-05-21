import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24">
        {/* Hero */}
        <section className="bg-brand-black py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green">About Us</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
              A creative studio built for bold ideas.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/60">
              One and Only Designers Group Ltd is a full-service creative agency based in Rwanda, delivering world-class design, print, photography, and video production.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="font-display text-3xl font-bold text-brand-black">Our Story</h2>
                <p className="mt-4 text-brand-black/70 leading-relaxed">
                  Founded with a passion for creativity and excellence, One and Only Designers Group has grown into a trusted creative partner for businesses, brands, and individuals across Rwanda and beyond.
                </p>
                <p className="mt-4 text-brand-black/70 leading-relaxed">
                  We believe that great design has the power to transform — from a simple logo to a full brand identity, from a portrait session to a cinematic production. Every project is approached with the same dedication to quality and intentionality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "200+", label: "Projects Completed" },
                  { number: "50+", label: "Happy Clients" },
                  { number: "5+", label: "Years Experience" },
                  { number: "4", label: "Core Services" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-brand-black p-6">
                    <p className="font-display text-3xl font-bold text-brand-green">{stat.number}</p>
                    <p className="mt-1 text-sm text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-brand-black">Our Values</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { title: "Excellence", desc: "We hold ourselves to the highest standards in every project we deliver." },
                { title: "Creativity", desc: "We bring fresh, bold ideas that make your brand stand out." },
                { title: "Integrity", desc: "We are honest, transparent and committed to our clients' success." },
              ].map((v) => (
                <div key={v.title} className="rounded-2xl border border-brand-black/8 bg-white p-6">
                  <div className="h-10 w-10 rounded-full bg-brand-green/10 flex items-center justify-center">
                    <span className="text-brand-green text-lg font-bold">✦</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-black">{v.title}</h3>
                  <p className="mt-2 text-sm text-brand-black/60">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-brand-black">Want to work with us?</h2>
            <p className="mt-4 text-brand-black/60">Book a session or reach out — we&#39;d love to hear about your project.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/bookings" className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-light">
                Book Now
              </Link>
              <Link href="/team" className="rounded-full border border-brand-black/15 px-6 py-3 text-sm font-semibold text-brand-black transition hover:bg-brand-black/5">
                Meet the Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}