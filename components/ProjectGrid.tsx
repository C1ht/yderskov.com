"use client";

import Image from "next/image";

type Project = { src: string; title: string };

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="proj-grid">
      {projects.map((p) => (
        <div
          key={p.src}
          className="proj-card"
        >
          <Image src={p.src} alt={p.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" style={{ objectFit: "cover" }} />
          <div className="proj-foot">
            <span className="proj-title">{p.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
