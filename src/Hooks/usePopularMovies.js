import { useDispatch } from "react-redux";
import { MOVIE_API } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const usePopularMovies = ()=>{

    const dispatch = useDispatch();

    const popularMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', MOVIE_API);
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
        console.log(json);
        
    }

    useEffect(()=>{
        popularMovies();
    }, [])
}

export default usePopularMovies;