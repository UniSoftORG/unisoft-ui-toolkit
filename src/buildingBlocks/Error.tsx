import React from "react";
import styles from "../styles/Components.module.scss";

const Error = (props: { error: string; customClassName?: string }) => {
  const { error, customClassName } = props;
  return (
    <span className={`${styles.errorText} ${customClassName ?? ""}`}>
      {error}
    </span>
  );
};

export default Error;
