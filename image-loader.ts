// Routes next/image requests to the pre-generated responsive variants in
// public/_opt/<width>/... (produced by scripts/optimize-images.mjs) instead
// of always serving the original, full-size file.
//
// Must stay in sync with WIDTHS in scripts/optimize-images.mjs and
// deviceSizes in next.config.ts.
const WIDTHS = [200, 400, 768, 1200, 1920];
const OPTIMIZABLE = /\.(jpe?g|png|webp)$/i;

export default function imageLoader({ src, width }: { src: string; width: number }): string {
  // Only locally-optimized images under /images/ have pre-generated variants.
  if (!src.startsWith("/images/") || !OPTIMIZABLE.test(src)) {
    return src;
  }

  // Snap up to the smallest available breakpoint that still covers the
  // requested width, falling back to the largest one if the request is
  // bigger than anything we generated (e.g. a 2x lightbox request).
  const target = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
  const withoutExt = src.slice(0, src.lastIndexOf("."));

  return `/_opt/${target}${withoutExt}.webp`;
}
