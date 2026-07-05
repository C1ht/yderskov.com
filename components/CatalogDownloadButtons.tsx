"use client";

export default function CatalogDownloadButtons() {
  const handleAction = () => {
    window.open("/katalog-inspiration.pdf?v=3", "_blank");
  };

  return (
    <div className="catalog-actions">
      <button
        onClick={handleAction}
        className="btn-katalog-open"
        style={{ cursor: "pointer", border: "none", textAlign: "center" }}
      >
        Se og download vores katalog →
      </button>
    </div>
  );
}
