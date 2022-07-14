import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeReducer";

const store = configureStore({
   reducer: {
      darkMode: darkModeReducer,
   },
});

export default store;
