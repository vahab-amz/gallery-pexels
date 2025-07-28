import Gallery from "@/app/components/Gallery";
import type { Metadata } from "next";

export function generateMetadata({ params }: { params: { term: string } }): Metadata {
  return {
    title: `Results for ${params.term}`,
  };
}

export default function SearchResults({ params }: { params: { term: string } }) {
  return <Gallery topic={params.term} />;
}
