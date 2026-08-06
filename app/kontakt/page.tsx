import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import InteractiveMap from "@/components/InteractiveMap";

export const metadata: Metadata = {
  title: "Kontakt Yderskov Arkitekter — Ring eller book gratis møde",
  description:
    "Har du et byggeprojekt i tankerne? Kontakt Yderskov Arkitekter i dag. Vi tilbyder et gratis og uforpligtende idémøde direkte på din byggegrund.",
  alternates: { canonical: "https://yderskov.com/kontakt" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://yderskov.com/kontakt",
    siteName: "Yderskov Arkitekter",
    images: [{ url: "https://yderskov.com/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp" }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: "https://yderskov.com/kontakt",
  mainEntity: {
    "@type": "ProfessionalService",
    name: "Yderskov Arkitekter",
    url: "https://yderskov.com",
    telephone: "+4529723427",
    email: "cy@yderskov.com",
    address: { "@type": "PostalAddress", addressCountry: "DK", addressRegion: "Nordjylland" },
    areaServed: { "@type": "Country", name: "Danmark" },
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Villa med tilbygning — Arkitekttegnestuen Yderskov" }]}
        showTabs={false}
        tag="Kontakt"
        lines={[
          "I har tankerne, vi sætter stregerne.",
          "Byggeri tegnet kun til jer, til jeres grund, jeres ønsker og jeres budget.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[1, 2]}
      />

      <section className="s">
        <div className="s-inner">
          <div style={{ marginBottom: "2.5rem" }}>
            <span className="eyebrow">Kontakt</span>
            <h1 className="sec-hed">Kontakt os</h1>
          </div>
          <div className="contact-layout">
            {/* Firma info */}
            <div>
              <p className="firm-name">Arkitekttegnestuen Yderskov ApS</p>
              <div className="info-list">
                <div className="info-row">
                  <span className="info-label">Adresse</span>
                  <span className="info-val">Danserhøj 38<br />9700 Brønderslev</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Telefon</span>
                  <span className="info-val"><a href="tel:29723427">29 72 34 27</a></span>
                </div>
                <div className="info-row">
                  <span className="info-label">Email</span>
                  <span className="info-val"><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></span>
                </div>
                <div className="info-row">
                  <span className="info-label">CVR</span>
                  <span className="info-val">39391813</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Bank</span>
                  <span className="info-val">Sparekassen Danmark, Brønderslev</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Revisor</span>
                  <span className="info-val">LG Revision, Nørresundby</span>
                </div>
              </div>

              <ul style={{ listStyle: "none", marginTop: "2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--sub)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ color: "#3a7a3a", fontWeight: 400 }}>✓</span> Svar inden 24 timer
                </li>
                <li style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--sub)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ color: "#3a7a3a", fontWeight: 400 }}>✓</span> Gratis og uforpligtende første møde
                </li>
                <li style={{ fontSize: "0.8rem", fontWeight: 300, color: "var(--sub)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <span style={{ color: "#3a7a3a", fontWeight: 400 }}>✓</span> 300+ gennemførte projekter
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Det første skridt</span>
              <h2 className="sec-hed">Det gratis idémøde<br />— hvad kan du forvente?</h2>
            </div>
            <div>
              <p className="body-p">
                Et byggeprojekt starter altid med en god snak. Vi tilbyder et gratis og helt uforpligtende idémøde, hvor vi typisk mødes på din byggegrund eller på den eksisterende ejendom. Her gennemgår vi dine ønsker, behov og budgetrammer, og vi kigger på de fysiske rammer samt eventuelle lokalplaner, der har indflydelse på projektet.
              </p>
              <p className="body-p">
                Under mødet lytter vi til dine visioner og kommer med vores umiddelbare faglige input til, hvordan grunden eller huset kan udnyttes bedst muligt. Se gerne vores galleri af <Link href="/villaer" className="text-link">villaer</Link>, <Link href="/sommerhuse" className="text-link">sommerhuse</Link> eller <Link href="/tilbygninger" className="text-link">tilbygninger</Link> for konkrete eksempler. Vi taler også om de økonomiske realiteter og <Link href="/priser" className="text-link">vores faste priser</Link>, så vi fra start har afstemt forventningerne.
              </p>
              <p className="body-p">
                Efter mødet udarbejder vi et skriftligt tilbud på arkitektydelsen. Du får dermed et klart overblik over processen og økonomien, før du beslutter dig for at gå videre. Det er enkelt, trygt og helt gennemskueligt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <InteractiveMap />

      <Footer />
    </>
  );
}
