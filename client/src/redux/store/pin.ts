import { createSlice, current } from "@reduxjs/toolkit";
import { Pin } from "src/types/pin";

const initialState = {
  curr: null,
  selected: null,
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
    setSelected(state, action) {
      state.selected = action.payload;
    },
    remove(state, action) {
      const pinId = action.payload;

      state.loaded = state.loaded.filter((pin: Pin) => {
        return pin._id !== pinId;
      });

      if (state.selected && state.selected._id === pinId) {
        state.selected = undefined;
      }
    },
  },
});

export const { setCurr, setLoaded, setSelected, remove } =
  currPinsSlice.actions;

export default currPinsSlice.reducer;
