"use client";

import { useState } from "react";

const WORKER_URL = "https://black-unit-19e0.antonyderskov.workers.dev";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string)?.trim();
    if (!name) return;

    setLoading(true);

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone: data.get("phone"),
          message: data.get("message"),
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

  return (
    <div>
      <p className="form-title">Send os en besked</p>
      {submitted ? (
        <div className="form-success form-success-contact">
          <div className="form-success-check" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="form-success-title">Tak for din besked!</p>
          <p className="form-success-text">Vi ringer dig op inden 24 timer.</p>
          <p className="form-success-text" style={{ marginTop: "0.6rem" }}>
            Haster det? Ring <a href="tel:29723427">29 72 34 27</a>
          </p>
        </div>
      ) : (
        <form className="form-wrap" id="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="form-row-2">
            <input type="text" name="name" placeholder="Navn" required />
            <input type="tel" name="phone" placeholder="Telefon" />
          </div>
          <textarea name="message" rows={6} placeholder="Beskriv dit projekt…" />
          <button type="submit" className="form-btn" disabled={loading}>
            {loading ? "Sender…" : "Send besked"}
          </button>
          <p className="form-or-call">
            Eller ring <a href="tel:29723427">29 72 34 27</a>
          </p>
          <p className="form-note">Vi svarer inden 24 timer · Gratis og uforpligtende</p>
        </form>
      )}
    </div>
  );
}
