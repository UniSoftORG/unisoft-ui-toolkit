import React from "react";

const Error = (props: { error: string; appearence?: string }) => {
  const { error, appearence } = props;
  return (
    <span className={`${appearence ?? ""}`}>
      {error}
    </span>
  );
};

export default Error;
