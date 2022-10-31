import { ILoginResponse } from "../interfaces/authentication";

export const isLoginResponse = (object: any): object is ILoginResponse => {
  if (object === undefined) return false;
  return "token" in object && "user" in object;
};
