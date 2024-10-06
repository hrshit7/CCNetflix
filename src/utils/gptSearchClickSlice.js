import { createSlice } from "@reduxjs/toolkit";

const gptSearchClickSlice= createSlice({
    name: "gpt",
    initialState: {
        openGptSearch : false,
    },
    reducers:{
        addOpenGptSearch: (state)=>{
            state.openGptSearch = !state.openGptSearch;
        }
    },
})

export const {addOpenGptSearch} = gptSearchClickSlice.actions;

export default gptSearchClickSlice.reducer;