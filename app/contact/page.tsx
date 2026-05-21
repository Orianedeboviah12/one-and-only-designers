"use client";
import { useState } from "react";
import { SiteHeader } from "../../components/SiteHeader";
import { SiteFooter } from "../../components/SiteFooter";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24">
        {/* Hero */}
        <section className="bg-brand-black py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green">Get In Touch</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Let's talk about your project.
            </h1>
            <p className="mt-4 text-white/60">Reach out and we&#39;ll get back to you within 24 hours.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              {/* Contact info */}
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-black">Contact Information</h2>
                <div className="mt-8 space-y-6">
                  {[
                    { label: "Email", value: "info@oneandonlydesigners.rw", icon: "✉" },
                    { label: "Phone", value: "+250 788 000 000", icon: "☎" },
                    { label: "Location", value: "Kigali, Rwanda", icon: "📍" },
                    { label: "Hours", value: "Mon–Fri, 8AM–6PM", icon: "🕐" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-lg">{c.icon}</span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-brand-black/40">{c.label}</p>
                        <p className="mt-0.5 font-medium text-brand-black">{c.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-10">
                  <p className="text-sm font-medium text-brand-black/50">Follow us</p>
                  <div className="mt-3 flex gap-3">
                    {["Instagram", "LinkedIn", "Twitter/X", "Facebook"].map((s) => (
                      <a key={s} href="#" className="rounded-full border border-brand-black/10 px-3 py-1.5 text-xs font-medium text-brand-black/60 hover:border-brand-green hover:text-brand-green transition">
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                {submitted ? (
                  <div className="rounded-2xl bg-brand-green/5 border border-brand-green/20 p-8 text-center">
                    <span className="text-4xl text-brand-green">✓</span>
                    <h3 className="mt-4 font-display text-xl font-bold text-brand-black">Message Sent!</h3>
                    <p className="mt-2 text-brand-black/60">We'll get back to you at <strong>{form.email}</strong> within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display text-2xl font-bold text-brand-black">Send a Message</h2>
                    {[
                      { field: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                      { field: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                      { field: "phone", label: "Phone (optional)", type: "tel", placeholder: "+250 7XX XXX XXX" },
                    ].map(({ field, label, type, placeholder }) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-brand-black">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={form[field as keyof typeof form]}
                          onChange={(e) => update(field, e.target.value)}
                          required={field !== "phone"}
                          className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm placeholder:text-brand-black/30 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-brand-black">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project..."
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        required
                        className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm placeholder:text-brand-black/30 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-brand-green py-3 text-sm font-semibold text-white transition hover:bg-brand-green-light"
                    >
                      Send Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

