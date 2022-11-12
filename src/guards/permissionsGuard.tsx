import { NextPage } from "next";
// A HighOrderComponent to host the logic we need in order to achieve permissions tracking for an element.

import React from "react";
import { State } from "../interfaces/generics";
import { UserState } from "../interfaces/user";

const elementWithPermissions = (
  Component: () => JSX.Element,
  state: State<UserState>
) => {
  const Permissions = () => {
    // Login data added to props via redux-store (or use react context for example)
    if (!state.userData) return <></>;
    if (!state.userData.permissions) return <></>;

    const hasPermissions =
      !!state.userData && state.userData.permissions.length > 0;
    const isAdmin = state.userData?.permissions[0].permission === "superAdmin";

    if (!hasPermissions || !isAdmin) return <></>;

    // If user is logged in, return original component
    return <Component />;
  };

  return Permissions;
};

export const pageWithPermissions = (
  Component: NextPage,
  state: State<UserState>
) => {
  const PagePermissions = () => {
    const isWindowDefined = typeof window !== "undefined";

    // If user is not logged in, return an empty component and push to login page
    if (!state.userData && isWindowDefined) {
      // router.push(Redirects.BAD_USER_DATA);
      // return <></>;
      throw new Error("Do not push page - bad data!");
    }
    if (!state.userData?.permissions) return <></>;

    const hasPermissions =
      !!state.userData && state.userData.permissions.length > 0;
    const isAdmin = state.userData?.permissions[0].permission === "superAdmin";

    if (!hasPermissions || !isAdmin) {
      // if (typeof window !== undefined && router.isReady) {
      //   router.push(Redirects.NOT_FOUND);
      // }
      // return <></>;
      throw new Error("Do not push page - bad data!");
    }

    // If user is logged in, return original component
    return <Component />;
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    PagePermissions.getInitialProps = Component.getInitialProps;
  }

  return PagePermissions;
};

export default elementWithPermissions;
