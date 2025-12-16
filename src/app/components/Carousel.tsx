"use client";
import Image from "next/image";
import { useT } from "../../i18n";
import sc_220758 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.07.58.png";
import sc_220814 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.08.14.png";
import sc_220820 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.08.20.png";
import sc_220903 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.09.03.png";
import sc_221131 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.11.31.png";
import sc_221134 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.11.34.png";
import sc_221254 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.12.45.png";
import sc_221347 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.13.47.png";
import sc_221358 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.13.58.png";
import sc_221759 from "../../assets/mobile-capture/Simulator Screenshot - IP12 pro - 2025-12-15 at 22.17.59.png";

type Slide = {
  src: any;
  alt: string;
};

const slides: Slide[] = [
  { src: sc_220758, alt: "Giao diện ứng dụng - 22:07:58" },
  { src: sc_220814, alt: "Giao diện ứng dụng - 22:08:14" },
  { src: sc_220820, alt: "Giao diện ứng dụng - 22:08:20" },
  { src: sc_220903, alt: "Giao diện ứng dụng - 22:09:03" },
  { src: sc_221131, alt: "Giao diện ứng dụng - 22:11:31" },
  { src: sc_221134, alt: "Giao diện ứng dụng - 22:11:34" },
  { src: sc_221254, alt: "Giao diện ứng dụng - 22:12:45" },
  { src: sc_221347, alt: "Giao diện ứng dụng - 22:13:47" },
  { src: sc_221358, alt: "Giao diện ứng dụng - 22:13:58" },
  { src: sc_221759, alt: "Giao diện ứng dụng - 22:17:59" },
];

export default function Carousel() {
  const t = useT();
  const {
    index: currentIndex,
    setCurrentIndex,
    atStart,
    atEnd,
  } = useCarouselIndex(slides.length);
  const { bind } = useSwipeHandlers({
    onSwipeLeft: () => setCurrentIndex(currentIndex + 1),
    onSwipeRight: () => setCurrentIndex(currentIndex - 1),
  });
  useAutoPlay(currentIndex, setCurrentIndex, slides.length);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...bind}
      >
        {slides.map((slide, slideIndex) => (
          <div className="carousel-slide" key={slideIndex}>
            <div className="carousel-frame">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 960px) 100vw, 960px"
                priority
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button
          className="btn btn-carousel"
          onClick={() => setCurrentIndex(currentIndex - 1)}
          disabled={atStart}
        >
          {t("prev")}
        </button>
        <div className="dots">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={dotIndex === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`${t("prev")} ${dotIndex + 1}`}
            />
          ))}
        </div>
        <button
          className="btn btn-carousel"
          onClick={() => setCurrentIndex(currentIndex + 1)}
          disabled={atEnd}
        >
          {t("next")}
        </button>
      </div>
    </div>
  );
}

function useCarouselIndex(length: number) {
  const [index, setIndex] = useState(0);
  function setCurrentIndex(nextIndex: number) {
    if (nextIndex < 0) setIndex(0);
    else if (nextIndex >= length) setIndex(length - 1);
    else setIndex(nextIndex);
  }
  return {
    index,
    setCurrentIndex,
    atStart: index === 0,
    atEnd: index === length - 1,
  } as const;
}

function useSwipeHandlers({
  onSwipeLeft,
  onSwipeRight,
}: {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}) {
  const startXRef = useRef<number | null>(null);
  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    startXRef.current = event.clientX;
  }
  function onPointerUp(event: React.PointerEvent<HTMLDivElement>) {
    if (startXRef.current === null) return;
    const deltaX = event.clientX - startXRef.current;
    if (deltaX < -30) onSwipeLeft();
    else if (deltaX > 30) onSwipeRight();
    startXRef.current = null;
  }
  return { bind: { onPointerDown, onPointerUp } } as const;
}

function useAutoPlay(
  currentIndex: number,
  setCurrentIndex: (nextIndex: number) => void,
  length: number
) {
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [currentIndex, setCurrentIndex, length]);
}

import React, { useRef, useState } from "react";
