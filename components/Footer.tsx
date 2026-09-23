"use client";

import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

import { footerLinks } from "@/lib/data";

type FooterProps = {
  onOpenRegister?: () => void;
};

export default function Footer({ onOpenRegister }: FooterProps) {
  const challengeLinks = footerLinks.challenge.map((item) => {
    const href =
      item === "FAQ"
        ? "#faq"
        : item === "Programme"
          ? "#program"
          : item === "Défi"
            ? "#challenge"
            : "contact";

    return { label: item, href };
  });

  const socialIcons: Record<string, typeof Linkedin> = {
    LinkedIn: Linkedin,
    Instagram: Instagram,
  };

  return (
    <footer className="border-t border-ink-900 bg-ink-900 text-sand-100">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-clay-500 font-display text-lg font-bold text-sand-50 shadow-glow">
                C
              </span>
              <div>
                <p className="font-display text-xl font-semibold text-sand-50">Coders 4 Africa</p>
                <p className="text-xs uppercase tracking-[0.24em] text-clay-300">Challenge 2026</p>
              </div>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-sand-300/80">
              3 jours pour apprendre, construire et présenter une solution concrète.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-300/70">Défi</p>
            <ul className="mt-5 space-y-3 text-sand-100">
              {challengeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      if (link.href === "contact") onOpenRegister?.();
                    }}
                    className="transition hover:text-clay-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-300/70">Réseaux</p>
            <ul className="mt-5 space-y-3 text-sand-100">
              {footerLinks.socials.map((item) => {
                const Icon = socialIcons[item];

                return (
                  <li key={item}>
                    <a
                      href={item === "LinkedIn" ? "https://www.linkedin.com/" : "https://www.instagram.com/"}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition hover:text-clay-300"
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand-300/70">Légal</p>
            <ul className="mt-5 space-y-3 text-sand-100">
              {footerLinks.legal.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-sand-300/15 pt-6 text-sm text-sand-300/80">
          © 2026 Coders 4 Africa — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
