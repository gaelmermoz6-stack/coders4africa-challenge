"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqItems } from "@/lib/data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-y border-ink-700/10 bg-sand-100/70 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Questions fréquentes</h2>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`surface-card overflow-hidden !p-0 transition-colors ${
                  isOpen ? "border-clay-300" : "hover:border-ink-700/25"
                }`}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-ink-900 sm:text-lg">{item.question}</span>
                  <span
                    className={`shrink-0 rounded-full border p-1.5 transition-all duration-200 ${
                      isOpen
                        ? "rotate-180 border-clay-300 bg-clay-100"
                        : "border-ink-700/15 bg-sand-100"
                    }`}
                  >
                    <ChevronDown className={`h-4 w-4 ${isOpen ? "text-clay-600" : "text-ink-500"}`} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="border-t border-ink-700/10 px-5 py-4 text-sm leading-7 text-ink-500 sm:px-6">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
