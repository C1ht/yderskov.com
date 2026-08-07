"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer>
      <div className="ftop">
        <div className="fbrand fcol">
          <Link href="/" aria-label="Yderskov Arkitekter — forside" onClick={handleLogoClick}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logofiles/SVG/Arkitect 5.svg" alt="Arkitekttegnestuen Yderskov" className="footer-logo" width="160" height="128" />
          </Link>
          <p>
            Arkitekttegnede villaer, sommerhuse og tilbygninger med fast pris i Aalborg og Danmark.
          </p>
        </div>

        <div className="fcol">
          <p className="fcol-h">Ydelser</p>
          <ul>
            <li><Link href="/villaer">Villaer</Link></li>
            <li><Link href="/sommerhuse">Sommerhuse</Link></li>
            <li><Link href="/tilbygninger">Tilbygninger</Link></li>
            <li><Link href="/erhverv">Erhverv</Link></li>
          </ul>
        </div>

        <div className="fcol">
          <p className="fcol-h">Firma</p>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/om">Om</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div className="fcol">
          <p className="fcol-h">Kontakt</p>
          <ul>
            <li><a href="mailto:cy@yderskov.com">cy@yderskov.com</a></li>
            <li><a href="tel:29723427">29 72 34 27</a></li>
          </ul>
        </div>
      </div>

      <div className="fbot">
        <div>
          <p>Copyright © 2024 Arkitekttegnestuen Yderskov ApS</p>
          <p style={{ marginTop: "0.25rem", opacity: 0.65 }}>Der tages forbehold for prisændringer og trykfejl</p>
          <p style={{ marginTop: "0.25rem" }}><Link href="/privatlivspolitik">Privatlivspolitik</Link></p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p>CVR: 39391813</p>
          <p style={{ marginTop: "0.25rem" }}>Forsikringsselskab: TopDanmark</p>
          <p style={{ marginTop: "0.25rem" }}>Bank: Sparekassen Danmark, Brønderslev</p>
          <p style={{ marginTop: "0.25rem" }}>Revisor: LG-Revision, Nørresundby</p>
        </div>
      </div>
    </footer>
  );
}
