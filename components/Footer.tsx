import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="ftop">
        <div className="fbrand fcol">
          <strong>Arkitekttegnestuen Yderskov ApS</strong>
          <p>
            Arkitekttegnestuen Yderskov ApS — arkitekttegnede villaer,
            sommerhuse og tilbygninger med fast pris i Aalborg og Danmark.
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
        <p>Copyright © 2024 Arkitekttegnestuen Yderskov ApS · CVR: 39391813</p>
        <p>LG-Revision, Nørresundby</p>
      </div>
    </footer>
  );
}
