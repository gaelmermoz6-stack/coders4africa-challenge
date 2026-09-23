"use client";

import { motion } from "framer-motion";

import { journeyMonths } from "@/lib/data";

export default function FourMonthJourney() {
  return (
    <section id="program" className="border-y border-ink-700/10 bg-sand-100/70 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="eyebrow">De l&apos;idée au projet</p>
          <h2 className="section-title">Comment fonctionne le challenge</h2>
          <p className="mt-5 text-lg leading-8 text-ink-500">
            Environ quelques heures par jour pour passer de l&apos;idée à une réalisation
            présentable, avec un objectif clair à chaque étape.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-6">
          {/* Sentier central */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-clay-300/0 via-moss-300/70 to-clay-300/0 lg:block"
            aria-hidden="true"
          />

          {journeyMonths.map((month, index) => {
            const isLeft = index % 2 === 0;
            const dotColor = isLeft ? "bg-clay-500" : "bg-moss-500";

            return (
              <motion.div
                key={month.month}
                initial={{ opacity: 0, x: isLeft ? -36 : 36, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative grid gap-5 lg:grid-cols-2"
              >
                <div className={isLeft ? "lg:pr-10 lg:text-right" : "lg:col-start-2 lg:pl-10"}>
                  <div className="surface-card surface-card-hover">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-clay-500">
                      {month.month}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900">
                      {month.title}
                    </h3>
                    <ul className="mt-5 space-y-2.5 text-ink-700">
                      {month.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-center gap-2.5 ${isLeft ? "lg:justify-end" : ""}`}
                        >
                          <span className={`h-2 w-2 shrink-0 rounded-full ${dotColor}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden items-center justify-center lg:flex">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white font-display text-xs font-bold text-sand-50 shadow-card ${dotColor}`}
                  >
                    {String(index + 1)}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
