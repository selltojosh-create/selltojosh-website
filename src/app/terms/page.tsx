import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${siteConfig.name}. Please read these terms carefully before using our website.`,
};

export default function TermsPage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Terms of Service</h1>

          <p className="text-gray-600 mb-6">
            Last updated: January 2025
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Agreement to Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the {siteConfig.name} website, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Services</h2>
          <p className="text-gray-600 mb-6">
            {siteConfig.name} provides information about our cash home buying services and allows users to request cash offers for their properties. Submitting a form does not obligate you to sell your property, nor does it obligate us to make an offer.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">No Guarantees</h2>
          <p className="text-gray-600 mb-6">
            While we strive to make fair offers on properties, we cannot guarantee any specific offer amount or that we will make an offer on every property submitted. Each property is evaluated individually based on its condition, location, and market factors.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Accuracy of Information</h2>
          <p className="text-gray-600 mb-6">
            You agree to provide accurate and complete information when submitting forms or communicating with us. Providing false or misleading information may result in termination of any pending transaction.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            All content on this website, including text, graphics, logos, and images, is the property of {siteConfig.name} and is protected by copyright laws. You may not reproduce, distribute, or create derivative works without our written permission.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            {siteConfig.name} is not liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or our services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Indemnification</h2>
          <p className="text-gray-600 mb-6">
            You agree to indemnify and hold harmless {siteConfig.name} from any claims, damages, or expenses arising from your use of our website or violation of these terms.
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
            {siteConfig.name}<br />
            Phone: {siteConfig.phoneFormatted}<br />
            Email: {siteConfig.email}
          </p>
        </div>
      </div>
    </section>
  );
}
