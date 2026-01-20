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
// New mobile images
import mobileImg2 from "../../assets/images/mobile-image/2.png";
import mobileImg3 from "../../assets/images/mobile-image/3.png";
import mobileImg4 from "../../assets/images/mobile-image/4.png";
import mobileImg5 from "../../assets/images/mobile-image/5.png";
import mobileImg6 from "../../assets/images/mobile-image/6.png";
import mobileImg7 from "../../assets/images/mobile-image/7.png";
import fullMobileTrailer from "../../assets/images/mobile-image/full-mobile-trailer.png";
import gameplayScreen2 from "../../assets/images/mobile-image/gameplay-screen-2.png";
import gameplayScreen from "../../assets/images/mobile-image/gameplay-screen.png";
import gangster from "../../assets/images/mobile-image/gangster.png";
import homeVnMobile from "../../assets/images/mobile-image/home-vn.png";
import market2 from "../../assets/images/mobile-image/market-2.png";
import market from "../../assets/images/mobile-image/market.png";
import newMobileUi from "../../assets/images/mobile-image/new-mobile-ui.png";
import overgame from "../../assets/images/mobile-image/overgame.png";
import pauseGame from "../../assets/images/mobile-image/pause-game.png";
import receipt from "../../assets/images/mobile-image/receipt.png";
import trailerMobile1 from "../../assets/images/mobile-image/trailer-mobile-1.png";
import veSo1 from "../../assets/images/mobile-image/ve-so-1.png";
import veSo2 from "../../assets/images/mobile-image/ve-so-2.png";
import veSo3 from "../../assets/images/mobile-image/ve-so-3.png";
import veSo4 from "../../assets/images/mobile-image/ve-so-4.png";

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
  // New mobile images
  { src: mobileImg2, alt: "Mobile Screenshot 2" },
  { src: mobileImg3, alt: "Mobile Screenshot 3" },
  { src: mobileImg4, alt: "Mobile Screenshot 4" },
  { src: mobileImg5, alt: "Mobile Screenshot 5" },
  { src: mobileImg6, alt: "Mobile Screenshot 6" },
  { src: mobileImg7, alt: "Mobile Screenshot 7" },
  { src: fullMobileTrailer, alt: "Full Mobile Trailer" },
  { src: gameplayScreen2, alt: "Gameplay Screen 2" },
  { src: gameplayScreen, alt: "Gameplay Screen" },
  { src: gangster, alt: "Gangster" },
  { src: homeVnMobile, alt: "Home VN Mobile" },
  { src: market2, alt: "Market 2" },
  { src: market, alt: "Market" },
  { src: newMobileUi, alt: "New Mobile UI" },
  { src: overgame, alt: "Overgame" },
  { src: pauseGame, alt: "Pause Game" },
  { src: receipt, alt: "Receipt" },
  { src: trailerMobile1, alt: "Trailer Mobile 1" },
  { src: veSo1, alt: "Vé số 1" },
  { src: veSo2, alt: "Vé số 2" },
  { src: veSo3, alt: "Vé số 3" },
  { src: veSo4, alt: "Vé số 4" },
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
  length: number,
) {
  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    }, 4000);
    return () => clearInterval(id);
  }, [currentIndex, setCurrentIndex, length]);
}

import React, { useRef, useState } from "react";
