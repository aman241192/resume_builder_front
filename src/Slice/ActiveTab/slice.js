import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTabStatus: 0,
};

export const activeTabSlice = createSlice({
  name: "activeTab",
  initialState,
  reducers: {
    nextPageAction: (state) => {
      state.activeTabStatus += 1;
    },
    previousPageAction: (state) => {
      state.activeTabStatus -= 1;
    },
  },
});

export const { nextPageAction, previousPageAction } = activeTabSlice.actions;

export default activeTabSlice.reducer;
