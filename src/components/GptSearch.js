import { BG } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = ()=>{
    return (
        <div>
            <div>
                <img className="fixed -z-20" src={BG} alt="bg-photo"></img>
            </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearch;