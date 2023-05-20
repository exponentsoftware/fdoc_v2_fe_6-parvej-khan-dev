// store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Slice/counterSlice";
import {eventReducer} from "../Slice/eventSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    event: eventReducer,
  },
});

export default store;
