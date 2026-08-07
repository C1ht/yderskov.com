import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privatlivspolitik — Arkitekttegnestuen Yderskov",
  description:
    "Læs hvordan Arkitekttegnestuen Yderskov behandler dine personoplysninger, når du bruger vores kontaktformular.",
  alternates: { canonical: "https://yderskov.com/privatlivspolitik" },
  openGraph: {
    type: "website",
    locale: "da_DK",
    url: "https://yderskov.com/privatlivspolitik",
    siteName: "Yderskov Arkitekter",
    images: [{ url: "https://yderskov.com/images/topbanner-new.webp" }],
  },
};

export default function PrivatlivspolitikPage() {
  return (
    <>
      <Nav />
      <Breadcrumbs noHero items={[{ label: "Privatlivspolitik" }]} />

      <section className="s" style={{ paddingTop: "2.5rem" }}>
        <div className="s-inner" style={{ maxWidth: "740px" }}>
          <span className="eyebrow">Om databehandling</span>
          <h1 className="sec-hed" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", marginBottom: "2rem" }}>
            Privatlivspolitik
          </h1>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginBottom: "0.6rem" }}>
            Dataansvarlig
          </h2>
          <p className="body-p">
            Arkitekttegnestuen Yderskov ApS<br />
            Danserhøj 38, 9700 Brønderslev<br />
            CVR: 39391813<br />
            <a href="mailto:cy@yderskov.com">cy@yderskov.com</a> · <a href="tel:29723427">29 72 34 27</a>
          </p>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginTop: "2rem", marginBottom: "0.6rem" }}>
            Hvilke oplysninger indsamler vi?
          </h2>
          <p className="body-p">
            Når du udfylder en kontaktformular på vores hjemmeside, indsamler vi de oplysninger du selv skriver: navn, e-mail, telefonnummer, projekttype, byggested og en beskrivelse af dit projekt.
          </p>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginTop: "2rem", marginBottom: "0.6rem" }}>
            Hvad bruger vi oplysningerne til?
          </h2>
          <p className="body-p">
            Udelukkende til at besvare din henvendelse og eventuelt indgå i et kundeforhold om dit byggeprojekt. Retsgrundlaget er databeskyttelsesforordningens artikel 6, stk. 1, litra b (opfyldelse af en aftale) og litra f (vores legitime interesse i at besvare henvendelser om vores ydelser).
          </p>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginTop: "2rem", marginBottom: "0.6rem" }}>
            Hvem deler vi oplysningerne med?
          </h2>
          <p className="body-p">
            Ingen. Oplysningerne sendes udelukkende til os selv og bruges ikke til markedsføring over for tredjepart, og vi sælger eller deler dem ikke med andre.
          </p>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginTop: "2rem", marginBottom: "0.6rem" }}>
            Hvor længe opbevarer vi oplysningerne?
          </h2>
          <p className="body-p">
            Bliver din henvendelse ikke til et kundeforhold, sletter vi oplysningerne senest 12 måneder efter sidste kontakt. Bliver du kunde hos os, opbevares oplysningerne så længe kundeforholdet varer, og derefter i henhold til gældende lovgivning (bl.a. bogføringsloven).
          </p>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginTop: "2rem", marginBottom: "0.6rem" }}>
            Cookies
          </h2>
          <p className="body-p">
            Vores hjemmeside anvender ikke cookies til tracking, markedsføring eller analyse.
          </p>

          <h2 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--text)", marginTop: "2rem", marginBottom: "0.6rem" }}>
            Dine rettigheder
          </h2>
          <p className="body-p">
            Du har ret til at få indsigt i, berigtiget eller slettet dine oplysninger, samt ret til at gøre indsigelse mod vores behandling. Kontakt os på <a href="mailto:cy@yderskov.com">cy@yderskov.com</a>. Du kan også klage til Datatilsynet, Carl Jacobsens Vej 35, 2500 Valby, <a href="mailto:dt@datatilsynet.dk">dt@datatilsynet.dk</a>, <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">www.datatilsynet.dk</a>.
          </p>

          <p className="body-p" style={{ marginTop: "2rem", color: "var(--light)", fontSize: "0.78rem" }}>
            Sidst opdateret: august 2026.
          </p>

          <p className="body-p" style={{ marginTop: "2rem" }}>
            <Link href="/kontakt" className="text-link">→ Kontakt os</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
