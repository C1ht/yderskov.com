"use client";

import { useState } from "react";

// Below this length the text fits comfortably in ~3 lines already, so a
// "Læs mere" toggle would have nothing meaningful to reveal.
const TRUNCATE_THRESHOLD = 220;

export default function ProjectDescription({
  text,
  className = "proj-desc",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = text.length > TRUNCATE_THRESHOLD;

  return (
    <>
      <p className={`${className}${needsToggle && !expanded ? " proj-desc-clamped" : ""}`} style={style}>
        {text}
      </p>
      {needsToggle && (
        <button type="button" className="proj-desc-toggle" onClick={() => setExpanded((v) => !v)}>
          {expanded ? "Vis mindre" : "Læs mere"}
        </button>
      )}
    </>
  );
}
