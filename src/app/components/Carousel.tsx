"use client";
import Image from "next/image";
import screen2 from "../../assets/images/mobile-image/2.png";
import screen3 from "../../assets/images/mobile-image/3.png";
import screen4 from "../../assets/images/mobile-image/4.png";
import screen5 from "../../assets/images/mobile-image/5.png";
import screen6 from "../../assets/images/mobile-image/6.png";
import screen7 from "../../assets/images/mobile-image/7.png";
import screenHome from "../../assets/images/mobile-image/home-vn.png";
import screenNewUI from "../../assets/images/mobile-image/new-mobile-ui.png";

type Slide = {
  src: any;
  alt: string;
};

const slides: Slide[] = [
  { src: screenHome, alt: "Màn hình chính ứng dụng" },
  { src: screenNewUI, alt: "Giao diện mới ứng dụng" },
  { src: screen2, alt: "Màn hình trò chơi 1" },
  { src: screen3, alt: "Màn hình trò chơi 2" },
  { src: screen4, alt: "Màn hình trò chơi 3" },
  { src: screen5, alt: "Màn hình trò chơi 4" },
  { src: screen6, alt: "Màn hình trò chơi 5" },
  { src: screen7, alt: "Màn hình trò chơi 6" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useCarouselIndex(slides.length);
  const { bind } = useSwipeHandlers({
    onSwipeLeft: () => setCurrentIndex(currentIndex + 1),
    onSwipeRight: () => setCurrentIndex(currentIndex - 1),
  });

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
          className="btn"
          onClick={() => setCurrentIndex(currentIndex - 1)}
        >
          Trước
        </button>
        <div className="dots">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              className={dotIndex === currentIndex ? "dot active" : "dot"}
              onClick={() => setCurrentIndex(dotIndex)}
              aria-label={`Xem ảnh ${dotIndex + 1}`}
            />
          ))}
        </div>
        <button
          className="btn"
          onClick={() => setCurrentIndex(currentIndex + 1)}
        >
          Sau
        </button>
      </div>
    </div>
  );
}

function useCarouselIndex(length: number) {
  const [index, setIndex] = useState(0);
  function setCurrentIndex(nextIndex: number) {
    if (nextIndex < 0) setIndex(length - 1);
    else if (nextIndex >= length) setIndex(0);
    else setIndex(nextIndex);
  }
  return [index, setCurrentIndex] as const;
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

import React, { useRef, useState } from "react";
