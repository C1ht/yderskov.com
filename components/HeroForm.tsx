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
    if (!name) return;

    setLoading(true);

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
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
      <div className="hero-form">
        <p style={{ color: "#fff", fontSize: "1rem", fontWeight: 300, textAlign: "center", padding: "2rem 0" }}>
          ✓ Tak! Vi vender tilbage inden 24 timer.
        </p>
      </div>
    );
  }

  return (
    <form className="hero-form" id="heroContactForm" onSubmit={handleSubmit} noValidate>
      <p className="hero-form-title">Fortæl os om dit projekt</p>
      <input type="text" name="navn" placeholder="Navn" required />
      <input type="tel" name="telefon" placeholder="Telefon" />
      <select name="projekt" defaultValue="">
        <option value="" disabled>Projekttype</option>
        <option value="ny-villa">Ny villa</option>
        <option value="sommerhus">Sommerhus</option>
        <option value="tilbygning">Om- og tilbygning</option>
        <option value="erhverv">Erhverv</option>
        <option value="andet">Andet</option>
      </select>
      <textarea name="besked" placeholder="Beskriv kort dit projekt…" />
      <button type="submit" disabled={loading}>
        {loading ? "Sender…" : "Send besked →"}
      </button>
    </form>
  );
}
