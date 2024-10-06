import { useDispatch, useSelector } from "react-redux";
import { LANG } from "../utils/configLang";
import { useRef } from "react";
import { MOVIE_API } from "../utils/constants";
import { addSearchMovies } from "../utils/gptSearchClickSlice";

const GptSearchBar = ()=>{

    const language = useSelector((store)=> store.language.configureLanguage)

    const searchText = useRef(null);

    const dispatch = useDispatch();

    const handleSearch= async ()=>{

        // const query = "Act as a movie recommendation system and act as a query: " + searchText.current.value + ". only give me five names of movie, comma seperated like the example result given ahead. Example result= Sholay, Gadar, Boys, Dhoom 4, Avatar"

        //     const gptResult = await openai.chat.completions.create({
        //       messages: [{ role: 'user', content: query }],
        //       model: 'gpt-3.5-turbo',
        //     });

        //     console.log(gptResult.choices);

        // Open AI apis limit been reached at its max so i think to try an alternative like using tmdb database to fetch only movies, not recommending movies through openai apis.
        const movies = await fetch('https://api.themoviedb.org/3/search/movie?query='+ searchText.current.value +'&include_adult=false&language=en-US&page=1', MOVIE_API)
        const json =  await movies.json();
        dispatch(addSearchMovies({movieResult:json.results, movieInput:searchText.current.value }));
    }

    return (
        <div className="pt-[20%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
                <input ref={searchText} type="text" className="m-4 p-2 col-span-8" placeholder={LANG[language].gptPlaceholder}></input>
                <button className="col-span-4 text-white bg-red-700 m-4 p-2 rounded-md" onClick={handleSearch}>{LANG[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;