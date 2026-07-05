import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <div style={{
        position: "relative",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 2rem",
        backgroundImage: "url('/images/Gjøl/Gjøl-ny-villa-have.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        {/* Dark overlay for contrast */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(2px)",
          zIndex: 1,
        }} />

        {/* Glassmorphic dark card */}
        <div style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "560px",
          width: "100%",
          background: "rgba(22, 22, 22, 0.88)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "16px",
          padding: "3rem 2.5rem",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
        }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "rgba(184, 124, 8, 0.15)",
            color: "#d4910a",
            marginBottom: "1.5rem",
            border: "1px solid rgba(212, 145, 10, 0.3)",
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          
          <span className="eyebrow" style={{ display: "block", color: "#d4910a", letterSpacing: "0.15em", fontSize: "0.8rem", textTransform: "uppercase" }}>Fejl 404</span>
          <h1 className="sec-hed" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", margin: "0.75rem 0 1.25rem 0", fontWeight: 300, color: "#ffffff", letterSpacing: "-0.01em" }}>Siden blev ikke fundet</h1>
          
          <p style={{ marginBottom: "2.5rem", color: "rgba(255, 255, 255, 0.7)", fontSize: "0.88rem", lineHeight: "1.6" }}>
            Beklager, men den side du leder efter findes desværre ikke. Den kan være flyttet, eller linket kan være forældet.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <Link href="/" style={{ padding: "0.8rem 1.4rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", background: "#d4910a", color: "#ffffff", border: "1px solid #d4910a", fontWeight: 400 }}>Gå til forsiden</Link>
            <Link href="/sommerhuse" style={{ padding: "0.8rem 1.4rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)", fontWeight: 400 }}>Se sommerhuse</Link>
            <Link href="/prisberegner" style={{ padding: "0.8rem 1.4rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)", fontWeight: 400 }}>Prisberegner</Link>
            <Link href="/kontakt" style={{ padding: "0.8rem 1.4rem", borderRadius: "8px", textDecoration: "none", fontSize: "0.85rem", background: "rgba(255,255,255,0.08)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.15)", fontWeight: 400 }}>Book gratis møde</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
