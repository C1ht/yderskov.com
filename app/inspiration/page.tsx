import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";

export const metadata: Metadata = {
  title: "Inspiration & galleri — Yderskov Arkitekter",
  description:
    "Få inspiration til dit byggeprojekt. Gå på opdagelse i vores galleri af afsluttede villaer, sommerhuse samt om- og tilbygninger.",
  alternates: { canonical: "https://yderskov.com/inspiration" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://yderskov.com/inspiration",
    siteName: "Yderskov Arkitekter",
    images: [{ url: "https://yderskov.com/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp" }],
  },
};

export default function InspirationPage() {
  const inspirationSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Inspiration & galleri — Yderskov Arkitekter",
    "description": "Få inspiration til dit byggeprojekt. Gå på opdagelse i vores galleri af afsluttede villaer, sommerhuse samt om- og tilbygninger.",
    "url": "https://yderskov.com/inspiration"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inspirationSchema) }}
      />
      <Nav />
      <Hero
        slides={[{ src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Inspiration galleri — Arkitekttegnestuen Yderskov" }]}
        tag="Inspiration"
        subtitle="Inspiration"
        lines={[
          "Gå på opdagelse i vores afsluttede projekter og få idéer til dit eget byggeri.",
          "Billedgalleri med eksempler på villaer, sommerhuse og tilbygninger.",
        ]}
        italicLines={[0, 1]}
        showTabs={false}
        showQuote={false}
        showForm={false}
      />

      {/* Intro */}
      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Galleri</span>
              <h1 className="sec-hed">Få inspiration til<br />dit næste projekt.</h1>
            </div>
            <div>
              <p className="body-p">
                Her har vi samlet et udvalg af billeder fra vores færdige byggerier. Du kan filtrere billederne efter kategori for at finde netop det, der interesserer dig – uanset om det er moderne villaer, sommerhuse, skitser eller indendørs detaljer.
              </p>
              <p className="body-p">
                Tag gerne dine yndlingsbilleder med som inspiration til vores første gratis, uforpligtende idémøde.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Book et gratis idémøde</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Galleri */}
      <section className="s s-off" style={{ paddingTop: "3rem" }}>
        <div className="s-inner">
          <InspirationGallery />
        </div>
      </section>

      <CtaBand />

      {/* Contact Form */}
      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Lad os drøfte<br />dit projekt</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer altid inden for 24 timer og tilbyder et gratis, uforpligtende idemøde direkte på din byggegrund.</p>
              <p><a href="tel:29723427">ring 29 72 34 27</a></p>
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
