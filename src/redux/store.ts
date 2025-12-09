import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "@/src/redux/features/token/token-slice";
import moviesReducer from "@/src/redux/features/movies/movies-slice"
import cinemasReducer from "@/src/redux/features/cinema/cinema-slice"
import favoritesReducer from "@/src/redux/favorites/favoritesSlice"

const store =  configureStore({
  reducer: {
    token: tokenReducer,
    movies: moviesReducer,
    cinemas: cinemasReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
