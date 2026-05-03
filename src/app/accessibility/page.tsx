import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Sell to Josh is committed to making selltojosh.com accessible to all users. We aim to meet WCAG 2.1 Level AA. Read our accessibility statement and how to contact us with feedback.',
  alternates: {
    canonical: `https://${siteConfig.domain}/accessibility`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccessibilityPage() {
  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Accessibility Statement</h1>

          <p className="text-gray-600 mb-6">
            Sell to Josh is committed to making selltojosh.com accessible to all users, including people with disabilities. We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">What We&apos;ve Done</h2>
          <p className="text-gray-600 mb-4">
            We have audited and updated this website to address common accessibility barriers, including:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Adding descriptive text alternatives to images</li>
            <li>Ensuring sufficient color contrast for text and interactive elements</li>
            <li>Making forms usable with assistive technology, including screen readers</li>
            <li>Supporting full keyboard navigation</li>
            <li>Using semantic HTML structure that screen readers can parse correctly</li>
            <li>Sizing touch targets appropriately for mobile users</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Ongoing Work</h2>
          <p className="text-gray-600 mb-6">
            Accessibility is not a one-time fix. We test the site regularly and update it as we add new content. If you encounter a barrier or have suggestions for how we can improve, we want to hear from you.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Contact Us About Accessibility</h2>
          <p className="text-gray-600 mb-6">
            If you have difficulty using this website, please reach out:
          </p>
          <p className="text-gray-600 mb-6">
            Phone:{' '}
            <a
              href={siteConfig.phoneTel}
              className="text-navy font-semibold underline hover:text-navy-dark"
            >
              {siteConfig.phoneFormatted}
            </a>
          </p>
          <p className="text-gray-600 mb-6">
            We will respond to accessibility-related questions within two business days. If a feature on this site is not working for you, we will help you complete your request another way — including by phone — and work to fix the underlying issue.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Standards Reference</h2>
          <p className="text-gray-600 mb-6">
            This site targets WCAG 2.1 Level AA. We use automated and manual testing to identify and address issues. The site is built with Next.js, and accessibility considerations are part of every new feature we add.
          </p>

          <hr className="border-gray-300 my-8" />

          <p className="text-sm text-gray-500 italic">Last updated: May 3, 2026</p>
        </div>
      </div>
    </section>
  );
}
