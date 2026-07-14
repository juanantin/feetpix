"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/config/site";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b-2 border-feet-navy bg-feet-offwhite">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <p className="text-center font-pixel text-[10px] uppercase tracking-widest text-feet-blue">FAQ</p>
        <h2 className="pixel-heading mt-4 text-center text-xl text-feet-navy sm:text-2xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.question} className="border-2 border-feet-navy bg-feet-skylight">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="focus-pixel flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-pixel text-[11px] uppercase text-feet-navy"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {item.question}
                    <ChevronDown
                      size={18}
                      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div id={panelId} role="region" aria-labelledby={buttonId} className="border-t-2 border-feet-navy bg-feet-offwhite px-5 py-4">
                    <p className="text-sm leading-relaxed text-feet-navyblue">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
