import { createSlice } from "@reduxjs/toolkit";
import { Cinema as CinameType } from "@/src/types/types"


const cinemasSlice = createSlice({
  name: "cinemas",
  initialState: {
    cinemas: [] as CinameType[],
  },
  reducers: {
    getCinemas: (state, action) => {
      state.cinemas = action.payload;
    },
  },
});


export const { getCinemas } = cinemasSlice.actions;
export default cinemasSlice.reducer;
