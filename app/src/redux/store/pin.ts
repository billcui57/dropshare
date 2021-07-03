import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curr: null,
  loaded: [
    {
      lat: 43.672349272526837,
      lng: -79.37947646024934,
      title: "hi",
    },
    {
      lat: 43.665349271526836,
      lng: -79.37947646024934,
      title: "lol",
    },
  ],
};

const currPinsSlice = createSlice({
  name: "pins",
  initialState,
  reducers: {
    setCurr(state, action) {
      state.curr = action.payload;
    },
  },
});

export const { setCurr } = currPinsSlice.actions;

export default currPinsSlice.reducer;
