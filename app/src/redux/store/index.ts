import { configureStore } from "@reduxjs/toolkit";

import pinsReducer from "./pin";

export default configureStore({
  reducer: {
    pins: pinsReducer,
  },
});
