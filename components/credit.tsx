import styles from "../styles/credit-info.module.css";

interface ICreditProps {
  character: string;
  name: string;
  order: string;
  profile_path: string;
}

export default function Credit({
  character,
  name,
  order,
  profile_path,
}: ICreditProps) {
  return (
    <div className={styles.credit}>
      <img src={profile_path} className={styles.profile}></img>
      <p className={styles.charcter_name}>{character}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
}
