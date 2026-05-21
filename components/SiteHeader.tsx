"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-green/10 bg-brand-black/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-white sm:text-xl">
            One <span className="text-brand-green">&</span> Only
          </span>
          <span className="hidden font-sans text-xs font-normal text-white/50 sm:inline">
            Designers Group
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition hover:text-brand-green ${
                pathname === item.href
                  ? "text-brand-green"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/bookings"
            className="ml-2 rounded-full bg-brand-green px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-green-light hover:text-brand-black"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-brand-black px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-white/5 ${
                pathname === item.href ? "text-brand-green" : "text-white/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/bookings"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-brand-green px-4 py-2.5 text-center text-sm font-semibold text-white"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}