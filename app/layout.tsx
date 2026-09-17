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
  title: "Coders 4 Africa Challenge 2026 | 3 Days to Code",
  description:
    "Take part in the Coders 4 Africa programming challenge and discover a 4-month journey in programming and web development.",
  keywords: [
    "Coders 4 Africa",
    "Challenge 2026",
    "programming challenge",
    "web development",
    "coding",
    "mentorship",
  ],
  openGraph: {
    title: "Coders 4 Africa Challenge 2026",
    description:
      "3 days to code. 4 months to build your future.",
    url: "https://coders4africa.online",
    siteName: "Coders 4 Africa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coders 4 Africa Challenge 2026",
    description:
      "3 days to code. 4 months to build your future.",
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
