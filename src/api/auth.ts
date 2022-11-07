import { api } from "..";
import { ILoginResponse } from "../interfaces/authentication";
import { IGenericApiError } from "../interfaces/generics";

export const authenticate = async (email: string, password: string) => {
  return await api.post<ILoginResponse | IGenericApiError>(
    "/auth/login",
    JSON.stringify({ email, password })
  );
};

export const logOut = async () => {
  return await api.get<ILoginResponse | IGenericApiError>("/auth/logout");
};

export const validateCode = async (code: string) => {
  const response = await api.post<ILoginResponse | IGenericApiError>(
    "/auth/2fa",
    JSON.stringify({ code })
  );
  return response;
};
