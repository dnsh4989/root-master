import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    articles: [],
    totalArticles: 0,
  },
  reducers: {
    replaceAllArticles(state, action) {
      state.totalArticles = action.payload.totalArticles;
      state.articles = action.payload.articles;
    },

    addArticle(state: any, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item: any) => item.id === newItem.id
      );
      state.totalArticles++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          total: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.total = existingItem.total + newItem.price;
      }
    },

    deleteArticle(state: any, action) {
      const id = action.payload;
      const existingItem = state.items.find((item: any) => item.id === id);
      state.totalArticles--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item: any) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export const articleActions = blogSlice.actions;

export default blogSlice;
