/**
 * @Method: Returns a warm greeting to a new user. Also serves as healthcheck.
 * @Param {string}
 * @Return {string}
 */

export function sayHi(name: string): string {
  return `Hello, @${name}. So glad you made it here. Enjoy this module!`;
}

export default { sayHi };
