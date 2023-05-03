import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogs-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    articles: blogSlice.reducer,
  },
});

export default store;
