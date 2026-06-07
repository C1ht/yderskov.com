export default function imageLoader({ src, width }: { src: string; width: number }): string {
  // If the image is a local JPG, JPEG, PNG, or WebP under /images/, map to the optimized WebP path
  if (src.startsWith("/images/") && /\.(jpe?g|png|webp)$/i.test(src)) {
    const withoutExt = src.replace(/\.[^.]+$/, "");
    return `/_opt/${width}${withoutExt}.webp`;
  }
  return src;
}
