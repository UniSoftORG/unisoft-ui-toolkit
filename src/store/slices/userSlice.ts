import { PayloadAction } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";
import { ILoginResponse } from "../../interfaces/authentication";
import { UserState } from "../../interfaces/user";

// Initial state
const initialState: UserState = {
  userData: undefined,
};

// Actual Slice
export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<ILoginResponse>) {
      console.log("Will set the user data with...", action.payload);
      state.userData = action.payload;
    },
    wipeUserData(state) {
      state.userData = undefined;
    },
  },
});

//make the actions visible
export const { setUserData, wipeUserData } = userSlice.actions;

//make the slice connectable to the store
const userReducer = userSlice.reducer;
export default userReducer;
