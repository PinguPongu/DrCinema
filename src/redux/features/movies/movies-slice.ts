import { createSlice } from "@reduxjs/toolkit";
import { Movie as MovieType } from "@/src/types/types"


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [] as MovieType[],
  },
  reducers: {
    getMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});


export const { getMovies } = movieSlice.actions;
export default movieSlice.reducer;
