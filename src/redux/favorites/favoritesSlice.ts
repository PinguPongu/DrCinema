import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
  ids: string[];
  favoriteIsLoading: boolean;
}

const initialState: FavoritesState = {
  ids: [],
  favoriteIsLoading: false,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<string>) {
      if (!state.ids.includes(action.payload)) {
        state.ids.push(action.payload);
      }
    },
    removeFavorite(state, action: PayloadAction<string>) {
      state.ids = state.ids.filter(id => id !== action.payload);
    },
    setFavorites(state, action: PayloadAction<string[]>) {
      state.ids = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
