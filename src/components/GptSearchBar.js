import { useSelector } from "react-redux";
import { LANG } from "../utils/configLang";

const GptSearchBar = ()=>{

    const language = useSelector((store)=> store.language.configureLanguage)

    return (
        <div className="pt-[20%] flex justify-center">
            <form className="bg-black w-1/2 grid grid-cols-12">
                <input type="text" className="m-4 p-2 col-span-8" placeholder={LANG[language].gptPlaceholder}></input>
                <button className="col-span-4 text-white bg-red-700 m-4 p-2 rounded-md">{LANG[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;