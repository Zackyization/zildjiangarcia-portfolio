import type { Metadata } from "next";
import Link from "next/link";
import { WorksGrid } from "@/components/works/WorksGrid/WorksGrid";

export const metadata: Metadata = {
  title: "Zildjian Garcia - Works",
  description:
    "Check out the projects I've built - web development and UI/UX design work.",
};

// TODO: Replace with actual data from CMS or database
const WORKS_DATA = [
  {
    id: "1",
    title: "Hall 3 Website",
    image: "/assets/works/hall3_website_preview.png",
    tags: ["Web Development", "UI/UX"],
    slug: "hall-3-website",
  },
  // Add more projects as needed
];

export default function WorksPage() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
      {/* Back button */}
      {/* TODO: Put the same hover background effect as the home page Resume and Github buttons, you'll know what I'm talking about */}
      <Link
        href="/"
        className="inline-flex items-center rounded-lg gap-2 px-6 py-3 text-tertiary-text font-outfit mb-8 transition-colors hover:bg-white/5"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 12H5M5 12l7 7M5 12l7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        Back to Home Page
      </Link>

      {/* Page title */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-12 text-center">
        Check out what I&apos;ve done
      </h1>

      {/* Works grid with pagination */}
      <WorksGrid works={WORKS_DATA} itemsPerPage={6} />
    </div>
  );
}
