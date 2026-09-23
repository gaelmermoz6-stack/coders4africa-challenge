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

const zeroLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export default function Countdown() {
  // Initialize with zeros on both server and client to avoid hydration mismatch;
  // the real values are set right after mount.
  const [timeLeft, setTimeLeft] = useState(zeroLeft);

  useEffect(() => {
    setTimeLeft(getTimeLeft(challengeMeta.targetDate));

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
          className="rounded-2xl border border-ink-700/10 bg-sand-100 px-2 py-3 text-center"
        >
          <div className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            {String(item.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.26em] text-ink-400">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
