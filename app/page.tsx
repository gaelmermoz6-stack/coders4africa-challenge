"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import ChallengeDays from "@/components/ChallengeDays";
import LearningAreas from "@/components/LearningAreas";
import FourMonthJourney from "@/components/FourMonthJourney";
import HowItWorks from "@/components/HowItWorks";
import WhoCanJoin from "@/components/WhoCanJoin";
import Benefits from "@/components/Benefits";
import Prizes from "@/components/Prizes";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <Navbar onOpenRegister={() => setIsRegisterOpen(true)} />
      <main className="overflow-x-hidden">
        <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
        <Concept />
        <ChallengeDays />
        <LearningAreas />
        <FourMonthJourney />
        <HowItWorks />
        <WhoCanJoin />
        <Benefits />
        <Prizes />
        <Timeline />
        <FAQ />
        <Registration isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
        <section className="border-t border-white/10 bg-slate-950">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:px-12">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_40%),linear-gradient(135deg,#020817,#0f172a_40%,#020617)] p-8 shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:p-12 lg:p-16">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
                    Commencez maintenant
                  </p>
                  <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Votre challenge commence ici.
                  </h2>
                </div>
                <div className="max-w-xl">
                  <p className="text-lg text-slate-300 sm:text-xl">
                    3 jours pour apprendre, construire et présenter une solution concrète.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setIsRegisterOpen(true)}
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Rejoindre le défi
                </button>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/5"
                >
                  Découvrir le programme
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
