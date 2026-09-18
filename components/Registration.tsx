"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

type ParticipationType = "Individuel" | "Équipe";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentLevel: string;
  motivation: string;
  participationType: ParticipationType;
};

const whatsappGroupUrl = "https://chat.whatsapp.com/EgUpZUyEHviJRShpsMxF5P?s=cl&p=a&mlu=4&ilr=4";

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  currentLevel: "",
  motivation: "",
  participationType: "Individuel",
};

type RegistrationProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Registration({ isOpen, onClose }: RegistrationProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Veuillez renseigner votre nom complet.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Veuillez saisir une adresse e-mail valide.";
    if (form.phone.trim().length < 8) nextErrors.phone = "Veuillez saisir un numéro de téléphone/WhatsApp valide.";
    if (!form.city.trim()) nextErrors.city = "Veuillez renseigner votre ville.";
    if (!form.currentLevel.trim()) nextErrors.currentLevel = "Veuillez sélectionner votre niveau actuel.";
    if (!form.motivation.trim()) nextErrors.motivation = "Veuillez expliquer pourquoi vous souhaitez participer.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitted(true);
    setErrors({});
    setForm(initialForm);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_50%),linear-gradient(135deg,#020817,#0f172a_60%,#111827)] p-6 shadow-[0_30px_90px_rgba(34,211,238,0.1)] sm:p-10 lg:p-12">
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setErrors({});
            setForm(initialForm);
            onClose();
          }}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 transition hover:bg-white/10"
          aria-label="Fermer le formulaire"
        >
          ×
        </button>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Inscription</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Prêt à relever le défi ?</h2>
          <p className="mt-4 text-lg text-slate-300">Rejoignez le défi et commencez votre parcours.</p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-4xl grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-200">Nom complet</label>
              <input
                id="fullName"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Votre nom complet"
              />
              {errors.fullName && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.fullName}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-200">Email</label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="vous@exemple.com"
              />
              {errors.email && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-200">Téléphone / WhatsApp</label>
              <input
                id="phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="+000 000 000"
              />
              {errors.phone && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-slate-200">Ville</label>
              <input
                id="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Votre ville"
              />
              {errors.city && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.city}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="currentLevel" className="text-sm font-medium text-slate-200">Niveau actuel</label>
              <input
                id="currentLevel"
                value={form.currentLevel}
                onChange={(e) => setForm({ ...form, currentLevel: e.target.value })}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Débutant / Intermédiaire / Avancé"
              />
              {errors.currentLevel && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.currentLevel}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="motivation" className="text-sm font-medium text-slate-200">Pourquoi voulez-vous participer ?</label>
              <textarea
                id="motivation"
                value={form.motivation}
                onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                rows={4}
                className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
                placeholder="Parlez-nous de vos objectifs et de votre motivation"
              />
              {errors.motivation && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.motivation}</p>}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-slate-200">Individuel / Équipe</label>
              <div className="flex gap-3">
                {([
                  { label: "Individuel", value: "Individuel" as const },
                  { label: "Équipe", value: "Équipe" as const },
                ]).map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setForm({ ...form, participationType: option.value })}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                      form.participationType === option.value
                        ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-200"
                        : "border-white/10 bg-slate-950/70 text-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                S&apos;inscrire au défi
              </button>
            </div>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] border border-emerald-500/30 bg-emerald-500/10 p-8 text-center shadow-[0_20px_50px_rgba(16,185,129,0.12)]">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="mt-6 font-display text-3xl font-bold text-white">Merci pour votre inscription !</h3>
            <p className="mt-4 text-lg text-slate-200">
              Votre demande a bien été enregistrée. Nous vous recontacterons très prochainement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={whatsappGroupUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Rejoindre le groupe WhatsApp
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
