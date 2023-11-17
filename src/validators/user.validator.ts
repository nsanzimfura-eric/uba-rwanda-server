import { USER_ROLES } from "#/utils/roles.utils";
import * as yup from "yup";

export const phoneRegex = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;

export const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const userValidationSchema = {
  // sign up
  signupNeededData: yup.object().shape({
    names: yup.string().required("Full Name is required!").trim(),
    email: yup.string().email("Invalid email format").trim().nullable(),
    phone: yup
      .string()
      .trim()
      .matches(phoneRegex, "Invalid phone number format")
      .nullable(),
    password: yup
      .string()
      .required()
      .matches(
        strongPasswordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  }),

  // login
  loginNeededData: yup.object().shape({
    email: yup.string().email("Invalid email format").trim().nullable(),
    phone: yup
      .string()
      .trim()
      .matches(phoneRegex, "Invalid phone number format")
      .nullable(),
    password: yup
      .string()
      .required()
      .matches(
        strongPasswordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  }),

  //defaULT USER
  wholeUserData: yup.object().shape({
    names: yup.string().required().trim(),
    email: yup.string().email("Invalid email format").trim().nullable(),
    phone: yup
      .string()
      .trim()
      .matches(phoneRegex, "Invalid phone number format")
      .nullable(),
    password: yup
      .string()
      .required()
      .matches(
        strongPasswordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    role: yup.mixed().oneOf(Object.values(USER_ROLES)).required(),
    tokens: yup.array().of(yup.string()).required(),
    avatar: yup.string().nullable(),
    city: yup.string().trim().nullable(),
    account: yup.number().nullable(),
    currency: yup.string().trim().nullable(),
    services: yup.array().of(yup.string()).nullable(),
    location: yup.string().trim().nullable(),
  }),
};

export { userValidationSchema };
