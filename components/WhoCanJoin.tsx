"use client";

import { motion } from "framer-motion";

import { whoCanJoin } from "@/lib/data";

export default function WhoCanJoin() {
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
          <p className="eyebrow">Pour qui ?</p>
          <h2 className="section-title">Ce challenge est pour vous si...</h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {whoCanJoin.map((item, index) => {
            const isMoss = index % 2 === 1;

            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="surface-card surface-card-hover flex items-center gap-4 !p-5"
              >
                <span
                  className={`font-display text-sm font-bold ${
                    isMoss ? "text-moss-500" : "text-clay-500"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-base font-medium leading-6 text-ink-900">{item}</p>
                <span className="ml-auto h-2.5 w-2.5 shrink-0 animate-pulse-soft rounded-full bg-moss-400" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
