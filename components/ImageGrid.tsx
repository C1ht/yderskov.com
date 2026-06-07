
import Image from "next/image";

type ImageItem = { src: string; alt: string; imgStyle?: React.CSSProperties };

export default function ImageGrid({ images }: { images: ImageItem[] }) {
  return (
    <div className="grid-3">
      {images.map((img) => (
        <div key={img.src} className="card">
          <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover", ...img.imgStyle }} />
        </div>
      ))}
    </div>
  );
}
