import fetchImages from "@/lib/fetchImages";
import type { ImageResults } from "@/models/images";
import ImgContainer from "./ImgContainer";
import addBlurredDataUrls from "@/lib/getBase64";

type Props = {
  topic?: string | undefined;
};

export default async function Gallery({ topic }: Props) {
  const url = !topic
    ? "https://api.pexels.com/v1/curated?per_page=80"
    : `https://api.pexels.com/v1/search?query=${topic}&per_page=80`;

  const images: ImageResults | undefined = await fetchImages(url);

  if (!images) {
    return <h1 className="text-red-700 font-semibold">No images founded</h1>;
  }

  const photosWithBlur = await addBlurredDataUrls(images);

  return (
    <section className="columns-2 md:columns-3 lg:columns-4 gap-4">
      {photosWithBlur &&
        photosWithBlur.map((photo) => (
          <ImgContainer photo={photo} key={photo.id} />
        ))}
    </section>
  );
}
