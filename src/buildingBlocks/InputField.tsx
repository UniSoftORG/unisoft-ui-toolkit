import Error from "./Error";

import { IInputFieldProps } from "../interfaces/generics";
import React from "react";


const InputField = (props: IInputFieldProps) => {
  const {
    fieldType,
    inputValue,
    onInputChange,
    placeholder,
    autoComplete,
    error,
    inputCustomClassName,
    errorCustomClassName,
  } = props;

  return (
    <>
      <input
        className={`$inputField ${inputCustomClassName ?? ""}`}
        placeholder={placeholder ?? "Input data here..."}
        type={fieldType}
        autoComplete={autoComplete ?? "off"}
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          onInputChange(value);
        }}
      />
      {error ? (
        <Error error={error} customClassName={errorCustomClassName} />
      ) : null}
    </>
  );
};

export default InputField;
