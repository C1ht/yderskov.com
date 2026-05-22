import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt Yderskov Arkitekter — ring eller skriv",
  description:
    "Kontakt Arkitekttegnestuen Yderskov ApS. Gratis og uforpligtende første møde. Ring 29 72 34 27 eller skriv til cy@yderskov.com.",
  alternates: { canonical: "https://yderskov.dk/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Villa med tilbygning — Yderskov Arkitekter" }]}
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

      {/* Map */}
      <div className="map-wrap">
        <iframe
          src="https://maps.google.com/maps?q=57.250538,10.005283&z=15&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Arkitekttegnestuen Yderskov — Danserhøj 38, 9700 Brønderslev"
          aria-label="Kort over Arkitekttegnestuen Yderskov"
        />
      </div>

      <Footer />
    </>
  );
}
