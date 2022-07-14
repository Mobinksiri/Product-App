import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   mode: false,
};

const darkModeReducer = createSlice({
   initialState,
   name: "darkMode",
   reducers: {
      changeMode: (state) => {
         document.querySelector("body").classList.toggle("dark-mode");
         state.mode = !state.mode;
      },
   },
});

export const { changeMode } = darkModeReducer.actions;
export default darkModeReducer.reducer;
