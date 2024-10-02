import { useDispatch } from "react-redux";
import { MOVIE_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useNowPlayingMovies = ()=>{

    const dispatch = useDispatch();

    const nowPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results))
        return json.results;
    }

    useEffect(()=>{
        nowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;