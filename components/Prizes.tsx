"use client";

import { motion } from "framer-motion";

import { additionalOpportunities, prizes } from "@/lib/data";

export default function Prizes() {
  return (
    <section className="bg-slate-950/70 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Opportunités</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Prix et opportunités</h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {prizes.map((prize, index) => (
            <motion.article
              key={prize.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_35%),rgba(15,23,42,0.85)] p-7"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-cyan-200">{prize.title}</p>
              <div className="mt-8 font-display text-4xl font-bold text-white">{prize.reward}</div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-8 rounded-[1.75rem] border border-dashed border-cyan-400/30 bg-cyan-400/5 p-7 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-200">Autres opportunités</p>
          <p className="mt-4 text-2xl font-semibold text-white">{additionalOpportunities}</p>
        </motion.div>
      </div>
    </section>
  );
}
