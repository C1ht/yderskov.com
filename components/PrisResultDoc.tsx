"use client";

import { useState } from "react";
import { submitLead } from "./submitLead";

const BUDGET_TIPS = [
  { titel: "Vælg standardmaterialer", tekst: "Standardiserede produkter giver samme kvalitet som specialløsninger til 20–40 % lavere pris." },
  { titel: "Hold tilbygningen i ét plan", tekst: "Kælder og ekstra etager øger prisen markant. Et enkelt plan er det mest prisvenlige valg." },
  { titel: "Brug eksisterende konstruktioner", tekst: "Genbrug af eksisterende adgange og installationer sænker entrepriseprisen." },
  { titel: "Afklar alle ønsker inden opstart", tekst: "Ændringer undervejs er dyre. En grundig planlægningsfase forebygger fordyrende tillægsarbejder." },
  { titel: "Indhent mindst 3 tilbud", tekst: "Håndværkerpriser varierer 15–30 % på samme opgave. En arkitekt forhandler altid den bedste pris til jer — enten ved udbud eller ved prisforhandling med flere håndværkere." },
  { titel: "Vælg de rigtige håndværkere", tekst: "En arkitekt hjælper med at vurdere tilbud og sikre at du får kvalitet til den rigtige pris." },
  { titel: "Sæt en buffer af", tekst: "Afsæt 10–15 % af budgettet til uforudsete udgifter. Det giver ro i byggeprocessen og forebygger ubehagelige overraskelser." },
  { titel: "Vælg en enkel tagform", tekst: "Et sadeltag eller pultag er markant billigere end komplekse tagformer med valme, kviste og mange samlinger." },
  { titel: "Brug en arkitekt fra starten", tekst: "En arkitekt betaler sig selv hjem — ved at undgå fejl, forhandle priser og sikre at projektet holder budgettet fra første streg." },
];

function fmt(n: number) {
  return new Intl.NumberFormat("da-DK", {
    style: "currency", currency: "DKK", maximumFractionDigits: 0,
  }).format(n);
}

function today() {
  return new Date().toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });
}

type Snapshot = {
  grund: "vandret" | "skrånende";
  areal: string; rum: string;
  vinduer: string; terrassedøre: string;
  extVægge: string; tag: string;
  intVægge: string; gulv: string; lofter: string;
  vådrum: string;
};
type Result = { min: number; max: number; snap: Snapshot };

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="dr-row">
      <span className="dr-row-label">{label}</span>
      <span className="dr-row-value">{value}</span>
    </div>
  );
}

