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
import ThankYou from "@/components/ThankYou";

export default function HomePage() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  const openRegister = () => setIsRegisterOpen(true);

  if (isRegistrationComplete) {
    return <ThankYou onBack={() => setIsRegistrationComplete(false)} />;
  }

  return (
    <>
      <Navbar onOpenRegister={openRegister} />
      <main className="overflow-x-hidden">
        <Hero onOpenRegister={openRegister} />
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

        <section className="section-shell pb-24 pt-4 sm:pb-28">
          <div className="grain relative overflow-hidden rounded-[2rem] bg-ink-900 p-8 shadow-card sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-clay-500/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-moss-500/20 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-clay-300">
                  Commencez maintenant
                </p>
                <h2 className="section-title !text-sand-50">
                  Votre challenge{" "}
                  <span className="font-display italic text-clay-300">commence ici.</span>
                </h2>
              </div>
              <div className="max-w-xl">
                <p className="text-lg leading-8 text-sand-300/90 sm:text-xl">
                  3 jours pour apprendre, construire et présenter une solution concrète.
                </p>
              </div>
            </div>

            <div className="relative mt-10 flex flex-col gap-4 sm:flex-row">
              <button type="button" onClick={openRegister} className="btn-primary">
                Rejoindre le défi
              </button>
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sand-300/25 bg-sand-50/5 px-6 py-3 text-sm font-semibold text-sand-50 transition-all duration-300 hover:-translate-y-0.5 hover:border-clay-300/60 hover:bg-clay-500/10 active:translate-y-0"
              >
                Découvrir le programme
              </a>
            </div>
          </div>
        </section>

        <Registration
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          onSuccess={() => {
            setIsRegisterOpen(false);
            setIsRegistrationComplete(true);
          }}
        />
      </main>
    </>
  );
}
