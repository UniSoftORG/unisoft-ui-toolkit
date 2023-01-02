import { HTMLInputTypeAttribute } from "react";
export type State<T> = T;

//input field related stuff

//TODO: Support any of these attributes as we need
// them https://www.w3schools.com/tags/tag_input.asp

export interface IInputFieldProps {
  fieldType: HTMLInputTypeAttribute;
  label?: string;
  inputValue: string;
  onInputChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  appearence?: string;
  errorCustomClassName?: string;
}

export interface IButtonProps {
  label: string;
  shouldLoad?: boolean;
  onPressed: () => Promise<void>;
  appearence?: string; // pass in a set of classes here
}

export interface IGenericApiError {
  message: string;
  errors: {
    [key: string]: string[];
  };
}

export enum SupportedApiMethods {
  "GET" = "GET",
  "PUT" = "PUT",
  "POST" = "POST",
  "DELETE" = "DELETE",
  "PATCH" = "PATCH",
}

export interface IGenericStyles {
  readonly [key: string]: string;
}
