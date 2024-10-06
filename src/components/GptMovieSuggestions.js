import { useSelector } from "react-redux";
import MovieList from "./MoiveList";

const GptMovieSuggestions = ()=>{

    const {movieResult, movieInput} = useSelector((store)=> store.gpt);

    return(
        <div className="p-4 m-4 bg-black opacity-90 text-white">
            <MovieList title={movieInput} movie={movieResult}/>
        </div>
    )
}

export default GptMovieSuggestions;