import Gallery from "@/app/components/Gallery";
import type { Metadata } from "next";

export async function generateMetadata(
  { params }: { params: { term: string } }
): Promise<Metadata> {
  return {
    title: `Results for ${params.term}`,
  };
}

export default function SearchResults(
  { params }: { params: { term: string } }
) {
  return <Gallery topic={params.term} />;
}
