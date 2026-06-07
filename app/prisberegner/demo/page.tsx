import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrisResultDemo from "@/components/PrisResultDemo";

export const metadata = {
  robots: "noindex",
  alternates: { canonical: "https://yderskov.dk/prisberegner/demo" },
};

export default function PrisberegnDemoPage() {
  return (
    <>
      <Nav />
      <section className="s s-off">
        <div className="s-inner">
          <div style={{ marginBottom: "2rem" }}>
            <span className="eyebrow">Demo</span>
            <h1 className="sec-hed">Vejledende prisskøn</h1>
            <p className="body-p" style={{ marginTop: "1rem" }}>
              Dette er et forenklet prisskøn. Du kan prøve den fulde <Link href="/prisberegner" className="text-link">prisberegner her</Link>, eller gå til vores <Link href="/kontakt" className="text-link">kontaktside</Link> for at aftale et gratis idémøde.
            </p>
          </div>
          <PrisResultDemo />
        </div>
      </section>
      <Footer />
    </>
  );
}
