import Image from "next/image";
import styles from "./HeroImage.module.css";

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className = "" }: HeroImageProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="inline-block w-full md:w-3/4 lg:w-auto lg:flex flex-row justify-center">
        <Image
          src="/assets/home/zj_blob.png"
          alt="Photo of Zildjian"
          width={600}
          height={600}
          className="h-auto mx-auto md:w-5/6 object-cover"
          priority
        />
      </div>
      <div className="mt-8" aria-label="Technologies I work with">
        <div className="flex justify-center gap-4">
          <Image
            src="/assets/icons/material-icon-theme_vue.svg"
            alt="Vue"
            width={36}
            height={36}
            className={`transition-transform hover:scale-110 mr-16 ${styles.floatingIcon} ${styles.floatingIcon1}`}
          />
          <Image
            src="/assets/icons/devicon_react.svg"
            alt="React"
            width={36}
            height={36}
            className={`transition-transform hover:scale-110 ${styles.floatingIcon} ${styles.floatingIcon2}`}
          />
          <Image
            src="/assets/icons/material-icon-theme_angular.svg"
            alt="Angular"
            width={36}
            height={36}
            className={`transition-transform hover:scale-110 ml-16 ${styles.floatingIcon} ${styles.floatingIcon3}`}
          />
        </div>
        <div className="flex justify-center mt-8">
          <Image
            src="/assets/icons/material-icon-theme_figma.svg"
            alt="Figma"
            width={36}
            height={36}
            className={`transition-transform hover:scale-110 mr-8 ${styles.floatingIcon} ${styles.floatingIcon4}`}
          />
          <Image
            src="/assets/icons/logos_adobe-illustrator.svg"
            alt="Adobe Illustrator"
            width={36}
            height={36}
            className={`transition-transform hover:scale-110 ml-8 ${styles.floatingIcon} ${styles.floatingIcon5}`}
          />
        </div>
      </div>
    </div>
  );
}
