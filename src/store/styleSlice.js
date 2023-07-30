import { createSlice } from "@reduxjs/toolkit";
import stylesUp from "../components/Up/Up.module.scss";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    style: stylesUp.main,
  },
  reducers: {
    addStyle(state, action) {
      state.style = action.payload;
    },
    removeStyle(state) {
      state.style = stylesUp.main;
    },
  },
});

export const { addStyle, removeStyle } = styleSlice.actions;
export default styleSlice.reducer;
