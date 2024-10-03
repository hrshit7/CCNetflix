import { useSelector } from "react-redux";
import MovieList from "./MoiveList";

const SecondaryComponent = ()=>{

    const movies = useSelector( (store) => store.movies)

    return (
        movies?.nowPlayingMOvies && (
            <div className="bg-black w-screen">
                <div className="-mt-52 pl-16 relative z-20">
                <MovieList title={"Now Playing"} movie={movies?.nowPlayingMOvies}/>
                <MovieList title={"Popular"} movie={movies?.popularMovies}/>
                <MovieList title={"Top Rated"} movie={movies?.topRatedMovies}/>
                <MovieList title={"Upcoming"} movie={movies?.upcomingMovies}/>
                </div>
            </div>

        )
    )
}

export default SecondaryComponent;