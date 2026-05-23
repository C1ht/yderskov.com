import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import ImageGrid from "@/components/ImageGrid";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Specialbyggeri — arkitekttegnet — Yderskov Arkitekter",
  description:
    "Specialbyggeri og unikke projekter tegnet af arkitekt. Wellness, carporte, udhuse, garager og meget mere. Gratis første møde.",
  alternates: { canonical: "https://yderskov.dk/special" },
};


export default function SpecialPage() {
  return (
    <>
      <Nav />
      <Hero
        slides={[{ src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp", alt: "Bed and breakfast, Aalborg — Yderskov Arkitekter" }]}
        tag="Special"
        subtitle="Special"
        lines={[
          "En motorcykelgarage, et dansestudio, en hangar til dit sportsfly, et astronomisk observatorium på taget eller noget helt andet. Vi tegner det andre ikke tør.",
          "Gratis og uforpligtende første idemøde. Vi kommer ud til jer.",
        ]}
        italicLines={[0, 1]}
      />

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Specialprojekter</span>
              <h1 className="sec-hed">Specialbyggeri<br />tegnet til formålet.</h1>
            </div>
            <div>
              <p className="body-p">
                Ikke alle projekter passer i en standardkasse. Vi tegner særlige byggerier — fra wellness og poolhuse til carporte, annekser og erhvervsbygninger med en unik karakter.
              </p>
              <p className="body-p">
                Uanset hvad du drømmer om, starter vi med at lytte — og finder den bedste arkitektoniske løsning til netop dit projekt.
              </p>
              <p className="body-p">
                <Link href="#kontakt" className="text-link">→ Fortæl os om dit projekt</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <div className="proj-header">
            <div>
              <span className="eyebrow">Projekt</span>
              <h2 className="sec-hed" style={{ marginBottom: 0 }}>Bed &amp; Breakfast,<br />Aalborg.</h2>
            </div>
          </div>
          <ImageGrid images={[
            { src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp", alt: "Bed and breakfast, Aalborg — Yderskov Arkitekter" },
            { src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast-køkken.webp", alt: "Køkken i bed and breakfast, Aalborg — Yderskov Arkitekter" },
            { src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast-spiseområde.webp", alt: "Spiseområde i bed and breakfast, Aalborg — Yderskov Arkitekter" },
          ]} />
        </div>
      </section>

      <div className="stats-bg">
        <div className="stats-inner">
          <div className="stat"><div className="stat-num">24<sup> timer</sup></div><div className="stat-lbl">Svar inden</div></div>
          <div className="stat"><div className="stat-num">300<sup>+</sup></div><div className="stat-lbl">Projekter gennemført</div></div>
          <div className="stat"><div className="stat-num">10<sup>+</sup></div><div className="stat-lbl">Igangværende projekter</div></div>
          <div className="stat"><div className="stat-num">2009</div><div className="stat-lbl">Grundlagt</div></div>
        </div>
      </div>

      <CtaBand />

      <section className="s form-bg" id="kontakt">
        <div className="s-inner">
          <div className="form-layout">
            <div className="form-meta">
              <span className="eyebrow">Kontakt os</span>
              <h2 className="sec-hed">Fortæl os om<br />dit specielle projekt</h2>
              <p style={{ marginTop: "1.5rem" }}>Ring eller skriv til os. Vi svarer inden 24 timer og er klar til en uforpligtende snak.</p>
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
