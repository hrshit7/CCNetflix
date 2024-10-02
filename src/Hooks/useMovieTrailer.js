import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { MOVIE_API } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (id)=>{

    const dispatch = useDispatch();

    const mainMovieTrailer = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+ id + '/videos?', MOVIE_API);
        const json = await data.json();
        const movieTrailers= json?.results?.filter((trailer)=> trailer.type === "Trailer");
        const trailer = movieTrailers.length ? movieTrailers[0] : json?.results[0];
        dispatch(addMovieTrailer(trailer.key));
    }

    useEffect(()=>{
        mainMovieTrailer();
    },[]);

}

export default useMovieTrailer;