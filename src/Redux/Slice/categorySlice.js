import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../backend";


const getCatagories = createAsyncThunk("/categories", async () => {
  try {
    const response = await axios.get(`${API}/category`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const initialState = {
  categories: [],
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * Get All Categories
      .addCase(getCatagories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCatagories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCatagories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: catActions } = categoriesSlice;
export const categoryReducer = categoriesSlice.reducer;
export { getCatagories };
