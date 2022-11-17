import {
  setTwoFactorApiError,
  setTwoFactorAuthCode,
  setTwoFactorAuthCodeError,
  wipeAuthData,
} from "../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

import Error from "../buildingBlocks/Error";
import InputField from "../buildingBlocks/InputField";
import { RootState } from "../store/store";
import { isRequired } from "../validators/genericValidator";
import { setUserData } from "../store/slices/userSlice";
import styles from "../../styles/Components.module.scss";
import { validateCode } from "../api/auth";
import { typeGuard } from "../index";
import Button from "../buildingBlocks/Button";
import React from "react";
import { I2FAForm } from "../interfaces/authentication";

const TwoFactorAuthenticationForm = (props: I2FAForm) => {
  const authData = useSelector((state: RootState) => state.authData);
  const dispatch = useDispatch();

  const handleCodeInput = (v: string) => {
    dispatch(setTwoFactorAuthCodeError(isRequired(v)));
    dispatch(setTwoFactorAuthCode(v));
  };

  const disableSend = !!authData.twoFactorAuthCodeError;
  const handleFormSubmit = async () => {
    dispatch(setTwoFactorApiError(undefined));

    const response = await validateCode(authData.twoFactorAuthCode);
    if (typeGuard.isGenericApiError(response.data)) {
      dispatch(setTwoFactorApiError(response.data));
      return;
    }

    if (typeGuard.isLoginResponse(response.data)) {
      // localStorage.setItem("userData", JSON.stringify(response.data));
      dispatch(setUserData(response.data));
      dispatch(wipeAuthData());
      props.onRedirect("/games");
    }
  };
  return (
    <div className={styles.loginForm}>
      <form noValidate>
        <div className={styles.loginCard}>
          <h1>Verify login</h1>
          {typeGuard.isGenericApiError(authData.twoFactorAuthApiError) ? (
            <Error
              appearence={styles.errorText}
              error={authData.twoFactorAuthApiError.message}
            />
          ) : null}
          <InputField
            appearence={`${styles.inputField}`}
            inputValue={authData.twoFactorAuthCode}
            onInputChange={handleCodeInput}
            fieldType="text"
            error={authData.twoFactorAuthCodeError}
            placeholder="Please enter a code here."
            errorCustomClassName={styles.errorText}
          />
          <Button
            disabled={disableSend}
            appearence={`${styles.primary} ${styles.button}`}
            label={"Submit"}
            onPressed={async () => await handleFormSubmit()}
          />
        </div>
      </form>
    </div>
  );
};

export default TwoFactorAuthenticationForm;
