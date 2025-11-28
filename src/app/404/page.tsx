// TODO: The error 404 page for when a user navigates to a non-existent route
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
      <div className="relative mb-8 h-64 w-full max-w-xl">
        <Image
          src="/assets/404/salamander.png"
          alt="404 illustration"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-5xl font-extrabold">404</h1>
      <p className="mt-2 text-lg text-secondary-text">Page not found</p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-semibold hover:brightness-110"
      >
        Go to the Home Page
      </Link>
    </div>
  );
}