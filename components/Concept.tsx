"use client";

import { motion } from "framer-motion";

import { conceptCards } from "@/lib/data";

export default function Concept() {
  return (
    <section id="challenge" className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="eyebrow">Le vrai problème</p>
        <h2 className="section-title">
          Vous n&apos;avez pas besoin de plus de théorie.
          <span className="block font-display italic text-clay-600">Vous avez besoin de construire.</span>
        </h2>
        <p className="mt-5 text-lg leading-8 text-ink-500">
          Beaucoup de personnes veulent apprendre à coder, mais restent bloquées entre les
          tutoriels, les idées et la peur de commencer. Ce challenge vous donne un cadre concret
          pour passer à l&apos;action.
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
            className="surface-card surface-card-hover group relative overflow-hidden"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-clay-100/80 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="mb-8 flex items-center justify-between">
              <span className="font-display text-4xl font-bold text-clay-400">{card.number}</span>
              <span className="ml-4 h-px flex-1 bg-gradient-to-r from-clay-300/70 to-transparent" />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-400">{card.title}</p>
              <h3 className="font-display text-2xl font-semibold text-ink-900">{card.subtitle}</h3>
              <p className="text-base leading-7 text-ink-500">{card.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
