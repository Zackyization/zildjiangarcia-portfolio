"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // lock scroll + escape to close + focus close button
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="w-full sticky top-0 z-50 bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`${styles.navLink} ${styles.navLinkPrimary} text-sm text-primary font-outfit font-bold`}
        >
          Zildjian G.
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden sm:flex items-center gap-8 text-sm font-outfit font-bold"
          role="navigation"
        >
          <Link
            href="/works"
            className={`${styles.navLink} hover:text-white text-secondary-text`}
            title="Check out my works!"
          >
            Works
          </Link>
          <a
            href="https://github.com/Zackyization"
            target="_blank"
            rel="noreferrer"
            className={`${styles.navLink} hover:text-white text-secondary-text`}
            title="Check out my Github!"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/zildjian-aquino-garcia"
            target="_blank"
            rel="noreferrer"
            className={`${styles.navLink} hover:text-white text-secondary-text`}
            title="Check out my LinkedIn profile!"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zildjiangarciaa@gmail.com"
            className={`${styles.navLink} hover:text-white text-secondary-text`}
            title="zildjiangarciaa@gmail.com"
          >
            Email
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
          <Image
            src="/assets/icons/burger_menu.svg"
            alt=""
            width={30}
            height={18}
            aria-hidden="true"
          />
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 z-40 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
      </div>

      {/* Right-side drawer */}
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-50 w-[84%] max-w-xs bg-background p-6 shadow-2xl outline-none transition-transform duration-300 will-change-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <button
            ref={closeBtnRef}
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="mt-10 space-y-10">
          <li>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block text-5xl font-bold font-outfit leading-none"
              role="link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              onClick={() => setOpen(false)}
              className="block text-5xl font-bold font-outfit leading-none text-white"
              role="link"
            >
              Works
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Zackyization"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block text-5xl font-bold font-outfit leading-none text-white"
              role="link"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zildjian-aquino-garcia"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="block text-5xl font-bold font-outfit leading-none text-white"
              role="link"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:zildjiangarciaa@gmail.com"
              onClick={() => setOpen(false)}
              className="block text-5xl font-bold font-outfit leading-none text-white"
              role="link"
            >
              Email
            </a>
          </li>
        </ul>
      </aside>
    </header>
  );
}
