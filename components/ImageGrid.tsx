"use client";

import { useState } from "react";
import Image from "next/image";

type ImageItem = { src: string; alt: string };

export default function ImageGrid({ images }: { images: ImageItem[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="grid-3">
      {images.map((img) => (
        <div
          key={img.src}
          className="card"
          onMouseEnter={() => setHovered(img.src)}
          onMouseLeave={() => setHovered(null)}
          style={{
            transform: hovered === img.src ? "scale(2)" : "scale(1)",
            zIndex: hovered === img.src ? 10 : 1,
            transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "contain" }} />
        </div>
      ))}
    </div>
  );
}
