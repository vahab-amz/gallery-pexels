import type { ImageResults, Photo } from "@/models/images";
import { getPlaiceholder } from "plaiceholder";

async function getBase64(imageUrl: string) {

    try {
        const res = await fetch(imageUrl)

        if (!res.ok) {
            throw new Error('faild to fetch')
        }

        const buffer = await res.arrayBuffer()
        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        return base64

    } catch (e) {
        if (e instanceof Error) console.log(e.stack)
    }
}

export default async function addBlurredDataUrls(images: ImageResults): Promise<Photo[]> {

    const base64Result = images.photos.map(photo => getBase64(photo.src.large))
    const base64Promises = await Promise.all(base64Result)

    const photoWithBlur: Photo[] = images.photos.map((photo, i) => {
        photo.blurredDataURL = base64Promises[i]
        return photo
    })

    return photoWithBlur
}

