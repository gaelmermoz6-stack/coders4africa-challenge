"use client";

import { CheckCircle2, ArrowLeft, MessageCircle } from "lucide-react";

const whatsappGroupUrl = "https://chat.whatsapp.com/EgUpZUyEHviJRShpsMxF5P?s=cl&p=a&mlu=4&ilr=4";

type ThankYouProps = {
  onBack: () => void;
};

export default function ThankYou({ onBack }: ThankYouProps) {
  return (
    <main className="grain flex min-h-screen items-center justify-center bg-sand-50 px-6 py-16">
      <section className="w-full max-w-2xl rounded-[2rem] border border-moss-200 bg-white p-8 text-center shadow-card sm:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-moss-100 text-moss-600">
          <CheckCircle2 className="h-10 w-10" aria-hidden="true" />
        </div>
        <p className="eyebrow mt-8">Inscription confirmée</p>
        <h1 className="section-title">Merci pour votre inscription !</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink-700">
          Votre demande a bien été enregistrée. Nous vous recontacterons très prochainement avec les prochaines étapes.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={whatsappGroupUrl} target="_blank" rel="noreferrer" className="btn-primary">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Rejoindre le groupe WhatsApp
          </a>
          <button type="button" onClick={onBack} className="btn-ghost">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            Retour à l&apos;accueil
          </button>
        </div>
      </section>
    </main>
  );
}
