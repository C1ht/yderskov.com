"use client";

import { useState } from "react";

const WORKER_URL = "https://black-unit-19e0.antonyderskov.workers.dev";

export default function HeroForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("navn") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    if (!name || !email) return;

    setLoading(true);

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: data.get("telefon"),
          projekt: data.get("projekt"),
          message: data.get("besked"),
          _page: window.location.pathname,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      alert("Noget gik galt. Prøv igen, eller ring til os på 29 72 34 27.");
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
      <input type="tel" name="telefon" placeholder="Telefon" required />
      <input type="email" name="email" placeholder="Email" required />
      <select name="projekt" defaultValue="" required>
        <option value="" disabled>Projekttype</option>
        <option value="ny-villa">Ny villa</option>
        <option value="sommerhus">Sommerhus</option>
        <option value="tilbygning">Om- og tilbygning</option>
        <option value="erhverv">Erhverv</option>
        <option value="andet">Andet</option>
      </select>
      <textarea name="besked" placeholder="Beskriv kort dit projekt… (valgfrit)" />
      <button type="submit" disabled={loading}>
        {loading ? "Sender…" : "Send besked →"}
      </button>
      <p className="form-or-call">
        Eller ring <a href="tel:29723427">29 72 34 27</a>
      </p>
    </form>
  );
}
