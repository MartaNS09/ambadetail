"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  Maximize2,
  X,
} from "lucide-react";

interface Review {
  id: number;
  name: string;
  car: string;
  service: string;
  text: string;
  fullText?: string;
  rating: number;
  date: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Алексей Смирнов",
    car: "BMW X5 2023",
    service: "Химчистка салона",
    text: "Обратился в Ambadetail для химчистки салона своего BMW X5. Результат превзошёл все ожидания! Салон выглядит как новый, все пятна вывели, запах табака убрали полностью.",
    fullText:
      "Обратился в Ambadetail для химчистки салона своего BMW X5. Результат превзошёл все ожидания! Салон выглядит как новый, все пятна вывели, запах табака убрали полностью. Мастера очень внимательные, рассказали как правильно ухаживать за кожей после чистки. Обязательно приеду снова! Уже записался на полировку кузова — доверие к студии 100%.",
    rating: 5,
    date: "15 февраля 2026",
  },
  {
    id: 2,
    name: "Екатерина Козлова",
    car: "Mercedes-Benz E-Class 2024",
    service: "Полировка кузова",
    text: "Сделала полировку кузова у ребят из Ambadetail. Моя машина после зимы выглядела ужасно: царапины, голограммы. Мастера сделали просто волшебство!",
    fullText:
      "Сделала полировку кузова у ребят из Ambadetail. Моя машина после зимы выглядела ужасно: царапины, голограммы. Мастера сделали просто волшебство! Кузов сияет как зеркало, цвет стал намного глубже и насыщеннее. Благодарю за качественную работу! Теперь только к вам, ребята!",
    rating: 5,
    date: "2 июля 2026",
  },
  {
    id: 3,
    name: "Дмитрий Петров",
    car: "Toyota Land Cruiser 200",
    service: "Оклейка плёнкой",
    text: "Оклеил свой внедорожник защитной плёнкой. Переживал за качество, но мастера сделали всё идеально! Плёнка села без пузырей, на стыках почти не видно.",
    fullText:
      "Оклеил свой внедорожник защитной плёнкой. Переживал за качество, но мастера сделали всё идеально! Плёнка села без пузырей, на стыках почти не видно. Теперь езжу спокойно по лесу — защита от веток и камней на высшем уровне. Отдельное спасибо за консультацию по уходу. Рекомендую всем владельцам внедорожников!",
    rating: 5,
    date: "20 марта 2026",
  },
  {
    id: 4,
    name: "Марина Иванова",
    car: "Audi Q7 2023",
    service: "Керамическое покрытие",
    text: "Заказала керамическое покрытие для своего Audi. Ребята подготовили кузов идеально, нанесли покрытие качественно. Машина стала намного ярче!",
    fullText:
      "Заказала керамическое покрытие для своего Audi. Ребята подготовили кузов идеально, нанесли покрытие качественно. Машина стала намного ярче, вода просто стекает с кузова! Чувствуется, что работа сделана с душой. Рекомендую студию всем друзьям! Спасибо за отличный сервис и индивидуальный подход!",
    rating: 5,
    date: "8 мая 2026",
  },
  {
    id: 5,
    name: "Сергей Николаев",
    car: "Porsche Cayenne 2022",
    service: "Детейлинг двигателя",
    text: "Обратился за детейлингом двигателя. Подкапотное пространство было в масле и грязи. Мастера всё аккуратно вычистили, обработали резиновые элементы.",
    fullText:
      "Обратился за детейлингом двигателя. Подкапотное пространство было в масле и грязи. Мастера всё аккуратно вычистили, обработали резиновые элементы. Двигатель блестит! Приятно открывать капот. Видно, что работают профессионалы, которые знают своё дело. Теперь буду обслуживаться только здесь!",
    rating: 5,
    date: "15 апреля 2026",
  },
  {
    id: 6,
    name: "Ольга Соколова",
    car: "Lexus RX 450h 2024",
    service: "Тонировка авто",
    text: "Сделала тонировку в Ambadetail. Выбрала атермальную плёнку — разница огромная! В салоне стало намного комфортнее, кондиционер не работает на максимуме.",
    fullText:
      "Сделала тонировку в Ambadetail. Выбрала атермальную плёнку — разница огромная! В салоне стало намного комфортнее, кондиционер не работает на максимуме. Спасибо мастерам за качественный монтаж и рекомендации по выбору плёнки. Буду рекомендовать всем! Обязательно приеду за полировкой.",
    rating: 5,
    date: "3 июля 2026",
  },
  {
    id: 7,
    name: "Андрей Морозов",
    car: "Volkswagen Touareg",
    service: "Химчистка салона",
    text: "После поездки с детьми и собакой салон выглядел ужасно. Ребята из Ambadetail вернули моему Touareg идеальную чистоту!",
    fullText:
      "После поездки с детьми и собакой салон выглядел ужасно. Ребята из Ambadetail вернули моему Touareg идеальную чистоту! Удалили все пятна от сока и шоколада, запах животного убрали полностью. Салон пахнет свежестью! Отдельное спасибо за бережное отношение к коже.",
    rating: 5,
    date: "10 января 2026",
  },
  {
    id: 8,
    name: "Наталья Белова",
    car: "Infiniti QX80",
    service: "Оклейка плёнкой",
    text: "Защитила свой Infiniti антигравийной плёнкой. Результат превзошёл ожидания! Теперь не боюсь сколов и реагентов.",
    fullText:
      "Защитила свой Infiniti антигравийной плёнкой. Результат превзошёл ожидания! Теперь не боюсь сколов и реагентов. Мастера сделали всё качественно, плёнка практически незаметна. Очень довольна результатом! Спасибо команде Ambadetail за профессионализм.",
    rating: 5,
    date: "5 июня 2026",
  },
  {
    id: 9,
    name: "Игорь Фёдоров",
    car: "Range Rover Sport",
    service: "Детейлинг двигателя",
    text: "Обратился за детейлингом двигателя своего Range Rover. Мастера сделали всё на высшем уровне!",
    fullText:
      "Обратился за детейлингом двигателя своего Range Rover. Мастера сделали всё на высшем уровне! Подкапотное пространство теперь выглядит как новое. Убрали все масляные пятна, обработали резину. Теперь под капотом идеальная чистота! Обязательно приеду за химчисткой салона.",
    rating: 5,
    date: "25 августа 2026",
  },
  {
    id: 10,
    name: "Татьяна Ковалёва",
    car: "Volvo XC90",
    service: "Керамическое покрытие",
    text: "Сделала керамику на своём Volvo. Машина преобразилась, цвет стал глубже и ярче!",
    fullText:
      "Сделала керамику на своём Volvo. Машина преобразилась, цвет стал глубже и ярче! Дождь просто стекает с кузова, грязь не прилипает. Очень рада результату! Спасибо мастерам за их труд и профессионализм. Теперь буду делать детейлинг только здесь.",
    rating: 5,
    date: "15 июля 2026",
  },
  {
    id: 11,
    name: "Антон Романов",
    car: "BMW M5 Competition",
    service: "Полировка кузова",
    text: "Отдал свою BMW на полировку. Ребята сделали просто невероятную работу!",
    fullText:
      "Отдал свою BMW на полировку. Ребята сделали просто невероятную работу! Убрали все голограммы, восстановили блеск. Машина выглядит как с завода! Теперь только к вам! Вы лучшие в Витебске.",
    rating: 5,
    date: "1 сентября 2026",
  },
  {
    id: 12,
    name: "Елена Савицкая",
    car: "Audi A8 L",
    service: "Тонировка авто",
    text: "Сделала тонировку в студии. Мастера подобрали идеальную плёнку, качество на высоте!",
    fullText:
      "Сделала тонировку в студии. Мастера подобрали идеальную плёнку, качество на высоте! Теперь в салоне комфортно, даже в сильную жару. Очень довольна результатом! Спасибо за индивидуальный подход и отличный сервис!",
    rating: 5,
    date: "12 апреля 2026",
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedReview, setExpandedReview] = useState<Review | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Управление overflow через useEffect
  useEffect(() => {
    if (expandedReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedReview]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getVisibleReviews = useCallback(() => {
    const count = isMobile ? 1 : 3;
    const start = currentIndex;
    const end = start + count;
    const visible = reviews.slice(start, end);

    while (visible.length < count) {
      visible.push(reviews[visible.length % reviews.length]);
    }
    return visible;
  }, [currentIndex, isMobile]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    const maxIndex = Math.max(0, reviews.length - (isMobile ? 1 : 3));
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      return newIndex < 0 ? maxIndex : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, isMobile]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    const maxIndex = Math.max(0, reviews.length - (isMobile ? 1 : 3));
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      return newIndex > maxIndex ? 0 : newIndex;
    });
    setTimeout(() => setIsAnimating(false), 400);
  }, [isAnimating, isMobile]);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [isVisible, handleNext]);

  const handleDotClick = (index: number) => {
    const maxIndex = Math.max(0, reviews.length - (isMobile ? 1 : 3));
    setCurrentIndex(index > maxIndex ? 0 : index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`reviews__star ${i < rating ? "reviews__star--filled" : ""}`}
        size={18}
      />
    ));
  };

  const handleExpand = (review: Review) => {
    setExpandedReview(review);
  };

  const handleCloseModal = () => {
    setExpandedReview(null);
  };

  const visibleReviews = getVisibleReviews();
  const totalDots = Math.max(1, reviews.length - (isMobile ? 1 : 3));

  return (
    <>
      <section
        ref={sectionRef}
        className={`reviews ${isVisible ? "reviews--visible" : ""}`}
        aria-labelledby="reviews-title"
      >
        <div className="container">
          <div className="reviews__header">
            <div className="reviews__header-content">
              <span className="reviews__badge">Отзывы клиентов</span>
              <h2 id="reviews-title" className="reviews__title">
                Что говорят наши{" "}
                <span className="reviews__title-accent">клиенты</span>
              </h2>
              <p className="reviews__subtitle">
                Реальные отзывы тех, кто уже доверил нам свой автомобиль
              </p>
            </div>
            <div className="reviews__controls">
              <button
                onClick={handlePrev}
                className="reviews__btn reviews__btn--prev"
                aria-label="Предыдущие отзывы"
                disabled={isAnimating}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                className="reviews__btn reviews__btn--next"
                aria-label="Следующие отзывы"
                disabled={isAnimating}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="reviews__grid">
            {visibleReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className={`reviews__card ${
                  isVisible ? "reviews__card--visible" : ""
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => handleExpand(review)}
                onKeyDown={(e) => e.key === "Enter" && handleExpand(review)}
                role="button"
                tabIndex={0}
              >
                <div className="reviews__card-header">
                  <div className="reviews__card-avatar">
                    <div className="reviews__avatar-placeholder">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div className="reviews__card-info">
                    <h3 className="reviews__card-name">{review.name}</h3>
                    <span className="reviews__card-car">{review.car}</span>
                  </div>
                  <div className="reviews__card-quote">
                    <Quote size={24} />
                  </div>
                </div>
                <div className="reviews__card-rating">
                  {renderStars(review.rating)}
                </div>
                <p className="reviews__card-text">“{review.text}”</p>
                <div className="reviews__card-footer">
                  <span className="reviews__card-service">
                    {review.service}
                  </span>
                  <span className="reviews__card-expand">
                    <Maximize2 size={14} />
                    <span>Читать полностью</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="reviews__dots">
            {Array.from({ length: totalDots }, (_, i) => {
              const maxIndex = Math.max(0, reviews.length - (isMobile ? 1 : 3));
              const dotIndex = i > maxIndex ? 0 : i;
              const isActive =
                dotIndex === (currentIndex > maxIndex ? 0 : currentIndex);
              return (
                <button
                  key={i}
                  className={`reviews__dot ${isActive ? "reviews__dot--active" : ""}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Перейти к отзывам ${i + 1}`}
                />
              );
            })}
          </div>

          <div className="reviews__stats">
            <div className="reviews__stat">
              <span className="reviews__stat-value">{reviews.length}+</span>
              <span className="reviews__stat-label">довольных клиентов</span>
            </div>
            <div className="reviews__stat">
              <span className="reviews__stat-value">⭐ 5.0</span>
              <span className="reviews__stat-label">средний рейтинг</span>
            </div>
            <div className="reviews__stat">
              <span className="reviews__stat-value">99%</span>
              <span className="reviews__stat-label">возвращаются</span>
            </div>
          </div>
        </div>
      </section>

      {expandedReview && (
        <div className="reviews__modal" onClick={handleCloseModal}>
          <div
            className="reviews__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="reviews__modal-close"
              onClick={handleCloseModal}
              aria-label="Закрыть полный отзыв"
            >
              <X size={24} />
            </button>
            <div className="reviews__modal-header">
              <div className="reviews__modal-avatar">
                <div className="reviews__avatar-placeholder reviews__avatar-placeholder--large">
                  {expandedReview.name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="reviews__modal-name">{expandedReview.name}</h3>
                <span className="reviews__modal-car">{expandedReview.car}</span>
              </div>
            </div>
            <div className="reviews__modal-rating">
              {renderStars(expandedReview.rating)}
            </div>
            <p className="reviews__modal-text">
              {expandedReview.fullText || expandedReview.text}
            </p>
            <div className="reviews__modal-footer">
              <span className="reviews__card-service">
                {expandedReview.service}
              </span>
              <span className="reviews__card-date">{expandedReview.date}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
