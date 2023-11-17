import { Request, Response } from "express";

const signupControllers = {
  signup: async (req: Request, res: Response) => {
    console.log("test");
    res.send("true");
  },

  login: async (req: Request, res: Response) => {
    console.log("test");
    res.send("true");
  },
};

export default signupControllers;
