import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../reducers/articleSlice";

const Store = configureStore({
  reducer: {
    article: articleReducer
  },
});
export default Store;
