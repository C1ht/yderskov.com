"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

type Child = { href: string; label: string };
type NavItem =
  | { href: string; label: string; children?: undefined }
  | { href?: undefined; label: string; children: Child[] };

const navItems: NavItem[] = [
  { href: "/", label: "Hjem" },
  {
    label: "Projekter",
    children: [
      { href: "/villaer", label: "Villaer" },
      { href: "/sommerhuse", label: "Sommerhuse" },
      { href: "/tilbygninger", label: "Om- og tilbygninger" },
      { href: "/lejligheder", label: "Lejligheder" },
      { href: "/special", label: "Special" },
      { href: "/erhverv", label: "Erhverv" },
      { href: "/inspiration", label: "Inspiration" },
    ],
  },
  {
    label: "Priser",
    children: [
      { href: "/priser", label: "Priser" },
      { href: "/prisberegner", label: "Prisberegner" },
    ],
  },
  { href: "/blog", label: "Blog" },

  {
    label: "Om os",
    children: [
      { href: "/om", label: "Om tegnestuen" },
      { href: "/arkitekt-aalborg", label: "Arkitekt Aalborg" },
      { href: "/arkitekt-sjaelland", label: "Arkitekt Sjælland" },
    ],
  },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number>(0);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setOpen(false);
      setActiveDropdown(null);
    });
    return () => cancelAnimationFrame(raf);
  }, [pathname]);



  useEffect(() => {
    if (!activeDropdown) return;
    const handler = (e: MouseEvent) => {
      if (innerRef.current && !innerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [activeDropdown]);

  const toggle = (label: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
      return;
    }
    const inner = innerRef.current;
    const btn = e.currentTarget;
    if (inner && btn) {
      const innerRect = inner.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      setDropdownLeft(btnRect.left - innerRect.left + btnRect.width / 2);
    }
    setActiveDropdown(label);
  };


  const isGroupActive = (item: NavItem) =>
    item.children?.some((c) => pathname === c.href) ?? false;

  const activeItem = navItems.find((i) => i.label === activeDropdown);

  const handleLinkClick = (e: React.MouseEvent, href?: string) => {
    if (href === "/" && pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <nav>
      <div className="nav-inner" ref={innerRef}>
        <Link href="/" className="nav-logo" aria-label="Yderskov Arkitekter — forside" onClick={(e) => handleLinkClick(e, "/")}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logofiles/SVG/Arkitect 5icon.svg" alt="Arkitekttegnestuen Yderskov logo" width={30} height={30} />
        </Link>

        <ul className="nav-links">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.label} className="nav-has-dropdown">
                <button
                  className={`nav-dropdown-trigger${isGroupActive(item) ? " nav-active" : ""}${activeDropdown === item.label ? " nav-dropdown-open" : ""}`}
                  onClick={(e) => toggle(item.label, e)}
                >
                  {item.label}
                  <svg className="nav-arrow" width="9" height="7" viewBox="0 0 9 7" aria-hidden="true">
                    <path d="M0.5 1L4.5 5.5L8.5 1" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? "nav-active" : ""}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="nav-actions">
          <a href="tel:29723427" className="nav-phone" aria-label="Ring 29 72 34 27">
            <span className="nav-phone-icon" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.93.37 1.84.72 2.71a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.37-1.29a2 2 0 0 1 2.11-.45c.87.35 1.78.59 2.71.72A2 2 0 0 1 22 16.92z"/></svg>
            </span>
            29 72 34 27
          </a>

          <Link href="/kontakt" className="nav-book-btn">
            Book gratis møde
          </Link>
        </div>

        <button
          className={`hamburger${open ? " active" : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        {activeDropdown && activeItem?.children && (
          <ul className="nav-dropdown" style={{ left: dropdownLeft }}>
            {activeItem.children.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className={pathname === c.href ? "nav-active" : ""}
                  onClick={(e) => handleLinkClick(e, c.href)}
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {open && (
        <div className="nav-mobile-menu">
          <button
            className="nav-mobile-close"
            onClick={() => setOpen(false)}
            aria-label="Luk menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="nav-mobile-group">
                <span className="nav-mobile-group-label">{item.label}</span>
                {item.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className={`nav-mobile-link${pathname === c.href ? " nav-active" : ""}`}
                    onClick={(e) => handleLinkClick(e, c.href)}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-mobile-link${pathname === item.href ? " nav-active" : ""}`}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </Link>
            )
          )}
          <Link href="/kontakt" className="nav-mobile-book" onClick={(e) => handleLinkClick(e, "/kontakt")}>
            Book gratis møde
          </Link>
        </div>
      )}
    </nav>
  );
}
