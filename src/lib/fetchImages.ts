import type { ImageResults } from "@/models/images";
import { ImagesSchemaWithPhoto } from "@/models/images";
import env from "./env";

export default async function fetchImages(url: string): Promise<ImageResults | undefined> {

    try {
        const res = await fetch(url, {
            headers: {
                Authorization: env.PEXELS_API_KEYS
            }
        })

        if (!res) throw new Error("Fetch images error")

        const imagesResult: ImageResults = await res.json()
        const parseData = ImagesSchemaWithPhoto.parse(imagesResult)

        if (parseData.total_results === 0) return undefined
        return parseData
    } catch (e) {
        if (e instanceof Error) console.log(e.stack)
    }
}
