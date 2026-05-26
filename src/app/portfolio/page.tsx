"use client";

import Link from "next/link";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { Play, X, Phone, ArrowRight } from "lucide-react";
import "./page.scss";

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<boolean[]>(
    new Array(10).fill(false),
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const portfolioItems = useMemo(
    () => [
      { id: 0, src: "/video/test1.mp4", title: "Детейлинг автомобиля 1" },
      { id: 1, src: "/video/test2.mp4", title: "Детейлинг автомобиля 2" },
      { id: 2, src: "/video/test3.mp4", title: "Детейлинг автомобиля 3" },
      { id: 3, src: "/video/test4.mp4", title: "Детейлинг автомобиля 4" },
      { id: 4, src: "/video/test5.mp4", title: "Детейлинг автомобиля 5" },
      { id: 5, src: "/video/test6.mp4", title: "Детейлинг автомобиля 6" },
      { id: 6, src: "/video/test7.mp4", title: "Детейлинг автомобиля 7" },
      { id: 7, src: "/video/test8.mp4", title: "Детейлинг автомобиля 8" },
      { id: 8, src: "/video/test9.mp4", title: "Детейлинг автомобиля 9" },
      { id: 9, src: "/video/test10.mp4", title: "Детейлинг автомобиля 10" },
    ],
    [],
  );

  const handleVideoClick = useCallback((index: number) => {
    setSelectedVideo(index);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    portfolioItems.forEach((_, index) => {
      const element = videoRefs.current[index];
      if (element && !loadedVideos[index]) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                element.load();
                setLoadedVideos((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
                observer.disconnect();
              }
            });
          },
          { rootMargin: "200px" },
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [loadedVideos, portfolioItems]);

  useEffect(() => {
    if (selectedVideo !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  const handleMouseEnter = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video && video.readyState >= 3) {
      video.play().catch(() => {});
    }
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  }, []);

  const titleParts = ["AMBADETAIL"];

  return (
    <>
      <section
        className="portfolio-hero"
        aria-label="Портфолио работ детейлинг студии Ambadetail в Витебске"
      >
        <div className="portfolio-hero__video-wrapper">
          <video
            className="portfolio-hero__video"
            src="/video/bmw.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Фоновое видео детейлинг обработки автомобиля"
          />
          <div className="portfolio-hero__overlay" aria-hidden="true"></div>
        </div>
        <div className="container portfolio-hero__container">
          <div className="portfolio-hero__content">
            <h1 className="portfolio-hero__title">
              {titleParts.map((part, partIndex) => (
                <span key={partIndex} className="portfolio-hero__title-word">
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`portfolio-hero__title-letter ${isVisible ? "portfolio-hero__title-letter--visible" : ""}`}
                      style={{
                        transitionDelay: `${(partIndex * 10 + letterIndex) * 0.02}s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              ))}
            </h1>
            <p className="portfolio-hero__subtitle">
              Наши работы — лучшее доказательство качества.
            </p>
            <p className="portfolio-hero__subtitle-secondary">
              Посмотрите видео и убедитесь сами!
            </p>
          </div>
        </div>
      </section>

      <div className="portfolio-content">
        <div className="container">
          <div className="portfolio-section-header">
            <div className="portfolio-section-header__content">
              <span
                className="portfolio-section-header__badge"
                aria-hidden="true"
              >
                <span className="portfolio-section-header__badge-line"></span>
                Наше портфолио
              </span>
              <h2 className="portfolio-section-header__title">
                <span className="portfolio-section-header__title-word">
                  Видео
                </span>
                <span className="portfolio-section-header__title-accent">
                  работы
                </span>
              </h2>
              <p className="portfolio-section-header__subtitle">
                Ambadetail — каждый проект уникален
              </p>
            </div>
          </div>

          {/* Подсказка для мобилки - листайте */}
          <div className="portfolio-swipe-hint">
            <span className="portfolio-swipe-hint__text">листайте вправо</span>
            <span className="portfolio-swipe-hint__arrow">👉</span>
          </div>

          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="portfolio-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className="portfolio-card__video-wrapper"
                  onClick={() => handleVideoClick(index)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="portfolio-card__video"
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={`Видео-портфолио: ${item.title}`}
                  />
                  <div className="portfolio-card__overlay">
                    <div className="portfolio-card__play">
                      <Play size={48} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta">
            <h2 className="portfolio-cta__title">Хотите такой же результат?</h2>
            <p className="portfolio-cta__text">
              Запишитесь на бесплатную консультацию и получите индивидуальный
              расчёт стоимости работ для вашего автомобиля.
            </p>
            <div className="portfolio-cta__buttons">
              <Link
                href="/contacts"
                className="portfolio-cta__btn portfolio-cta__btn--primary"
                aria-label="Перейти на страницу контактов для записи на детейлинг"
              >
                Записаться
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a
                href="tel:+375292230322"
                className="portfolio-cta__btn portfolio-cta__btn--secondary"
                aria-label="Позвонить в студию Ambadetail по телефону +375 29 223 03 22"
              >
                <Phone size={18} aria-hidden="true" />
                Позвонить
              </a>
            </div>
          </div>

          {selectedVideo !== null && (
            <div
              className="portfolio-modal"
              onClick={closeModal}
              role="dialog"
              aria-modal="true"
              aria-label={`Просмотр видео проекта ${selectedVideo + 1}`}
            >
              <div
                className="portfolio-modal__content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="portfolio-modal__close"
                  onClick={closeModal}
                  aria-label="Закрыть окно просмотра видео"
                >
                  <X size={24} aria-hidden="true" />
                </button>
                <div className="portfolio-modal__video-wrapper">
                  <video
                    className="portfolio-modal__video"
                    src={portfolioItems[selectedVideo].src}
                    controls
                    autoPlay
                    playsInline
                    aria-label={`Видео: ${portfolioItems[selectedVideo].title}`}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
