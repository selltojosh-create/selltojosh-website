import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { siteConfig } from "@/data/siteConfig";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Cash Home Buyers in Central Texas`,
    description: siteConfig.description,
  },
  verification: {
    google: "UIBIiwWtg0mhB7mk5TY85XI9EMR5ky8yNG4d3BxAr_Q",
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
        {gtmId && (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        )}
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              title="Google Tag Manager"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
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
