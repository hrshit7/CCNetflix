import { useDispatch } from "react-redux";
import { MOVIE_API } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";


const useUpcomingMovies = ()=>{

    const dispatch = useDispatch();

    const upcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', MOVIE_API);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(()=>{
        upcomingMovies();
    }, [])
}

export default useUpcomingMovies;