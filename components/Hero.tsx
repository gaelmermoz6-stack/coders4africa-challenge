"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Sparkles } from "lucide-react";

import { challengeMeta, eventHighlights } from "@/lib/data";
import Countdown from "@/components/Countdown";

type HeroProps = {
  onOpenRegister: () => void;
};

export default function Hero({ onOpenRegister }: HeroProps) {
  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-14 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-12 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="section-shell relative grid items-center gap-14 pb-16 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20 lg:pt-12">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {challengeMeta.kicker}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-xl font-display text-4xl font-bold leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            3 jours pour apprendre.
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              1 projet pour le prouver.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-300"
          >
            Pendant trois jours, apprenez les bases utiles, travaillez sur un problème concret avec d&apos;autres participants et repartez avec une solution à présenter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={onOpenRegister}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Participer au défi
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/5"
            >
              Découvrir le programme
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-10 grid max-w-md grid-cols-2 gap-6"
          >
            {eventHighlights.map((item) => (
              <div key={item.label} className="border-l border-cyan-400/25 pl-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
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
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_25px_80px_rgba(14,116,144,0.32)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">défi / 2026</span>
            </div>

            <div className="rounded-2xl border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(8,47,73,0.82))] p-5">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/80">Jour de lancement</p>
                  <p className="mt-2 text-xl font-semibold text-white">Crée. Teste. Publie.</p>
                </div>
                <div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-200">
                  <Cpu className="h-5 w-5" />
                </div>
              </div>

              <div className="space-y-3 rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                <div className="flex items-center gap-2 text-cyan-300">
                  <Code2 className="h-4 w-4" />
                  <span>challenge.ts</span>
                </div>
                <div className="space-y-2 font-mono text-[11px] leading-6 text-slate-300">
                  <p>
                    <span className="text-violet-300">const</span> <span className="text-cyan-300">goal</span> =
                    <span className="text-emerald-300"> &quot;Build the future&quot;</span>;
                  </p>
                  <p>
                    <span className="text-violet-300">let</span> <span className="text-cyan-300">team</span> = [
                    <span className="text-amber-300">&quot;Design&quot;</span>, <span className="text-amber-300">&quot;Code&quot;</span>, <span className="text-amber-300">&quot;Launch&quot;</span>];
                  </p>
                  <p>
                    <span className="text-violet-300">for</span> ( <span className="text-cyan-300">day</span> of <span className="text-cyan-300">team</span> ) {"{"}
                  </p>
                  <p className="ml-5 text-slate-400">learn(); ship(); iterate();</p>
                  <p>{"}"}</p>
                </div>
              </div>

              <div className="mt-5">
                <Countdown />
              </div>
            </div>
          </div>

          <div className="absolute -left-7 bottom-16 hidden rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-xl backdrop-blur md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200">
                <Code2 className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Feuille de route</p>
                <p className="font-semibold text-white">3 jours / 1 projet</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
