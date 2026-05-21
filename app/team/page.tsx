import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";

const team = [
  {
    name: "Alex Mugisha",
    role: "Creative Director",
    bio: "Leads the creative vision of the studio with 8+ years of design experience.",
    initials: "AM",
    social: { instagram: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Diane Uwase",
    role: "Lead Photographer",
    bio: "Captures moments with precision and artistry across events and portraits.",
    initials: "DU",
    social: { instagram: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Eric Nkurunziza",
    role: "Video Producer",
    bio: "Brings stories to life through cinematic video production and post-editing.",
    initials: "EN",
    social: { instagram: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Sandra Iradukunda",
    role: "Graphic Designer",
    bio: "Specializes in brand identity, print, and digital design systems.",
    initials: "SI",
    social: { instagram: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Patrick Habimana",
    role: "Print Specialist",
    bio: "Oversees all print production ensuring the highest quality output.",
    initials: "PH",
    social: { instagram: "#", linkedin: "#", twitter: "#" },
  },
  {
    name: "Chloe Mutesi",
    role: "Client Relations",
    bio: "Your first point of contact — ensuring every project runs smoothly.",
    initials: "CM",
    social: { instagram: "#", linkedin: "#", twitter: "#" },
  },
];

export default function TeamPage() {
  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24">
        {/* Hero */}
        <section className="bg-brand-black py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green">Our People</p>
            <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold text-white sm:text-5xl">
              Meet the team behind the work.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/60">
              A passionate group of creatives dedicated to delivering excellence on every project.
            </p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div key={member.name} className="group rounded-2xl border border-brand-black/8 p-6 transition hover:border-brand-green hover:shadow-lg">
                  {/* Avatar */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-white">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-black">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-green">{member.role}</p>
                  <p className="mt-3 text-sm text-brand-black/60 leading-relaxed">{member.bio}</p>

                  {/* Social Links */}
                  <div className="mt-5 flex gap-3">
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-black/10 text-brand-black/50 transition hover:border-brand-green hover:text-brand-green"
                      aria-label="Instagram"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-black/10 text-brand-black/50 transition hover:border-brand-green hover:text-brand-green"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-black/10 text-brand-black/50 transition hover:border-brand-green hover:text-brand-green"
                      aria-label="Twitter/X"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.629L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join CTA */}
        <section className="bg-gray-50 py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-bold text-brand-black">Want to join our team?</h2>
            <p className="mt-4 text-brand-black/60">We're always looking for talented creatives to grow with us.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-green-light"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}