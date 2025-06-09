import { createSlice } from "@reduxjs/toolkit";
import { loginAction, logOut } from "./thunk";

// Slice
const loginSlice = createSlice({
  name: "login",
  initialState: {
    loading: false,
    error: null,
    token: "",
    userId: "",
    username: "",
    isAuthenticated: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.isAuthenticated =
          action.payload?.data?.token !== "" ? true : false;

        state.loading = false;
        state.token = action.payload?.data?.token;
        state.username = action.payload?.data?.username;
        state.userId = action.payload?.data?.userID;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default loginSlice.reducer;
