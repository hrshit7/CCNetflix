import MovieCart from "./MovieCart";

const MovieList = ({title, movie})=>{
    
    return (

        <div className="px-6">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll ">
                <div className="flex ">
                    {
                        movie?.map((movies)=> <MovieCart key={movies.id} posterPath={movies?.poster_path} /> )
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;