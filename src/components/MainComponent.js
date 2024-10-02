import { useSelector } from "react-redux";
import VideoTitle from "./VIdeoTitle";
import VideoBG from "./VideoBG";


const MainComponent = ()=>{

    const movies = useSelector( (store) => store.movies?.nowPlayingMOvies)
    if(!movies) return;

    const mainMovie = movies[0];

    const {title, overview, id} = mainMovie;

    return (
        <div>
            <VideoTitle title={title} overview={overview}/>
            <VideoBG id={id}/>
        </div>
    )
}

export default MainComponent;