import { IGenericApiError } from "./generics";

export interface ILoginResponse {
  token: string;
  user: IUserData;
  permissions?: IPermissions[]; // reg -> null/no permissions
}

export interface IPermissions {
  group: string; //system ==> delete entire VPC  admins ==> cannot see delete VPC
  permission: string; // permission: "system_superAdmin"
}

export interface IUserData {
  id: string;
  avatar: string | null;
  username: string;
  first_name: string | null;
  last_name: string | null;
  email: string;
  steam_id: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

export interface AuthState {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
  twoFactorAuthCode: string;

  // errors
  emailError: string | undefined;
  usernameError: string | undefined;
  passwordError: string | undefined;
  repeatPasswordError: string | undefined;
  twoFactorAuthCodeError: string | undefined;
  authApiError: IGenericApiError | undefined;
  registerApiError: IGenericApiError | undefined;
  twoFactorAuthApiError: IGenericApiError | undefined;
}

export interface I2FAForm {
  onRedirect: (to: string) => void;
}
