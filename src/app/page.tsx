import type { Metadata } from "next";
import { TiDownload } from "react-icons/ti";
import { SiGithub } from "react-icons/si";
import { AvailabilityIndicator } from "@/components/home/AvailabilityIndicator/AvailabilityIndicator";
import { HeroImage } from "@/components/home/HeroImage/HeroImage";
import { MemphisField } from "@/components/home/MemphisField/MemphisField";

export const metadata: Metadata = {
  title: "Zildjian Garcia - Budding Frontend Developer",
  description:
    "Hey there, I'm Zildjian but you can call me Zee Jay, check out my portfolio website!",
  openGraph: {
    title: "Zildjian Garcia - Budding Frontend Developer",
    description:
      "Hey there, I'm Zildjian but you can call me Zee Jay, check out my portfolio website!",
    url: "zildjiangarcia.dev",
    siteName: "Zildjian Garcia Portfolio",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Zildjian Garcia - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zildjian Garcia - Budding Frontend Developer",
    description:
      "Hey there, I'm Zildjian but you can call me Zee Jay, check out my portfolio website!",
    images: ["/og-image.webp"],
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
};

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-x-hidden">
      <MemphisField />
      <div className="relative flex max-w-7xl px-6 py-4">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4">
          <div className="col-span-4 md:col-span-12 lg:col-span-6 relative z-10">
            {/* Introductory text */}
            <div>
              <p className="font-outfit text-xl">Hello there!</p>
              <p className="font-outfit text-xl">
                My name is <span className="text-primary">Zildjian</span>, but
                you can call me <span className="text-primary">Zee Jay</span>.
              </p>
              <h1 className="jumbotron text-highlighted-text mt-4">
                Budding Frontend Developer
              </h1>
              <span className="flex flex-row justify-between mt-6">
                <p className="font-outfit text-xl font-bold uppercase tracking-[7px] text-tertiary-text text-right md:text-left">
                  Based in Singapore
                </p>
              </span>
            </div>

            {/* Hero image - ONLY visible on mobile */}
            <HeroImage className="lg:hidden items-center mt-8 md:-mt-24 md:-mr-36 relative z-0" />

            {/* Resume download & Github links */}
            <div className="mt-28">
              <div className="flex justify-center">
                <AvailabilityIndicator status="actively-looking" />
              </div>
              <div className="mt-4 flex justify-evenly">
                <a
                  href="/assets/Zildjian%20Garcia%20Resume%202025.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-outfit text-2xl font-bold text-primary transition-colors hover:bg-(--primary-color)/5"
                >
                  <TiDownload size={32} aria-hidden="true" />
                  Resume
                </a>
                <a
                  href="https://github.com/Zackyization"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-outfit text-2xl font-bold text-white transition-colors hover:bg-white/5"
                >
                  <SiGithub size={32} aria-hidden="true" />
                  Github
                </a>
              </div>
            </div>

            {/* Short write-up */}
            <article className="mt-8 flex justify-center">
              <section className="w-full md:w-3/4 lg:w-full">
                <h2 className="uppercase font-outfit text-lg text-tertiary-text">
                  Currently a senior Nanyang Technological University Computer
                  Science Undergraduate
                </h2>
                <p className="text-justify mt-4 text-muted-text">
                  Hello! I enjoy writing code, making UI/UX designs and helping
                  to make things look great in the www.
                </p>
                <p className="text-justify mt-2 text-muted-text">
                  I build clean and responsive user interfaces and enjoy turning
                  ideas into smooth, usable experiences. Most of my work
                  revolves around React, TypeScript and modern frontend tooling,
                  but I also handle backend tasks when needed. I care about good
                  design, clear structure and helping teams move faster with
                  well-built components.
                </p>
              </section>
            </article>
          </div>

          {/* Hero image - ONLY visible on desktop, right column */}
          <HeroImage className="hidden lg:flex col-span-1 md:col-span-6 justify-center" />
        </div>
      </div>
    </div>
  );
}
