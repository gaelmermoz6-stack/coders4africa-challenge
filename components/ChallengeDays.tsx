"use client";

import { motion } from "framer-motion";

import { challengeDays } from "@/lib/data";

export default function ChallengeDays() {
  return (
    <section className="bg-slate-950/60 py-24 sm:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Le challenge</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
            Trois jours. Trois livrables. Un projet concret.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {challengeDays.map((day, index) => (
            <motion.article
              key={day.day}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${day.accent} p-[1px]`}
            >
              <div className="h-full rounded-[1.7rem] bg-slate-950/90 p-6">
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{day.day}</span>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-200">
                    {day.title}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-bold text-white">{day.title}</h3>

                <ul className="mt-6 space-y-3">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
