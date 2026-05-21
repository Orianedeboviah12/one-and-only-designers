"use client";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Link from "next/link";

const services = [
  "Graphic Design",
  "Printing",
  "Photography",
  "Event Coverage",
  "Video Production",
  "Brand Identity",
  "Consultation",
];

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM",
];

export default function BookingsPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-screen items-center justify-center bg-white pt-16">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10">
              <span className="text-4xl text-brand-green">✓</span>
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold text-brand-black">Booking Confirmed!</h1>
            <p className="mt-4 text-brand-black/60">
              Thank you, <strong>{form.name}</strong>! Your booking for{" "}
              <strong>{form.service}</strong> on <strong>{form.date}</strong> at{" "}
              <strong>{form.time}</strong> has been received. We'll contact you at{" "}
              <strong>{form.email}</strong> to confirm.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/payments" className="rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition">
                Proceed to Payment
              </Link>
              <Link href="/" className="rounded-full border border-brand-black/15 px-6 py-3 text-sm font-semibold text-brand-black hover:bg-brand-black/5 transition">
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="bg-white pt-24">
        {/* Hero */}
        <section className="bg-brand-black py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green">Book a Session</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Let's create something together.
            </h1>
            <p className="mt-4 text-white/60">Choose your service, pick a date and time, and we'll take it from there.</p>
          </div>
        </section>

        {/* Steps indicator */}
        <div className="border-b border-brand-black/8 bg-gray-50">
          <div className="mx-auto flex max-w-2xl gap-0 px-4 sm:px-6">
            {["Service & Time", "Your Details", "Confirm"].map((label, i) => (
              <div
                key={label}
                className={`flex flex-1 items-center gap-2 py-4 text-sm font-medium border-b-2 transition ${
                  step === i + 1
                    ? "border-brand-green text-brand-green"
                    : step > i + 1
                    ? "border-brand-green/30 text-brand-black/40"
                    : "border-transparent text-brand-black/30"
                }`}
              >
                <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  step > i + 1 ? "bg-brand-green text-white" : step === i + 1 ? "bg-brand-green text-white" : "bg-brand-black/10 text-brand-black/40"
                }`}>
                  {step > i + 1 ? "✓" : i + 1}
                </span>
                <span className="hidden sm:inline">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <section className="py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6">
            <form onSubmit={handleSubmit}>

              {/* Step 1: Service & Time */}
              {step === 1 && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-brand-black">Choose a Service</h2>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => update("service", s)}
                          className={`rounded-xl border p-3 text-sm font-medium text-left transition ${
                            form.service === s
                              ? "border-brand-green bg-brand-green/5 text-brand-green"
                              : "border-brand-black/10 text-brand-black/70 hover:border-brand-green/40"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-brand-black">Pick a Date</h2>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      min={new Date().toISOString().split("T")[0]}
                      className="mt-3 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm text-brand-black focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <h2 className="font-display text-2xl font-bold text-brand-black">Choose a Time</h2>
                    <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                      {timeSlots.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => update("time", t)}
                          className={`rounded-xl border p-2.5 text-xs font-medium transition ${
                            form.time === t
                              ? "border-brand-green bg-brand-green text-white"
                              : "border-brand-black/10 text-brand-black/70 hover:border-brand-green/40"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    disabled={!form.service || !form.date || !form.time}
                    onClick={() => setStep(2)}
                    className="w-full rounded-full bg-brand-green py-3 text-sm font-semibold text-white transition hover:bg-brand-green-light disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue →
                  </button>
                </div>
              )}

              {/* Step 2: Details */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold text-brand-black">Your Details</h2>
                  {[
                    { field: "name", label: "Full Name", type: "text", placeholder: "John Doe" },
                    { field: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
                    { field: "phone", label: "Phone Number", type: "tel", placeholder: "+250 7XX XXX XXX" },
                  ].map(({ field, label, type, placeholder }) => (
                    <div key={field}>
                      <label className="block text-sm font-medium text-brand-black">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[field as keyof typeof form]}
                        onChange={(e) => update(field, e.target.value)}
                        required
                        className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/30 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-brand-black">Additional Notes (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us more about your project..."
                      value={form.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm text-brand-black placeholder:text-brand-black/30 focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green resize-none"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex-1 rounded-full border border-brand-black/15 py-3 text-sm font-semibold text-brand-black hover:bg-brand-black/5 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      disabled={!form.name || !form.email || !form.phone}
                      onClick={() => setStep(3)}
                      className="flex-1 rounded-full bg-brand-green py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirm */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold text-brand-black">Confirm Booking</h2>
                  <div className="rounded-2xl border border-brand-black/8 divide-y divide-brand-black/8">
                    {[
                      { label: "Service", value: form.service },
                      { label: "Date", value: form.date },
                      { label: "Time", value: form.time },
                      { label: "Name", value: form.name },
                      { label: "Email", value: form.email },
                      { label: "Phone", value: form.phone },
                      ...(form.notes ? [{ label: "Notes", value: form.notes }] : []),
                    ].map(({ label, value }) => (
                      <div key={label} className="flex items-start justify-between px-5 py-3.5">
                        <span className="text-sm text-brand-black/50">{label}</span>
                        <span className="text-sm font-medium text-brand-black text-right max-w-[60%]">{value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="flex-1 rounded-full border border-brand-black/15 py-3 text-sm font-semibold text-brand-black hover:bg-brand-black/5 transition"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 rounded-full bg-brand-green py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition"
                    >
                      Confirm Booking ✓
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}