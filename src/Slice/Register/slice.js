// // src/redux/apiSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import { getProducts } from "./thunk";

// // Slice
// const apiSlice = createSlice({
//   name: "api",
//   initialState: {
//     data: null,
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getProducts.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(getProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload?.data;
//       })
//       .addCase(getProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default apiSlice.reducer;
