import Link from "next/link";
import styles from "../styles/movie-info.module.css";
import { API_URL } from "../app/contants";

interface ISimilarProps {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: string;
  id: string;
}

async function getSimilar(id: string) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function Similar({
  title,
  poster_path,
  overview,
  vote_average,
  id,
}: ISimilarProps) {
  const similar = await getSimilar(id);
  return (
    <>
      <div className={styles.container}>
        <img src={poster_path} alt={title} className={styles.poster} />
        <div className={styles.info}>
          <h1 className={styles.title}>{title}</h1>
          <h3>✨{vote_average}</h3>
          <p>{overview}</p>
          <a href={similar.homepage} target={"_blank"}>
            Homepage &rarr;
          </a>
          <Link href={`/movies/${id}/credits`}>Detail Information</Link>
          <Link href={`/movies/${id}/similars`}>Similar movies</Link>
        </div>
      </div>
    </>
  );
}
