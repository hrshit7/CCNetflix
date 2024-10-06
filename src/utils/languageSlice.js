import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: "language",
    initialState: {
        configureLanguage: "en",
    },
    reducers:{
        addConfigureLanguage: (state,action)=>{
            state.configureLanguage = action.payload;
        },
    },
})

export const {addConfigureLanguage}= languageSlice.actions;

export default languageSlice.reducer;