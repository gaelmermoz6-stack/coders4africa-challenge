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
    <section id="skills" className="section-shell py-24 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <p className="eyebrow">Ce que vous allez construire</p>
        <h2 className="section-title">Des résultats, pas seulement des notes</h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {learningAreas.map((area, index) => {
          const Icon = iconMap[area.icon as keyof typeof iconMap] ?? Code2;
          const isMoss = index % 2 === 1;

          return (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -8 }}
              className="surface-card surface-card-hover group"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-2xl font-bold text-clay-300">{area.number}</span>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${
                    isMoss ? "bg-moss-100 text-moss-600" : "bg-clay-100 text-clay-500"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="font-display text-xl font-semibold text-ink-900">{area.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-500">{area.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
