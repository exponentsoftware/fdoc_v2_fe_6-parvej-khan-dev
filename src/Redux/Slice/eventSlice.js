import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../backend";

const createEvents = createAsyncThunk(
  "event/create",
  async (data, { rejectWithValue }) => {
    try {
      const { response } = await axios.post(`${API}/new/event`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getEventByID = createAsyncThunk("events/findOne", async (EventId) => {
  try {
    const response = await axios.get(`${API}/event/${EventId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const getEvents = createAsyncThunk("/events", async () => {
  try {
    const response = await axios.get(`${API}/all/events`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});
const initialState = {
  post: null,
  events: [],
  loading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * Get All Events
      .addCase(getEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // *  get event by ID
      .addCase(getEventByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEventByID.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(getEventByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //* Create Events
      .addCase(createEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(createEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions: postActions } = eventSlice;
export const eventReducer = eventSlice.reducer;
export { createEvents, getEventByID, getEvents };
