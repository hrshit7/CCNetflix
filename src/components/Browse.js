import Header from "./Header"
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";

const Browse = ()=>{

    useNowPlayingMovies();

    return (
        <div>
            <div>
                <Header/>
            </div>
        </div>
    )
}

export default Browse