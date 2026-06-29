"use client";

import { useState } from "react";
import CatalogDownloadModal from "./CatalogDownloadModal";

export default function CatalogDownloadButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"open" | "download" | "print">("open");

  const triggerModal = (actionMode: "open" | "download" | "print") => {
    setMode(actionMode);
    setIsOpen(true);
  };

  return (
    <>
      <div className="catalog-actions">
        <button
          onClick={() => triggerModal("open")}
          className="btn-katalog-open"
          style={{ cursor: "pointer", border: "none", textAlign: "center" }}
        >
          Se vores inspirationskatalog →
        </button>
        <button
          onClick={() => triggerModal("download")}
          className="btn-katalog-download"
          style={{ cursor: "pointer", border: "none", textAlign: "center" }}
        >
          Download inspirationskatalog
        </button>
      </div>

      <div className="catalog-extra">
        <button
          onClick={() => triggerModal("print")}
          className="catalog-print-link"
          style={{ cursor: "pointer", border: "none", background: "none", padding: 0, textDecoration: "underline", font: "inherit" }}
        >
          Hent print-venlig version (hvid baggrund)
        </button>
      </div>

      {isOpen && (
        <CatalogDownloadModal
          mode={mode}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
