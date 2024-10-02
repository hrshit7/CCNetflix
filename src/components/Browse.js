import { useEffect } from "react";
import { MOVIE_API } from "../utils/constants"
import Header from "./Header"

const Browse = ()=>{

    const onPlayingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', MOVIE_API);
        const json = await data.json();
        console.log(json);
        
    }

    useEffect(()=>{
        onPlayingMovies();
    }, [])

    return (
        <div>
            <div>
                <Header/>
            </div>
        </div>
    )
}

export default Browse