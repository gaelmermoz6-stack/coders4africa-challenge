"use client";

import { AlertCircle, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentLevel: string;
  motivation: string;
  participationType: "Individual" | "Team";
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  currentLevel: "",
  motivation: "",
  participationType: "Individual",
};

export default function Registration() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.fullName.trim()) nextErrors.fullName = "Please provide your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (form.phone.trim().length < 8) nextErrors.phone = "Please enter a valid phone/WhatsApp number.";
    if (!form.city.trim()) nextErrors.city = "Please provide your city.";
    if (!form.currentLevel.trim()) nextErrors.currentLevel = "Please select your current level.";
    if (!form.motivation.trim()) nextErrors.motivation = "Please explain why you want to participate.";

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

  return (
    <section id="register" className="section-shell py-24 sm:py-28">
      <div className="rounded-[2rem] border border-cyan-400/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_50%),linear-gradient(135deg,#020817,#0f172a_60%,#111827)] p-6 shadow-[0_30px_90px_rgba(34,211,238,0.1)] sm:p-10 lg:p-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/80">Registration</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-5xl">Ready to take the challenge?</h2>
          <p className="mt-4 text-lg text-slate-300">Join the challenge and start your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-4xl grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-sm font-medium text-slate-200">Full name</label>
            <input
              id="fullName"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-cyan-400/60"
              placeholder="Your full name"
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
              placeholder="you@example.com"
            />
            {errors.email && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-200">Phone / WhatsApp</label>
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
            <label htmlFor="city" className="text-sm font-medium text-slate-200">City</label>
            <input
              id="city"
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
              placeholder="Your city"
            />
            {errors.city && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.city}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="currentLevel" className="text-sm font-medium text-slate-200">Current level</label>
            <input
              id="currentLevel"
              value={form.currentLevel}
              onChange={(e) => setForm({ ...form, currentLevel: e.target.value })}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
              placeholder="Beginner / Intermediate / Advanced"
            />
            {errors.currentLevel && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.currentLevel}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label htmlFor="motivation" className="text-sm font-medium text-slate-200">Why do you want to participate?</label>
            <textarea
              id="motivation"
              value={form.motivation}
              onChange={(e) => setForm({ ...form, motivation: e.target.value })}
              rows={4}
              className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none placeholder:text-slate-500 focus:border-cyan-400/60"
              placeholder="Tell us about your goals and motivation"
            />
            {errors.motivation && <p className="flex items-center gap-2 text-sm text-rose-300"><AlertCircle className="h-4 w-4" /> {errors.motivation}</p>}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-slate-200">Individual / Team</label>
            <div className="flex gap-3">
              {(["Individual", "Team"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setForm({ ...form, participationType: option })}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    form.participationType === option
                      ? "border-cyan-400/60 bg-cyan-400/10 text-cyan-200"
                      : "border-white/10 bg-slate-950/70 text-slate-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Register for the challenge
            </button>

            {isSubmitted && (
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                Registration received successfully.
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
