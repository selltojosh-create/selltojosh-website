import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 mb-4">
              Central Texas&apos;s trusted cash home buyer. We buy houses in any condition
              with no fees, no repairs, and no hassle.
            </p>
            <a
              href={siteConfig.phoneTel}
              className="text-xl font-bold text-orange hover:text-orange-hover transition-colors"
            >
              {siteConfig.phoneFormatted}
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Josh
                </Link>
              </li>
              <li>
                <Link href="/areas" className="text-gray-300 hover:text-white transition-colors">
                  Areas We Serve
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Get Your Offer
                </Link>
              </li>
              <li>
                <Link href="/how-our-offer-works" className="text-gray-300 hover:text-white transition-colors">
                  How Our Process Works
                </Link>
              </li>
              <li>
                <Link href="/sell-as-is" className="text-gray-300 hover:text-white transition-colors">
                  Sell As-Is
                </Link>
              </li>
              <li>
                <Link href="/cash-offer" className="text-gray-300 hover:text-white transition-colors">
                  Get a Cash Offer
                </Link>
              </li>
              <li>
                <Link href="/situations/foreclosure" className="text-gray-300 hover:text-white transition-colors">
                  Facing Foreclosure
                </Link>
              </li>
              <li>
                <Link href="/situations/inherited-property" className="text-gray-300 hover:text-white transition-colors">
                  Inherited Property
                </Link>
              </li>
              <li>
                <Link href="/situations/military-pcs" className="text-gray-300 hover:text-white transition-colors">
                  Military PCS
                </Link>
              </li>
              <li>
                <Link href="/situations/divorce" className="text-gray-300 hover:text-white transition-colors">
                  Divorce
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {area}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* TREC Compliance Disclosure */}
        <hr role="separator" className="border-t border-gray-600 mt-8" />
        <div className="mt-8 text-[13px] md:text-sm text-gray-300 space-y-2 leading-relaxed">
          <p>
            Josh Isbell <span aria-hidden="true">•</span> Texas Licensed Real Estate Broker{' '}
            <span aria-hidden="true">•</span> TREC #
            <span className="whitespace-nowrap">597248-B</span>
          </p>
          <p>
            Properties purchased by TrippCo Holdings LLC, Red Belly Holdings LLC, or other entities owned by Joshua Isbell
          </p>
          <p>Buying directly as principal — no agency relationship is created with sellers</p>
        </div>
        <nav
          aria-label="Legal disclosures"
          className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] md:text-sm"
        >
          <Link href="/buyer-disclosure" className="text-gray-300 hover:text-white underline">
            Buyer Disclosure
          </Link>
          <Link href="/privacy" className="text-gray-300 hover:text-white underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-300 hover:text-white underline">
            Terms of Service
          </Link>
        </nav>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-gray-300 text-xs text-center mt-4">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and{' '}
            <a href="https://policies.google.com/terms" className="underline hover:text-white" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.
          </p>
        </div>
      </div>
    </footer>
  );
}
