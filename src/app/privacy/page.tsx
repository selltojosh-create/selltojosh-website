import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${siteConfig.name}. Learn how we collect, use, and protect your personal information.`,
};

export default function PrivacyPage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Privacy Policy</h1>

          <p className="text-gray-600 mb-6">
            Last updated: January 2025
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            This website ({siteConfig.domain}) is operated by <strong>{siteConfig.legalEntityMarketing}</strong> for marketing purposes.
            Home purchases are conducted by <strong>{siteConfig.legalEntityPurchasing}</strong>.
            Both entities are owned by {siteConfig.ownerName}.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            When you submit a form on our website or contact us, we collect:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Your name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Property address</li>
            <li>Any additional information you choose to provide</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information you provide to:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6">
            <li>Respond to your inquiry about selling your property</li>
            <li>Evaluate your property and prepare a cash offer</li>
            <li>Contact you regarding your submission</li>
            <li>Complete real estate transactions</li>
            <li>Improve our services</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Information Sharing</h2>
          <p className="text-gray-600 mb-6">
            We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our business (such as title companies during closing), but only as necessary to complete the transaction you have requested.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Cookies</h2>
          <p className="text-gray-600 mb-6">
            Our website may use cookies to improve your experience and analyze site traffic. You can disable cookies in your browser settings.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Your Rights</h2>
          <p className="text-gray-600 mb-6">
            You may request access to, correction of, or deletion of your personal information by contacting us at {siteConfig.email} or {siteConfig.phoneFormatted}.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600">
            {siteConfig.legalEntityMarketing}<br />
            Phone: {siteConfig.phoneFormatted}<br />
            Email: {siteConfig.email}
          </p>
        </div>
      </div>
    </section>
  );
}
