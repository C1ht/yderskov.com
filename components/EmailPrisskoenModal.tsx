"use client";

import { useState } from "react";
import { submitLead } from "./submitLead";

interface Snapshot {
  grund: "vandret" | "skrånende";
  areal: string; rum: string;
  vinduer: string; terrassedøre: string;
  extVægge: string; tag: string;
  intVægge: string; gulv: string; lofter: string;
  vådrum: string;
}
interface Result { min: number; max: number; snap: Snapshot }

interface EmailPrisskoenModalProps {
  result: Result;
  onClose: () => void;
}

function fmt(n: number) {
  return new Intl.NumberFormat("da-DK", {
    style: "currency", currency: "DKK", maximumFractionDigits: 0,
  }).format(n);
}

export default function EmailPrisskoenModal({ result, onClose }: EmailPrisskoenModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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

    const s = result.snap;
    const nVin = parseInt(s.vinduer) || 0;
    const nDøre = parseInt(s.terrassedøre) || 0;
    const rum = parseInt(s.rum) || 0;

    const messageContent = `Brugeren har lavet en prisberegning og bedt om prisskøn via mail.

Specifikationer:
- Areal: ${s.areal} m²
- Antal rum: ${rum}
- Grund: ${s.grund}
- Facader: ${s.extVægge}
- Tag: ${s.tag}
- Vinduer: ${nVin} stk.
- Terrassedøre: ${nDøre} stk.
- Indvendige vægge: ${s.intVægge}
- Gulv: ${s.gulv}
- Lofter: ${s.lofter}
- Vådrum/installationer: ${s.vådrum}

Vejledende prisskøn:
- Laveste skøn: ${fmt(result.min)}
- Højeste skøn: ${fmt(result.max)}`;

    try {
      await submitLead({
        name,
        email,
        phone,
        projekt: "Prisberegning",
        message: messageContent,
        _page: window.location.pathname,
      });

      setSuccess(true);
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

        {success ? (
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <p className="hero-form-title" style={{ fontSize: "1.1rem", color: "#3a7a3a", marginBottom: "1rem", textTransform: "none", letterSpacing: "0" }}>
              Tak! Prisskønnet er sendt.
            </p>
            <p style={{ fontSize: "0.85rem", color: "var(--sub)", lineHeight: "1.5" }}>
              Vi har modtaget din prisberegning og sender dig en kopi via e-mail. Vi vender tilbage inden for 24 timer.
            </p>
            <button 
              onClick={onClose} 
              style={{ 
                marginTop: "1.5rem", 
                background: "var(--text)", 
                color: "#fff", 
                border: "none", 
                padding: "0.6rem 1.5rem", 
                borderRadius: "8.14px", 
                cursor: "pointer" 
              }}
            >
              Luk vindue
            </button>
          </div>
        ) : (
          <>
            <p className="hero-form-title" style={{ fontSize: "1.1rem", marginBottom: "0.5rem", textTransform: "none", letterSpacing: "0" }}>
              Send prisskøn til min e-mail
            </p>
            <p style={{ fontSize: "0.8rem", color: "var(--sub)", marginBottom: "1.5rem", lineHeight: "1.4" }}>
              Udfyld dine oplysninger, så sender vi det beregnede prisskøn direkte til din indbakke.
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

              <p style={{ fontSize: "0.68rem", color: "var(--sub)", textAlign: "center", marginTop: "-0.5rem", marginBottom: "0.8rem", lineHeight: "1.4" }}>
                Ved at indsende bekræfter du, at du accepterer at modtage vores nyhedsbrev.
              </p>

              <button type="submit" disabled={loading} style={{ width: "100%", background: "var(--text)", color: "#fff", border: "none", padding: "0.75rem", borderRadius: "8.14px", cursor: "pointer", fontWeight: 500, fontSize: "0.85rem" }}>
                {loading ? "Sender..." : "Send prisskøn →"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
