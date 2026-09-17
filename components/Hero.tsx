"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Sparkles } from "lucide-react";

import Countdown from "@/components/Countdown";
import { challengeMeta, eventHighlights } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-8 sm:pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-14 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-12 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <div className="section-shell relative grid items-center gap-14 pb-16 pt-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20 lg:pt-12">
        <div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            {challengeMeta.kicker}
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="max-w-xl font-display text-4xl font-bold leading-[0.96] tracking-tight text-white sm:text-5xl lg:text-7xl">
            3 days to code.
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">4 months to build your future.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }} className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Take part in a programming challenge, test your skills, collaborate, build and discover a 4-month learning and mentorship journey designed to help you grow in programming and web development.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#register" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300">
              Participate in the challenge <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#program" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/5">Discover the program</a>
          </motion.div>

          <div className="mt-10 grid max-w-md grid-cols-2 gap-6">
            {eventHighlights.map((item) => (
              <div key={item.label} className="border-l border-cyan-400/25 pl-4">
                <p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.12 }} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-[0_25px_80px_rgba(14,116,144,0.32)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3">
              <div className="flex gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400">challenge / 2026</span>
            </div>

            <div className="rounded-2xl border border-cyan-400/25 bg-[linear-gradient(135deg,rgba(15,23,42,0.95),rgba(8,47,73,0.82))] p-5">
              <div className="mb-5 flex items-center justify-between"><div><p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/80">Launch Day</p><p className="mt-2 text-xl font-semibold text-white">Build. Test. Ship.</p></div><div className="rounded-full border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-200"><Cpu className="h-5 w-5" /></div></div>
              <div className="space-y-3 rounded-xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                <div className="flex items-center gap-2 text-cyan-300"><Code2 className="h-4 w-4" /><span>challenge.ts</span></div>
                <div className="space-y-2 font-mono text-[11px] leading-6 text-slate-300">
                  <p><span className="text-violet-300">const</span> <span className="text-cyan-300">goal</span> = <span className="text-emerald-300">"Build the future"</span>;</p>
                  <p><span className="text-violet-300">let</span> <span className="text-cyan-300">team</span> = [<span className="text-amber-300">"Design"</span>, <span className="text-amber-300">"Code"</span>, <span className="text-amber-300">"Launch"</span>];</p>
                  <p><span className="text-violet-300">for</span> (<span className="text-cyan-300">const day</span> of team) &#123;</p>
                  <p className="ml-5 text-slate-400">learn(); ship(); iterate();</p>
                  <p>&#125;</p>
                </div>
              </div>
              <div className="mt-5"><Countdown /></div>
            </div>
          </div>

          <div className="absolute -left-7 bottom-16 hidden rounded-2xl border border-white/10 bg-slate-900/80 p-3 shadow-xl backdrop-blur md:block"><div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-200"><Code2 className="h-4 w-4" /></div><div><p className="text-[10px] uppercase tracking-[0.28em] text-slate-400">Roadmap</p><p className="font-semibold text-white">3 days / 4 months</p></div></div></div>
        </motion.div>
      </div>
    </section>
  );
}
