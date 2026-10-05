// Mirrors the Next.js image-loader.ts behaviour: next/image requests are
// served from the pre-generated responsive variants in /_opt/<width>/...
// (produced by scripts/optimize-images.mjs) as AVIF.
export const WIDTHS = [200, 400, 768, 1200, 1920];
const OPTIMIZABLE = /\.(jpe?g|png|webp)$/i;

export function isOptimizable(src: string): boolean {
	return src.startsWith("/images/") && OPTIMIZABLE.test(src);
}

export function variantSrc(src: string, width: number): string {
	const withoutExt = src.slice(0, src.lastIndexOf("."));
	const target = WIDTHS.find((w) => w >= width) ?? WIDTHS[WIDTHS.length - 1];
	return encodeURI(`/_opt/${target}${withoutExt}.avif`);
}

export function srcSet(src: string): string | undefined {
	if (!isOptimizable(src)) return undefined;
	const withoutExt = src.slice(0, src.lastIndexOf("."));
	return WIDTHS.map((w) => `${encodeURI(`/_opt/${w}${withoutExt}.avif`)} ${w}w`).join(", ");
}
