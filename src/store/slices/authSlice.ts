import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "../../interfaces/authentication";
import { IGenericApiError } from "../../interfaces/generics";

// Initial state
const initialState: AuthState = {
  email: "",
  username: "",
  password: "",
  repeatPassword: "",
  twoFactorAuthCode: "",
  // errors
  emailError: undefined,
  usernameError: undefined,
  passwordError: undefined,
  repeatPasswordError: undefined,
  twoFactorAuthCodeError: undefined,
  authApiError: undefined,
  registerApiError: undefined,
  twoFactorAuthApiError: undefined,
};

// Actual Slice
export const userSlice = createSlice({
  name: "authData",
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setEmailError(state, action: PayloadAction<string | undefined>) {
      state.emailError = action.payload;
    },
    setUserName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setUserNameError(state, action: PayloadAction<string | undefined>) {
      state.usernameError = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setPasswordError(state, action: PayloadAction<string | undefined>) {
      state.passwordError = action.payload;
    },
    setRepeatPassword(state, action: PayloadAction<string>) {
      state.repeatPassword = action.payload;
    },
    setRepeatPasswordError(state, action: PayloadAction<string | undefined>) {
      state.repeatPasswordError = action.payload;
    },
    setTwoFactorAuthCode(state, action: PayloadAction<string>) {
      state.twoFactorAuthCode = action.payload;
    },
    setTwoFactorAuthCodeError(
      state,
      action: PayloadAction<string | undefined>
    ) {
      state.twoFactorAuthCodeError = action.payload;
    },
    setAuthApiError(
      state,
      action: PayloadAction<IGenericApiError | undefined>
    ) {
      state.authApiError = action.payload;
    },
    setRegisterApiError(
      state,
      action: PayloadAction<IGenericApiError | undefined>
    ) {
      state.registerApiError = action.payload;
    },
    setTwoFactorApiError(
      state,
      action: PayloadAction<IGenericApiError | undefined>
    ) {
      state.twoFactorAuthApiError = action.payload;
    },
    wipeAuthData(state) {
      state = Object.assign({}, initialState);
    },
  },
});

//make the actions visible
export const {
  setEmail,
  setEmailError,
  setPassword,
  setPasswordError,
  setRepeatPassword,
  setRepeatPasswordError,
  setUserName,
  setUserNameError,
  setTwoFactorAuthCode,
  setTwoFactorAuthCodeError,
  setAuthApiError,
  setRegisterApiError,
  setTwoFactorApiError,
  wipeAuthData,
} = userSlice.actions;

//make the slice connectable to the store
const authReducer = userSlice.reducer;
export default authReducer;
