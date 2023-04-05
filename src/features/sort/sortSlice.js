import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortValue: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    selectedValue: (state, action) => {
      state.sortValue = action.payload;
    },
  },
});

export default sortSlice.reducer;
export const { selectedValue } = sortSlice.actions;
