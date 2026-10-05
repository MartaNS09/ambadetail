import { MetadataRoute } from "next";

const aiAgents = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "Yandex",
  "YandexBot",
  "YandexAdditional",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      ...aiAgents.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/admin/"],
      })),
    ],
    sitemap: "https://ambadetail.by/sitemap.xml",
    host: "https://ambadetail.by",
  };
}
