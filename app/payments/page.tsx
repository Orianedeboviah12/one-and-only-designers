"use client";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type Method = "mtn" | "airtel" | "card" | "cash" | "";

export default function PaymentsPage() {
  const [method, setMethod] = useState<Method>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ phone: "", cardNumber: "", expiry: "", cvv: "", name: "" });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const methods = [
    {
      id: "mtn" as Method,
      name: "MTN Mobile Money",
      desc: "Pay via MTN MoMo — fast and secure.",
      color: "bg-yellow-400",
      icon: (
        <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
          <circle cx="20" cy="20" r="20" fill="#FFCC00"/>
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#000">MTN</text>
        </svg>
      ),
    },
    {
      id: "airtel" as Method,
      name: "Airtel Money",
      desc: "Pay via Airtel Money instantly.",
      color: "bg-red-500",
      icon: (
        <svg viewBox="0 0 40 40" className="h-8 w-8" fill="none">
          <circle cx="20" cy="20" r="20" fill="#EF1C24"/>
          <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">AIRTEL</text>
        </svg>
      ),
    },
    {
      id: "card" as Method,
      name: "Card Payment",
      desc: "Visa or Mastercard accepted.",
      color: "bg-blue-600",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#1d4ed8" strokeWidth={1.5}>
          <rect x="2" y="5" width="20" height="14" rx="2" fill="#dbeafe" stroke="#1d4ed8"/>
          <path d="M2 10h20" stroke="#1d4ed8" strokeWidth="1.5"/>
          <rect x="5" y="14" width="4" height="2" rx="0.5" fill="#1d4ed8"/>
        </svg>
      ),
    },
    {
      id: "cash" as Method,
      name: "Cash on Delivery",
      desc: "Pay in person when we meet.",
      color: "bg-brand-green",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="#166534" strokeWidth={1.5}>
          <rect x="2" y="7" width="20" height="14" rx="2" fill="#dcfce7" stroke="#166534"/>
          <circle cx="12" cy="14" r="3" stroke="#166534" strokeWidth="1.5"/>
          <path d="M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2" stroke="#166534" strokeWidth="1.5"/>
        </svg>
      ),
    },
  ];

  if (submitted) {
    return (
      <>
        <SiteHeader />
        <main className="flex min-h-screen items-center justify-center bg-white pt-16">
          <div className="mx-auto max-w-md px-4 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green/10">
              <span className="text-4xl text-brand-green">✓</span>
            </div>
            <h1 className="mt-6 font-display text-3xl font-bold text-brand-black">Payment Submitted!</h1>
            <p className="mt-4 text-brand-black/60">
              Your payment via <strong>{methods.find(m => m.id === method)?.name}</strong> has been received. We'll confirm your booking shortly.
            </p>
            <a href="/" className="mt-8 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition">
              Back to Home
            </a>
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
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-green">Payment</p>
            <h1 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
              Choose how to pay.
            </h1>
            <p className="mt-4 text-white/60">Secure, flexible payment options for your convenience.</p>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-xl px-4 sm:px-6">
            {/* Payment method selection */}
            <h2 className="font-display text-2xl font-bold text-brand-black">Select Payment Method</h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {methods.map((m) => (
                <button
                  type="button"
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  className={`rounded-2xl border-2 p-4 text-left transition ${
                    method === m.id
                      ? "border-brand-green bg-brand-green/5"
                      : "border-brand-black/8 hover:border-brand-green/30"
                  }`}
                >
                  {m.icon}
                  <p className="mt-3 font-semibold text-brand-black text-sm">{m.name}</p>
                  <p className="mt-0.5 text-xs text-brand-black/50">{m.desc}</p>
                </button>
              ))}
            </div>

            {/* Payment form based on method */}
            {method && (
              <div className="mt-10 space-y-5">
                <h2 className="font-display text-xl font-bold text-brand-black">
                  {method === "mtn" && "Enter MTN MoMo Number"}
                  {method === "airtel" && "Enter Airtel Money Number"}
                  {method === "card" && "Enter Card Details"}
                  {method === "cash" && "Cash on Delivery"}
                </h2>

                {(method === "mtn" || method === "airtel") && (
                  <div>
                    <label className="block text-sm font-medium text-brand-black">Phone Number</label>
                    <input
                      type="tel"
                      placeholder={method === "mtn" ? "078X XXX XXX" : "073X XXX XXX"}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                    />
                    <p className="mt-2 text-xs text-brand-black/40">You will receive a prompt on your phone to confirm payment.</p>
                  </div>
                )}

                {method === "card" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-black">Cardholder Name</label>
                      <input type="text" placeholder="John Doe" value={form.name} onChange={(e) => update("name", e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-black">Card Number</label>
                      <input type="text" placeholder="1234 5678 9012 3456" maxLength={19} value={form.cardNumber} onChange={(e) => update("cardNumber", e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-black">Expiry Date</label>
                        <input type="text" placeholder="MM/YY" maxLength={5} value={form.expiry} onChange={(e) => update("expiry", e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-black">CVV</label>
                        <input type="text" placeholder="123" maxLength={3} value={form.cvv} onChange={(e) => update("cvv", e.target.value)}
                          className="mt-1.5 w-full rounded-xl border border-brand-black/10 px-4 py-3 text-sm focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green" />
                      </div>
                    </div>
                  </div>
                )}

                {method === "cash" && (
                  <div className="rounded-2xl bg-brand-green/5 border border-brand-green/20 p-5">
                    <p className="text-sm text-brand-black/70 leading-relaxed">
                      You've selected <strong>Cash on Delivery</strong>. Our team will contact you to arrange payment at the time of service delivery. No advance payment is needed.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setSubmitted(true)}
                  className="w-full rounded-full bg-brand-green py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition"
                >
                  {method === "cash" ? "Confirm Booking" : "Submit Payment"}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}