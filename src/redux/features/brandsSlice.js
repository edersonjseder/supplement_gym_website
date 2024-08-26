import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import brandsService from "../../services/brandsService";

const initialState = {
  brands: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all Brands
export const getBrands = createAsyncThunk(
  "brands/getAll",
  async (_, thunkAPI) => {
    try {
      return await brandsService.getBrands();
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

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBrands.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.brands = action.payload;
      });
  },
});

export const selectIsLoading = (state) => state.brands.isLoading;

export default brandsSlice.reducer;
