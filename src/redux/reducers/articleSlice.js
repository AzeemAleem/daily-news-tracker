import { createSlice } from "@reduxjs/toolkit";

const LLMSlice = createSlice({
  name: "article",
  initialState: {
    articles: [],
  },
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});
export const { setArticles } = LLMSlice.actions;
export default LLMSlice.reducer;
