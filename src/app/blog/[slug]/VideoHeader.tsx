"use client";

import { useState } from "react";
import Image from "next/image";

interface VideoHeaderProps {
  hasVideo: boolean;
  videoSrc: string;
  posterImage: string;
  title: string;
}

export default function VideoHeader({
  hasVideo,
  videoSrc,
  posterImage,
  title,
}: VideoHeaderProps) {
  const [videoError, setVideoError] = useState(false);

  if (!hasVideo || videoError) {
    return (
      <Image
        src={posterImage}
        alt={title}
        fill
        className="blog-post__header-image"
        priority
      />
    );
  }

  return (
    <video
      className="blog-post__header-video"
      src={videoSrc}
      autoPlay
      loop
      muted
      playsInline
      poster={posterImage}
      onError={() => setVideoError(true)}
    />
  );
}
