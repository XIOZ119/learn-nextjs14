import { API_URL } from "../app/contants";
import { getMovie } from "./movie-info";
import Similar from "./similar";
import styles from "../styles/movie-info.module.css";

async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}/similar`);
  return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
  const similars = await getSimilar(id);
  const movies = await getMovie(id);
  return (
    <>
      <div>
        <div>
          <div className={styles.topTitle}>
            <h1 className={styles.title}>Movies similar to "{movies.title}"</h1>
          </div>
          {similars.map((similar) => (
            <Similar
              title={similar.title}
              poster_path={similar.poster_path}
              overview={similar.overview}
              vote_average={similar.vote_average}
              id={similar.id}
              key={id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
