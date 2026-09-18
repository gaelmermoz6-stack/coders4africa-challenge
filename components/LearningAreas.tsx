"use client";

import { motion } from "framer-motion";
import { Braces, Code2, GitBranch, LayoutTemplate, Presentation, Users } from "lucide-react";

import { learningAreas } from "@/lib/data";

const iconMap = {
  Code2,
  LayoutTemplate,
  Braces,
  GitBranch,
  Users,
  Presentation,
};

export default function LearningAreas() {
  return (
    <section className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Compétences</p>
        <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">
          Ce que vous allez apprendre
        </h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {learningAreas.map((area, index) => {
          const Icon = iconMap[area.icon as keyof typeof iconMap] ?? Code2;

          return (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className="group rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-5"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="text-2xl font-bold text-cyan-300/80">{area.number}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 transition-colors group-hover:border-cyan-300/40">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-display text-2xl font-semibold text-white">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{area.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
