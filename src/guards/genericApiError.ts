import { IGenericApiError } from "../interfaces/common";


export const isGenericApiError = (object: any): object is IGenericApiError => {
  if (object === undefined) return false;
  return "message" in object;
};
