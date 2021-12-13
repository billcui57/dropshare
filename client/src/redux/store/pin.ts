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
    remove(state, action) {
      const pinId = action.payload;

      state.loaded = state.loaded.filter((pin: Pin) => {
        return pin._id !== pinId;
      });
    },
  },
});

// export const getSelectorPinById = (pinId) => {
//   return (state) => {
//     const loaded: Pin[] = state.pins.loaded;
//     return loaded.find((pin) => {
//       return pin._id === pinId;
//     });
//   };
// };

export const { setCurr, setLoaded, remove } = currPinsSlice.actions;

export default currPinsSlice.reducer;
