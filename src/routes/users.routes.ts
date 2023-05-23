import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listAllUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { validadeDataMiddleware } from "../middlewares/validateData.middleware";
import { userSchemaRequest, userUpdateSchema } from "../schemas/users.schema";
import { validadeTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validateAdminMiddleware } from "../middlewares/validateAdmin.middleware";

const usersRoutes = Router();

usersRoutes.use(validadeTokenMiddleware);

usersRoutes.get("", validateAdminMiddleware,listAllUsersController);

usersRoutes.post(
  "",
  validadeDataMiddleware(userSchemaRequest),
  createUserController
);
usersRoutes.delete("/:id", deleteUserController);
usersRoutes.patch(
  "/:id",
  validadeDataMiddleware(userUpdateSchema),
  updateUserController
);

export { usersRoutes };
