
import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBG = ({id})=>{

    const originalTrailer = useSelector((store)=> store.movies?.movieTrailer);

    //fetching trailer data & updating the store with the trailer data 

    useMovieTrailer(id);

    return (
        <div>
            <iframe 
            className="w-screen h-screen "
            src={"https://www.youtube.com/embed/" + originalTrailer + "?&autoplay=1&mute=1&"}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            >
            </iframe>
        </div>
    )
}

export default VideoBG;