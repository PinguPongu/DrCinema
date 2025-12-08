import { createSlice } from "@reduxjs/toolkit";

const authenticateSlice = createSlice({
  name: "authenticate",
  initialState: {
    token: "",
  },
  reducers: {
    getAuthenticate: (state, action) => {
      state.token = action.payload;
    },
  },
});


export const { getAuthenticate } = authenticateSlice.actions;
export default authenticateSlice.reducer;
