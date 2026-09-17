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
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Progress</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Make progress you can see</h2>
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
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200">{benefit.category}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-300">{benefit.description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
