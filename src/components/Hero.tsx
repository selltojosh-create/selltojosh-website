"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<{
    type: "idle" | "submitting" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus({ type: "submitting", message: "Submitting your information..." });

    let recaptchaToken: string | undefined;
    try {
      const grecaptcha = (window as unknown as { grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> } }).grecaptcha;
      if (grecaptcha) {
        recaptchaToken = await new Promise<string>((resolve) => {
          grecaptcha.ready(() => {
            grecaptcha
              .execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: "submit_lead" })
              .then(resolve);
          });
        });
      }
    } catch {
      // reCAPTCHA not loaded — proceed without it in dev
    }

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, phone, recaptchaToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setStatus({
          type: "error",
          message: data?.errors ? "Please check your entries." : "Something went wrong. Please try again.",
        });
        return;
      }

      setAddress("");
      setPhone("");
      router.push("/thank-you");
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Sell Your Central Texas House for Cash — Fast &amp; Simple
          </h1>
          <p className="mt-4 text-white/90">
            Local buyer serving Killeen, Temple, Belton, and Waco. No repairs,
            no showings, and no commissions.
          </p>
          <ul className="mt-6 space-y-2 text-white/90 list-disc list-inside">
            <li>Fair cash offer</li>
            <li>Close on your timeline</li>
            <li>We handle typical seller closing costs</li>
          </ul>
        </div>

        <form
          id="lead-form"
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 rounded-xl p-6 shadow-lg"
          aria-label="Get my cash offer"
        >
          <h2 className="text-xl font-semibold">Get My Cash Offer</h2>
          <p className="text-sm text-gray-600 mb-4">
            Start with your property address and a good phone number.
          </p>

          <label htmlFor="lead-address" className="block text-sm font-medium">
            Property Address
          </label>
          <input
            id="lead-address"
            type="text"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="123 Main St, Killeen"
            autoComplete="street-address"
          />

          <label htmlFor="lead-phone" className="block text-sm font-medium mt-4">
            Phone
          </label>
          <input
            id="lead-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-lg border border-gray-300 p-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="(555) 123-4567"
            autoComplete="tel"
          />

          <button
            type="submit"
            disabled={status.type === "submitting"}
            className="mt-5 w-full rounded-lg bg-blue-700 py-2.5 font-semibold text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-60"
          >
            {status.type === "submitting" ? "Submitting..." : "Get My Offer"}
          </button>

          <div aria-live="polite" aria-atomic="true" className="mt-2">
            {status.type === "error" && (
              <p className="text-sm text-red-600" role="alert">{status.message}</p>
            )}
            {status.type === "submitting" && (
              <p className="text-sm text-gray-500">{status.message}</p>
            )}
          </div>

          <p className="mt-2 text-xs text-gray-500">Secure &amp; private. No obligation.</p>
        </form>
      </div>
    </section>
  );
}
