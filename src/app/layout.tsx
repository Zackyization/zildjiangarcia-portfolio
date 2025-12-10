import type { Metadata } from "next";
import { Sulphur_Point, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { PersonStructuredData } from "@/components/StructuredData/StructuredData";
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

// Default metadata for all pages (can be overridden)
export const metadata: Metadata = {
  metadataBase: new URL("https://zildjiangarcia.dev"),
  title: {
    default: "Zildjian Garcia - Frontend Developer",
    template: "Zildjian Garcia - %s",
  },
  description:
    "Hey there, I'm Zildjian but you can call me Zee Jay, check out my portfolio website!",
  keywords: [
    "Frontend Developer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Web Development",
    "Singapore",
    "Portfolio",
    "UI/UX"
  ],
  authors: [{ name: "Zildjian Garcia", url: "https://zildjiangarcia.dev" }],
  creator: "Zildjian Garcia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zildjiangarcia.dev",
    siteName: "Zildjian Garcia's Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Zildjian Garcia - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PersonStructuredData />
      </head>
      <body
        className={`${sulphurPoint.variable} ${outfit.variable} antialiased`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
