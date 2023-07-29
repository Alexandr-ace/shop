import { createSlice } from "@reduxjs/toolkit";

const styleSlice = createSlice({
  name: "style",
  initialState: {
    style: "style",
  },
  reducers: {
    addStyle(state, action) {
      state.style = action.payload;
    },
    removeStyle(state) {
      state.style = "style";
    },
  },
});

export const { addStyle, removeStyle } = styleSlice.actions;
export default styleSlice.reducer;
