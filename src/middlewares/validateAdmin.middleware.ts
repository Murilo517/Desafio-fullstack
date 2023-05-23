import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import "dotenv/config";

const validateAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.user.isAdmin) {
    throw new AppError("you need to be an admin to acess here", 403);
  }

  return next();
};

export { validateAdminMiddleware };
