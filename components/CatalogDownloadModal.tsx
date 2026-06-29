"use client";

import { useState } from "react";

interface CatalogDownloadModalProps {
  mode: "open" | "download" | "print";
  onClose: () => void;
}

const WORKER_URL = "https://black-unit-19e0.antonyderskov.workers.dev";

export default function CatalogDownloadModal({ mode, onClose }: CatalogDownloadModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("navn") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("telefon") as string)?.trim();

    if (!name || !email || !phone) {
      setError("Venligst udfyld alle felter.");
      setLoading(false);
      return;
    }

    try {
      // 1. Send data to database / worker
      await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          projekt: "Katalog Download",
          message: `Handling: Hentning af katalog (${mode === "print" ? "Print-version" : mode === "open" ? "Se katalog" : "Download PDF"}). Side: ${window.location.pathname}`,
          _page: window.location.pathname,
        }),
      });

      // 2. Trigger the file opening/downloading action
      if (mode === "open") {
        window.open("/katalog-inspiration.pdf?v=3", "_blank");
      } else if (mode === "download") {
        const link = document.createElement("a");
        link.href = "/katalog-inspiration.pdf?v=3";
        link.download = "Yderskov-Arkitekter-Inspirationskatalog.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (mode === "print") {
        const link = document.createElement("a");
        link.href = "/katalog-inspiration-print.pdf?v=3";
        link.download = "Yderskov-Arkitekter-Inspirationskatalog-Print.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      onClose();
    } catch (err) {
      setError("Der opstod en fejl. Prøv igen, eller kontakt os direkte.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="lb-backdrop" style={{ display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }} onClick={onClose}>
      <div 
        className="hero-form" 
        style={{ 
          maxWidth: "400px", 
          width: "90%", 
          background: "#fff", 
          padding: "2rem", 
          borderRadius: "16px", 
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          position: "relative",
          zIndex: 1001
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          style={{ 
            position: "absolute", 
            top: "1rem", 
            right: "1rem", 
            background: "none", 
            border: "none", 
            fontSize: "1.2rem", 
            cursor: "pointer", 
            color: "var(--light)" 
          }}
          aria-label="Luk"
        >
          ✕
        </button>

        <p className="hero-form-title" style={{ fontSize: "1.1rem", marginBottom: "0.5rem", textTransform: "none", letterSpacing: "0" }}>
          Hent inspirationskatalog
        </p>
        <p style={{ fontSize: "0.8rem", color: "var(--sub)", marginBottom: "1.5rem", lineHeight: "1.4" }}>
          Udfyld venligst dine oplysninger for at hente inspirationskataloget med det samme.
        </p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="navn" placeholder="Navn" required style={{ width: "100%", padding: "0.6rem 0.8rem", marginBottom: "0.6rem", border: "1px solid var(--border)", borderRadius: "7.26px" }} />
          <input type="email" name="email" placeholder="E-mail" required style={{ width: "100%", padding: "0.6rem 0.8rem", marginBottom: "0.6rem", border: "1px solid var(--border)", borderRadius: "7.26px" }} />
          <input type="tel" name="telefon" placeholder="Telefon" required style={{ width: "100%", padding: "0.6rem 0.8rem", marginBottom: "1rem", border: "1px solid var(--border)", borderRadius: "7.26px" }} />
          
          {error && (
            <p style={{ color: "#d93025", fontSize: "0.8rem", marginBottom: "0.8rem", textAlign: "center" }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading} style={{ width: "100%", background: "var(--text)", color: "#fff", border: "none", padding: "0.75rem", borderRadius: "8.14px", cursor: "pointer", fontWeight: 500, fontSize: "0.85rem" }}>
            {loading ? "Henter..." : "Se katalog nu →"}
          </button>
        </form>
      </div>
    </div>
  );
}
