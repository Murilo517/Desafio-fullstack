import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const validateAdminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body.user;
  // verificar aqui se é .user ou req.body.user

  if (!user.admin) {
    throw new AppError("you need to be an admin to acess here", 403);
  }

  return next();
};

export default validateAdminMiddleware;
