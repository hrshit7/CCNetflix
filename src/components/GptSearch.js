import { BG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = ()=>{
    return (
        <div>
            <div>
                <img className="absolute -z-20" src={BG} alt="bg-photo"></img>
            </div>
            <GptSearchBar/>
        </div>
    )
}

export default GptSearch;