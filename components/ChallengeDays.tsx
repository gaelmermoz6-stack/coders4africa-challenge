"use client";

import { motion } from "framer-motion";

import { challengeDays } from "@/lib/data";

const dayStyles = [
  { badge: "bg-clay-500 text-sand-50", tape: "bg-clay-200/90", hover: "hover:shadow-card-hover" },
  { badge: "bg-moss-500 text-sand-50", tape: "bg-moss-200/90", hover: "hover:shadow-card-hover" },
  { badge: "bg-ink-700 text-sand-50", tape: "bg-sand-300/90", hover: "hover:shadow-card-hover" },
];

export default function ChallengeDays() {
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
          <p className="eyebrow">Le challenge</p>
          <h2 className="section-title">Trois jours. Trois livrables. Un projet concret.</h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {challengeDays.map((day, index) => {
            const styles = dayStyles[index % dayStyles.length];

            return (
              <motion.article
                key={day.day}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, rotate: index === 1 ? 0 : index === 0 ? 0.75 : -0.75 }}
                className={`group relative overflow-hidden rounded-3xl border border-ink-700/10 bg-white p-6 shadow-card transition-shadow duration-300 ${styles.hover}`}
              >
                {/* Ruban adhésif décoratif */}
                <div
                  className={`absolute -top-2 left-1/2 h-5 w-24 -translate-x-1/2 rotate-[-2deg] rounded-sm ${styles.tape}`}
                  aria-hidden="true"
                />

                <div className="mb-6 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ink-400">
                    {day.day}
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] ${styles.badge}`}
                  >
                    {day.title}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold text-ink-900">{day.title}</h3>

                <ul className="mt-6 space-y-3.5">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-ink-700">
                      <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${styles.badge}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
