import { configureStore } from "@reduxjs/toolkit";
import authenticateReducer from "@/src/redux/features/authenticate/authenticate-slice";
import moviesReducer from "@/src/redux/features/movies/movies-slice";

const store =  configureStore({
  reducer: {
    authenticate: authenticateReducer,
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
