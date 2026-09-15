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
  metadataBase: new URL("https://sohaibwaseemportfolio.vercel.app"),
  title: "Sohaib Waseem — Mechanical Engineer & AI Software Builder",
  description:
    "Portfolio of Sohaib Waseem — Mechanical Engineering graduate from NED University. Precision CAD kinematics, CFD aerodynamic & thermal simulation, AI predictive maintenance telemetry, and creative leadership.",
  keywords: [
    "Sohaib Waseem",
    "Mechanical Engineer",
    "CFD Simulation",
    "ANSYS Fluent",
    "AI Preventive Maintenance",
    "PyTorch",
    "Vibration FFT",
    "SolidWorks CAD",
    "Azaad Khayal",
    "NED University",
  ],
  authors: [{ name: "Sohaib Waseem" }],
  openGraph: {
    title: "Sohaib Waseem — Mechanical Engineer & AI Software Builder",
    description:
      "A mechanical engineer who builds — in metal, in code, and in the rooms where ideas get organized.",
    type: "website",
    locale: "en_US",
    images: ["/assets/hero-actuator.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohaib Waseem — Mechanical Engineer & AI Software Builder",
    description:
      "A mechanical engineer who builds — in metal, in code, and in the rooms where ideas get organized.",
    images: ["/assets/hero-actuator.jpg"],
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
      style={{ backgroundColor: "#07090D" }}
    >
      <body className="antialiased bg-[#07090D] text-[#F8FAFC] selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
