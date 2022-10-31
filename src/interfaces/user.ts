/// this will hold all interfacer rlative to your user

import { ILoginResponse, IPermissions, IUserData } from "./authentication";

export interface UserState {
  userData: ILoginResponse | undefined;
}

export interface IMeData {
  permissions?: IPermissions[];
  user: IUserData;
}
