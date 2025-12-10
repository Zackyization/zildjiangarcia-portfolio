import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { WorkStructuredData } from "@/components/StructuredData/StructuredData";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { FaCalendar } from "react-icons/fa";

export const metadata = generatePageMetadata({
  title: "Hall 3 Website",
  description:
    "A comprehensive website redesign for Hall 3 with modern UI/UX principles and responsive design.",
  path: "/works/hall-3-website",
  keywords: [
    "Hall 3",
    "Web Development",
    "UI/UX",
    "React",
    "Project",
    "Side Project",
  ],
});

export default function Hall3WebsitePage() {
  return (
    <>
      <WorkStructuredData
        name="Hall 3 Website"
        description="A comprehensive website redesign for Hall 3 with modern UI/UX principles."
        url="https://zildjiangarcia.dev/works/hall-3-website"
        keywords={["Web Development", "UI/UX", "React", "Next.js"]}
        datePublished="2025-12-02"
      />

      <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
        {/* Breadcrumb navigation */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Works", href: "/works" },
            { label: "Hall 3 Website", href: "/works/hall-3-website" },
          ]}
        />

        {/* Back button */}
        <Link
          href="/works"
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
          Back to Works
        </Link>

        {/* Page title */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white text-left">
            Hall 3 Website
          </h1>
          {/* CURRENT: TODO: Insert the chips from the works page */}
          {/* LEFT OFF HERE: Work on implementing the content, look at Github copilot */}
          <p className="mt-4 text-tertiary-text">Published December 3, 2025</p>
        </div>

        {/* Project details and write-up go here */}
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
          {/* TODO: Add project description, images, tags, and write-up */}
          {/* Write-Up Content */}
          <div className="col-span-4 md:col-span-12 lg:col-span-6">
            {/* TODO: Insert the links to the Website, the github repo and the Figma mockup */}

          </div>
        </div>
      </div>
    </>
  );
}
