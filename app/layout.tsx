import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohaib Waseem — Mechanical Engineer & Builder",
  description:
    "Portfolio of Sohaib Waseem — a mechanical engineering graduate who builds in metal, in code, and in the rooms where ideas get organized. CFD, HVAC design, AI-powered systems, and creative leadership.",
  keywords: [
    "Sohaib Waseem",
    "mechanical engineer",
    "CFD",
    "ANSYS Fluent",
    "HVAC design",
    "AI preventive maintenance",
    "portfolio",
    "NED University",
  ],
  authors: [{ name: "Sohaib Waseem" }],
  openGraph: {
    title: "Sohaib Waseem — Mechanical Engineer & Builder",
    description:
      "A mechanical engineer who builds — in metal, in code, and in the rooms where ideas get organized.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohaib Waseem — Mechanical Engineer & Builder",
    description:
      "A mechanical engineer who builds — in metal, in code, and in the rooms where ideas get organized.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      style={{ backgroundColor: "#0B0D0F" }}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
