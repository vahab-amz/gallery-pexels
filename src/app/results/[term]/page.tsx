

import Gallery from "@/app/components/Gallery";
import Spinner from "@/app/components/Spinner";
import type { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: Promise<{ term: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// static params for pre-rendering
export function generateStaticParams() {
  return [
    { term: "cats" },
    { term: "dogs" },
    { term: "nature" },
  ];
}

// generate dynamic metadata
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { term } = await params;
  return {
    title: `Results for ${term}`,
  };
}

// component with awaited params
export default async function SearchResults({ params }: Props) {
  const { term } = await params;
  
  return (
    <Suspense fallback={<Spinner/>}>
      <Gallery topic={term} />
    </Suspense>
  );
}
