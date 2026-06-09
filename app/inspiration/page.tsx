import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";

export const metadata: Metadata = {
  title: "Inspiration til dit byggeri — Se udvalgte cases | Yderskov",
  description:
    "Find inspiration til din nye villa, dit sommerhus eller din tilbygning. Se gallerier af færdige huse tegnet af Yderskov Arkitekter i hele landet.",
  alternates: { canonical: "https://yderskov.com/inspiration" },
};

export default function InspirationPage() {
  return (
    <>
      <Nav />

      <section className="s" style={{ paddingBottom: "2rem" }}>
        <div className="s-inner">
          <span className="eyebrow">Inspiration</span>
          <h1 className="sec-hed">Lad dig inspirere.</h1>
          <p className="body-intro" style={{ maxWidth: "560px" }}>
            Herunder ser du et udvalg af vores projekter — villaer, sommerhuse, tilbygninger og specialbyggerier. Alle tegnet fra bunden til den enkelte bygherre.
          </p>
          <div className="about-tags" style={{ marginTop: "1.5rem" }}>
            <Link href="/kontakt" className="tag tag-dark">Book gratis møde →</Link>
            <a
              href="/katalog-villaer-print.pdf"
              download="Yderskov-Arkitekter-Villa-katalog.pdf"
              className="tag"
              style={{ display: "inline-block", textDecoration: "none" }}
            >
              Hent inspirationskatalog (PDF)
            </a>
            <Link href="/villaer" className="tag">Se projekter</Link>
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Din proces</span>
              <h2 className="sec-hed">Sådan finder du<br />inspiration til projektet.</h2>
            </div>
            <div>
              <p className="body-p">
                At bygge nyt eller renovere er en stor beslutning. Når du går på opdagelse i vores galleri af tidligere projekter, skal du ikke kun se på det samlede udtryk, men også bide mærke i de små detaljer. Bemærk lysindfaldet fra de store vinduespartier, måden hvorpå terrassen smelter sammen med haven, eller hvordan materialerne patinerer smukt i det danske vejr.
              </p>
              <p className="body-p">
                Vores inspirationsgalleri spænder bredt — lige fra moderne funkisvillaer med rene linjer og rå detaljer, over klassiske murstenshuse med hyggelige kroge, til sommerhuse i pagt med naturen, hvor træ og store glasflader dominerer. Alle projekter er skabt med udgangspunkt i bygherrens drømme og grundens unikke beliggenhed.
              </p>
              <p className="body-p">
                Når vi holder vores første uforpligtende idémøde, tager vi udgangspunkt i dine egne referencer. Tag gerne billeder med fra vores portefølje eller andre steder, som taler til dig — ligesom parret, der henvendte sig med et postkort af et <Link href="/blog/villa-herresaede-noerholm-aalborg" className="text-link">engelsk herresæde</Link> og fik realiseret deres drømmehjem. Det hjælper os med at spore os ind på den helt rette arkitektoniske retning for dit kommende hjem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s">
        <div className="s-inner">
          <div className="text-2col">
            <div>
              <span className="eyebrow">Materialer</span>
              <h2 className="sec-hed">Kvalitet, der kan<br />mærkes og ses.</h2>
            </div>
            <div>
              <p className="body-p">
                Når vi designer din fremtidige bolig, tænker vi ikke kun i streger og rumfordeling. Materialevalget spiller en altafgørende rolle for både husets visuelle udtryk, dets holdbarhed og det daglige indeklima. Vi guider dig igennem fordele og ulemper ved alt fra rå betonflader, varmt cedertræ, rustikke teglsten til minimalistiske fibergipsløsninger.
              </p>
              <p className="body-p">
                Ved at vælge de rette materialer sikrer vi, at dit hus patinerer smukt over tid i det omskiftelige danske klima, og at vedligeholdelsen holdes på et niveau, der passer til dit temperament og din hverdag.
              </p>
              <p className="body-p">
                Vi lægger stor vægt på det sunde indeklima med fokus på naturligt lysindfald, god akustik og åndbare overflader, så dit nye hjem bliver et rart og sundt sted at leve for hele familien.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <InspirationGallery />
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
