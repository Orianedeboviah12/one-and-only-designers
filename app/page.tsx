import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-brand-black pt-24 sm:pt-28">
          <div className="pointer-events-none absolute -right-24 top-0 h-[480px] w-[480px] rounded-full bg-brand-green/10 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-green/5 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-32 sm:pt-16">
            <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.2em] text-brand-green opacity-0 [animation-delay:80ms]">
              One and Only Designers Group Ltd
            </p>
            <h1 className="animate-fade-up mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-white opacity-0 [animation-delay:140ms] sm:text-5xl lg:text-6xl">
              Design, print, capture, and film —{" "}
              <span className="text-brand-green">under one roof.</span>
            </h1>
            <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-white/60 opacity-0 [animation-delay:220ms]">
              From brand identity to the final reel, we craft visuals that feel intentional, polished, and unmistakably yours.
            </p>
            <div className="animate-fade-up mt-10 flex flex-wrap gap-3 opacity-0 [animation-delay:300ms]">
              <Link href="/bookings" className="inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-green-light hover:text-brand-black">
                Book a Session
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10">
                Explore Services
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-bold text-brand-black sm:text-4xl">What we do</h2>
            <p className="mt-3 text-brand-black/60">Creative services tailored to your vision.</p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Graphic Design", desc: "Brand identity, logos, print & digital design.", icon: "✦" },
                { title: "Printing", desc: "High-quality printing for all your materials.", icon: "◈" },
                { title: "Photography & Events", desc: "Professional photography and event coverage.", icon: "◎" },
                { title: "Video Production", desc: "Cinematic video production and editing.", icon: "▶" },
              ].map((s) => (
                <div key={s.title} className="group rounded-2xl border border-brand-black/8 p-6 transition hover:border-brand-green hover:shadow-lg">
                  <span className="text-2xl text-brand-green">{s.icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-brand-black">{s.title}</h3>
                  <p className="mt-2 text-sm text-brand-black/60">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-green hover:underline">
                View all services →
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-brand-green py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Ready to start your project?</h2>
            <p className="mt-4 text-white/75">Book a session with our team and let's bring your vision to life.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/bookings" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-green transition hover:bg-white/90">
                Book Now
              </Link>
              <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
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
