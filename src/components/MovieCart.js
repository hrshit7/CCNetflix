import {POSTER_URL} from "../utils/constants";

const MovieCart = ({ posterPath })=>{
    if(!posterPath){return null;}
    return (
        <div className="w-48 pr-4">
            <img alt="poster" src={POSTER_URL+posterPath}/>
        </div>
    )
}

export default MovieCart;