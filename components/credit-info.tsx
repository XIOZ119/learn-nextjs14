import { API_URL } from "../app/contants";
import Credit from "./credit";
import { getMovie } from "./movie-info";
import styles from "../styles/credit-info.module.css";

export async function getCredit(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredit({ id }: { id: string }) {
  const credits = await getCredit(id);
  const movies = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movies.poster_path}
        alt={movies.title}
        className={styles.poster}
      ></img>
      <div className={styles.info}>
        <h2 className={styles.title}>🎭 Cast Information</h2>
        <div className={styles.detail}>
          {credits.map((credit) => (
            <Credit
              key={id}
              name={credit.name}
              character={credit.character}
              order={credit.order}
              profile_path={credit.profile_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
