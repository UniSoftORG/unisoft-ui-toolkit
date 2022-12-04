import { sayHi } from "./hi";
import elementWithPermissions, {
  pageWithPermissions,
} from "./guards/permissionsGuard";
import pageWithAuth, { elementWithAuth } from "./guards/authGuard";
import { isGenericApiError } from "./guards/genericApiError";
import { isLoginResponse } from "./guards/loginResponse";

const authGuard = { pageWithAuth, elementWithAuth };
const permissionsGuard = { pageWithPermissions, elementWithPermissions };
const typeGuard = { isGenericApiError, isLoginResponse };

export { sayHi, authGuard, permissionsGuard, typeGuard };
