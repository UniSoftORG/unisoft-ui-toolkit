import {ButtonHTMLAttributes, DetailedHTMLProps, useState} from "react";
import { ButtonTypes, IButtonProps } from "../interfaces/generics";
import styles from "../styles/Components.module.scss";

import React from "react";

const Button = (
    props: IButtonProps &
        DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement>
) => {
    const {buttonType, label, appearence, onPressed, disabled, shouldLoad} = props;

    let [isLoading, setLoading] = useState<boolean>(
        false
    );

    const decideClassName = () => {
        let className = styles.primary;
        switch (buttonType) {
            case ButtonTypes.primary: {
                className = styles.primary;
                break;
            }
            case ButtonTypes.info: {
                className = styles.info;
                break;
            }
            case ButtonTypes.success: {
                className = styles.success;
                break;
            }
            default:
                break;
        }
        return className;
    };

    return (
        <button
            disabled={disabled}
            className={`${styles.button} ${decideClassName()} ${isLoading ? styles.isLoading : ""}`}
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
