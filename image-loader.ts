export default function imageLoader({ src, width }: { src: string; width: number }): string {
  // If the image is a local JPG, JPEG, or PNG under /images/, map to the optimized WebP path
  if (src.startsWith("/images/") && /\.(jpe?g|png)$/i.test(src)) {
    const withoutExt = src.replace(/\.[^.]+$/, "");
    return `/_opt/${width}${withoutExt}.webp`;
  }
  return src;
}
