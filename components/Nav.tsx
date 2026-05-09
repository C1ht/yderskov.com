"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Hjem" },
  { href: "/villaer", label: "Villaer" },
  { href: "/sommerhuse", label: "Sommerhuse" },
  { href: "/tilbygninger", label: "Om- og tilbygninger" },
  { href: "/lejligheder", label: "Lejligheder" },
  { href: "/special", label: "Special" },
  { href: "/erhverv", label: "Erhverv" },
  { href: "/priser", label: "Priser" },
  { href: "/prisberegner", label: "Prisberegner" },
  { href: "/blog", label: "Blog" },
  { href: "/om", label: "Om" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          Arkitekt Yderskov
        </Link>

        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={pathname === href ? "nav-active" : ""}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/kontakt" className="nav-book-btn">
          Book gratis møde
        </Link>

        <button
          className={`hamburger${open ? " active" : ""}`}
          onClick={() => {
            const next = !open;
            if (next) document.body.classList.add("menu-open");
            else document.body.classList.remove("menu-open");
            setOpen(next);
          }}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
