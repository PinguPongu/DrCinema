import { createSlice } from "@reduxjs/toolkit";
import { Movie as MovieType } from "@/src/types/types"


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [] as MovieType[],
    upcomingMovies: [] as MovieType[],
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
    getUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    }
  },
});


export const { getMovies, getUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;
