import Link from "next/link";

import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="section-shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-display text-lg font-bold text-cyan-300">
                C
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-white">Coders 4 Africa</p>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Challenge 2026</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Challenge</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {footerLinks.challenge.map((item) => (
                <li key={item}>
                  <Link href={item === "FAQ" ? "#faq" : item === "Program" ? "#program" : item === "Challenge" ? "#challenge" : "#register"} className="hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Social</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {footerLinks.socials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Legal</p>
            <ul className="mt-5 space-y-3 text-slate-300">
              {footerLinks.legal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          Copyright 2026 Coders 4 Africa
        </div>
      </div>
    </footer>
  );
}
