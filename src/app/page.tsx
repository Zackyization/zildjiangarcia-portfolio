import Image from "next/image";
import type { Metadata } from "next";
import { TiDownload } from "react-icons/ti";
import { SiGithub } from "react-icons/si";
import { AvailabilityIndicator } from "@/components/home/AvailabilityIndicator/AvailabilityIndicator";

export const metadata: Metadata = {
  title: "Zildjian Garcia - Budding Frontend Developer",
  description:
    "Portfolio website of Zildjian Garcia, a budding frontend developer based in Singapore.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      {/* TODO: Markup for the background memphis graphics that can do the parallax moving based on mouse movement */}
      <div className="mx-auto flex max-w-7xl px-6 py-4">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-4">

          {/* Introductory text */}
          <div className="col-span-4 md:col-span-6">
            <p className="font-outfit text-xl">Hello there!</p>
            <p className="font-outfit text-xl">
              My name is <span className="text-primary">Zildjian</span>, but you
              can call me <span className="text-primary">Zee Jay</span>.
            </p>
            <h1 className="jumbotron text-highlighted-text mt-4">
              Budding Frontend Developer
            </h1>
            <span className="flex flex-row justify-between mt-6">
              <p className="font-outfit text-xl font-bold uppercase tracking-[7px] text-tertiary-text">
                Based in Singapore
              </p>
            </span>

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
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-outfit text-2xl font-bold text-primary transition-colors hover:bg-[var(--primary-color)]/5"
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
            <article className="mt-8">
              <section>
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

          <div className="col-span-4 md:col-span-6 flex flex-col justify-center">
            {/* Hero image */}
            <div className="flex flex-row justify-center">
              <Image
                src="/assets/home/zj_blob.png"
                alt="Photo of Zildjian"
                width={600}
                height={600}
                className="h-auto w-5/6 object-cover"
                role="image"
                priority
              />{" "}
            </div>
            {/* Technology icons */}
            <div className="mt-8" aria-label="Technologies I work with">
              <div className="flex justify-center">
                <Image
                  src="/assets/icons/material-icon-theme_vue.svg"
                  alt="Vue"
                  width={36}
                  height={36}
                  className="transition-transform hover:scale-110 mr-16"
                />
                <Image
                  src="/assets/icons/devicon_react.svg"
                  alt="React"
                  width={36}
                  height={36}
                  className="transition-transform hover:scale-110"
                />
                <Image
                  src="/assets/icons/material-icon-theme_angular.svg"
                  alt="Angular"
                  width={36}
                  height={36}
                  className="transition-transform hover:scale-110 ml-16"
                />
              </div>

              <div className="flex justify-center mt-8">
                <Image
                  src="/assets/icons/material-icon-theme_figma.svg"
                  alt="Figma"
                  width={36}
                  height={36}
                  className="transition-transform hover:scale-110 mr-8"
                />
                <Image
                  src="/assets/icons/logos_adobe-illustrator.svg"
                  alt="Adobe Illustrator"
                  width={36}
                  height={36}
                  className="transition-transform hover:scale-110 ml-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
