import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      user:{
        isAdmin: boolean;
        username: string;
        userId: string;
      }
    }
  }
}
