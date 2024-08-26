import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bannerService from "../../services/bannerService";

const initialState = {
  banners: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all Banners
export const getBanners = createAsyncThunk(
  "banners/getAll",
  async (_, thunkAPI) => {
    try {
      return await bannerService.getBanners();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBanners.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBanners.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.banners = action.payload;
      });
  },
});

export const selectIsLoading = (state) => state.banners.isLoading;

export default bannerSlice.reducer;
