"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, Tag, ChevronRight, Search } from "lucide-react";
import { blogPosts } from "./data/posts";
import "./page.scss";

export default function BlogClient() {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Все");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [videoErrors, setVideoErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const all = ["Все", ...new Set(blogPosts.map((post) => post.category))];
    return all;
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      const matchesCategory =
        selectedCategory === "Все" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const titleParts = ["БЛОГ", "AMBADETAIL"];

  // Список статей с видео (все 10 видео)
  // const postsWithVideo = [
  //   "gologrammy-na-kuzove",
  //   "kak-pravilno-myt-avto",
  //   "kak-vybrat-avtoservis",
  //   "podgotovka-avto-k-zime",
  //   "detailing-dvigatelya",
  //   "okleyka-auto-plenkoy",
  //   "tonirovka",
  //   "polirovka",
  //   "khimchistka-salona",
  //   "zashhitnye-pokrytiya",
  // ];

  const postsWithVideo = [
    // Первая партия (4 видео) - уже работают
    "gologrammy-na-kuzove",
    "kak-pravilno-myt-avto",
    "kak-vybrat-avtoservis",
    "podgotovka-avto-k-zime",
    // Вторая партия (6 видео) - ИСПРАВЛЕННЫЕ SLUG
    "detailing-dvigatelya-vitebsk",
    "okleyka-avto-plenkoy-vitebsk",
    "tonirovka-avto-vitebsk",
    "polirovka-kuzova-vitebsk",
    "khimchistka-salona-vitebsk",
    "zashhitnye-pokrytiya-vitebsk",
  ];
  const handleTagClick = (tag: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSearchTerm(tag);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVideoError = (slug: string) => {
    console.error(`Video failed to load for: ${slug}`);
    setVideoErrors((prev) => ({ ...prev, [slug]: true }));
  };

  return (
    <>
      <h1 className="sr-only">
        Блог о детейлинге автомобилей в Витебске — полезные статьи и советы
      </h1>

      <section
        className="blog-hero"
        aria-label="Блог о детейлинге автомобилей в Витебске"
      >
        <div className="blog-hero__bg">
          <video
            className="blog-hero__video"
            src="/video/blog-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Фоновое видео детейлинг студии Ambadetail"
          />
          <div className="blog-hero__overlay" aria-hidden="true"></div>
        </div>
        <div className="container blog-hero__container">
          <div className="blog-hero__content">
            <div className="blog-hero__badge" aria-hidden="true">
              <span className="blog-hero__badge-text">Полезные статьи</span>
            </div>
            <h1 className="blog-hero__title">
              {titleParts.map((part, partIndex) => (
                <span key={partIndex} className="blog-hero__title-word">
                  {part.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className={`blog-hero__title-letter ${
                        isVisible ? "blog-hero__title-letter--visible" : ""
                      }`}
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
            <p
              className={`blog-hero__subtitle ${
                isVisible ? "blog-hero__subtitle--visible" : ""
              }`}
            >
              Полезные статьи о детейлинге автомобилей в Витебске. Советы,
              рекомендации и профессиональные знания от команды AMBADETAIL.
            </p>
          </div>
        </div>
      </section>

      <div className="blog-content">
        <div className="container">
          <div
            className={`blog-filters ${
              isVisible ? "blog-filters--visible" : ""
            }`}
          >
            <div className="blog-search">
              <Search size={20} className="blog-search__icon" />
              <input
                type="text"
                className="blog-search__input"
                placeholder="Поиск по статьям..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Поиск по статьям блога"
              />
            </div>

            <div className="blog-categories" role="tablist">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`blog-categories__btn ${
                    selectedCategory === category
                      ? "blog-categories__btn--active"
                      : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-label={`Фильтр по категории: ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="blog-grid">
            {filteredPosts.length === 0 ? (
              <div className="blog-empty">
                <p className="blog-empty__text">
                  Статей по вашему запросу не найдено
                </p>
              </div>
            ) : (
              filteredPosts.map((post, index) => {
                const hasVideo = postsWithVideo.includes(post.slug);
                const videoHasError = videoErrors[post.slug];

                return (
                  <article
                    key={post.slug}
                    className={`blog-card blog-card--animated ${
                      hoveredCard === post.slug ? "blog-card--hovered" : ""
                    }`}
                    onMouseEnter={() => setHoveredCard(post.slug)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      opacity: 0,
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="blog-card__link"
                      aria-label={`Читать статью: ${post.title}`}
                    >
                      <div className="blog-card__image-wrapper">
                        {hasVideo && !videoHasError ? (
                          <video
                            className="blog-card__video"
                            src={`/video/blog/${post.slug}.mp4`}
                            autoPlay
                            loop
                            muted
                            playsInline
                            poster={post.image}
                            onError={() => handleVideoError(post.slug)}
                          />
                        ) : (
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="blog-card__image"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={85}
                          />
                        )}
                        <div className="blog-card__category" aria-hidden="true">
                          {post.category}
                        </div>
                      </div>

                      <div className="blog-card__content">
                        <div className="blog-card__meta">
                          <span className="blog-card__date">
                            <Calendar size={14} aria-hidden="true" />
                            {new Date(post.date).toLocaleDateString("ru-RU", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>
                          <span className="blog-card__read-time">
                            <Clock size={14} aria-hidden="true" />
                            {post.readTime} мин
                          </span>
                        </div>

                        <h2 className="blog-card__title">{post.title}</h2>
                        <p className="blog-card__excerpt">{post.excerpt}</p>

                        <div className="blog-card__footer">
                          <span className="blog-card__tags">
                            {post.tags.slice(0, 3).map((tag) => (
                              <button
                                key={tag}
                                type="button"
                                className="blog-card__tag blog-card__tag--clickable"
                                onClick={(e) => handleTagClick(tag, e)}
                                aria-label={`Показать статьи по метке: ${tag}`}
                              >
                                <Tag size={12} aria-hidden="true" />
                                {tag}
                              </button>
                            ))}
                          </span>
                          <span className="blog-card__read-more">
                            Читать
                            <ChevronRight size={16} aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