export default function PrisResultDoc({
  result,
  onReset,
}: {
  result: Result;
  onReset: (() => void) | null;
}) {
  const s     = result.snap;
  const nVin  = parseInt(s.vinduer)      || 0;
  const nDøre = parseInt(s.terrassedøre) || 0;
  const rum   = parseInt(s.rum)          || 0;

  const [navn, setNavn] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [lokation, setLokation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const message = `
Brugeren har foretaget en prisberegning på en tilbygning.

Specifikationer:
- Areal: ${s.areal} m²
- Rum: ${rum} stk.
- Terræn: ${s.grund === "skrånende" ? "Skrånende grund" : "Vandret grund"}
- Ydervægge: ${s.extVægge}
- Tag: ${s.tag}
- Indervægge: ${s.intVægge}
- Gulv: ${s.gulv}
- Lofter: ${s.lofter}
- Vådrum/installationer: ${s.vådrum}
- Vinduespartier: ${nVin} stk.
- Terrassedøre: ${nDøre} stk.

Estimeret prisområde:
- Minimum: ${fmt(result.min)}
- Maksimum: ${fmt(result.max)}
`;

    try {
      const ok = await submitLead({
        name: navn,
        email,
        phone: telefon,
        projekt: "Prisberegning Tilbygning",
        location: lokation,
        message,
        _page: window.location.pathname,
      });
      if (!ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Noget gik galt. Prøv igen, eller ring til os direkte på 29 72 34 27.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="dr">

      {/* ══ HEADER ══════════════════════════════════════════ */}
      <div className="dr-head">
        <div>
          <p className="dr-head-name">Arkitekttegnestuen Yderskov</p>
          <p className="dr-head-tagline">Tanke + Streger</p>
        </div>
        <div className="dr-head-right">
          <p className="dr-head-type">Vejledende prisskøn · Tilbygning</p>
          <p className="dr-head-date">{today()}</p>
        </div>
      </div>

      {/* ══ 1. PROJEKT ══════════════════════════════════════ */}
      <div className="dr-block">
        <p className="dr-eyebrow">1 · Projekt</p>
        <h2 className="dr-block-title">Projektbeskrivelse</h2>

        <div className="dr-hero-stats">
          <div className="dr-hero-stat">
            <span className="dr-hero-val">{s.areal} m²</span>
            <span className="dr-hero-lbl">Bygningens areal</span>
          </div>
          {rum > 0 && (
            <div className="dr-hero-stat">
              <span className="dr-hero-val">{rum}</span>
              <span className="dr-hero-lbl">Antal rum</span>
            </div>
          )}
          <div className="dr-hero-stat">
            <span className="dr-hero-val">{s.grund.charAt(0).toUpperCase() + s.grund.slice(1)}</span>
            <span className="dr-hero-lbl">Grund</span>
          </div>
        </div>

        <div className="dr-details">
          <div className="dr-details-col">
            <p className="dr-details-heading">Udvendig</p>
            <Row label="Facader" value={s.extVægge} />
            <Row label="Tag"     value={s.tag} />
            {nVin  > 0 && <Row label="Vinduer"      value={`${nVin} stk.`} />}
            {nDøre > 0 && <Row label="Terrassedøre" value={`${nDøre} stk.`} />}
          </div>
          <div className="dr-details-col">
            <p className="dr-details-heading">Indvendig</p>
            <Row label="Vægge"  value={s.intVægge} />
            <Row label="Gulv"   value={s.gulv} />
            <Row label="Lofter" value={s.lofter} />
            {s.vådrum !== "Ingen" && <Row label="Installationer" value={s.vådrum} />}
          </div>
        </div>
      </div>

      {/* ══ 2. PRISSKØN ═════════════════════════════════════ */}
      <div className="dr-block dr-block-price">
        <p className="dr-eyebrow">2 · Økonomi</p>
        <h2 className="dr-block-title">Vejledende prisskøn</h2>

        <div className="dr-price-cards">
          <div className="dr-price-card">
            <p className="dr-price-card-lbl">Laveste skøn</p>
            <p className="dr-price-card-num">{fmt(result.min)}</p>
          </div>
          <div className="dr-price-card">
            <p className="dr-price-card-lbl">Højeste skøn</p>
            <p className="dr-price-card-num">{fmt(result.max)}</p>
          </div>
        </div>
        <p className="dr-price-note">Alle priser er inkl. moms · OBS: Dette er udelukkende et uforpligtende, vejledende prisskøn</p>

        <div className="dr-incl-grid">
          <div className="dr-incl-col">
            <p className="dr-incl-heading">Inkluderet i skønnet</p>
            <ul className="dr-incl-list">
              <li>Håndværkerydelser</li>
              <li>Materialer til hver entreprise</li>
              <li>Overflader</li>
              <li>Konstruktioner</li>
              <li>m.v.</li>
            </ul>
          </div>
          <div className="dr-incl-col">
            <p className="dr-incl-heading">Ikke inkluderet</p>
            <ul className="dr-incl-list">
              <li>Byggetilladelse og gebyr</li>
              <li>Jordbundsundersøgelser</li>
              <li>Landinspektør</li>
              <li>Rådgiverhonorar</li>
              <li>Uforudsete udgifter</li>
            </ul>
          </div>
        </div>
      </div>

      {submitted ? (
        <div className="dr-email-success no-print">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "0.5rem" }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <p style={{ fontWeight: 500, fontSize: "0.95rem" }}>Prisskønnet er sendt!</p>
          <p style={{ fontSize: "0.82rem", opacity: 0.85, marginTop: "0.25rem" }}>Tjek din indbakke om et øjeblik. Vi har også modtaget dine specifikationer.</p>
        </div>
      ) : (
        <div className="dr-email-card no-print">
          <p style={{ fontSize: "0.68rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#b87c08" }}>Gem dit resultat</p>
          <h3 style={{ fontSize: "1.1rem", fontWeight: 300, color: "var(--text)", margin: "0.3rem 0 0.5rem 0" }}>Få prisskønnet sendt til din e-mail</h3>
          <p style={{ fontSize: "0.8rem", color: "var(--sub)", lineHeight: "1.5" }}>
            Indtast dine oplysninger nedenfor. Så sender vi dig en komplet rapport med dine specifikationer og prisovervejelser.
          </p>
          <form onSubmit={handleSendEmail} className="dr-email-form">
            <div className="dr-email-inputs">
              <input
                type="text"
                placeholder="Dit navn *"
                value={navn}
                onChange={(e) => setNavn(e.target.value)}
                required
                className="dr-email-input"
              />
              <input
                type="email"
                placeholder="Din e-mail *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="dr-email-input"
              />
              <input
                type="tel"
                placeholder="Dit telefonnummer *"
                value={telefon}
                onChange={(e) => setTelefon(e.target.value)}
                required
                className="dr-email-input"
              />
              <input
                type="text"
                placeholder="Hvor i landet skal der bygges? *"
                value={lokation}
                onChange={(e) => setLokation(e.target.value)}
                required
                className="dr-email-input"
              />
            </div>
            
            {error && (
              <p style={{ color: "#d93025", fontSize: "0.8rem", marginTop: "0.25rem" }}>
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} className="dr-email-submit-btn">
              {loading ? "Sender..." : "Send prisskøn →"}
            </button>
          </form>
        </div>
      )}

      <div className="dr-print-bar" style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
        <button type="button" className="dr-print-btn" onClick={() => window.print()}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
          </svg>
          Gem som PDF / Print prisoverslag
        </button>
      </div>

      {/* ══ 3. BUDGET-TIPS ══════════════════════════════════ */}
      <div className="dr-block">
        <p className="dr-eyebrow">3 · Råd</p>
        <h2 className="dr-block-title">Idéer til at holde budgettet</h2>
        <div className="dr-tips-grid">
          {BUDGET_TIPS.map((tip, i) => (
            <div key={i} className="dr-tip">
              <span className="dr-tip-num">{i + 1}</span>
              <div>
                <p className="dr-tip-titel">{tip.titel}</p>
                <p className="dr-tip-tekst">{tip.tekst}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ 4. ANBEFALING ═══════════════════════════════════ */}
      <div className="dr-block dr-block-rec">
        <p className="dr-eyebrow dr-eyebrow-light">4 · Anbefaling</p>
        <h2 className="dr-block-title dr-block-title-light">Vores anbefaling</h2>
        <p className="dr-rec-p">En arkitekt kan hjælpe med at prioritere, tilpasse løsninger og rådgive om materialevalg — så byggeriet holdes inden for den økonomiske ramme.</p>
        <p className="dr-rec-p">Et godt projekt starter med et godt overblik. En arkitekt hjælper med at få styr på alle detaljer — fra byggetilladelse og tegninger til valg af de rigtige løsninger og håndværkere og frem til det færdige byggeri.</p>
        <p className="dr-rec-p">Det giver en tryggere proces og et bedre slutresultat.</p>
      </div>

      {/* ══ CTA ════════════════════════════════════════════ */}
      <div className="dr-cta">
        <div className="dr-cta-text">
          <p className="dr-cta-headline">Få et gratis arkitektmøde</p>
          <p className="dr-cta-body">
            Dette prisskøn er et godt udgangspunkt — men et møde med en arkitekt giver dig en mere retvisende pris, konkrete løsninger og svar på alle dine spørgsmål. Vi kommer ud til dig. Gratis og uforpligtende.
          </p>
          <ul className="dr-cta-list">
            <li>Gratis første møde — vi kommer ud til dig</li>
            <li>Fast pris på arkitekthonoraret fra dag ét</li>
            <li>Vi styrer hele processen med egne håndværkere</li>
            <li>Svar inden 24 timer</li>
          </ul>
        </div>
        <div className="dr-cta-action">
          <p className="dr-cta-number-label">Ring direkte</p>
          <a href="tel:29723427" className="dr-cta-number">29 72 34 27</a>
          {/* Opkaldsknap kun på mobil */}
          <a href="tel:29723427" className="dr-cta-call-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Ring og book gratis møde
          </a>
          <a href="mailto:cy@yderskov.com" className="dr-cta-mail">cy@yderskov.com</a>
          {onReset && (
            <button type="button" className="dr-reset-btn" onClick={onReset}>
              Prøv et andet projekt
            </button>
          )}
        </div>
      </div>

      {/* ══ FIRMA-FOOTER ════════════════════════════════════ */}
      <div className="dr-foot">

        <div className="dr-foot-contact">
          <div>
            <p className="dr-foot-name">Arkitekttegnestuen Yderskov ApS</p>
            <div className="dr-foot-details">
              <div className="dr-foot-col">
                <p className="dr-foot-lbl">Adresse</p>
                <p className="dr-foot-val">Danserhøj 38<br />9700 Brønderslev</p>
              </div>
              <div className="dr-foot-col">
                <p className="dr-foot-lbl">Telefon</p>
                <p className="dr-foot-val">29 72 34 27</p>
              </div>
              <div className="dr-foot-col">
                <p className="dr-foot-lbl">Email</p>
                <p className="dr-foot-val">cy@yderskov.com</p>
              </div>
              <div className="dr-foot-col">
                <p className="dr-foot-lbl">CVR</p>
                <p className="dr-foot-val">39391813</p>
              </div>
            </div>
          </div>
        </div>

        <p className="dr-foot-disclaimer">
          Skønnet er uforpligtende og alene baseret på de oplyste arealer og valgte materialer. Faktiske byggeomkostninger afhænger af grundforhold, konstruktionsdetaljer, håndværkerpriser og projektets specifikke løsninger. Skønnet omfatter ikke byggetilladelse, jordbundsundersøgelser, landinspektør, rådgiverhonorar samt ukendte og uforudsete udgifter.
        </p>
      </div>

    </div>
  );
}
