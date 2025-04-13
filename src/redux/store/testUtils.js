// redux/testUtils.js
import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "../reducers/articleSlice";

export const makeTestStore = (preloadedState = {}) =>
    configureStore({
        reducer: {
            article: articleReducer,
        },
        preloadedState,
    });
