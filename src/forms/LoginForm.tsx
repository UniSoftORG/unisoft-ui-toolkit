import {
  setAuthApiError,
  setEmail,
  setEmailError,
  setPassword,
  setPasswordError,
  wipeAuthData,
} from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Error from "../buildingBlocks/Error";
import InputField from "../buildingBlocks/InputField";
import { RootState } from "../store/store";
import { authenticate } from "../api/auth";
import { setCookie } from "cookies-next";
import { setUserData } from "../store/slices/userSlice";

import { useRouter } from "next/router";
import Button from "../buildingBlocks/Button";
import { isRequired, isValidEmail } from "../validators/genericValidator";
import React from "react";
import { isGenericApiError } from "../guards/genericApiError";
import { isLoginResponse } from "../guards/loginResponse";
import { IGenericStyles } from "../interfaces/generics";

interface ILoginFormProps {
  styles: IGenericStyles;
  onLoginClicked: () => Promise<void>;
}

const LoginForm = (props: ILoginFormProps) => {
  const { styles, onLoginClicked } = props;
  const authData = useSelector((state: RootState) => state.authData);
  const dispatch = useDispatch();
  //   const router = useRouter();

  const handleEmailInput = (v: string) => {
    const error = isRequired(v) || isValidEmail(v);
    dispatch(setEmailError(error));
    dispatch(setEmail(v));
  };

  const handlePasswordInput = (v: string) => {
    const error = isRequired(v);
    dispatch(setPasswordError(error));
    dispatch(setPassword(v));
  };

  const handleFormSubmit = async () => {
    // dispatch(setAuthApiError(undefined));
    // dispatch(wipeAuthData());

    // const response = await authenticate(authData.email, authData.password);
    // if (isGenericApiError(response.data)) {
    //   dispatch(setAuthApiError(response.data));
    //   return;
    // }
    // if (response.statusCode !== 307) {
    //   if (isLoginResponse(response.data)) {
    //     setCookie("token", response.data.token);
    //     // localStorage.setItem("userData", JSON.stringify(response.data));
    //     dispatch(setUserData(response.data));
    //   }
    //   await router.push("/games");
    // }
    // if (response.statusCode === 307) {
    //   //means 2fa is on the move
    //   await router.push("/login/2fa");
    // }

    await onLoginClicked();
  };

  return (
    <div className={styles.loginForm}>
      <form noValidate>
        <div className={styles.loginCard}>
          <h1>Sign in</h1>
          {isGenericApiError(authData.authApiError) ? (
            <Error
              appearence={styles.errorText}
              error={authData.authApiError.message}
            />
          ) : null}
          <InputField
            appearence={`${styles.inputField}`}
            inputValue={authData.email}
            onInputChange={handleEmailInput}
            fieldType="text"
            error={authData.emailError}
            placeholder="Please enter an email address."
            errorCustomClassName={styles.errorText}
          />
          <InputField
            appearence={`${styles.inputField}`}
            inputValue={authData.password}
            onInputChange={handlePasswordInput}
            fieldType="password"
            error={authData.passwordError}
            placeholder="Please enter a password."
            errorCustomClassName={styles.errorText}
          />
          <Button
            disabled={!authData.email.length || !authData.password.length}
            appearence={`${styles.primary} ${styles.button}`}
            shouldLoad={true}
            label={"Login"}
            onPressed={async () => await handleFormSubmit()}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
