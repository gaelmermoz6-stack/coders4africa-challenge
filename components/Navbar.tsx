"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

type NavbarProps = {
  onOpenRegister: () => void;
};

export default function Navbar({ onOpenRegister }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-700/10 bg-sand-50/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#top" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-clay-500 font-display text-lg font-bold text-sand-50 shadow-glow transition-transform duration-300 group-hover:rotate-3">
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-wide text-ink-900">
              Coders 4 Africa
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.26em] text-clay-500">
              Challenge 2026
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm text-ink-700 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-clay-500 after:transition-all after:duration-300 hover:text-clay-600 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <button type="button" onClick={onOpenRegister} className="btn-primary !px-5 !py-2.5">
            Participer
          </button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fermer la navigation" : "Ouvrir la navigation"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700/15 bg-white/70 text-ink-900 transition hover:border-clay-400/60 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-ink-700/10 bg-sand-50/95 backdrop-blur-xl md:hidden"
        >
          <div className="section-shell flex flex-col gap-1 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm text-ink-700 transition hover:bg-clay-50 hover:text-clay-600"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenRegister();
              }}
              className="btn-primary mt-3"
            >
              Participer
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
