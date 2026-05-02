import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';

export const metadata: Metadata = {
  title: 'Buyer Disclosure',
  description:
    "Required disclosure regarding Josh Isbell's Texas real estate broker license and his role as a principal buyer through TrippCo Holdings LLC and Red Belly Holdings LLC.",
  alternates: {
    canonical: `https://${siteConfig.domain}/buyer-disclosure`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BuyerDisclosurePage() {
  const linkClass = 'text-navy underline hover:text-navy-dark';
  const externalLinkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  } as const;

  return (
    <section className="section-padding">
      <div className="container-custom mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-8">Buyer Disclosure</h1>

          <p className="text-gray-600 mb-6">
            <strong>Last updated: May 2, 2026</strong>
          </p>

          <p className="text-gray-600 mb-6">
            This page provides important information about Josh Isbell&apos;s Texas real estate broker license and his role when buying houses through SellToJosh.com.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">
            Josh Isbell is a Licensed Texas Real Estate Broker
          </h2>
          <p className="text-gray-600 mb-6">
            Josh Isbell holds an active Texas real estate broker license issued by the Texas Real Estate Commission (TREC).
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>License Holder Name: Josh Isbell</li>
            <li>License Type: Real Estate Broker</li>
            <li>
              License Number: <span className="whitespace-nowrap">597248-B</span>
            </li>
            <li>
              License Verification: Anyone can verify this license at the Texas Real Estate Commission&apos;s License Holder Search at{' '}
              <a href="https://www.trec.texas.gov/" className={linkClass} {...externalLinkProps}>
                https://www.trec.texas.gov/
              </a>
              .
            </li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">
            Josh Buys as a Principal — Not as Your Agent
          </h2>
          <p className="text-gray-600 mb-6">
            When you sell your house through SellToJosh.com, you are selling directly to TrippCo Holdings LLC, Red Belly Holdings LLC, or another entity owned by Joshua Isbell. Josh holds an ownership interest in each of these entities. Josh is purchasing your property as a principal buyer for his own account.
          </p>
          <p className="text-gray-600 mb-4">
            Josh is not acting as your real estate agent in this transaction. No agency relationship is created between Josh, the buying entity, and the seller. This means:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Josh does not represent your interests in negotiating the sale price or terms</li>
            <li>Josh does not owe you the fiduciary duties that a real estate agent owes a client</li>
            <li>Josh&apos;s interests as the buyer may be different from your interests as the seller</li>
            <li>Any offer Josh makes is from his perspective as the buyer, not from your perspective as the seller</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">
            You Are Encouraged to Seek Independent Advice
          </h2>
          <p className="text-gray-600 mb-4">
            Before signing any agreement to sell your home, you are strongly encouraged to consult with:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
            <li>Your own licensed Texas real estate agent, who can represent your interests and advise you on the property&apos;s market value</li>
            <li>A licensed Texas attorney, particularly if your situation involves probate, divorce, foreclosure, multiple heirs, liens, or other legal complexities</li>
            <li>A tax professional, if you have questions about the tax consequences of selling your property</li>
          </ul>
          <p className="text-gray-600 mb-6">
            Selling for cash to an investor is one option among many. It is not always the best option for every seller. You have the right — and we encourage you to exercise it — to take the time you need to evaluate whether this is the right path for your situation.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">
            Required Disclosure Under TREC Rule 535.144
          </h2>
          <p className="text-gray-600 mb-6">
            Josh Isbell is providing this disclosure in compliance with Texas Administrative Code Title 22, Part 23, Rule 535.144, which requires a Texas real estate license holder to provide written notice that the license holder is licensed before entering into a contract to buy or sell real property as a principal.
          </p>
          <p className="text-gray-600 mb-6">
            This disclosure is provided publicly on this page and is also provided directly to every seller, in writing, before any purchase contract is signed.
          </p>
          <p className="text-gray-600 mb-6">
            Rule 535.144 also provides that the license holder may not use the license holder&apos;s expertise to the disadvantage of the other party. Josh&apos;s offers are based on standard real estate investor analysis. Josh is happy to walk through the offer with any seller who wants to understand it.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">
            Filing a Complaint with TREC
          </h2>
          <p className="text-gray-600 mb-6">
            If you believe a Texas real estate license holder has violated TREC rules, you have the right to file a complaint with the Texas Real Estate Commission.
          </p>
          <p className="text-gray-600 mb-6">
            You can find information about filing a complaint, including the Consumer Protection Notice, at the TREC website:{' '}
            <a href="https://www.trec.texas.gov/" className={linkClass} {...externalLinkProps}>
              https://www.trec.texas.gov/
            </a>
            .
          </p>
          <p className="text-gray-600 mb-4">
            The Texas Real Estate Commission can be contacted at:
          </p>
          <blockquote className="border-l-4 border-navy pl-4 my-6 text-gray-600">
            <span className="block">Texas Real Estate Commission</span>
            <span className="block">P.O. Box 12188</span>
            <span className="block">Austin, Texas 78711-2188</span>
            <span className="block">(512) 936-3000</span>
          </blockquote>

          <h2 className="text-xl font-bold text-navy mt-8 mb-4">Questions</h2>
          <p className="text-gray-600 mb-6">
            If you have questions about this disclosure, Josh&apos;s license, or how a sale works, you can reach Josh directly at:
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
            You can also ask any of these questions on the phone before agreeing to anything. There is no obligation, no pressure, and no commitment until you sign a written contract — and you should not sign anything until you fully understand it.
          </p>

          <hr className="border-gray-300 my-8" />

          <p className="text-sm text-gray-500 italic">
            This disclosure is for informational purposes regarding Josh Isbell&apos;s real estate license and his role as a principal buyer. It does not constitute legal, tax, or financial advice. For advice specific to your situation, please consult a licensed Texas attorney, real estate agent, or tax professional.
          </p>
        </div>
      </div>
    </section>
  );
}
