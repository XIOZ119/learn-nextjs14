import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-video";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params: { id } }: IParams) {
  return (
    <>
      <div>
        {/*Suspense component에는 fallback 이라는 prop이 있고, 이건 component가 await되는 동안 표시할 메시지를 render할 수 있게 해줌.  */}
        <Suspense fallback={<h1>Lading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Lading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    </>
  );
}
