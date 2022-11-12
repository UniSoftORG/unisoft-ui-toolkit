import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { IBreadcrumbs } from "../../interfaces/breadCrumbs";

// Initial state
const initialState: IBreadcrumbs = [];

// Actual Slice
export const breadCrumbsSlice = createSlice({
  name: "forumData",
  initialState,
  reducers: {
    setBreadcrumbs(state, action: PayloadAction<IBreadcrumbs>) {
      return (state = action.payload);
    },
    removeBreadcrumbs(state, action: PayloadAction<number>) {
      let rem = Math.abs(action.payload - (state.length - 1));
      state.splice(state?.length - rem, rem);
    },
  },
});

//make the actions visible
export const { setBreadcrumbs, removeBreadcrumbs } = breadCrumbsSlice.actions;

//make the slice connectable to the store
const breadCrumbsReducer = breadCrumbsSlice.reducer;
export default breadCrumbsReducer;
