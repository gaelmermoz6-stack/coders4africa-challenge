"use client";

import { motion } from "framer-motion";

import { whoCanJoin } from "@/lib/data";

export default function WhoCanJoin() {
  return (
    <section className="bg-slate-900/50 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Pour qui ?</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Ce challenge est pour vous si...</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {whoCanJoin.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-[1.35rem] border border-white/10 bg-slate-950/70 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">{String(index + 1).padStart(2, "0")}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
              </div>
              <p className="text-lg font-medium text-slate-100">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
