'use client';

import { siteConfig } from '@/data/siteConfig';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-navy p-3 md:hidden z-50 shadow-lg">
      <a
        href={siteConfig.phoneTel}
        className="flex items-center justify-center gap-2 bg-orange hover:bg-orange-hover text-navy font-bold py-3 px-4 rounded-lg transition-colors w-full"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call/Text {siteConfig.phone}
      </a>
    </div>
  );
}
