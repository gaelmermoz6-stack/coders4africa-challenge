import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coders4africa.online"),
  title: "Coders 4 Africa Challenge 2026 | 3 jours pour coder",
  description:
    "Participez au challenge de programmation Coders 4 Africa et apprenez à construire, tester et présenter un projet en 3 jours.",
  keywords: [
    "Coders 4 Africa",
    "Challenge 2026",
    "défi de programmation",
    "développement web",
    "codage",
    "mentorat",
  ],
  openGraph: {
    title: "Coders 4 Africa Challenge 2026",
    description:
      "3 jours pour apprendre et construire un projet concret.",
    url: "https://coders4africa.online",
    siteName: "Coders 4 Africa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coders 4 Africa Challenge 2026",
    description:
      "3 jours pour apprendre et construire un projet concret.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-slate-950 text-slate-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
