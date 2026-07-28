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
              filteredPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="blog-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-card__link"
                    aria-label={`Читать статью: ${post.title}`}
                  >
                    <div className="blog-card__image-wrapper">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="blog-card__image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={85}
                      />
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
                            <span key={tag} className="blog-card__tag">
                              <Tag size={12} aria-hidden="true" />
                              {tag}
                            </span>
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
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}
