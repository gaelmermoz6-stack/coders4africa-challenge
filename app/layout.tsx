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
    "Participez au défi de programmation Coders 4 Africa et découvrez un parcours de 4 mois en développement web et programmation.",
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
      "3 jours pour coder. 4 mois pour bâtir votre avenir.",
    url: "https://coders4africa.online",
    siteName: "Coders 4 Africa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coders 4 Africa Challenge 2026",
    description:
      "3 jours pour coder. 4 mois pour bâtir votre avenir.",
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
