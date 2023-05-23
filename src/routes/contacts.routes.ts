import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  updateContactController,
} from "../controllers/contacts.controller";
import { validadeTokenMiddleware } from "../middlewares/validateToken.middleware";
import { validadeDataMiddleware } from "../middlewares/validateData.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { isOwnerMiddleware } from "../middlewares/isOwner.middleware";

const contactsRoutes = Router();

contactsRoutes.use(validadeTokenMiddleware);

contactsRoutes.post(
  "",
  validadeDataMiddleware(contactSchemaRequest),
  createContactController
);
contactsRoutes.get("", listContactsController);
contactsRoutes.patch("", isOwnerMiddleware, validadeDataMiddleware(contactSchemaUpdate), updateContactController);
contactsRoutes.delete("", isOwnerMiddleware,deleteContactController);

export { contactsRoutes };
