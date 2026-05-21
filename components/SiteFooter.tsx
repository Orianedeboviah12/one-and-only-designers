import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-brand-black text-white/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-xl font-bold text-white">
              One <span className="text-brand-green">&</span> Only
              <span className="ml-1 text-sm font-normal text-white/40">Designers Group</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Graphic design, printing, photography & events, and video production — creative studio excellence.
            </p>
            <div className="mt-5 flex gap-3">
              {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((s) => (
                <a key={s} href="#" className="text-xs font-medium text-white/40 hover:text-brand-green transition">{s}</a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/30">Pages</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-brand-green transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/30">Get Started</p>
            <ul className="mt-4 space-y-2.5">
              {[
                { href: "/bookings", label: "Book a Session" },
                { href: "/payments", label: "Make a Payment" },
                { href: "/contact", label: "Get a Quote" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm hover:text-brand-green transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {new Date().getFullYear()} One and Only Designers Group Ltd. All rights reserved.</p>
          <Link href="/bookings" className="rounded-full bg-brand-green px-5 py-2 text-xs font-semibold text-white hover:bg-brand-green-light transition">
            Book Now
          </Link>
        </div>
      </div>
    </footer>
  );
}