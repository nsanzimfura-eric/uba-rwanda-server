import signupControllers from "#/controllers/user.controller";
import {
  validateUserOnLogin,
  validateUserOnSignUp,
} from "#/middlewares/isUserInputsValidated.middleware";
import { Router } from "express";

const UsersRoutes = Router();

UsersRoutes.post("/signup", validateUserOnSignUp, signupControllers.signup);
UsersRoutes.post("/login", validateUserOnLogin, signupControllers.login);

export default UsersRoutes;
