import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer
      className={`${styles.footer} max-w-7xl mx-auto px-6 py-4 mt-24`}
      role="contentinfo"
    >
      <div className={`${styles.layout}`}>
        <div className={`${styles.leftCol}`}>
          <div>
            <h3 className={styles.title}>Feel free to reach out!</h3>
            <p className={styles.email}>
              <a
                href="mailto:zildjiangarciaa@gmail.com"
                className={styles.emailLink}
                role="email"
              >
                zildjiangarciaa@gmail.com
              </a>
            </p>
          </div>

          <p className="hidden md:block font-bold text-muted-text">
            Website made by Zildjian Garcia
          </p>
        </div>

        <div className={styles.icons} aria-label="Social links">
          <a
            href="https://github.com/Zackyization"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="GitHub"
          >
            <SiGithub size={36} aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/zildjian-aquino-garcia"
            target="_blank"
            rel="noreferrer"
            className={styles.iconBtn}
            aria-label="LinkedIn"
          >
            <SiLinkedin size={36} aria-hidden="true" />
          </a>
          <a
            href="mailto:zildjiangarciaa@gmail.com"
            className={styles.iconBtn}
            aria-label="Email"
          >
            <MdEmail size={36} aria-hidden="true" />
          </a>
        </div>

        <nav className={styles.rightCol} aria-label="Footer navigation">
          <ul className={styles.linkList}>
            <li>
              <Link href="/" className={styles.link} title="Home Page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/works" className={styles.link} title="Check out my works!">
                Works
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/Zackyization"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                title="Check out my Github!"
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/zildjian-aquino-garcia"
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                title="Check out my LinkedIn profile!"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:zildjiangarciaa@gmail.com"
                className={styles.link}
                title="zildjiangarciaa@gmail.com"
              >
                Email
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="block sm:hidden text-center text-muted-text font-bold px-6 py-4 mt-4">
        Website made by Zildjian Garcia
      </p>
    </footer>
  );
}
