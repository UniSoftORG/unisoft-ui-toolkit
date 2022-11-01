import { HTMLInputTypeAttribute } from "react";
export type State<T> = T;

//input field related stuff

//TODO: Support any of these attributes as we need
// them https://www.w3schools.com/tags/tag_input.asp

export interface IInputFieldProps {
  fieldType: HTMLInputTypeAttribute;
  inputValue: string;
  onInputChange: (value: string) => void;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
  inputCustomClassName?: string;
  errorCustomClassName?: string;
}

export interface IButtonProps {
  buttonType: ButtonTypes;
  label: string;
  shouldLoad?: boolean;
  onPressed: () => void;
  appearence?: string; // pass in a set of classes here to override looks, will have effect on 'custom' type
}

export enum ButtonTypes {
  primary,
  secondary,
  success,
  info, //perhaps sth blue here?
  callToAction, //a big old call to action bugger
  custom,
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
