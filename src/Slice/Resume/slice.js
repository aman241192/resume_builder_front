// resumeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getDetail } from "./thunk";

const initialState = {
  activeTabStatus: 0,
  personal: {},
  summary: {},
  experience: {},
  education: {},
  resumeData: {}, // ✅ to store fetched data
  loading: false,
  error: null,
};

export const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    personalInforFormAction: (state, action) => {
      state.personal = action.payload;
    },

    summaryFormAction: (state, action) => {
      state.summary = action.payload;
    },

    workExpFormAction: (state, action) => {
      state.experience = action.payload;
    },

    educationFormAction: (state, action) => {
      state.education = action.payload;
    },

    // ////////////////////

    personalInfoAction: (state, action) => {
      state.resumeData.personal = action.payload;
    },

    summaryInfoAction: (state, action) => {
      state.resumeData.summary = action.payload?.summary;
    },

    workExpInfoAction: (state, action) => {
      state.resumeData.experience = action.payload?.experience;
    },

    educationInfoAction: (state, action) => {
      state.resumeData.education = action.payload?.education;
    },

    skillsInfoAction: (state, action) => {
      state.resumeData.skills = action.payload?.skills;
    },

    projectsInfoAction: (state, action) => {
      state.resumeData.projects = action.payload?.projects;
    },

    languagesInfoAction: (state, action) => {
      state.resumeData.languages = action.payload?.languages;
    },

    summaryAction: (state, action) => {
      state.summary = { ...action.payload };
    },
    getPersonalDetail: (state, action) => {
      state.personal = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.resumeData = action.payload.data;
      })
      .addCase(getDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// ✅ No `getDetail` here — it's an asyncThunk, not a reducer
export const {
  personalInfoAction,
  summaryAction,
  getPersonalDetail,
  summaryInfoAction,
  workExpInfoAction,
  educationInfoAction,
  skillsInfoAction,
  projectsInfoAction,
  languagesInfoAction,

  personalInforFormAction,
  summaryFormAction,
  workExpFormAction,
  educationFormAction,
} = resumeSlice.actions;

export default resumeSlice.reducer;
