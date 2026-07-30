import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react";
import { blogPosts } from "../data/posts";
import VideoHeader from "./VideoHeader";
import VideoSchema from "./VideoSchema";
import "./page.scss";

// Генерируем все slug для статического рендеринга
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

// Параметры страницы
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Метаданные для каждой статьи
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      images: [post.image],
      url: `https://ambadetail.by/blog/${post.slug}`,
    },
    alternates: {
      canonical: `https://ambadetail.by/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Список статей с видео
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

  const hasVideo = postsWithVideo.includes(post.slug);

  // Находим связанные услуги
  const relatedServices = post.relatedServices.map((slug) => {
    const serviceNames: Record<string, string> = {
      "okleyka-auto-plenkoy": "Оклейка авто плёнкой",
      tonirovka: "Тонировка авто",
      polirovka: "Полировка кузова",
      "khimchistka-salona": "Химчистка салона",
      "vosstanovlenie-lkp": "Восстановление ЛКП",
      "zashhitnye-pokrytiya": "Защитные покрытия",
      "detailing-dvigatelya": "Детейлинг двигателя",
    };
    return {
      slug,
      name: serviceNames[slug] || slug,
    };
  });

  return (
    <>
      <article
        className="blog-post"
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* Микроразметка для видео */}
        {hasVideo && (
          <VideoSchema
            title={post.title}
            description={post.excerpt}
            thumbnailUrl={post.image}
            uploadDate={post.date}
            duration={`PT${post.readTime}M`}
            slug={post.slug}
          />
        )}

        {/* Хлебные крошки */}
        <nav className="blog-post__breadcrumbs" aria-label="Навигация">
          <div className="container">
            <Link href="/" className="blog-post__breadcrumb">
              Главная
            </Link>
            <span className="blog-post__breadcrumb-separator">/</span>
            <Link href="/blog" className="blog-post__breadcrumb">
              Блог
            </Link>
            <span className="blog-post__breadcrumb-separator">/</span>
            <span className="blog-post__breadcrumb blog-post__breadcrumb--current">
              {post.title}
            </span>
          </div>
        </nav>

        {/* Шапка статьи */}
        <header className="blog-post__header">
          <div className="blog-post__header-bg">
            <VideoHeader
              hasVideo={hasVideo}
              videoSrc={`/video/blog/${post.slug}.mp4`}
              posterImage={post.image}
              title={post.title}
            />
            <div className="blog-post__header-overlay" aria-hidden="true"></div>
          </div>
          <div className="container blog-post__header-content">
            <div className="blog-post__category" aria-hidden="true">
              {post.category}
            </div>
            <h1 className="blog-post__title" itemProp="headline">
              {post.title}
            </h1>
            <div className="blog-post__meta">
              <span className="blog-post__meta-item">
                <Calendar size={18} aria-hidden="true" />
                {new Date(post.date).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="blog-post__meta-item">
                <Clock size={18} aria-hidden="true" />
                {post.readTime} мин чтения
              </span>
            </div>
          </div>
        </header>

        {/* Тело статьи */}
        <div className="blog-post__body">
          <div className="container">
            <div className="blog-post__body-grid">
              {/* Основной контент */}
              <div
                className="blog-post__content"
                dangerouslySetInnerHTML={{ __html: post.content }}
                itemProp="articleBody"
              />

              {/* Сайдбар */}
              <aside className="blog-post__sidebar" role="complementary">
                <div className="blog-post__sidebar-card">
                  <h3 className="blog-post__sidebar-title">Услуги</h3>
                  <ul className="blog-post__sidebar-list">
                    {relatedServices.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/uslugi/${service.slug}`}
                          className="blog-post__sidebar-link"
                        >
                          {service.name}
                          <ArrowRight size={16} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="blog-post__sidebar-card">
                  <h3 className="blog-post__sidebar-title">Метки</h3>
                  <div className="blog-post__sidebar-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-post__sidebar-tag">
                        <Tag size={12} aria-hidden="true" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="blog-post__sidebar-card blog-post__sidebar-card--cta">
                  <h3 className="blog-post__sidebar-title">
                    Запишитесь на услугу
                  </h3>
                  <p className="blog-post__sidebar-text">
                    Получите бесплатную консультацию и индивидуальный расчёт
                    стоимости работ.
                  </p>
                  <Link
                    href="/contacts"
                    className="blog-post__sidebar-btn btn btn--primary"
                  >
                    Связаться
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>

        {/* Навигация по статьям */}
        <nav
          className="blog-post__navigation"
          aria-label="Навигация по статьям"
        >
          <div className="container">
            <div className="blog-post__nav-grid">
              <Link
                href="/blog"
                className="blog-post__nav-link blog-post__nav-link--back"
              >
                <ArrowLeft size={18} aria-hidden="true" />
                Назад к блогу
              </Link>
            </div>
          </div>
        </nav>
      </article>
    </>
  );
}
