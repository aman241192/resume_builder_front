import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndPoints } from "../../helpers/axios/apiEndPoints";
import axiosInstance from "../../utils/Axios";
// import { persistor } from "../../store/store";

export const loginAction = createAsyncThunk("post/login", async (payload) => {
  const response = await axiosInstance.post(apiEndPoints.login, payload);
  return response.data;
});

export const logOut = createAsyncThunk("auth/logout", async () => {
  // await persistor.purge();
  return true;
});
