"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

import { additionalOpportunities, prizes } from "@/lib/data";

export default function Prizes() {
  return (
    <section className="terrain relative border-y border-ink-700/10 bg-sand-100/60 py-24 sm:py-28">
      <div className="section-shell relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="eyebrow">À la fin du challenge</p>
          <h2 className="section-title">Valorisez votre réalisation</h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-3">
          {prizes.map((prize, index) => (
            <motion.article
              key={prize.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className={`surface-card surface-card-hover relative overflow-hidden text-center ${
                index === 0
                  ? "!border-clay-300 bg-gradient-to-b from-clay-50 to-white"
                  : ""
              }`}
            >
              {index === 0 && (
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-clay-500 text-sand-50 shadow-glow">
                  <Award className="h-5 w-5" />
                </div>
              )}
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-clay-500">
                {prize.title}
              </p>
              <div className="mt-8 font-display text-3xl font-bold text-ink-900">{prize.reward}</div>
              <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-clay-400/70 to-transparent" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mt-8 rounded-3xl border border-dashed border-moss-300 bg-moss-50 p-7 text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-moss-600">
            Autres opportunités
          </p>
          <p className="mt-4 font-display text-xl font-semibold text-ink-900 sm:text-2xl">
            {additionalOpportunities}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
