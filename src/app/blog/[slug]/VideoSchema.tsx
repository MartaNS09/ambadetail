"use client";

interface VideoSchemaProps {
  title: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  slug: string;
}

export default function VideoSchema({
  title,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  slug,
}: VideoSchemaProps) {
  const videoUrl = `https://ambadetail.by/blog/${slug}`;
  const videoEmbedUrl = `https://ambadetail.by/video/blog/${slug}.mp4`;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: title,
          description: description,
          thumbnailUrl: thumbnailUrl,
          uploadDate: uploadDate,
          duration: duration,
          contentUrl: videoEmbedUrl,
          embedUrl: videoEmbedUrl,
          interactionCount: "0",
          potentialAction: {
            "@type": "WatchAction",
            target: videoUrl,
          },
        }),
      }}
    />
  );
}
