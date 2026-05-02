"use client";

import { useState } from "react";
import Image from "next/image";

type Project = { src: string; title: string };

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="proj-grid">
      {projects.map((p) => (
        <div
          key={p.src}
          className="proj-card"
          onMouseEnter={() => setHovered(p.src)}
          onMouseLeave={() => setHovered(null)}
          style={{
            transform: hovered === p.src ? "scale(2)" : "scale(1)",
            zIndex: hovered === p.src ? 10 : 1,
            transition: "transform 0.5s cubic-bezier(0.23,1,0.32,1)",
          }}
        >
          <Image src={p.src} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover", opacity: hovered === p.src ? 0.72 : 0.88, transition: "opacity 0.4s" }} />
          <div className="proj-foot">
            <span className="proj-title">{p.title}</span>
            <span className="proj-arr" style={{ transform: hovered === p.src ? "translateX(0)" : "translateX(-4px)", opacity: hovered === p.src ? 1 : 0, transition: "transform 0.2s, opacity 0.2s" }}>→</span>
          </div>
        </div>
      ))}
    </div>
  );
}
