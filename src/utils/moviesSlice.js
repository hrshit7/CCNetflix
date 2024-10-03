import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMOvies: null,
        movieTrailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMOvies= action.payload;
        },
        addMovieTrailer: (state, action)=>{
            state.movieTrailer= action.payload;
        },
        addUpcomingMovies: (state, action)=>{
            state.upcomingMovies= action.payload;
        },
        addTopRatedMovies: (state, action)=>{
            state.topRatedMovies= action.payload;
        },
        addPopularMovies: (state, action)=>{
            state.popularMovies= action.payload;
        },
    },
});

export const {addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;
