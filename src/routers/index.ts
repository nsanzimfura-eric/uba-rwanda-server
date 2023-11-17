import { Router } from "express";
import UsersRoutes from "./user.routes";

const router = Router();

//routes
router.use("/auth", UsersRoutes);

//404 route
router.use("*", (req, res) => {
  res.status(404).json({
    code: 404,
    message: "No such path Found, Return to home",
  });
});

export default router;
