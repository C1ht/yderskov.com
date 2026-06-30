export default function imageLoader({ src, width }: { src: string; width: number }): string {
  // If the image is a local JPG, JPEG, PNG, or WebP under /images/, map to the optimized AVIF path
  if (src.startsWith("/images/") && /\.(jpe?g|png|webp)$/i.test(src)) {
    const withoutExt = src.replace(/\.[^.]+$/, "");
    return encodeURI(`/_opt/${width}${withoutExt}.avif`);
  }
  return src;
}

