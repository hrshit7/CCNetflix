import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";

const Browse = ()=>{

    useNowPlayingMovies();

    return (
        <div>
            <div>
                <Header/>
                <MainComponent/>
                <SecondaryComponent/>
            </div>
        </div>
    )
}

export default Browse