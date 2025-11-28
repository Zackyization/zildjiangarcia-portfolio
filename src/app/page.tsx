import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zildjian Garcia - Budding Frontend Developer",
  description:
    "Portfolio of Zildjian Garcia, a budding frontend developer based in Singapore.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black">
          Budding Frontend Developer
        </h1>
      </div>
    </div>
  );
}
