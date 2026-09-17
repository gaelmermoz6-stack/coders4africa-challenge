"use client";

import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/lib/data";

export default function Navbar() {
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
      className={`sticky top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-slate-950/70 backdrop-blur-xl" : "bg-slate-950/40"
      }`}
    >
      <div className="section-shell flex h-20 items-center justify-between">
        <Link href="#top" className="flex items-center gap-3 text-sm font-medium text-slate-100">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/10 font-display text-base font-bold text-cyan-300">
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-semibold tracking-wide text-white">
              Coders 4 Africa
            </span>
            <span className="text-[10px] uppercase tracking-[0.24em] text-slate-400">
              Challenge 2026
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#register"
            className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition-all hover:-translate-y-0.5 hover:bg-cyan-400 hover:text-slate-950"
          >
            Participer
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
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
          className="border-t border-white/10 bg-slate-950/95 md:hidden"
        >
          <div className="section-shell flex flex-col gap-4 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-slate-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-950"
            >
              Participer
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
