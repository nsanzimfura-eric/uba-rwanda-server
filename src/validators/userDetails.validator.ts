const validatePhoneNumber = (phone: string) => {
  const phoneRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
  return phoneRegex.test(phone);
};

const validateEmail = (email: string) => {
  const emailRegex =
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string) => {
  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
};

export { validatePhoneNumber, validateEmail, validatePassword };
