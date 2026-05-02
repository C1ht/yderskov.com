export default function imageLoader({
  src,
  width,
}: {
  src: string
  width: number
}): string {
  const withoutExt = src.replace(/\.[^.]+$/, '')
  return `/_opt/${width}${withoutExt}.webp`
}
