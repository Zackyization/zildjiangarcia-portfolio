import Image from "next/image";

interface HeroImageProps {
  className?: string;
}

export function HeroImage({ className = "" }: HeroImageProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row justify-center">
        <Image
          src="/assets/home/zj_blob.png"
          alt="Photo of Zildjian"
          width={600}
          height={600}
          className="h-auto md:w-5/6 object-cover"
          priority
        />
      </div>
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
  );
}