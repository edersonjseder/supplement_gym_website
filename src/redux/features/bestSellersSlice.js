import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import bestSellersService from "../../services/bestSellersService";

const initialState = {
  bestSellers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all Best Sellers
export const getBestSellers = createAsyncThunk(
  "bestSellers/getAll",
  async (_, thunkAPI) => {
    try {
      return await bestSellersService.getBestSellers();
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

const bestSellersSlice = createSlice({
  name: "bestSellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBestSellers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBestSellers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.bestSellers = action.payload;
      });
  },
});

export const selectIsLoading = (state) => state.bestSellers.isLoading;

export default bestSellersSlice.reducer;
