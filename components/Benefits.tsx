"use client";

import { motion } from "framer-motion";

import { benefits } from "@/lib/data";

export default function Benefits() {
  return (
    <section className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="eyebrow">Votre engagement</p>
        <h2 className="section-title">Ce que nous vous demandons</h2>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.article
            key={benefit.category}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.14 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -8 }}
            className="surface-card surface-card-hover group relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-clay-400 to-moss-400 transition-transform duration-300 group-hover:scale-x-100" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-clay-500">
              {benefit.category}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink-900">{benefit.title}</h3>
            <p className="mt-3 text-base leading-7 text-ink-500">{benefit.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
