import authReducer from "./slices/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer, //make sure the key matches to the slice name
    authData: authReducer,
  },
});

//TS defs to infer types later on!
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
