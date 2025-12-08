import { createSlice } from "@reduxjs/toolkit";
import { encode as btoa } from "base-64";
import type { AppDispatch } from "../../store";

const AUTH_URL = "https://api.kvikmyndir.is/authenticate";

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    token: "",
    tokenIsLoading: false,
    tokenError: undefined,
  },
  reducers: {
    getTokenLoading: (state) => {
      state.tokenIsLoading = true;
    },
    getTokenReceived: (state, action) => {
      state.tokenIsLoading = false;
      state.tokenError = undefined;
      state.token = action.payload.token;
    },
    getTokenError: (state, action) => {
      state.tokenIsLoading = false;
      state.tokenError = action.payload.message;
    },
  },
});

const {
  getTokenLoading,
  getTokenReceived,
  getTokenError,
} = tokenSlice.actions;

export function getToken() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(getTokenLoading());
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
      dispatch(getTokenReceived(data));
    } catch (err: any) {
      dispatch(getTokenError(err.toString()));
    }
  };
};

export default tokenSlice.reducer;
