import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/data/siteConfig";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export const metadata: Metadata = {
  metadataBase: new URL(`https://${siteConfig.domain}`),
  title: {
    default: `${siteConfig.name} | Sell Your Central Texas Home Fast for Cash`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "sell my house fast",
    "cash home buyers",
    "we buy houses",
    "sell house as-is",
    "Central Texas home buyers",
    "Killeen house buyer",
    "Temple TX cash buyer",
    "sell inherited house",
    "avoid foreclosure Texas",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${siteConfig.domain}`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Cash Home Buyers in Central Texas`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Central Texas Cash Home Buyer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Cash Home Buyers in Central Texas`,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />
        {recaptchaSiteKey && (
          <>
            <Script
              src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
              strategy="lazyOnload"
            />
            <Script id="recaptcha-a11y" strategy="lazyOnload">
              {`(function(){var o=new MutationObserver(function(){var t=document.querySelector('.g-recaptcha-response');if(t){t.setAttribute('aria-label','reCAPTCHA verification');t.setAttribute('aria-hidden','true');t.setAttribute('tabindex','-1');o.disconnect()}});o.observe(document.body,{childList:true,subtree:true})})();`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
