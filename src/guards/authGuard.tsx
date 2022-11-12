// A HighOrderComponent to host the logic we need in order to achieve public and private routes.
import { NextPage } from "next";
import React from "react";
import { State } from "../interfaces/generics";
import { UserState } from "../interfaces/user";

export const elementWithAuth = (
  Component: () => JSX.Element,
  state: State<UserState>
) => {
  const Permissions = () => {
    if (!state.userData) return <></>;

    // If user is logged in, return original component
    return <Component />;
  };

  return Permissions;
};

const pageWithAuth = (Component: NextPage, state: State<UserState>) => {
  const Auth = () => {
    const isWindowDefined = typeof window !== "undefined";

    // If user is not logged in, return an empty component and push to login page
    if (!state.userData && isWindowDefined) {
      // router.push("/login");
      // return <></>;
      throw new Error("Do not push page - bad data!");
    }

    // If user is logged in, return original component
    return <Component />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default pageWithAuth;
