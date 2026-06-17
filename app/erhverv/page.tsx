import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Erhvervsbyggeri — Arkitekttegnede kontorer & cases | Yderskov",
  description:
    "Vi tegner erhvervsbyggeri, der matcher jeres behov — fra kontorer til udlejningsboliger og ombygninger. Få arkitektrådgivning til aftalt fast pris.",
  alternates: { canonical: "https://yderskov.com/erhverv" },
};

const projectGalleries = [
  {
    eyebrow: "Projekt",
    title: "Kontormiljø\nfor IT-virksomhed, Aalborg.",
    location: "Aalborg, Nordjylland",
    size: "320 m² kontor og faciliteter",
    year: "2022",
    description: "Indretning og design af et moderne, åbent kontormiljø for en IT-virksomhed i Aalborg. Der er lagt vægt på optimal udnyttelse af dagslyset, godt arbejdsmiljø og fremragende akustik ved brug af stilrene trælameller på vægge og lofter. Mødelokaler og kontorer er opdelt med rå glasvægspartier med sorte rammer, hvilket skaber en transparent og indbydende atmosfære, der styrker det visuelle fællesskab.",
    images: [
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp", alt: "Kontormiljø for IT-virksomhed, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-kontor.webp", alt: "Kontor i kontormiljø, Aalborg — Arkitekttegnestuen Yderskov" },
      { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-glasvæg.webp", alt: "Glasvæg i kontormiljø, Aalborg — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
  {
    eyebrow: "Projekt",
    title: "Fabrik ombygget\ntil lejligheder i bycentrum, Aarhus.",
    location: "Aarhus Centrum",
    size: "1.200 m² (12 lejligheder)",
    year: "2021",
    description: "Gennemgribende transformation af en historisk fabriksbygning i Aarhus bycentrum til moderne, karakterfulde loftslejligheder. Projektet bevarer bygningens rå sjæl med synlige teglstensvægge, stålspær og store, industrielle sprossevinduer. Lejlighederne er indrettet med moderne køkkener, lyse opholdsrum og private altaner, som komplementerer den rå, industrielle æstetik.",
    images: [
      { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget-køkken-og-altan.webp", alt: "Køkken og altan i ombygget fabrik, Aarhus — Arkitekttegnestuen Yderskov" },
    ],
    afterLabel: "Efter renovering",
    beforeLabel: "Før renovering",
    beforeImages: [
      { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget.webp", alt: "Ombygget fabrik i Aarhus centrum — Arkitekttegnestuen Yderskov" },
      { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget-lejligheder.webp", alt: "Fabrik ombygget til lejligheder i Aarhus — Arkitekttegnestuen Yderskov" },
    ],
    dark: true,
  },
  {
    eyebrow: "Projekt",
    title: "Udlejningsboliger,\nHals.",
    location: "Hals, Nordjylland",
    size: "6 boliger á 85-95 m²",
    year: "2023",
    description: "Nye, moderne udlejningsboliger opført i Hals som rækkehuse. Byggeriet er tegnet med fokus på vedligeholdelsesvenlige materialer af høj kvalitet — herunder en harmonisk kombination af lyse teglsten, mørk listebeklædning i træ og holdbare detaljer. Hver bolig har eget indgangsparti, private udearealer og en gennemtænkt planløsning, der henvender sig bredt til lejere.",
    images: [
      { src: "/images/Hals Rækkehuse/Hals-Aalborgvej20-udlejning-indgangsparti.webp", alt: "Indgangsparti, udlejningsboliger i Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hals Rækkehuse/Hals-Aalborgvej30-udlejning-.webp", alt: "Udlejningsbolig, Hals — Arkitekttegnestuen Yderskov" },
      { src: "/images/Hals Rækkehuse/Hals-Aalborgvej40-udlejning-.webp", alt: "Udlejningsbolig, Hals — Arkitekttegnestuen Yderskov" },
    ],
    dark: false,
  },
];

const faqItems = [
  {
    q: "Hvad koster erhvervsbyggeri med arkitekt?",
    a: "Prisen afhænger af projektets type og omfang. Vi giver et præcist tilbud baseret på jeres behov og ønsker.",
  },
  {
    q: "Hvilke typer erhvervsprojekter arbejder I med?",
    a: "Vi tegner kontorer, butikker, lager, produktionslokaler, restauranter og andre erhvervsbygninger.",
  },
  {
    q: "Håndterer I myndighedsgodkendelse for erhverv?",
    a: "Ja — vi søger og håndterer alle nødvendige tilladelser og godkendelser fra kommunen.",
  },
  {
    q: "Kan I tilpasse eksisterende erhvervslokaler?",
    a: "Absolut. Vi tegner ombygning og renovering af eksisterende erhvervslokaler til nye formål.",
  },
];

export default function ErhvervPage() {
  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": projectGalleries.map((p) => {
      const location = p.title.split(",").pop()?.trim().replace(".", "").replace(/\n/g, " ") || "Danmark";
      const isApartment = p.title.toLowerCase().includes("lejlighed") || p.title.toLowerCase().includes("bolig");
      const images = [
        ...p.images.map((img) => `https://yderskov.com${img.src}`),
        ...('beforeImages' in p && Array.isArray(p.beforeImages) ? p.beforeImages.map((img) => `https://yderskov.com${img.src}`) : [])
      ];
      return {
        "@type": isApartment ? "ApartmentComplex" : "CommercialProperty",
        "name": p.title.replace(/\n/g, " "),
        "description": `Arkitekttegnet erhvervs- eller boligbyggeri i ${location} udført af Yderskov Arkitekter.`,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": location,
          "addressCountry": "DK",
        },
        "image": images,
        "architect": {
          "@type": "LocalBusiness",
          "name": "Yderskov Arkitekter",
          "url": "https://yderskov.com/",
        },
      };
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Hals Rækkehuse/Hals-Aalborgvej40-udlejning-.webp", alt: "Udlejningsboliger i Hals — Arkitekttegnestuen Yderskov" }]}
        tag="Erhverv"
        subtitle="Erhverv"
        lines={[
          "Dine rammer sætter tonen for din forretning. Lad os tegne dem.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Erhvervsbyggeri</span>
              <h1 className="sec-hed">Erhvervsbyggeri<br />tegnet til jeres behov.</h1>
            </div>
            <div>
              <p className="body-p">
                Vi tegner erhvervsbyggeri der afspejler jeres virksomhed — fra funktionelle kontorlokaler til produktionsfaciliteter med arkitektonisk identitet. Læs mere om <Link href="/om" className="text-link">vores samlede proces</Link> eller se vores generelle <Link href="/priser" className="text-link">priser på erhverv og bolig</Link>.
              </p>
              <p className="body-p">
                Vi håndterer hele processen fra idé til indvielse — med focus på jeres budget og tidsplan.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Fortæl os om jeres projekt</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {projectGalleries.map((gallery, i) => (
        <section key={i} className={`s${gallery.dark ? " s-off" : ""}`}>
          <div className="s-inner">
            <div className="proj-header">
              <div>
                <span className="eyebrow">{gallery.eyebrow}</span>
                <h2 className="sec-hed" style={{ marginBottom: 0, whiteSpace: "pre-line" }}>
                  {gallery.title}
                </h2>
                {"location" in gallery && gallery.location && (
                  <p className="proj-meta">
                    {gallery.location}{gallery.size ? ` · ${gallery.size}` : ""}{gallery.year ? ` · ${gallery.year}` : ""}
                  </p>
                )}
                {"description" in gallery && gallery.description && (
                  <p className="proj-desc">{gallery.description}</p>
                )}
              </div>
            </div>
            {"afterLabel" in gallery && <p className="proj-grid-label">{gallery.afterLabel}</p>}
            <ImageGrid images={gallery.images} />
            {"beforeImages" in gallery && gallery.beforeImages && (
              <>
                <p className="proj-grid-label" style={{ marginTop: "2rem" }}>{gallery.beforeLabel}</p>
                <ImageGrid images={gallery.beforeImages} />
              </>
            )}
          </div>
        </section>
      ))}

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">2009</div><div className="stat-lbl">Grundlagt</div></div>
        </div>
      </div>

      <section className="s">
        <div className="s-inner">
          <span className="eyebrow">Spørgsmål og svar</span>
          <h2 className="sec-hed">FAQ — erhverv</h2>
          <div className="faq-grid">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item">
                <p className="faq-q">{item.q}</p>
                <p className="faq-a">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Fortæl os om<br />jeres erhvervsprojekt</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer.</p>
              <p><a href="tel:29723427">29 72 34 27</a></p>
              <p><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
