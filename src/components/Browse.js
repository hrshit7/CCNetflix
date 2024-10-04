import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";

const Browse = ()=>{

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    return (
        <div>
            <div>
                <Header/>
                <GptSearch/>
                <MainComponent/>
                <SecondaryComponent/>
            </div>
        </div>
    )
}

export default Browse