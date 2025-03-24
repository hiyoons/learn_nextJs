import { API_URL } from "../app/(home)/page";
import styles from '../app/styles/movie-info.module.css';
import MovieSimilar from "./movie-similar";


export async function getMovie(id: string) {
    // await new Promise((resolve) => setTimeout(resolve, 5000)); //의도적으로 로딩
    // console.log(`Fecthing Movies: ${Date.now()}`)
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} />
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>🌟{movie.vote_average.toFixed(1)}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage}
                target={"_blank"}
            >Homepage &rarr;</a>
            <MovieSimilar id={id} />
        </div>
    </div>
}