import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import popularProductsService from "../../services/popularProductsService";

const initialState = {
  popularProducts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all Best Sellers
export const getPopularProducts = createAsyncThunk(
  "popularProducts/getAll",
  async (_, thunkAPI) => {
    try {
      return await popularProductsService.getPopularProducts();
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

const popularProductsSlice = createSlice({
  name: "popularProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPopularProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.popularProducts = action.payload;
      });
  },
});

export const selectIsLoading = (state) => state.popularProducts.isLoading;

export default popularProductsSlice.reducer;
