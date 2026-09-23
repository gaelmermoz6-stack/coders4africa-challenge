"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { howItWorks } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="eyebrow">Inclus dans le challenge</p>
        <h2 className="section-title">Tout ce qu&apos;il vous faut pour commencer</h2>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {howItWorks.map((step, index) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="surface-card surface-card-hover flex items-start gap-4"
          >
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-clay-100 font-display text-sm font-bold text-clay-600">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="font-display text-lg font-semibold leading-7 text-ink-900">{step}</p>
            <CheckCircle2 className="ml-auto h-5 w-5 shrink-0 text-moss-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
