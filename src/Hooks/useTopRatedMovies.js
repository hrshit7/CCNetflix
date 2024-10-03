import { useDispatch } from "react-redux";
import { MOVIE_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useTopRatedMovies = ()=>{

    const dispatch = useDispatch();

    const topRatedMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', MOVIE_API);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }

    useEffect(()=>{
        topRatedMovies();
    }, [])
}

export default useTopRatedMovies;