import { Suspense } from "react";
import Gallery from "./components/Gallery";
import Spinner from "./components/Spinner";


export default function Home() {
  return (
    <Suspense fallback={<Spinner/>}>
      <Gallery />
    </Suspense>
  );
}
