"use client";

import { useState } from "react";

/**
 * Wraps a block of long-form content (one or more paragraphs) behind a
 * "Læs mere" / "Vis mindre" toggle, clamped by height rather than a single
 * element's line-clamp so it also works for multiple sibling <p> children.
 */
export default function ExpandableText({
  children,
  collapsedHeight = 130,
  fadeColor = "var(--white)",
}: {
  children: React.ReactNode;
  collapsedHeight?: number;
  fadeColor?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        style={{
          maxHeight: expanded ? "none" : `${collapsedHeight}px`,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {children}
        {!expanded && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "2.5rem",
              background: `linear-gradient(to bottom, transparent, ${fadeColor})`,
              pointerEvents: "none",
            }}
          />
        )}
      </div>
      <button
        type="button"
        className="proj-desc-toggle"
        style={{ marginTop: expanded ? "0.25rem" : "0.5rem" }}
        onClick={() => setExpanded((v) => !v)}
      >
        {expanded ? "Vis mindre" : "Læs mere"}
      </button>
    </div>
  );
}
