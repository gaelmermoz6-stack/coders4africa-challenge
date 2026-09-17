"use client";

import { motion } from "framer-motion";

import { timelineItems } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Timeline</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Event timeline</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-400/0 via-cyan-400/30 to-cyan-400/0 lg:block" />

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid items-center gap-4 lg:grid-cols-2"
            >
              <div className={`${index % 2 === 0 ? "lg:pr-10 lg:text-right" : "lg:col-start-2 lg:pl-10"}`}>
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-cyan-200">{item.step}</p>
                  <h3 className="mt-4 font-display text-3xl font-semibold text-white">{item.label}</h3>
                  <p className="mt-2 text-slate-300">{item.date}</p>
                </div>
              </div>

              <div className="hidden items-center justify-center lg:flex">
                <div className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/40 bg-cyan-400/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
