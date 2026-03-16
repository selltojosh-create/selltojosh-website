import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const metadata: Metadata = {
  title: {
    default: "Sell to Josh | Cash Home Buyers in Central Texas",
    template: "%s | Sell to Josh",
  },
  description:
    "We buy houses in Central Texas (Killeen, Copperas Cove, Temple, Belton, Waco). Get a fast, fair cash offer today.",
  metadataBase: new URL("https://www.selltojosh.com"),
  openGraph: {
    title: "Sell to Josh",
    description:
      "Trusted local cash home buyer in Central Texas. Sell your house as-is, fast and hassle-free.",
    url: "https://www.selltojosh.com",
    siteName: "Sell to Josh",
    images: ["/og-default.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        {recaptchaSiteKey && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
