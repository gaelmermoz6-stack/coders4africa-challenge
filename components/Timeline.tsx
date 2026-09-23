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
        <p className="eyebrow">Calendrier</p>
        <h2 className="section-title">Timeline de l&apos;événement</h2>
      </motion.div>

      <div className="relative">
        <div
          className="absolute left-1/2 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-clay-300/0 via-clay-300/80 to-clay-300/0 lg:block"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {timelineItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            const dotColor = isLeft ? "bg-clay-500" : "bg-moss-500";

            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="grid items-center gap-4 lg:grid-cols-2"
              >
                <div className={isLeft ? "lg:pr-10 lg:text-right" : "lg:col-start-2 lg:pl-10"}>
                  <div className="surface-card surface-card-hover">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-clay-500">
                      {item.label}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
                      {item.label.replace(/:.*/, "")}
                    </h3>
                  </div>
                </div>

                <div className="hidden items-center justify-center lg:flex">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white font-display text-xs font-bold text-sand-50 shadow-card ${dotColor}`}
                  >
                    {item.step}
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
