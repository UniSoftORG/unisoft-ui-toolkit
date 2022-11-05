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
    appearence,
    errorCustomClassName,
  } = props;

  return (
    <>
      <input
        className={`${appearence ?? ""}`}
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
        <Error error={error} appearence={errorCustomClassName} />
      ) : null}
    </>
  );
};

export default InputField;
