import { Suspense } from "react";
import MovieSimilar from "../../../../../components/similars-info";

export default async function SimilarDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div>
        <Suspense fallback={<h1>Loading similar movie</h1>}>
          <MovieSimilar id={id} />
        </Suspense>
      </div>
    </>
  );
}
