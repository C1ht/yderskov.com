import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import InspirationGallery from "@/components/InspirationGallery";

export const metadata: Metadata = {
  title: "Inspiration — arkitekttegnede projekter — Yderskov Arkitekter",
  description:
    "Lad dig inspirere af vores projekter — villaer, sommerhuse, tilbygninger og specialbyggerier tegnet af Yderskov Arkitekter i Aalborg og hele Danmark.",
  alternates: { canonical: "https://yderskov.dk/inspiration" },
};

const images: { src: string; alt: string }[] = [
  { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse-byview.webp", alt: "Udsigtsvilla med byudsigt, Frederikshavn — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-terrasse.webp", alt: "Terrasse ved sommerhus i Hals — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-2.webp", alt: "Moderniseret 50er-villa, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stur.webp", alt: "Stue i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-haveside.webp", alt: "Haveside på funkisvilla i Sæby — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-terrasse.webp", alt: "Sommerhus med pool, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø.webp", alt: "Kontormiljø for IT-virksomhed, Aalborg — Yderskov Arkitekter" },
  { src: "/images/Gjøl/Gjøl-ny-villa-have.webp", alt: "Ny villa med have, Gjøl — Yderskov Arkitekter" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-terrasse.webp", alt: "Terrasse ved nyt sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-bagside.webp", alt: "Villa med tilbygning i Hasseris — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken.webp", alt: "Færdigt køkken i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-haveside.webp", alt: "Villa med ensidig taghældning i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-terrasse.webp", alt: "Terrasse ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget-køkken-og-altan.webp", alt: "Køkken og altan i ombygget fabrik, Aarhus — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-garnterhaven-ny-villa.webp", alt: "Klassisk ny villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-pool.webp", alt: "Indendørs pool i sommerhus, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-haveside.webp", alt: "Haveside ved ombygning af 70er-villa, Hasseris — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken.webp", alt: "Køkken i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Ikarosvej/Aalborg-Ikarosvej-ny-villa-indkørsel.webp", alt: "Ny villa i Aalborg — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-indgang.webp", alt: "Indgang til sommerhus i Hals — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-vejside.webp", alt: "Ombygning af parcelhus, vejside, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast.webp", alt: "Bed and breakfast, Aalborg — Yderskov Arkitekter" },
  { src: "/images/Lerstien/Frederikshavn-lerstien-terrasse.webp", alt: "Terrasse på udsigtsvilla i Frederikshavn — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-bad.webp", alt: "Færdigt badeværelse i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-forside.webp", alt: "Forside på funkisvilla i Sæby — Yderskov Arkitekter" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej-indkørsel.webp", alt: "Nyt sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Hals Rækkehuse/Hals-Aalborgvej40-udlejning-.webp", alt: "Udlejningsbolig, Hals — Yderskov Arkitekter" },
  { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-haveside.webp", alt: "Funkisvilla med niveauforskelle, Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse.webp", alt: "Soveværelse i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-indgangsparti.webp", alt: "Indgangsparti ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-4.webp", alt: "Moderniseret 50er-villa, facade, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-glasvæg.webp", alt: "Glasvæg i kontormiljø, Aalborg — Yderskov Arkitekter" },
  { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside.webp", alt: "Moderne villa med kinesisk tag, Sæby — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-køkken.webp", alt: "Køkken i sommerhus med pool, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse.webp", alt: "Terrasse ved tilbygning i Aalborg — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-indkørsel.webp", alt: "Ombygning af parcelhus, indkørsel, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-badmiljø.webp", alt: "Badeværelse i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Gjøl/Gjøl-ny-villa-gavl.webp", alt: "Ny villa, gavl, Gjøl — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-køkken.webp", alt: "Køkken i sommerhus i Hals — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-gartnehaven-ny-villa-haveside.webp", alt: "Haveside på klassisk villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-overdækket-terrasse.webp", alt: "Overdækket terrasse på villa i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget-lejligheder.webp", alt: "Fabrik ombygget til lejligheder i Aarhus — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-vinduer.webp", alt: "Restaurerede vinduer i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Lerstien/Frederikshavn-lerstien-vejside.webp", alt: "Vejside på udsigtsvilla i Frederikshavn — Yderskov Arkitekter" },
  { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-terrasse.webp", alt: "Terrasse ved villa med tilbygning i Hasseris — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkken-.webp", alt: "Køkken i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Strandkanten/Sæby-strandkanten-ny-funkisvilla.webp", alt: "Ny funkisvilla i Sæby — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-aktivitetsrum.webp", alt: "Aktivitetsrum i sommerhus med pool, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-køkken.webp", alt: "Nyt køkken efter modernisering, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-vejside.webp", alt: "Ombygning af 70er-villa, vejside, Hasseris — Yderskov Arkitekter" },
  { src: "/images/Hals Rækkehuse/Hals-Aalborgvej20-udlejning-indgangsparti.webp", alt: "Indgangsparti, udlejningsboliger i Hals — Yderskov Arkitekter" },
  { src: "/images/Karetmagervej/Sæby-ny-villa-funkis-vejside.webp", alt: "Vejside på funkisvilla i Sæby — Yderskov Arkitekter" },
  { src: "/images/Torndalsvej/Hals-Torndalsvej-stue.webp", alt: "Stue i sommerhus i Hals — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-soveværelse.webp", alt: "Soveværelse i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast-køkken.webp", alt: "Køkken i bed and breakfast, Aalborg — Yderskov Arkitekter" },
  { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-indgangsparti.webp", alt: "Indgangsparti på funkisvilla i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Harald Jensens Vej/Løkken-sommerhus-Haraldjensensvej--udebruser.webp", alt: "Udebruser ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkken-kogesektion.webp", alt: "Kogesektion i køkken, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-bagside.webp", alt: "Ombygning af parcelhus, bagside, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-vejside.webp", alt: "Moderne villa med kinesisk tag, vejside, Sæby — Yderskov Arkitekter" },
  { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning-terrasse-og-plæne.webp", alt: "Terrasse og plæne ved tilbygning i Aalborg — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-køkken-spise-plads-alkove.webp", alt: "Køkken, spiseplads og alkove i poolhus, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-indkørsel.webp", alt: "Indkørsel til klassisk villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-1.webp", alt: "50er-villa før modernisering, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkkenbordplads.webp", alt: "Køkkenbordplads i lejlighedsrenovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Hanebjælken/Vestbjerg-Hanebjælken-ny-villa-værelsesfløj.webp", alt: "Værelsesfløj på villa i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Gjøl/Gjøl-ny-villa-indkørsel.webp", alt: "Ny villa, indkørsel, Gjøl — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-køkkenhylder.webp", alt: "Køkkenhylder i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Leonoravej villa tilbygning/Leonoravej-villa-tilbygning-vindue.webp", alt: "Vinduesparti i villa med tilbygning i Hasseris — Yderskov Arkitekter" },
  { src: "/images/Fabrik Aarhus/Aarhus-fabrik-ombygget.webp", alt: "Ombygget fabrik i Aarhus centrum — Yderskov Arkitekter" },
  { src: "/images/Løkken sommerhus/Løkken-Alexandravej-sommerhus-sidebygning.webp", alt: "Sidebygning ved sommerhus i Løkken — Yderskov Arkitekter" },
  { src: "/images/Gravenstenvej/Aalborg-gravenstenvej-renovering-terrassearbejde.webp", alt: "Terrassearbejde ved ombygning, Hasseris — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-forhave.webp", alt: "Ombygning af parcelhus, forhave, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-gang.webp", alt: "Gang under renovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Bed and breakfast/Aalborg-bed-and-breakfast-spiseområde.webp", alt: "Spiseområde i bed and breakfast, Aalborg — Yderskov Arkitekter" },
  { src: "/images/Højgården/Vestsbjerg-ny-funkisvilla-vejside.webp", alt: "Vejside på funkisvilla i Vestbjerg — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-1.webp", alt: "Moderniseret 50er-villa, indgang, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Neptunvej/Aalborg-neptunvej-tilbygning.haveside.webp", alt: "Haveside ved tilbygning i Aalborg — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-toilet.webp", alt: "Toilet i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/villa sæby/Sæby-ny-villa-kinesisk-tag-haveside-2.webp", alt: "Moderne villa med kinesisk tag, haveside, Sæby — Yderskov Arkitekter" },
  { src: "/images/Hals Rækkehuse/Hals-Aalborgvej30-udlejning-.webp", alt: "Udlejningsbolig, Hals — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-badmiljø.webp", alt: "Badmiljø i sommerhus med pool, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-4.webp", alt: "50er-villa før modernisering, facade, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-efter-haveside.webp", alt: "Ombygning af parcelhus, haveside, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Assensvej Kontormiljø/Aalborg-Assensvej-kontormiljø-kontor.webp", alt: "Kontor i kontormiljø, Aalborg — Yderskov Arkitekter" },
  { src: "/images/Gartnerhaven/Hjørring-gartnerhaven-ny-villa-gårdmiljø.webp", alt: "Gårdmiljø ved villa i Hjørring — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken-undervejs.webp", alt: "Køkken undervejs i renovering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-efter-3.webp", alt: "Moderniseret 50er-villa, haveside, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stuegulv.webp", alt: "Stuegulv i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Vestvej/Grønhøj-Vestvej-sommerhus-indkørsel.webp", alt: "Arkitekttegnet sommerhus i Grønhøj — Yderskov Arkitekter" },
  { src: "/images/Emils hus Olufsgade/Brønderslev-olufsgade-foer-vejside.webp", alt: "Parcelhus før ombygning, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Løvevej/Ålbæk-poolhus-toilet.webp", alt: "Badeværelse i sommerhus med pool, Ålbæk — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-2.webp", alt: "50er-villa før modernisering, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-niche-amerikanerkøleskab.webp", alt: "Niche til amerikanerkøleskab, Ågade — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-stue-soveværelseskik.webp", alt: "Kik fra stue mod soveværelse, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Godthåbsvej/Brønderslev-ombygning-foer-3.webp", alt: "50er-villa før modernisering, Brønderslev — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-soveværelse-stuekik.webp", alt: "Kik fra soveværelse mod stue, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1th-køkkengulv.webp", alt: "Køkkengulv i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
  { src: "/images/Ågade 25/Aalborg-Ågade-renovering-køkken-indpakket.webp", alt: "Køkken under montering, Ågade — Yderskov Arkitekter" },
  { src: "/images/Reberbansgade/Aalborg-reberbansgade-renovering-1tv-toilet.webp", alt: "Toilet i lejlighedsrenovering, Reberbansgade — Yderskov Arkitekter" },
];

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
            <Link href="/villaer" className="tag">Se projekter</Link>
          </div>
        </div>
      </section>

      <section className="s s-off">
        <div className="s-inner">
          <InspirationGallery images={images} />
        </div>
      </section>

      <CtaBand />
      <Footer />
    </>
  );
}
