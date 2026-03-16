"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-12" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-bold text-gray-900"
        >
          Frequently Asked Questions
        </h2>

        <div className="mt-6 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;

            return (
              <div key={i}>
                <h3>
                  <button
                    id={buttonId}
                    className="w-full px-5 py-4 text-left flex items-center justify-between"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-medium text-gray-900">{item.q}</span>
                    <span className="ml-4 text-gray-500" aria-hidden="true">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  {isOpen && (
                    <div className="px-5 pb-5 text-gray-700">{item.a}</div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
