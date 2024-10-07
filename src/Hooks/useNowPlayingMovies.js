import { useDispatch, useSelector } from "react-redux";
import { MOVIE_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    const {nowPlayingMOvies} = useSelector((store)=> store.movies);

    const nowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(()=>{
        !nowPlayingMOvies && nowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;