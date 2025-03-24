import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "./contant";
export const metadata = {
    title: "Home",
}


async function getMovies() {
    const response = await fetch(API_URL);
    const json = response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();

    return <div className={styles.container}>
        {movies.map(movie => (
            <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title} />
        ))}



    </div>
}

//useState,useEffect를 사용하지 않고 구현 - useState,useEffect에서는 브라우저가 fetch
//next js는 만약 server component를 이용한다면 fetch된 url을 캐싱함
//한번만 가져오면 끝
//브라우저가 어떤 것도 fetch하지 않는 것