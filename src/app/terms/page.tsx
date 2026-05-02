import { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for Sell to Josh. Information about our services as a principal cash home buyer in Central Texas.',
  alternates: {
    canonical: `https://${siteConfig.domain}/terms`,
  },
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Terms of Service</h1>

          <p className="text-gray-600 mb-6">
            Last updated: May 2, 2026
          </p>

          {/* Principal-Buyer Disclaimer - Prominently displayed */}
          <div className="bg-navy/5 border-l-4 border-navy p-6 mb-8">
            <h2 className="text-xl font-bold text-navy mb-4">Principal Buyer Disclosure</h2>
            <p className="text-gray-700 font-medium">
              {siteConfig.principalDisclaimer}
            </p>
          </div>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">About Our Business</h2>
          <p className="text-gray-600 mb-6">
            Services on this website are marketed by <strong>{siteConfig.legalEntityMarketing}</strong>.
            Home purchase transactions are conducted by <strong>{siteConfig.legalEntityPurchasing}</strong>.
            Both entities are owned by {siteConfig.ownerName}.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the {siteConfig.name} website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Nature of Services</h2>
          <p className="text-gray-600 mb-6">
            {siteConfig.name} provides information about our cash home buying business and allows property owners to request cash offers for their properties.
            We are real estate investors who purchase properties directly for our own account.
            Submitting a form does not obligate you to sell your property, nor does it obligate us to make an offer.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">No Agency Relationship</h2>
          <p className="text-gray-600 mb-6">
            Sell to Josh is operated by Josh Isbell as a cash home buyer. Josh Isbell holds a Texas real estate broker license (TREC #
            <span className="whitespace-nowrap">597248-B</span>
            ), but in transactions arranged through this website, Josh is acting as a principal buyer through TrippCo Holdings LLC, Red Belly Holdings LLC, or other entities owned by Joshua Isbell, not as a real estate agent representing the seller. No agency relationship is created between visitors to this website and Josh Isbell, the buying entities, or any affiliated entity. For more information, see our{' '}
            <Link href="/buyer-disclosure" className="text-navy underline hover:text-navy-dark">
              Buyer Disclosure
            </Link>{' '}
            page.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">No Guarantees</h2>
          <p className="text-gray-600 mb-6">
            We cannot guarantee any specific offer amount or that we will make an offer on every property submitted. Each property is evaluated individually based on its condition, location, and market factors.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Accuracy of Information</h2>
          <p className="text-gray-600 mb-6">
            You agree to provide accurate and complete information when submitting forms or communicating with us. Providing false or misleading information may result in termination of any pending transaction.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content on this website, including text, graphics, logos, and images, is the property of {siteConfig.legalEntityMarketing} and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            {siteConfig.legalEntityMarketing} and {siteConfig.legalEntityPurchasing} are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or our services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Indemnification</h2>
          <p className="text-gray-600 mb-6">
            You agree to indemnify and hold harmless {siteConfig.legalEntityMarketing}, {siteConfig.legalEntityPurchasing}, and their owners, officers, and employees from any claims, damages, or expenses arising from your use of our website or violation of these terms.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms of Service are governed by the laws of the State of Texas. Any disputes shall be resolved in the courts of Texas.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right to modify these terms at any time. Changes will be posted on this page with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Contact</h2>
          <p className="text-gray-600">
            For questions about these Terms of Service, contact us at:<br />
            {siteConfig.legalEntityMarketing}<br />
            Phone: {siteConfig.phoneFormatted}<br />
            Email: {siteConfig.email}
          </p>
        </div>
      </div>
    </section>
  );
}
