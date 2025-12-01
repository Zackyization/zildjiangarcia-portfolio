import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Zildjian Garcia - Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">
      <div className="mb-8 h-64 w-full max-w-xl relative">
        <Image
          src="/assets/error_hippo_dogs.svg"
          alt="Multiver and his fellow hippodogs"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-5xl font-extrabold text-tertiary-text">404</h1>
      <p className="mt-2 text-xl font-outfit font-bold text-tertiary-text">
        Page not found
      </p>

      <Link
        href="/"
        className="mt-6 rounded-lg bg-black px-6 py-3 text-sm font-semibold hover:bg-black/40 transition-colors"
        title="Home Page"
      >
        Go to the Home Page
      </Link>
    </div>
  );
}
