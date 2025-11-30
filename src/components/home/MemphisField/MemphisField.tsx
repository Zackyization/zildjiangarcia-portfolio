"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const MEMPHIS_ASSETS = [
  {
    src: "/assets/home/memphis/memphis1.svg",
    className: "top-[22px] left-[702px]",
    depth: 4,
    width: 152.026,
    height: 95.169,
  },
  {
    src: "/assets/home/memphis/memphis2.svg",
    className: "bottom-[280px] left-[648px]",
    depth: 6,
    width: 286.943,
    height: 10.097,
  },
  {
    src: "/assets/home/memphis/memphis3.svg",
    className: "bottom-[-26px] left-[148px]",
    depth: 8,
    width: 249.239,
    height: 249.422,
  },
  {
    src: "/assets/home/memphis/memphis4.svg",
    className: "right-[720px] bottom-[12px]",
    depth: 5,
    width: 112.164,
    height: 138.118,
  },
  {
    src: "/assets/home/memphis/memphis5.svg",
    className: "right-[224px] bottom-[35px]",
    depth: 7,
    width: 21.533,
    height: 290.778,
  },
  {
    src: "/assets/home/memphis/memphis6.svg",
    className: "top-[56px] right-[735px]",
    depth: 3,
    width: 18.502,
    height: 243.695,
  },
  {
    src: "/assets/home/memphis/memphis7.svg",
    className: "top-[140px] right-[120px]",
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
