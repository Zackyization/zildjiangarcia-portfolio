"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MEMPHIS_ASSETS = [
  {
    src: "/assets/home/memphis/memphis1.svg",
    className:
      "top-[32px] left-[186px] md:top-[10px] md:left-[532px] lg:top-[22px] lg:left-[702px]",
    depth: 4,
    width: 152.026,
    height: 95.169,
  },
  {
    src: "/assets/home/memphis/memphis2.svg",
    className:
      "bottom-[1212px] left-[-118px] md:bottom-[865px] md:left-[42px] lg:bottom-[280px] lg:left-[648px]",
    depth: 6,
    width: 286.943,
    height: 10.097,
  },
  {
    src: "/assets/home/memphis/memphis3.svg",
    className:
      "bottom-[905px] left-[-60px] md:bottom-[420px] md:left-[52px] lg:bottom-[-26px] lg:left-[148px]",
    depth: 8,
    width: 249.239,
    height: 249.422,
  },
  {
    src: "/assets/home/memphis/memphis4.svg",
    className:
      "bottom-[620px] right-[20px] md:right-[78px] md:bottom-[382px] lg:right-[720px] lg:bottom-[12px]",
    depth: 5,
    width: 112.164,
    height: 138.118,
  },
  {
    // This graphic simply won't appear in mobile, not like people would notice anyway
    src: "/assets/home/memphis/memphis5.svg",
    className:
      "hidden md:block md:right-[50px] md:bottom-[8px] lg:right-[224px] lg:bottom-[35px]",
    depth: 7,
    width: 21.533,
    height: 290.778,
  },
  {
    src: "/assets/home/memphis/memphis6.svg",
    className:
      "top-[192px] right-[56px] md:top-[105px] md:right-[45px] lg:top-[56px] lg:right-[735px]",
    depth: 3,
    width: 18.502,
    height: 243.695,
  },
  {
    src: "/assets/home/memphis/memphis7.svg",
    className:
      "top-[665px] right-[81px] md:top-[285px] md:right-[126px] lg:top-[140px] lg:right-[120px]",
    depth: 9,
    width: 274.512,
    height: 92.977,
  },
];

export function MemphisField() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Only enable parallax on desktop (768px and above - Tailwind's md breakpoint)
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const handlePointerMove = (event: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const offsetX =
        (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const offsetY =
        (event.clientY - (rect.top + rect.height / 2)) / rect.height;

      wrapper.querySelectorAll<HTMLElement>("[data-depth]").forEach((el) => {
        const depth = Number(el.dataset.depth);
        const translateX = -(offsetX * depth * 15);
        const translateY = -(offsetY * depth * 15);
        el.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
      });
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {MEMPHIS_ASSETS.map(({ src, className, depth, width, height }) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={width}
          height={height}
          data-depth={depth}
          className={`absolute opacity-80 transition-transform duration-150 ease-out ${className}`}
        />
      ))}
    </div>
  );
}
