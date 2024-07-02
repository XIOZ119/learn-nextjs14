import { Suspense } from "react";
import MovieProvides from "../../../../../components/provide-info";

export default async function ProvidesDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div>
        <Suspense>
          <MovieProvides id={id} />
        </Suspense>
      </div>
    </>
  );
}
