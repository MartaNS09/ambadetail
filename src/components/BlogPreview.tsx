"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/app/blog/data/posts";

export default function BlogPreview() {
  // Список статей с видео (все 10)
  const postsWithVideo = [
    "gologrammy-na-kuzove",
    "kak-pravilno-myt-avto",
    "kak-vybrat-avtoservis",
    "podgotovka-avto-k-zime",
    "detailing-dvigatelya-vitebsk",
    "okleyka-avto-plenkoy-vitebsk",
    "tonirovka-avto-vitebsk",
    "polirovka-kuzova-vitebsk",
    "khimchistka-salona-vitebsk",
    "zashhitnye-pokrytiya-vitebsk",
  ];

  // Берём последние 6 статей с видео
  const latestPosts = blogPosts
    .filter((post) => postsWithVideo.includes(post.slug))
    .slice(-6)
    .reverse();

  return (
    <section className="blog-preview" aria-labelledby="blog-preview-title">
      <div className="container">
        <div className="blog-preview__header">
          <h2 id="blog-preview-title" className="blog-preview__title">
            <span className="blog-preview__title-icon">📖</span>
            Полезные статьи о детейлинге
          </h2>
          <Link href="/blog" className="blog-preview__all-link">
            Все статьи
            <ArrowRight size={18} />
          </Link>
        </div>
        <div className="blog-preview__grid">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="blog-preview__card"
            >
              <div className="blog-preview__card-image">
                <video
                  className="blog-preview__video"
                  src={`/video/blog/${post.slug}.mp4`}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={post.image}
                  preload="metadata" // <-- ДОБАВЬТЕ ЭТУ СТРОКУ
                />
                <span className="blog-preview__card-category">
                  {post.category}
                </span>
              </div>
              <div className="blog-preview__card-content">
                <h3 className="blog-preview__card-title">{post.title}</h3>
                <p className="blog-preview__card-excerpt">{post.excerpt}</p>
                <span className="blog-preview__card-link">Читать →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
