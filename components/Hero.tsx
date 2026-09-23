"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sprout } from "lucide-react";

import { challengeMeta, eventHighlights } from "@/lib/data";
import Countdown from "@/components/Countdown";

type HeroProps = {
  onOpenRegister: () => void;
};

export default function Hero({ onOpenRegister }: HeroProps) {
  return (
    <section id="top" className="grain terrain relative overflow-hidden pt-10 sm:pt-14">
      <div className="section-shell relative grid items-center gap-14 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-clay-300/70 bg-white/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-clay-600"
          >
            <Sprout className="h-3.5 w-3.5" />
            {challengeMeta.kicker}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl"
          >
            3 jours pour apprendre.
            <span className="relative mt-2 block text-clay-600">
              1 projet pour le prouver.
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-clay-300"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C60 3 150 2 298 6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-7 max-w-xl text-lg leading-8 text-ink-500"
          >
            Pendant trois jours, apprenez les bases utiles, travaillez sur un problème concret
            avec d&apos;autres participants et repartez avec une solution à présenter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <button type="button" onClick={onOpenRegister} className="btn-primary">
              Participer au défi
              <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#program" className="btn-ghost">
              Découvrir le programme
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-12 grid max-w-md grid-cols-2 gap-6"
          >
            {eventHighlights.map((item) => (
              <div key={item.label} className="border-l-2 border-clay-300 pl-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-ink-400">{item.label}</p>
                <p className="mt-2 font-display text-2xl font-semibold text-ink-900">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative"
        >
          {/* Carte « carnet de route » en papier */}
          <div className="relative rotate-1 rounded-[2rem] border border-ink-700/10 bg-white p-6 shadow-card transition-transform duration-500 hover:rotate-0 sm:p-8">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-400">
                Carnet de route
              </p>
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-clay-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-moss-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-sand-300" />
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-sand-100 p-6">
              <p className="font-display text-2xl font-semibold italic leading-snug text-ink-900 sm:text-3xl">
                « Crée. Teste. Publie. »
              </p>
              <p className="mt-3 text-sm text-ink-500">
                Chaque jour compte : comprendre, construire, présenter.
              </p>
            </div>

            {/* Post-it organique */}
            <div className="relative mx-auto mt-6 w-fit -rotate-2 rounded-lg bg-clay-100 px-5 py-3 shadow-sm">
              <p className="font-display text-lg italic text-clay-700">Commencez petit, finissez fort.</p>
            </div>

            <div className="mt-6">
              <Countdown />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rotate-[-3deg] rounded-2xl border border-ink-700/10 bg-white p-3 shadow-card md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-moss-100 text-moss-600">
                <Sprout className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-ink-400">Feuille de route</p>
                <p className="font-display font-semibold text-ink-900">3 jours / 1 projet</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
