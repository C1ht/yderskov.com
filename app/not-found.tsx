import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <div style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "5rem 2rem",
        textAlign: "center",
        background: "linear-gradient(180deg, #fffcf5 0%, #ffffff 100%)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div style={{ maxWidth: "600px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            background: "#fef8e7",
            color: "#b87c08",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 12px rgba(184,124,8,0.1)",
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <span className="eyebrow" style={{ display: "block", color: "#b87c08", letterSpacing: "0.15em" }}>Fejl 404</span>
          <h1 className="sec-hed" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", margin: "1rem 0", fontWeight: 300 }}>Siden blev ikke fundet</h1>
          <p className="body-p" style={{ marginBottom: "2.5rem", color: "var(--sub)" }}>
            Beklager, men den side du leder efter findes desværre ikke. Den kan være flyttet, eller linket kan være forældet.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/" className="tag tag-dark" style={{ padding: "0.8rem 1.6rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem" }}>Gå til forsiden</Link>
            <Link href="/sommerhuse" className="tag" style={{ padding: "0.8rem 1.6rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem" }}>Se sommerhuse</Link>
            <Link href="/prisberegner" className="tag" style={{ padding: "0.8rem 1.6rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem" }}>Prisberegner</Link>
            <Link href="/kontakt" className="tag" style={{ padding: "0.8rem 1.6rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem" }}>Book gratis møde</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
