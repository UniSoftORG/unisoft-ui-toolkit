export const isRequired = (fieldValue: string) => {
  return fieldValue.length <= 0 ? "This field is required!" : undefined;
};

export const isTooLong = (fieldValue: string, maxLen: number) => {
  return fieldValue.length > maxLen ? "Input too long!" : undefined;
};

export const isTooShort = (fieldValue: string, minLen: number) => {
  return fieldValue.length < minLen ? "Input too short!" : undefined;
};

export const isValidEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    return "Invalid email address!";
  }
};
