import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";


interface IParams {
    params: { id: string };
}


export async function generateMetadata({ params, }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }
}



export default async function MovieDetail({ params, }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <div>
        <Suspense fallback={<h1>Loading Movie Info...</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Videos...</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}

function getMovies(id: string) {
    throw new Error("Function not implemented.");
}
