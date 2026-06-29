"use client";

import { useState } from "react";
import { submitLead } from "./submitLead";

export default function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("navn") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const phone = (data.get("telefon") as string)?.trim();

    if (!name || !email || !phone) {
      setError("Venligst udfyld både navn, e-mail og telefonnummer.");
      return;
    }

    setLoading(true);

    try {
      const ok = await submitLead({
        name,
        email,
        phone,
        projekt: (data.get("projekt") as string) || "Andet",
        message: (data.get("besked") as string) || "Kontaktformular",
        _page: window.location.pathname,
      });
      if (!ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Noget gik galt. Prøv igen, eller ring til os på 29 72 34 27.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="hero-form form-success">
        <div className="form-success-check" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="form-success-title">Tak for din besked!</p>
        <p className="form-success-text">
          Vi ringer dig op inden 24 timer.
        </p>
        <p className="form-success-text" style={{ marginTop: "0.6rem" }}>
          Haster det? Ring <a href="tel:29723427">29 72 34 27</a>
        </p>
      </div>
    );
  }

  return (
    <form className="hero-form" id="heroContactForm" onSubmit={handleSubmit}>
      <p className="hero-form-title">Fortæl os om dit projekt</p>
      <input type="text" name="navn" placeholder="Navn" required />
      <input type="email" name="email" placeholder="E-mail" required />
      <input type="tel" name="telefon" placeholder="Telefon" required />
      <select name="projekt" defaultValue="" required>
        <option value="" disabled>Projekttype</option>
        <option value="ny-villa">Ny villa</option>
        <option value="sommerhus">Sommerhus</option>
        <option value="tilbygning">Om- og tilbygning</option>
        <option value="erhverv">Erhverv</option>
        <option value="andet">Andet</option>
      </select>
      <textarea name="besked" placeholder="Beskriv kort dit projekt… (valgfrit)" />
      
      {error && (
        <p style={{ color: "#d93025", fontSize: "0.8rem", marginTop: "-0.2rem", marginBottom: "0.6rem", textAlign: "center", lineHeight: "1.4" }}>
          {error}
        </p>
      )}

      <p style={{ fontSize: "0.68rem", color: "var(--sub)", textAlign: "center", marginTop: "-0.2rem", marginBottom: "0.8rem", lineHeight: "1.4" }}>
        Ved at sende bekræfter du, at du accepterer at modtage nyhedsbrev samt eventuelt at blive kontaktet af tegnestuen.
      </p>

      <button type="submit" disabled={loading}>
        {loading ? "Sender…" : "Send besked →"}
      </button>
      <p className="form-or-call">
        Eller ring <a href="tel:29723427">29 72 34 27</a>
      </p>
      <p style={{ fontSize: "0.76rem", color: "var(--sub)", textAlign: "center", marginTop: "0.3rem" }}>
        Vi vender tilbage inden 24 timer
      </p>
    </form>
  );
}
