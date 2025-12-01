import type { Metadata } from "next";
import Link from "next/link";

// TODO: The hall 3 website project page where you talk about the works, what went into it, etc.
export const metadata: Metadata = {
    title: "Zildjian Garcia - Hall 3 Website Project",
    description: "Details and write-up about the Hall 3 Website.",
};

export default function Hall3WebsitePage() {
    return (
        <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit text-white mb-12 text-center">
                Hall 3 Website Project
            </h1>

            {/* Project details and write-up go here */}
            <div>
                {/* TODO: Add project description, images, tags, and write-up */}
            </div>
        </div>
    );
}