import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { encode as btoa } from "base-64";
import { tokenResponse } from "@/src/types/token";

const AUTH_URL = "https://api.kvikmyndir.is/authenticate";

export const getToken = createAsyncThunk(
  "auth/token",
  async () => {
    const username = "gudni23";
    const password = "fuckthisshit";
    const credentials = btoa(`${username}:${password}`);

    const res = await fetch(AUTH_URL, {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const data = await res.json();
    return data;
  }
);

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
    tokenIsLoading: false,
    tokenError: "" as string | undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getToken.pending, (state) => {
        state.tokenIsLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action: PayloadAction<tokenResponse>) => {
        state.tokenIsLoading = false;
        state.tokenError = undefined;
        state.token = action.payload.token;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.tokenIsLoading = false;
        state.tokenError = action.error.message ?? "Failed to fetch token";
      })
  },
});



export default tokenSlice.reducer;
