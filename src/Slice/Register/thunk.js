import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndPoints } from "../../helpers/axios/apiEndPoints";
import axiosInstance from "../../utils/Axios";

export const register = createAsyncThunk("post/register", async (payload) => {
  const response = await axiosInstance.post(apiEndPoints.register, payload);
  return response.data;
});
