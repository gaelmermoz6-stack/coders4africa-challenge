"use client";

import { motion } from "framer-motion";

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
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Process</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">How it works</h2>
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
            className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5"
          >
            <div className="mb-5 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">0{index + 1}</span>
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
            </div>
            <p className="font-display text-xl font-semibold text-white">{step}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
