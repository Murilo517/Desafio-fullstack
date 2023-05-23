import { Router } from "express";
import {
  createUserController,
  deleteUserController,
} from "../controllers/users.controller";
import { validadeDataMiddleware } from "../middlewares/validateData.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRoutes = Router();

usersRoutes.post(
  "",
  validadeDataMiddleware(userSchemaRequest),
  createUserController
);
usersRoutes.delete("/:id", deleteUserController);

export { usersRoutes };
