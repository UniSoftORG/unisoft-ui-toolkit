import React from "react";

const Error = (props: { error: string; customClassName?: string }) => {
  const { error, customClassName } = props;
  return (
    <span className={`$errorText ${customClassName ?? ""}`}>
      {error}
    </span>
  );
};

export default Error;
