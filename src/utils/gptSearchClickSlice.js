import { createSlice } from "@reduxjs/toolkit";

const gptSearchClickSlice= createSlice({
    name: "gpt",
    initialState: {
        openGptSearch : false,
        movieResult: null,
        movieInput: null,
    },
    reducers:{
        addOpenGptSearch: (state)=>{
            state.openGptSearch = !state.openGptSearch;
        },
        addSearchMovies: (state,action)=>{
            const {movieResult, movieInput} = action.payload;
            state.movieInput= movieInput;
            state.movieResult= movieResult;
        },
    },
})

export const {addOpenGptSearch, addSearchMovies} = gptSearchClickSlice.actions;

export default gptSearchClickSlice.reducer;