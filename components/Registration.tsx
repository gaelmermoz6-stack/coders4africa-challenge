"use client";

import { AlertCircle } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";

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
  onSuccess: () => void;
};

const inputClass =
  "w-full rounded-xl border border-ink-700/15 bg-sand-100/60 px-4 py-3 text-ink-900 outline-none transition-colors placeholder:text-ink-400 focus:border-clay-400 focus:bg-white";

export default function Registration({ isOpen, onClose, onSuccess }: RegistrationProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Veuillez renseigner votre nom complet.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      nextErrors.email = "Veuillez saisir une adresse e-mail valide.";
    if (form.phone.trim().length < 8)
      nextErrors.phone = "Veuillez saisir un numéro de téléphone/WhatsApp valide.";
    if (!form.city.trim()) nextErrors.city = "Veuillez renseigner votre ville.";
    if (!form.currentLevel.trim())
      nextErrors.currentLevel = "Veuillez sélectionner votre niveau actuel.";
    if (!form.motivation.trim())
      nextErrors.motivation = "Veuillez expliquer pourquoi vous souhaitez participer.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Registration request failed");
      }

      setIsSubmitted(true);
      setErrors({});
      setForm(initialForm);
      onSuccess();
    } catch {
      setSubmitError("L'inscription n'a pas pu être envoyée. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  const errorIcon = (message?: string) =>
    message ? (
      <p className="flex items-center gap-2 text-sm text-clay-600">
        <AlertCircle className="h-4 w-4 shrink-0" /> {message}
      </p>
    ) : null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-clay-200 bg-sand-50 p-6 shadow-card-hover sm:p-10">
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setErrors({});
            setForm(initialForm);
            onClose();
          }}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-700/10 bg-white text-lg text-ink-700 transition hover:border-clay-300 hover:bg-clay-50 hover:text-clay-600"
          aria-label="Fermer le formulaire"
        >
          ×
        </button>

        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Inscription</p>
          <h2 id="registration-title" className="section-title">
            Prêt à relever le défi ?
          </h2>
          <p className="mt-4 text-lg text-ink-500">Rejoignez le défi et commencez votre parcours.</p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium text-ink-700">
                Nom complet
              </label>
              <input
                id="fullName"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className={inputClass}
                placeholder="Votre nom complet"
                aria-invalid={Boolean(errors.fullName)}
              />
              {errorIcon(errors.fullName)}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-ink-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
                placeholder="vous@exemple.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errorIcon(errors.email)}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-ink-700">
                Téléphone / WhatsApp
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
                placeholder="+225 00 00 00 00"
                aria-invalid={Boolean(errors.phone)}
              />
              {errorIcon(errors.phone)}
            </div>

            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium text-ink-700">
                Ville
              </label>
              <input
                id="city"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className={inputClass}
                placeholder="Votre ville"
                aria-invalid={Boolean(errors.city)}
              />
              {errorIcon(errors.city)}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="currentLevel" className="text-sm font-medium text-ink-700">
                Niveau actuel
              </label>
              <select
                id="currentLevel"
                value={form.currentLevel}
                onChange={(e) => setForm({ ...form, currentLevel: e.target.value })}
                className={`${inputClass} appearance-none ${
                  form.currentLevel ? "text-ink-900" : "text-ink-400"
                }`}
                aria-invalid={Boolean(errors.currentLevel)}
              >
                <option value="" disabled>
                  Sélectionnez votre niveau
                </option>
                <option value="Débutant">Débutant</option>
                <option value="Intermédiaire">Intermédiaire</option>
                <option value="Avancé">Avancé</option>
              </select>
              {errorIcon(errors.currentLevel)}
            </div>

            <div className="space-y-2 md:col-span-2">
              <label htmlFor="motivation" className="text-sm font-medium text-ink-700">
                Pourquoi voulez-vous participer ?
              </label>
              <textarea
                id="motivation"
                value={form.motivation}
                onChange={(e) => setForm({ ...form, motivation: e.target.value })}
                rows={4}
                className={`${inputClass} resize-none`}
                placeholder="Parlez-nous de vos objectifs et de votre motivation"
                aria-invalid={Boolean(errors.motivation)}
              />
              {errorIcon(errors.motivation)}
            </div>

            <div className="space-y-2 md:col-span-2">
              <span className="text-sm font-medium text-ink-700">Individuel / Équipe</span>
              <div className="flex gap-3">
                {(["Individuel", "Équipe"] as const).map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setForm({ ...form, participationType: option })}
                    aria-pressed={form.participationType === option}
                    className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                      form.participationType === option
                        ? "border-clay-400 bg-clay-100 text-clay-700"
                        : "border-ink-700/15 bg-white text-ink-700 hover:border-clay-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3 md:col-span-2">
              {submitError ? <p className="mb-3 text-sm text-clay-600">{submitError}</p> : null}
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full sm:w-auto disabled:cursor-wait disabled:opacity-60">
                {isSubmitting ? "Envoi en cours..." : "S'inscrire au défi"}
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
}
