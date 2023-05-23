import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const validadeTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "invalid token",
    });
  }

  const getToken = token.split(" ")[1];

  jwt.verify(getToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
    if (error) {
      return res.status(401).json({
        message: "invalid token",
      });
    }
    res.locals.userId = decoded.sub;
    return next();
  });
};

export { validadeTokenMiddleware };
