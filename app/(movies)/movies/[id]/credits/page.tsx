import { Suspense } from "react";
import MovieCredit from "../../../../../components/credit-info";

export default async function CreditDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div>
        <Suspense fallback={<h1>Loading credit info</h1>}>
          <MovieCredit id={id} />
        </Suspense>
      </div>
    </>
  );
}
