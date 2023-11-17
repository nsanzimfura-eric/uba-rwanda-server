import { userValidationSchema } from "#/validators/user.validator";
import { NextFunction, Request, Response } from "express";

const validateUserOnSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userValidationSchema.signupNeededData.validate(req.body);
    next();
  } catch (error: any) {
    console.log("User validation error: ", error);
    res.status(400).json({ error: error.message });
  }
};

const validateUserOnLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await userValidationSchema.loginNeededData.validate(req.body);
    next();
  } catch (error: any) {
    console.log("User validation error: ", error);
    res.status(400).json({ error: error.message });
  }
};

export { validateUserOnSignUp, validateUserOnLogin };
