export const validatePassword = (password: string) => {
  var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!re.test(password)) {
    return "Password must be at least 8 characters, 1 upper, 1 lowercase letter and 1 number.";
  }
  if (!password.length) return "This fields is required!";
};

export const validatePasswordsMatching = (
  password: string,
  repeatPassword: string
) => {
  if (password !== repeatPassword) return "Passwords do not match!";
  if (!password.length) return "This fields is required!";
  if (!repeatPassword.length) return "This fields is required!";
};
