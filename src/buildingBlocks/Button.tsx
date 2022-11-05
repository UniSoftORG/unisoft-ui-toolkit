import {ButtonHTMLAttributes, DetailedHTMLProps, useState} from "react";
import {  IButtonProps } from "../interfaces/generics";


import React from "react";

const Button = (
    props: IButtonProps &
        DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement>
) => {
    const {label, appearence, onPressed, disabled, shouldLoad} = props;

    let [isLoading, setLoading] = useState<boolean>(
        false
    );

    return (
        <button
            disabled={disabled}
            className={`button ${appearence} ${isLoading ? 'isLoading' : ""}`}
            onClick={async (e) => {
                if (shouldLoad) setLoading(true)
                e.preventDefault();
                await onPressed();
                setLoading(false)
            }}
        >
            {label} {isLoading}
        </button>
    );
};

export default Button;
