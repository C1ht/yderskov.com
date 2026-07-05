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
    <div className="process-steps">
      {STEPS.map((step, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={step.num}
            className={`process-step${isOpen ? " process-open" : ""}`}
            onClick={() => toggle(idx)}
            role="button"
            aria-expanded={isOpen}
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggle(idx)}
            style={{ cursor: "pointer" }}
          >
            <div className="process-step-num-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="process-step-num">{step.num}</div>
              <div className="process-step-chevron" style={{ color: "var(--light)" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
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
            <p className="process-step-title">{step.title}</p>
            <p className="process-step-desc">{step.desc}</p>
            <div
              className="process-step-details"
              style={{
                maxHeight: isOpen ? "220px" : "0px",
                opacity: isOpen ? 1 : 0,
                transition: "max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease, margin-top 0.25s ease",
                overflow: "hidden",
                marginTop: isOpen ? "0.75rem" : "0px",
              }}
            >
              <p className="process-step-details-text" style={{ fontSize: "0.72rem", color: "var(--text)", lineHeight: 1.6, fontWeight: 300 }}>
                {step.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
