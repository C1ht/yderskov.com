"use client";

export default function CatalogDownloadButtons() {
  const handleAction = (actionMode: "open" | "download" | "print") => {
    if (actionMode === "open") {
      window.open("/katalog-inspiration.pdf?v=3", "_blank");
    } else if (actionMode === "download") {
      const link = document.createElement("a");
      link.href = "/katalog-inspiration.pdf?v=3";
      link.download = "Yderskov-Arkitekter-Inspirationskatalog.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (actionMode === "print") {
      const link = document.createElement("a");
      link.href = "/katalog-inspiration-print.pdf?v=3";
      link.download = "Yderskov-Arkitekter-Inspirationskatalog-Print.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <>
      <div className="catalog-actions">
        <button
          onClick={() => handleAction("open")}
          className="btn-katalog-open"
          style={{ cursor: "pointer", border: "none", textAlign: "center" }}
        >
          Se vores inspirationskatalog →
        </button>
        <button
          onClick={() => handleAction("download")}
          className="btn-katalog-download"
          style={{ cursor: "pointer", border: "none", textAlign: "center" }}
        >
          Download inspirationskatalog
        </button>
      </div>

      <div className="catalog-extra">
        <button
          onClick={() => handleAction("print")}
          className="catalog-print-link"
          style={{ cursor: "pointer", border: "none", background: "none", padding: 0, textDecoration: "underline", font: "inherit" }}
        >
          Hent print-venlig version (hvid baggrund)
        </button>
      </div>
    </>
  );
}
