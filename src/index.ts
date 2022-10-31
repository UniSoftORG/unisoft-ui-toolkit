import { sayHi } from './hi'
import elementWithPermissions, { pageWithPermissions }  from './guards/permissionsGuard'; 
import pageWithAuth, {elementWithAuth} from './guards/authGuard';
import { ApiRequest } from './api/apiRequest';

const authGuard =  {pageWithAuth, elementWithAuth}; 
const permissionsGuard =  {pageWithPermissions, elementWithPermissions}; 
const api = new ApiRequest(); // a singllke instance to use 

export { sayHi, authGuard, permissionsGuard, api}; 
