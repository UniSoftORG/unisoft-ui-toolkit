import { sayHi } from './hi'
import elementWithPermissions, { pageWithPermissions }  from './guards/permissionsGuard'; 
import pageWithAuth, {elementWithAuth} from './guards/authGuard';
import { ApiRequest } from './api/apiRequest';
import { isGenericApiError } from './guards/genericApiError';
import { isLoginResponse } from './guards/loginResponse';

const authGuard =  {pageWithAuth, elementWithAuth}; 
const permissionsGuard =  {pageWithPermissions, elementWithPermissions}; 
const typeGuard = {isGenericApiError, isLoginResponse}

const api = new ApiRequest(); // a singllke instance to use 

export { sayHi, authGuard, permissionsGuard, typeGuard, api}; 
