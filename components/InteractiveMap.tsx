"use client";

import { useState } from "react";

export default function InteractiveMap() {
  const [loadMap, setLoadMap] = useState(false);

  return (
    <div className="map-wrap" style={{ position: "relative", cursor: "pointer", background: "#f4f4f4" }}>
      {!loadMap ? (
        <div
          onClick={() => setLoadMap(true)}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#eae8e5",
            color: "#161616",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          {/* Simple abstract map background lines using CSS */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.15,
              backgroundImage: "radial-gradient(#161616 1px, transparent 1px), linear-gradient(to right, #161616 1px, transparent 1px), linear-gradient(to bottom, #161616 1px, transparent 1px)",
              backgroundSize: "20px 20px, 100px 100px, 100px 100px",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              background: "#fff",
              padding: "1.2rem 2.2rem",
              borderRadius: "2px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span style={{ fontWeight: 400, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Vis interaktivt kort
            </span>
          </div>
        </div>
      ) : (
        <>
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=9.985283%2C57.240538%2C10.025283%2C57.260538&layer=mapnik&marker=57.250538%2C10.005283"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            referrerPolicy="no-referrer-when-downgrade"
            title="Arkitekttegnestuen Yderskov — Danserhøj 38, 9700 Brønderslev"
            aria-label="Kort over Arkitekttegnestuen Yderskov"
          />
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=57.250538,10.005283"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "absolute",
              bottom: "0.9rem",
              right: "0.9rem",
              background: "#fff",
              color: "#161616",
              fontSize: "0.72rem",
              fontWeight: 400,
              letterSpacing: "0.03em",
              padding: "0.55rem 0.9rem",
              borderRadius: "6px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.14)",
              textDecoration: "none",
            }}
          >
            Åbn i Google Maps →
          </a>
        </>
      )}
    </div>
  );
}
