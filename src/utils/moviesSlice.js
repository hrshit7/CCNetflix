import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMOvies: null,
        movieTrailer: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action)=>{
            state.nowPlayingMOvies= action.payload;
        },
        addMovieTrailer: (state, action)=>{
            state.movieTrailer= action.payload;
        }
    },
});

export const {addNowPlayingMovies, addMovieTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;
