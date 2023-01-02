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
        <div className="w-full relative group">
            <input type={fieldType}
                   required
                   value={inputValue}
                   id={inputValue}
                   autoComplete={autoComplete ?? "off"}
                   className="w-full h-12 px-4 text-sm peer bg-dark-card outline-none"
                   onChange={(e) => {
                       const value = e.target.value;
                       onInputChange(value);
                   }}
            />
            <label htmlFor="eMail"
                   className="transform transition-all absolute top-0 left-0 h-full flex items-center pl-2 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">{props.label}</label>

            {/*{error ? (*/}
            {/*    <Error error={error} appearence={errorCustomClassName} />*/}
            {/*) : null}*/}

        </div>
    );
};

export default InputField;

