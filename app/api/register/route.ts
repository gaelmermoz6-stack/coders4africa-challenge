import { NextResponse } from "next/server";

type Registration = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  currentLevel: string;
  motivation: string;
  participationType: "Individuel" | "Équipe";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[
        character
      ] ?? character,
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail = process.env.ADMIN_EMAIL;
  const fromEmail = process.env.EMAIL_FROM;

  if (!apiKey || !adminEmail || !fromEmail) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  let registration: Registration;
  try {
    registration = (await request.json()) as Registration;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const requiredFields = [
    registration.fullName,
    registration.email,
    registration.phone,
    registration.city,
    registration.currentLevel,
    registration.motivation,
  ];

  if (
    requiredFields.some((field) => typeof field !== "string" || !field.trim()) ||
    !emailPattern.test(registration.email) ||
    !["Individuel", "Équipe"].includes(registration.participationType)
  ) {
    return NextResponse.json({ error: "Incomplete registration" }, { status: 400 });
  }

  const details = [
    ["Nom complet", registration.fullName],
    ["Email", registration.email],
    ["Téléphone / WhatsApp", registration.phone],
    ["Ville", registration.city],
    ["Niveau actuel", registration.currentLevel],
    ["Participation", registration.participationType],
    ["Motivation", registration.motivation],
  ]
    .map(([label, value]) => `<p><strong>${label}</strong><br />${escapeHtml(value)}</p>`)
    .join("");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [adminEmail],
      reply_to: registration.email,
      subject: `Nouvelle inscription : ${registration.fullName}`,
      html: `<h2>Nouvelle inscription au challenge</h2>${details}`,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}