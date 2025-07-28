import type { Photo } from "@/models/images";

import Image from "next/image";
import Link from "next/link";

type props = {
  photo: Photo;
};

export default function ImgContainer({ photo }: props) {
  return (
    <div className="mb-4 break-inside-avoid group">
      <Link href={photo.url} target="_blank">
        <Image
          src={photo.src.large}
          alt={photo.alt}
          width={600}
          height={Math.round((photo.height / photo.width) * 600)}
          className="w-full h-auto rounded-lg group-hover:opacity-75 transition-opacity duration-150"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={photo.blurredDataURL}
        />
      </Link>
    </div>
  );
}
