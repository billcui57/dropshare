import { createSlice, current } from "@reduxjs/toolkit";
import { Pin } from "src/types/pin";

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
    remove(state, action) {
      const pinId = action.payload;

      state.loaded = state.loaded.filter((pin: Pin) => {
        return pin._id !== pinId;
      });

      if (state.justDropped && state.justDropped._id === pinId) {
        state.justDropped = undefined;
      }
      if (state.selected && state.selected._id === pinId) {
        state.selected = undefined;
      }
    },
  },
});

export const { setCurr, setLoaded, setJustDropped, setSelected, remove } =
  currPinsSlice.actions;

export default currPinsSlice.reducer;
