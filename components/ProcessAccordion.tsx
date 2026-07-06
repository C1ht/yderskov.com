"use client";

import { useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Gratis idémøde på grunden",
    desc: "Vi mødes direkte på din byggegrund til et gratis, uforpligtende møde. Vi drøfter dine drømme og behov, og vurderer grundens muligheder.",
    details: "Vi kigger på solens gang, vindforhold, naboer, udsigt og eventuelle terrænforskelle. Her får du de første konkrete idéer til placering, og vi tager en snak om jeres budget og tidsplan, så vi sikrer et realistisk udgangspunkt fra dag ét."
  },
  {
    num: "02",
    title: "Skitseforslag",
    desc: "Vi udarbejder de første skitser med planløsninger og situationsplan samt et realistisk prisoverslag.",
    details: "I modtager de første visualiseringer og planløsninger af jeres nye hus eller tilbygning. Vi justerer skitserne sammen, indtil stregerne sidder lige i skabet. Heri indgår også et foreløbigt, men realistisk prisoverslag på byggeriet."
  },
  {
    num: "03",
    title: "Endeligt myndighedsprojekt",
    desc: "Når skitserne er godkendt, tegner og projekterer vi det fulde myndighedsprojekt med alle tekniske tegninger og snit.",
    details: "Vi laver de præcise tekniske tegninger, snit og situationsplaner, der kræves for at opfylde Bygningsreglementet (BR18). Det er dette materiale, kommunen skal bruge til at vurdere og godkende projektet."
  },
  {
    num: "04",
    title: "Byggetilladelse & Fast pris",
    desc: "Vi håndterer hele ansøgningen hos kommunen.",
    details: "Vi står for al korrespondance og ansøgning via Byg og Miljø-portalen. Samtidig modtager I et fast, bindende tilbud på selve opførelsen af byggeriet, så I har fuldstændig budgetsikkerhed."
  },
  {
    num: "05",
    title: "Byggefase med egne håndværkere",
    desc: "Vores egne faste murer- og tømrerhold opfører huset under tæt tilsyn fra tegnestuen.",
    details: "Vi bruger udelukkende vores egne faste, erfarne murer- og tømrerhold, som kender vores høje kvalitetskrav. Som arkitekttegnestue fører vi løbende tæt byggetilsyn på pladsen, så alle detaljer udføres præcis som tegnet."
  },
  {
    num: "06",
    title: "Nøglefærdig aflevering",
    desc: "Efter en grundig fælles gennemgang afleverer vi nøglerne.",
    details: "Vi gennemgår hele byggeriet rum for rum sammen med jer for at sikre, at alt er 100% fejlfrit. Herefter overdrager vi nøglerne til jeres nye hjem. Vi rådgiver desuden om drift, vedligeholdelse og færdigmelding."
  }
];

export default function ProcessAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="accordion-wrapper" style={{ marginTop: '1rem' }}>
      {STEPS.map((step, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={step.num}
            className={`accordion-item${isOpen ? " accordion-open" : ""}`}
            onClick={() => toggle(idx)}
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggle(idx)}
            style={{
              cursor: "pointer",
              background: "var(--white)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              marginBottom: "0.5rem",
              padding: "1.25rem 1.5rem",
              transition: "all 0.2s ease"
            }}
          >
            <div className="accordion-item-head" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--sub)" }}>{step.num}</div>
                <div style={{ fontSize: "1rem", fontWeight: 500, color: "var(--text)" }}>{step.title}</div>
              </div>
              <div style={{ color: "var(--text)" }}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            
            <div
              className="accordion-item-body"
              style={{
                maxHeight: isOpen ? "500px" : "0px",
                opacity: isOpen ? 1 : 0,
                transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, margin-top 0.25s ease",
                overflow: "hidden",
                marginTop: isOpen ? "1rem" : "0px",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "var(--text)", lineHeight: 1.6, marginBottom: "0.5rem", fontWeight: 400 }}>
                {step.desc}
              </p>
              <p style={{ fontSize: "0.85rem", color: "var(--sub)", lineHeight: 1.6, fontWeight: 300 }}>
                {step.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
