import signupControllers from "#/controllers/user.controller";
import { Router } from "express";

const UsersRoutes = Router();

UsersRoutes.post("/signup", signupControllers.signup);

export default UsersRoutes;
