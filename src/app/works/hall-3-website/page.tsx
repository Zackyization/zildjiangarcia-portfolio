import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { WorkStructuredData } from "@/components/StructuredData/StructuredData";
import { Breadcrumb } from "@/components/Breadcrumb/Breadcrumb";
import { ImageGallery } from "@/components/ImageGallery/ImageGallery";
import { getWorkBySlug } from "@/lib/works-data";
import { notFound } from "next/navigation";
import { CgFigma } from "react-icons/cg";
import { IoLogoGithub } from "react-icons/io";
import { FaGlobe } from "react-icons/fa";

const projectData = getWorkBySlug("hall-3-website");

if (!projectData) {
  notFound(); // Navigate to 404 page if project not found
}

export const metadata = generatePageMetadata({
  title: projectData.title,
  description: projectData.description || "",
  path: "/works/hall-3-website",
  ogImage: "/assets/works/hall-3-website/og-hall3.jpg",
  keywords: projectData.tags,
});

export default function Hall3WebsitePage() {
  // Add early return if projectData is undefined
  if (!projectData) {
    return <div>Project not found.</div>;
  }

  return (
    <>
      <WorkStructuredData
        name={projectData.title}
        description={projectData.description || ""}
        url="https://zildjiangarcia.dev/works/hall-3-website"
        image="https://zildjiangarcia.dev/assets/works/hall-3-website/hero.png"
        keywords={projectData.tags}
        datePublished={projectData.datePublished}
      />

      <div className="min-h-screen px-6 py-12 max-w-7xl mx-auto">
        {/* Breadcrumb navigation */}
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Works", href: "/works" },
            { label: projectData.title, href: "/works/hall-3-website" },
          ]}
        />
        {/* Back button */}
        <Link
          href="/works"
          className="inline-flex items-center rounded-lg gap-2 text-tertiary-text font-outfit mb-8 transition-colors hover:bg-white/5"
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
        {/* Title */}
        <h1 className="text-4xl text-center md:text-start md:text-5xl font-bold font-outfit text-white">
          {projectData.title}
        </h1>
        {/* Tags */}
        <div className="mt-4 flex gap-2 justify-center md:justify-start flex-wrap">
          {projectData.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 px-3 py-1 text-sm font-outfit text-tertiary-text"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Date published */}
        <p className="font-sulphur-point mt-4 text-muted-text text-center md:text-start">
          Date Published: {projectData.datePublished}
        </p>
        {/* Desktop & Tablet: Two Column Layout | Mobile: Single Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column - Project Info (Desktop: spans 5 cols | Mobile: full width) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            {/* Project Links - Desktop/Tablet */}
            <div className="hidden md:flex flex-col justify-center gap-3 mt-8">
              {projectData.links?.website && (
                <a
                  href={projectData.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-outfit justify-center lg:justify-start text-2xl font-bold hover:text-primary transition-colors"
                >
                  <FaGlobe size={32} />
                  Check it out
                </a>
              )}

              {/* Only show figma/github if either figma or github links exist */}
              {(projectData.links?.figma || projectData.links?.github) && (
                <div className="mt-2 flex justify-center lg:justify-start">
                  {/* Show Figma link if it exists */}
                  {projectData.links?.figma && (
                    <a
                      href={projectData.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-outfit text-2xl font-bold hover:text-primary transition-colors${
                        projectData.links?.github ? " mr-6" : ""
                      }`}
                    >
                      <CgFigma size={32} />
                      Figma
                    </a>
                  )}

                  {/* Show Github link if it exists */}
                  {projectData.links?.github && (
                    <a
                      href={projectData.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-outfit text-2xl font-bold hover:text-primary transition-colors"
                    >
                      <IoLogoGithub size={32} />
                      Codebase
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Project Description - Desktop only */}
            <div className="hidden lg:block mt-8">
              <p className="text-muted-text font-sulphur-point leading-relaxed text-justify">
                Hall 3 is a university dormitory based in Nanyang Technological
                University.
                <br></br>
                <br></br>
                The NTU Hall 3 Official Website is a comprehensive platform
                designed to showcase the vibrant community, events, and
                facilities of Hall 3 at Nanyang Technological University,
                Singapore. This project was developed using Hugo, a fast static
                site generator, and deployed on Netlify for seamless hosting and
                performance optimization.
                <br></br>
                <br></br>
                The website serves as a central hub for Hall 3 residents,
                prospective students, and visitors to explore:
                <ul className="space-y-1 list-disc ml-8 text-left">
                  <li>Hall 3&apos;s history and crest</li>
                  <li>
                    Committees, sports teams, recreational groups and cultural
                    activities
                  </li>
                  <li>Contact information and location details</li>
                </ul>
                <br></br>
                <br></br>
                During my 2 year stay in Hall 3, I was part of the Hall Council
                and held a publications role there. At some point, I was tasked
                with creating a yearbook, which I didn&apos;t really have the
                passion to make.
                <br></br>
                <br></br>
                So to make up for it, I took the old Hall 3 website design and
                revamped it. Making a website was more enjoyable for me to do
                then getting on Indesign and making a whole yearbook.
                <br></br>
                <br></br>
                Still never got around to touching the yearbook to this day,
                heh.
              </p>
            </div>
          </div>

          {/* Right Column - Hero Image & Gallery (Desktop: spans 6 cols | Mobile: full width) */}
          <div className="lg:col-span-6 lg:order-2">
            {/* Image Gallery */}
            {projectData.gallery && projectData.gallery.length > 0 && (
              <div className="mt-8">
                <ImageGallery
                  images={projectData.gallery}
                  alt={projectData.title}
                />
              </div>
            )}
          </div>

          {/* Project Links - Mobile Only */}
          <div className="md:hidden mt-6 flex flex-col gap-3">
            <div className="flex flex-col justify-center gap-3 mt-8">
              {projectData.links?.website && (
                <a
                  href={projectData.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-outfit justify-center lg:justify-start text-2xl font-bold hover:text-primary transition-colors"
                >
                  <FaGlobe size={32} />
                  Check it out
                </a>
              )}

              {/* Only show figma/github if either figma or github links exist */}
              {(projectData.links?.figma || projectData.links?.github) && (
                <div className="mt-2 flex justify-center lg:justify-start">
                  {/* Show Figma link if it exists */}
                  {projectData.links?.figma && (
                    <a
                      href={projectData.links.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 font-outfit text-2xl font-bold hover:text-primary transition-colors${
                        projectData.links?.github ? " mr-6" : ""
                      }`}
                    >
                      <CgFigma size={32} />
                      Figma
                    </a>
                  )}

                  {/* Show Github link if it exists */}
                  {projectData.links?.github && (
                    <a
                      href={projectData.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-outfit text-2xl font-bold hover:text-primary transition-colors"
                    >
                      <IoLogoGithub size={32} />
                      Codebase
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Description - Shows below images on mobile */}
        <div className="lg:hidden mt-8">
          <p className="text-muted-text font-sulphur-point leading-relaxed text-justify">
            Hall 3 is a university dormitory based in Nanyang Technological
            University.
            <br></br>
            <br></br>
            The NTU Hall 3 Official Website is a comprehensive platform designed
            to showcase the vibrant community, events, and facilities of Hall 3
            at Nanyang Technological University, Singapore. This project was
            developed using Hugo, a fast static site generator, and deployed on
            Netlify for seamless hosting and performance optimization.
            <br></br>
            <br></br>
            The website serves as a central hub for Hall 3 residents,
            prospective students, and visitors to explore:
            <ul className="space-y-1 list-disc ml-8 text-left">
              <li>Hall 3&apos;s history and crest</li>
              <li>
                Committees, sports teams, recreational groups and cultural
                activities
              </li>
              <li>Contact information and location details</li>
            </ul>
            <br></br>
            <br></br>
            During my 2 year stay in Hall 3, I was part of the Hall Council and
            held a publications role there. At some point, I was tasked with
            creating a yearbook, which I didn&apos;t really have the passion to
            make.
            <br></br>
            <br></br>
            So to make up for it, I took the old Hall 3 website design and
            revamped it. Making a website was more enjoyable for me to do then
            getting on Indesign and making a whole yearbook.
            <br></br>
            <br></br>
            Still never got around to touching the yearbook to this day, heh.
          </p>
        </div>
      </div>
    </>
  );
}
