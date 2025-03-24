import { API_URL } from "../app/(home)/contant";
import styles from '../app/styles/movie-similar.module.css';
export async function getMovie(id: string) {

    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar({ id }: { id: string }) {
    const movies = await getMovie(id);
    return (<>
        <h2>👓Similar Movies</h2>
        <div className={styles.container}>


            {
                movies.map((movie) => (

                    <p key={movie.id}>{movie.title}</p>

                ))
            }

        </div>
    </>
    )
}