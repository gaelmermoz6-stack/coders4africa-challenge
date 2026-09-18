"use client";

import { motion } from "framer-motion";

import { journeyMonths } from "@/lib/data";

export default function FourMonthJourney() {
  return (
    <section id="program" className="bg-slate-900/50 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">De l&apos;idée au projet</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Comment fonctionne le challenge
          </h2>
          <p className="mt-5 text-lg text-slate-300">
            Environ quelques heures par jour pour passer de l&apos;idée à une réalisation présentable, avec un objectif clair à chaque étape.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-6">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/40 to-cyan-400/0 lg:block" />

          {journeyMonths.map((month, index) => (
            <motion.div
              key={month.month}
              initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative grid gap-5 lg:grid-cols-2"
            >
              <div className={index % 2 === 0 ? "lg:pr-10 lg:text-right" : "lg:col-start-2 lg:pl-10"}>
                <div className="rounded-[1.6rem] border border-white/10 bg-slate-900/80 p-6 shadow-[0_20px_50px_rgba(14,116,144,0.12)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/80">{month.month}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-white">{month.title}</h3>
                  <ul className="mt-5 space-y-2 text-slate-200">
                    {month.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 lg:justify-start">
                        <span className="h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
