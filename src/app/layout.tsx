import type { Metadata } from "next";
import { Sulphur_Point, Outfit } from "next/font/google";
import "./globals.css";

const sulphurPoint = Sulphur_Point({
  variable: "--font-sulphur-point",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Sulphur Point available weights
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  // Outfit supports weights 100-900, defaults to all
});

export const metadata: Metadata = {
  title: "Zildjian Garcia - Budding Frontend Developer",
  description: "Portfolio website of Zildjian Garcia, a budding frontend developer showcasing projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sulphurPoint.variable} ${outfit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
