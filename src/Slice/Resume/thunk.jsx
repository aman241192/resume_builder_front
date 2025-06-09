import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndPoints } from "../../helpers/axios/apiEndPoints";
import axiosInstance from "../../utils/Axios";

export const personalAction = createAsyncThunk(
  "post/personal",
  async (payload) => {
    const response = await axiosInstance.post(
      apiEndPoints.resume.personal,
      payload
    );
    return response.data;
  }
);

export const summaryAction = createAsyncThunk(
  "post/summary",
  async (payload) => {
    const response = await axiosInstance.post(
      apiEndPoints.resume.summary,
      payload
    );
    return response.data;
  }
);

export const experianceAction = createAsyncThunk(
  "post/experiance",
  async (payload) => {
    const response = await axiosInstance.post(
      apiEndPoints.resume.experiance,
      payload
    );
    return response.data;
  }
);

// educationAction
export const educationAction = createAsyncThunk(
  "post/education",
  async (payload) => {
    const response = await axiosInstance.post(
      apiEndPoints.resume.education,
      payload
    );
    return response.data;
  }
);

export const skillAction = createAsyncThunk("post/skills", async (payload) => {
  const response = await axiosInstance.post(
    apiEndPoints.resume.skills,
    payload
  );
  return response.data;
});

export const projectAction = createAsyncThunk(
  "post/projects",
  async (payload) => {
    const response = await axiosInstance.post(
      apiEndPoints.resume.projects,
      payload
    );
    return response.data;
  }
);

// skillAction
export const languageAction = createAsyncThunk(
  "post/languages",
  async (payload) => {
    const response = await axiosInstance.post(
      apiEndPoints.resume.languages,
      payload
    );
    return response.data;
  }
);

export const getDetail = createAsyncThunk("get/resume", async (id) => {
  const response = await axiosInstance.get(
    apiEndPoints.resume.getDetails + "/" + id
  );
  return response.data;
});
