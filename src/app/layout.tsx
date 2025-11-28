import { Sulphur_Point, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
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
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
