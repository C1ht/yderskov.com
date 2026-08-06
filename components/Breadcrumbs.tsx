import Link from "next/link";

export type Crumb = { label: string; href?: string };

/**
 * Visual breadcrumb trail + matching BreadcrumbList structured data.
 * Always starts implicitly from "Forside" — pass the trail after that,
 * ending with the current page (no href on the last item).
 */
export default function Breadcrumbs({
  items,
  noHero = false,
}: {
  items: Crumb[];
  /** Set true when this page has no full-height Hero above it (e.g. blog
   * posts), so the breadcrumb bar needs its own clearance below the fixed
   * site nav instead of relying on the Hero's height to push it down. */
  noHero?: boolean;
}) {
  const trail: Crumb[] = [{ label: "Forside", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://yderskov.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* Plain div, not <nav> — the site has a global `nav { position: fixed }`
          rule for the main header that would otherwise leak onto this. */}
      <div
        className={`breadcrumbs${noHero ? " breadcrumbs-no-hero" : ""}`}
        role="navigation"
        aria-label="Brødkrumme"
      >
        <div className="s-inner breadcrumbs-inner">
          <ol>
            {trail.map((item, i) => (
              <li key={i}>
                {item.href ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <span aria-current="page">{item.label}</span>
                )}
                {i < trail.length - 1 && (
                  <span className="breadcrumb-sep" aria-hidden="true">/</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
