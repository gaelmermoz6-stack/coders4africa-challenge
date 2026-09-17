"use client";

import { motion } from "framer-motion";

import { conceptCards } from "@/lib/data";

export default function Concept() {
  return (
    <section id="challenge" className="section-shell py-24 sm:py-30">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Challenge</p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">
          One challenge.
          <span className="block text-slate-300">One experience.</span>
          <span className="block">One journey.</span>
        </h2>
        <p className="mt-5 text-lg text-slate-300">
          A focused competition opens the door to deeper learning, continued guidance and work you can show.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {conceptCards.map((card, index) => (
          <motion.article
            key={card.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover={{ y: -8 }}
            className="group rounded-[1.75rem] border border-white/10 bg-slate-900/70 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-4xl font-bold text-cyan-300/80">{card.number}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/30 to-transparent ml-4" />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{card.title}</p>
              <h3 className="font-display text-2xl font-semibold text-white">{card.subtitle}</h3>
              <p className="text-base leading-7 text-slate-300">{card.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
