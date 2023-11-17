import { Request, Response } from "express";

const signupControllers = {
  signup: (req: Request, res: Response) => {
    console.log("test");
    res.send("true");
  },
};

export default signupControllers;
