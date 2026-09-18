"use client";

import { useEffect, useState } from "react";

import { challengeMeta } from "@/lib/data";

const getTimeLeft = (targetDate: string) => {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(challengeMeta.targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(challengeMeta.targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Secondes", value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-white/10 bg-slate-950/80 px-2 py-3 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          <div className="font-display text-2xl font-bold text-white sm:text-3xl">{String(item.value).padStart(2, "0")}</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-slate-400">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
