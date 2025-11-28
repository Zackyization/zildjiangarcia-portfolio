import Link from "next/link";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* TODO: Mobile view of the navbar (collapsible style) */}
        <Link
          href="/"
          className="text-sm text-[var(--primary-color)] font-outfit font-bold"
        >
          Zildjian G.
        </Link>

        <nav className="flex items-center gap-8 text-sm font-outfit font-bold">
          <Link
            href="/works"
            className="hover:text-white text-[var(--secondary-text-color)]"
            title="Check out my works!"
          >
            Works
          </Link>
          <a
            href="https://github.com/Zackyization"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[var(--secondary-text-color)]"
            title="Check out my Github!"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/zildjian-aquino-garcia"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white text-[var(--secondary-text-color)]"
            title="Check out my LinkedIn profile!"
          >
            LinkedIn
          </a>
          <a
            href="mailto:zildjiangarciaa@gmail.com"
            className="hover:text-white text-[var(--secondary-text-color)]"
            title="zildjiangarciaa@gmail.com"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
