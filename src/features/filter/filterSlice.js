import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    checkedValue: "all",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.checkedValue = action.payload;
        }
    }
});

export default filterSlice.reducer;
export const{changeStatus} = filterSlice.actions;