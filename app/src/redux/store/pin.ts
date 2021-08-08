import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curr: null,
  selected: null,
  justDropped: null,
  loaded: [],
};

const currPinsSlice = createSlice({
  name: "pins",
  initialState,
  reducers: {
    setCurr(state, action) {
      state.curr = action.payload;
    },
    setLoaded(state, action) {
      state.loaded = action.payload;
    },
    setJustDropped(state, action) {
      state.justDropped = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { setCurr, setLoaded, setJustDropped, setSelected } =
  currPinsSlice.actions;

export default currPinsSlice.reducer;
